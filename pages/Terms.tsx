import React from 'react';
import { Scale, Briefcase, AlertTriangle, Copyright } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-scalar-dark mb-4">Terms of Service</h1>
            <p className="text-slate-600 text-lg">
                Governing Enterprise Engagements & Infrastructure Usage
            </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-600">
                These Terms of Service ("Terms") govern the relationship between Scalar IT Ltd. ("Scalar", "we", "us") and the entity ("Client", "Government", "Institution") utilizing our digital infrastructure services.
            </p>
            <p className="font-bold">
                These Terms are intended for Business-to-Business (B2B) and Business-to-Government (B2G) relationships. We do not provide services to individual consumers.
            </p>

            <h3 className="text-xl font-bold text-scalar-dark mt-10 mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-scalar-dark" />
                1. Engagement Framework
            </h3>
            <p>
                <strong>1.1 Master Service Agreements:</strong> These Terms act as a baseline. Specific scope, deliverables, Service Level Agreements (SLAs), and pricing are defined in a separately executed Master Service Agreement (MSA) or Statement of Work (SOW). In the event of a conflict between these Terms and an MSA, the MSA shall prevail.
            </p>
            <p>
                <strong>1.2 Authorization:</strong> By engaging Scalar IT, you represent that you have the requisite authority to bind your organization, agency, or ministry to these terms.
            </p>

            <h3 className="text-xl font-bold text-scalar-dark mt-10 mb-4 flex items-center">
                <Copyright className="w-5 h-5 mr-2 text-scalar-dark" />
                2. Intellectual Property Rights
            </h3>
            <p>
                <strong>2.1 Pre-Existing IP:</strong> Scalar IT retains all ownership and intellectual property rights to its proprietary platforms, codebases, frameworks, and deployment methodologies ("Scalar IP") that existed prior to the engagement.
            </p>
            <p>
                <strong>2.2 Client Data:</strong> The Client retains full ownership of all data, records, and content transmitted through or stored on Scalar infrastructure. Scalar claims no ownership over Client Data.
            </p>
            <p>
                <strong>2.3 Deliverables:</strong> Ownership of custom-developed software or modules will be defined in the specific SOW. Unless otherwise stated, custom configurations are granted to the Client under a perpetual, non-exclusive license.
            </p>

            <h3 className="text-xl font-bold text-scalar-dark mt-10 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-scalar-dark" />
                3. Limitation of Liability
            </h3>
            <p>
                <strong>3.1 Critical Systems:</strong> While Scalar IT designs for high availability (up to 99.999%), the Client acknowledges that no digital system is entirely immune to failure.
            </p>
            <p>
                <strong>3.2 Cap on Liability:</strong> Except for cases of gross negligence or willful misconduct, Scalar IT’s total liability arising out of or related to this agreement shall not exceed the total fees paid by the Client in the twelve (12) months preceding the incident.
            </p>
            <p>
                <strong>3.3 Indirect Damages:</strong> In no event shall Scalar IT be liable for lost profits, loss of data (provided backup protocols were followed), or consequential damages.
            </p>

            <h3 className="text-xl font-bold text-scalar-dark mt-10 mb-4 flex items-center">
                <Scale className="w-5 h-5 mr-2 text-scalar-dark" />
                4. Governing Law & Dispute Resolution
            </h3>
            <p>
                <strong>4.1 Jurisdiction:</strong> These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
            <p>
                <strong>4.2 Arbitration:</strong> Any dispute arising out of or in connection with these Terms shall be referred to and finally resolved by arbitration in Abuja, Nigeria, in accordance with the Arbitration and Conciliation Act.
            </p>

            <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-scalar-dark mb-4">Legal Notices</h3>
                <p className="text-slate-600 mb-2">
                    All legal notices must be served in writing to:
                </p>
                <address className="not-italic text-slate-600 bg-slate-50 p-6 rounded border border-gray-200 inline-block">
                    <strong>Legal Department</strong><br />
                    Scalar IT Ltd.<br />
                    5 Kwaji Close, Maitama<br />
                    Abuja, Nigeria<br />
                    <a href="mailto:legal@scalarit.pro" className="text-scalar-red hover:underline mt-2 inline-block">legal@scalarit.pro</a>
                </address>
            </div>
        </div>
      </div>
    </div>
  );
};