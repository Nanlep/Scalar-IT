import React from 'react';
import { ShieldCheck, Target, Users, Globe, Scale, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-scalar-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-scalar-dark mb-6">The Architecture of Stability</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Scalar IT builds the quiet, invisible systems that nations and markets rely on. 
                We prioritize resilience over velocity, and mathematical correctness over hype.
            </p>
        </div>
      </div>

      {/* Our Mandate */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
                <h4 className="text-scalar-red font-bold uppercase tracking-widest text-sm mb-4">Institutional Mandate</h4>
                <h2 className="text-3xl font-serif font-bold text-scalar-dark mb-6">Engineering for the Long Term</h2>
                <div className="prose prose-slate text-slate-600 leading-relaxed">
                    <p className="mb-4">
                        In an industry obsessed with disruption, Scalar IT is obsessed with continuity. We do not "move fast and break things." When we deploy code, it often handles sovereign debt clearing, national identity verification, or critical power grid telemetry. Breaking things is not an option.
                    </p>
                    <p>
                        Our mandate is simple: to deliver digital infrastructure that functions as reliably as physical infrastructure. We act as fiduciaries for your technical estate, ensuring that every architectural decision withstands regulatory scrutiny and the test of time.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 border-t-4 border-scalar-dark">
                    <ShieldCheck className="w-8 h-8 text-scalar-dark mb-4" />
                    <h3 className="font-bold text-lg mb-2">Zero Trust</h3>
                    <p className="text-sm text-slate-600">Security is not a feature; it is our baseline architectural state.</p>
                </div>
                <div className="bg-slate-50 p-6 border-t-4 border-scalar-red">
                    <Scale className="w-8 h-8 text-scalar-red mb-4" />
                    <h3 className="font-bold text-lg mb-2">Compliance</h3>
                    <p className="text-sm text-slate-600">We engineer systems that generate their own audit trails.</p>
                </div>
                <div className="bg-slate-50 p-6 border-t-4 border-scalar-red">
                    <Target className="w-8 h-8 text-scalar-red mb-4" />
                    <h3 className="font-bold text-lg mb-2">Precision</h3>
                    <p className="text-sm text-slate-600">We measure availability in years, not hours.</p>
                </div>
                <div className="bg-slate-50 p-6 border-t-4 border-scalar-dark">
                    <Briefcase className="w-8 h-8 text-scalar-dark mb-4" />
                    <h3 className="font-bold text-lg mb-2">Ownership</h3>
                    <p className="text-sm text-slate-600">We do not ship and vanish. We operate what we build.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Governance & Leadership */}
      <div className="bg-scalar-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 border-b border-slate-700 pb-8">
                <h2 className="text-3xl font-serif font-bold mb-4">Governance Structure</h2>
                <p className="text-slate-300 max-w-2xl">
                    Scalar IT is led by a coalition of systems architects, former regulators, and risk managers. Our governance model mirrors the institutions we serve.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-700 border border-slate-700">
                {/* Grid Layout with gaps for borders */}
                <div className="bg-scalar-dark p-8 hover:bg-slate-900 transition-colors">
                    <div className="h-1 w-8 bg-scalar-red mb-6"></div>
                    <h3 className="text-lg font-bold mb-1">Executive Leadership</h3>
                    <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider">Strategy & Operations</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Comprised of former C-Level executives from Tier-1 banks and Defense contractors. Focused on aligning technical delivery with macro-economic objectives.
                    </p>
                </div>

                <div className="bg-scalar-dark p-8 hover:bg-slate-900 transition-colors">
                    <div className="h-1 w-8 bg-white mb-6"></div>
                    <h3 className="text-lg font-bold mb-1">Architecture Review Board</h3>
                    <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider">Technical Oversight</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        An independent committee that validates every major system design against ISO 27001 standards and client-specific regulatory requirements before code is written.
                    </p>
                </div>

                <div className="bg-scalar-dark p-8 hover:bg-slate-900 transition-colors">
                    <div className="h-1 w-8 bg-white mb-6"></div>
                    <h3 className="text-lg font-bold mb-1">Risk & Audit Committee</h3>
                    <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider">Internal Controls</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Ensures business continuity planning, GDPR/NDPR adherence, and conflict of interest management. Reports directly to the Board of Directors.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Global Footprint */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Globe className="w-12 h-12 text-slate-300 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-scalar-dark mb-8">Operational Hubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-gray-100 pt-8">
                <div className="p-4">
                    <h4 className="font-bold text-lg text-scalar-dark">Abuja (Global HQ)</h4>
                    <p className="text-slate-500 text-sm mt-2">Strategic command center for sovereign digital infrastructure and government systems.</p>
                    <p className="text-xs text-slate-400 mt-4 font-mono">5 Kwaji Close, Maitama</p>
                </div>
                <div className="p-4 md:border-l md:border-r border-gray-100">
                    <h4 className="font-bold text-lg text-scalar-dark">London</h4>
                    <p className="text-slate-500 text-sm mt-2">Primary interface for international regulatory standards (ISO, Basel) and banking interoperability.</p>
                    <p className="text-xs text-slate-400 mt-4 font-mono">Canary Wharf, E14</p>
                </div>
                <div className="p-4">
                    <h4 className="font-bold text-lg text-scalar-dark">Dubai</h4>
                    <p className="text-slate-500 text-sm mt-2">Innovation hub for smart city architecture and critical utility resilience in the MENA region.</p>
                    <p className="text-xs text-slate-400 mt-4 font-mono">DIFC, Gate Village</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};