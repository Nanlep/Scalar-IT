# Scalar IT - Enterprise Digital Infrastructure

## Overview
Scalar IT is a premier digital architecture firm specializing in the design, implementation, and operation of mission-critical systems for sovereign governments, Tier-1 financial institutions, and highly regulated industries. This repository hosts the institutional digital platform, engineered to reflect the firm's focus on systemic stability, data sovereignty, and security-first architecture.

## Core Architectural Principles
- **Resilience Over Velocity**: We prioritize system continuity and mathematical correctness over rapid disruption.
- **Sovereign Data Integrity**: Built-in adherence to NDPR (Nigeria Data Protection Regulation) and international GDPR standards.
- **Zero-Trust Security Substrate**: Security is treated as the foundational substrate of every design decision, not a peripheral feature.
- **Fiduciary Responsibility**: We act as technical fiduciaries for our clients' digital estates, ensuring long-term institutional continuity.

## Technology Stack
- **Framework**: React 19 (ES6 Module Architecture)
- **Routing**: React Router 7
- **Styling**: Tailwind CSS (Institutional Design System)
- **Iconography**: Lucide React
- **Module Resolution**: ESM (via esm.sh)

---

## Local Development & Testing

### Prerequisites
- **Node.js**: Version 18.x or higher.
- **Package Manager**: npm or yarn.

### Initial Setup
1. Clone the repository to your local environment.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
To launch the application with Hot Module Replacement (HMR) for local testing:
```bash
npm run dev
```
The application will typically be available at `http://localhost:5173`.

### Local Testing Protocols
As an enterprise-grade platform, manual and automated verification must follow these criteria:
1. **Responsive Verification**: Test across Desktop (1440px), Tablet (768px), and Mobile (375px) breakpoints.
2. **Accessibility (A11Y)**: Ensure all interactive elements have appropriate ARIA labels and keyboard focus states.
3. **Link Integrity**: Verify all internal routing (HashRouter) and external mailto/tel links.
4. **Performance Audit**: Run Lighthouse audits to ensure a performance score > 90, prioritizing the "First Contentful Paint" for slow institutional networks.

---

## Deployment & Production

### Production Build
Generate a minified, production-ready bundle optimized for high-latency environments:
```bash
npm run build
```
This will output a `dist/` directory containing optimized assets.

### Deployment Strategy
1. **Static Site Hosting**: The application is a Single Page Application (SPA). Deploy the `dist/` folder to enterprise-grade static hosting such as Vercel, Netlify, or AWS S3 + CloudFront.
2. **Environment Variables**: If integrating with the Gemini API for architectural analysis modules, ensure the `API_KEY` is configured in your CI/CD pipeline (e.g., GitHub Actions Secrets).
3. **Data Residency**: Ensure the hosting provider's region aligns with the client's data residency requirements (e.g., West Africa region for sovereign Nigerian projects).
4. **Security Headers**: Configure the following headers at the edge:
   - `Content-Security-Policy`: Restrict sources to approved CDNs (esm.sh, googleapis.com).
   - `Strict-Transport-Security`: Enforce HSTS for a minimum of 1 year.
   - `X-Content-Type-Options`: nosniff.

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