import React from 'react';
import { Shield, Lock, Globe, FileText, Eye } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-scalar-dark mb-4">Privacy & Data Sovereignty Framework</h1>
            <p className="text-slate-600 text-lg">
                Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none">
            <div className="bg-blue-50 border-l-4 border-scalar-dark p-6 mb-12">
                <h3 className="text-scalar-dark font-bold mt-0">Institutional Note</h3>
                <p className="mb-0 text-sm">
                    Scalar IT processes data of high national and economic sensitivity. Unlike consumer technology firms, our data protection posture is predicated on <strong>Data Sovereignty</strong> and <strong>Zero-Knowledge Architecture</strong> where applicable. We adhere strictly to the Nigeria Data Protection Regulation (NDPR) and align with GDPR standards for our international operations.
                </p>
            </div>

            <h2 className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-scalar-red" />
                1. Data Sovereignty & Residency
            </h2>
            <p>
                Unless explicitly authorized by a client Master Service Agreement (MSA) for specific cross-border redundancy:
            </p>
            <ul>
                <li><strong>Sovereign Data:</strong> All data classified as "Sovereign" or "Classified" (Government/Public Sector) persists strictly within the territorial jurisdiction of the Federal Republic of Nigeria.</li>
                <li><strong>Financial Data:</strong> Transaction records and PII related to financial services are stored in compliance with Central Bank of Nigeria (CBN) data residency guidelines.</li>
                <li><strong>Cross-Border Transfer:</strong> No data is transferred to offshore cloud availability zones without express written consent and legally binding adequacy decisions.</li>
            </ul>

            <h2 className="flex items-center gap-3 mt-12">
                <Eye className="w-6 h-6 text-scalar-red" />
                2. Data Minimization Principle
            </h2>
            <p>
                Scalar IT operates under a strict principle of least privilege and data minimization. We only collect and process data that is strictly necessary for the technical operation of the infrastructure we build.
            </p>
            <p>
                <strong>We do not:</strong>
            </p>
            <ul>
                <li>Monetize user data or metadata.</li>
                <li>Engage in behavioral tracking for advertising purposes.</li>
                <li>Share data with third-party aggregators.</li>
            </ul>

            <h2 className="flex items-center gap-3 mt-12">
                <Lock className="w-6 h-6 text-scalar-red" />
                3. Security Measures
            </h2>
            <p>
                We employ defense-in-depth security architectures to protect data integrity:
            </p>
            <ul>
                <li><strong>Encryption:</strong> Data is encrypted at rest using AES-256 and in transit via TLS 1.3. Critical key management is handled via FIPS 140-2 Level 3 compliant Hardware Security Modules (HSMs).</li>
                <li><strong>Access Control:</strong> Administrative access is governed by multi-factor authentication (MFA) and rigorous Identity and Access Management (IAM) policies.</li>
                <li><strong>Audit Trails:</strong> All data access events are logged in immutable, tamper-evident ledgers for forensic auditing.</li>
            </ul>

            <h2 className="flex items-center gap-3 mt-12">
                <FileText className="w-6 h-6 text-scalar-red" />
                4. Your Rights
            </h2>
            <p>
                Under the NDPR and applicable laws, authorized representatives of our enterprise clients have the right to:
            </p>
            <ul>
                <li>Request comprehensive audit logs of data access.</li>
                <li>Request secure deletion of data upon contract termination (Crypto-shredding).</li>
                <li>Request rectification of architectural data flaws.</li>
            </ul>

            <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-scalar-dark mb-4">Data Protection Officer</h3>
                <p className="text-slate-600 mb-2">
                    For inquiries regarding data privacy, compliance audits, or regulatory alignment, please contact our Data Protection Office:
                </p>
                <address className="not-italic text-slate-600 bg-slate-50 p-6 rounded border border-gray-200 inline-block">
                    <strong>Data Protection Officer</strong><br />
                    Scalar IT Ltd.<br />
                    5 Kwaji Close, Maitama<br />
                    Abuja, Nigeria<br />
                    <a href="mailto:privacy@scalarit.pro" className="text-scalar-red hover:underline mt-2 inline-block">privacy@scalarit.pro</a>
                </address>
            </div>
        </div>
      </div>
    </div>
  );
};