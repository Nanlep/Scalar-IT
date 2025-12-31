
# Scalar IT - Enterprise Digital Infrastructure

## Overview
Scalar IT is a premier digital architecture firm specializing in the design, implementation, and operation of mission-critical systems for sovereign governments, Tier-1 financial institutions, and highly regulated industries. This repository hosts the institutional digital platform, engineered to reflect the firm's focus on systemic stability, data sovereignty, and security-first architecture.

## Core Architectural Principles
- **Resilience Over Velocity**: We prioritize system continuity and mathematical correctness over rapid disruption.
- **Sovereign Data Integrity**: Built-in adherence to NDPR (Nigeria Data Protection Regulation) and international GDPR standards.
- **Zero-Trust Security Substrate**: Security is treated as the foundational substrate of every design decision, not a peripheral feature.
- **Fiduciary Responsibility**: We act as technical fiduciaries for our clients' digital estates, ensuring long-term institutional continuity.

---

## Deployment & Setup Guide (Enterprise Relay)

The platform utilizes a secure backend relay (`api/inquiry.ts`) to handle sensitive AI processing and email routing. Follow these steps to provision the necessary infrastructure.

### 1. Supabase (Institutional Audit Log)
1. Create a new project in [Supabase](https://supabase.com).
2. Run the following idempotent script in the **SQL Editor**:
   ```sql
   CREATE TABLE IF NOT EXISTS inquiries (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     ref_id TEXT NOT NULL UNIQUE,
     client_name TEXT NOT NULL,
     client_email TEXT NOT NULL,
     org_name TEXT NOT NULL,
     org_scale TEXT NOT NULL,
     inquiry_type TEXT NOT NULL,
     summary TEXT,
     created_at TIMESTAMPTZ DEFAULT now()
   );
   ```
3. Copy your `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (Secret Key) from the **Settings > API** section.

### 2. Resend (Email Relay)
1. Sign up for [Resend](https://resend.com).
2. Generate an **API Key** with "Sending" permissions.
3. **Note on Unverified Domains**: While the domain `scalarit.pro` is unverified, Resend uses `onboarding@resend.dev`. Emails will only be delivered to the account owner's email for testing. 

### 3. Environment Variables
Configure these secrets in your hosting environment (e.g., Vercel, Netlify):
| Variable | Description | Source |
| :--- | :--- | :--- |
| `API_KEY` | Gemini AI API Key | Google AI Studio |
| `RESEND_API_KEY` | Resend API Secret | Resend Dashboard |
| `SUPABASE_URL` | Project REST Endpoint | Supabase Settings |
| `SUPABASE_SERVICE_ROLE_KEY` | Private Service Role Key | Supabase Settings |

---

## Technology Stack
- **Framework**: React 19 (ES6 Module Architecture)
- **AI Engine**: Gemini 3 Flash Preview (Secure Backend Implementation)
- **Relay**: Node.js / Serverless Functions
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend API
- **Styling**: Tailwind CSS (Institutional Design System)

---

## Global Operations
- **Abuja (Global HQ)**: 5 Kwaji Close, Maitama. Strategic command center for sovereign systems.
- **London**: Canary Wharf, E14. Regulatory liaison and international banking standards.
- **Dubai**: DIFC, Gate Village. MENA innovation and smart infrastructure hub.

## Compliance & Certification
- ISO 27001 Certified Operations
- NDPR / GDPR Aligned Data Residency
- FIPS 140-2 Level 3 Compliant (Architectural Standard)

---
© 2025 Scalar IT Ltd. All rights reserved. Proprietary and Confidential.
