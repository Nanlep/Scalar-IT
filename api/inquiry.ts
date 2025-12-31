
/**
 * SCALAR IT - SECURE BACKEND RELAY (SERVERLESS)
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
    if (!process.env.API_KEY) {
      return res.status(500).json({ success: false, message: "Infrastructure Error: API_KEY not provisioned." });
    }

    // 3. SECURE AI PROCESSING
    // Initialize inside the handler to ensure fresh environment variable access
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const aiResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        Analyze this enterprise inquiry for Scalar IT:
        Client: ${name} (${role}) at ${organization}
        Scale: ${scale} | Type: ${inquiryType}
        Context: ${details}
        
        Task:
        1. Generate an Institutional Reference ID (Format: SC-XXXX-2025).
        2. Summarize the technical scope for the internal lead.
        
        Respond ONLY in JSON format.
        { "refId": "SC-XXXX-2025", "summary": "..." }
      `,
      config: { 
        responseMimeType: "application/json" 
      }
    });

    const responseText = aiResponse.text;
    if (!responseText) {
      throw new Error("AI Gateway returned an empty payload.");
    }

    const intakeResult = JSON.parse(responseText.trim());
    const refId = intakeResult.refId || `SC-${Math.floor(Math.random()*9000)+1000}-2025`;

    // 4. INSTITUTIONAL AUDIT LOGGING (Supabase) - Non-blocking
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
        console.warn("Audit Log ignored:", logErr);
      }
    }

    // 5. SECURE EMAIL ROUTING (Resend) - Optional but recommended
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'Scalar IT Gateway <onboarding@resend.dev>',
            to: ['scalarit@gmail.com'],
            reply_to: email,
            subject: `[INTERNAL] New Enterprise Inquiry: ${refId} - ${organization}`,
            text: `
              INSTITUTIONAL REFERENCE ID: ${refId}
              --------------------------------------------------
              CLIENT: ${name} (${role})
              EMAIL: ${email}
              ORGANIZATION: ${organization} [Scale: ${scale}]
              TYPE: ${inquiryType}
              
              AI SUMMARY:
              ${intakeResult.summary}
              
              RAW DETAILS:
              ${details}
              
              --------------------------------------------------
              TRANSMITTED VIA SECURE GATEWAY AT: ${new Date().toISOString()}
            `
          })
        });
      } catch (emailErr) {
        console.warn("Email relay failed, inquiry saved to audit log:", emailErr);
      }
    }

    // 6. Final Success Response
    return res.status(200).json({ 
      success: true, 
      refId: refId,
      status: 'ROUTED_TO_SECTOR_LEAD' 
    });

  } catch (error: any) {
    console.error("Gateway Processing Failed:", error);
    // Explicitly return structured JSON even on fatal errors
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Institutional Gateway Error. Transmission aborted.' 
    });
  }
}
