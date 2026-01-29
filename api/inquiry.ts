
/**
 * SCALAR - GROWTH & TECH SERVICES RELAY
 * -------------------------------------------
 */

import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  // 1. Ensure content-type is set for all responses
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, organization, role, scale, inquiryType, details } = req.body;

  try {
    // 2. Validate Environment
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("GATEWAY_ERROR: API_KEY is missing from environment variables.");
      return res.status(500).json({ 
        success: false, 
        message: "Configuration Error: API Key missing." 
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Default fallback values
    let intakeResult = { 
      refId: `SC-${Math.floor(Math.random()*9000)+1000}`, 
      summary: "New project inquiry requiring manual review." 
    };
    
    try {
      const aiResponse = await ai.models.generateContent({
        model: 'gemini-flash-latest',
        contents: `
          Act as a Growth & Technology Consultant for Scalar.
          Analyze this client inquiry:
          Client: ${name} (${role}) at ${organization}
          Segment: ${scale} | Interest: ${inquiryType}
          Details: ${details}
          
          Task:
          1. Generate a Reference ID (Format: SC-XXXX).
          2. Create a brief 1-sentence summary of their likely needs (e.g., "Client needs MVP for fintech" or "NGO needs donor database").
          
          Respond ONLY in JSON.
          { "refId": "SC-XXXX", "summary": "..." }
        `,
        config: { 
          responseMimeType: "application/json" 
        }
      });

      const responseText = aiResponse.text;
      if (responseText) {
        const parsed = JSON.parse(responseText.trim());
        intakeResult.refId = parsed.refId || intakeResult.refId;
        intakeResult.summary = parsed.summary || intakeResult.summary;
      }
    } catch (aiError: any) {
      console.error("AI_ANALYSIS_FAILURE:", aiError.message);
    }

    const refId = intakeResult.refId;

    // 4. LOGGING (Supabase) - Optional
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        await fetch(`${process.env.SUPABASE_URL}/rest/v1/inquiries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
            'Prefer': 'return=minimal',
            'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY
          },
          body: JSON.stringify({
            ref_id: refId,
            client_name: name,
            client_email: email,
            org_name: organization,
            org_scale: scale,
            inquiry_type: inquiryType,
            summary: intakeResult.summary,
            created_at: new Date().toISOString()
          })
        });
      } catch (logErr) {
        console.warn("Log failed:", logErr);
      }
    }

    // 5. EMAIL NOTIFICATION (Resend)
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'Scalar Inbound <onboarding@resend.dev>',
            to: ['contact@scalarit.pro'],
            reply_to: email,
            subject: `New Lead: ${organization} (${inquiryType})`,
            text: `
              REF: ${refId}
              --------------------------------------------------
              NAME: ${name}
              ORG: ${organization} (${scale})
              
              NEEDS:
              ${intakeResult.summary}
              
              DETAILS:
              ${details}
            `
          })
        });
      } catch (emailErr) {
        console.warn("Email failed:", emailErr);
      }
    }

    return res.status(200).json({ 
      success: true, 
      refId: refId,
      message: 'Inquiry received' 
    });

  } catch (error: any) {
    console.error("Handler Error:", error);
    return res.status(500).json({ 
      success: false, 
      message: 'Processing error.' 
    });
  }
}
