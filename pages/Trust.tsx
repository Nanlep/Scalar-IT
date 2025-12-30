import React from 'react';
import { Shield, FileText, Lock, Server } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <div className="bg-white">
       <div className="bg-scalar-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold mb-4">Trust & Compliance</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
                Our operational framework is built on transparency, auditability, and rigid adherence to regulatory standards.
            </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-slate lg:prose-lg mx-auto">
            <h3>Our Security Philosophy</h3>
            <p>
                Scalar IT assumes a "breach-prevent" and "resilience-first" posture. We do not view security as a feature, but as the foundational substrate upon which all our systems are built. For government and financial clients, this means data sovereignty is non-negotiable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
                <div className="p-6 border border-slate-200 rounded-lg">
                    <Shield className="w-8 h-8 text-scalar-red mb-4" />
                    <h4 className="font-bold text-lg mb-2">Data Sovereignty</h4>
                    <p className="text-sm text-slate-600">All data persists within national borders unless explicitly architected for cross-border replication compliant with GDPR/NDPR.</p>
                </div>
                <div className="p-6 border border-slate-200 rounded-lg">
                    <Lock className="w-8 h-8 text-scalar-red mb-4" />
                    <h4 className="font-bold text-lg mb-2">Encryption Standards</h4>
                    <p className="text-sm text-slate-600">AES-256 encryption at rest and TLS 1.3 in transit. Integration with Hardware Security Modules (HSMs) for key management.</p>
                </div>
                 <div className="p-6 border border-slate-200 rounded-lg">
                    <FileText className="w-8 h-8 text-scalar-red mb-4" />
                    <h4 className="font-bold text-lg mb-2">Audit Readiness</h4>
                    <p className="text-sm text-slate-600">Immutable audit logs for all administrative actions. Systems designed to pass external audits by Big 4 firms.</p>
                </div>
                 <div className="p-6 border border-slate-200 rounded-lg">
                    <Server className="w-8 h-8 text-scalar-red mb-4" />
                    <h4 className="font-bold text-lg mb-2">Business Continuity</h4>
                    <p className="text-sm text-slate-600">RPO/RTO objectives aligned with critical infrastructure standards. Automated failover and disaster recovery testing.</p>
                </div>
            </div>

            <h3>Regulatory Alignment</h3>
            <p>
                We actively monitor regulatory landscapes in the jurisdictions we operate. Our current compliance framework encompasses:
            </p>
            <ul>
                <li><strong>ISO 27001:</strong> Information Security Management Systems.</li>
                <li><strong>NDPR / GDPR:</strong> Data Privacy and Protection.</li>
                <li><strong>PCIDSS:</strong> (Level 1) For payment infrastructure implementations.</li>
                <li><strong>Basel III:</strong> Risk data aggregation and reporting standards (for banking clients).</li>
            </ul>
        </div>
      </div>
    </div>
  );
};