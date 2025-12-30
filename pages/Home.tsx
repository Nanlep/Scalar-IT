import React from 'react';
import { ArrowRight, CheckCircle2, Globe, Shield, Activity, Building } from 'lucide-react';
import { Button } from '../components/Button';
import { PILLARS, TRUST_SIGNALS } from '../constants';
import { Link } from 'react-router-dom';

interface HomeProps {
  onOpenConsultation: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-scalar-light pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            {/* Abstract architectural lines background */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-slate-200 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 mb-6 uppercase tracking-wider">
              <Shield className="w-3 h-3" />
              <span>ISO 27001 Certified Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-scalar-dark leading-tight mb-6">
              Critical Digital Infrastructure for <span className="text-scalar-red">Sovereignty</span> and Scale.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Scalar IT designs, builds, and operates mission-critical systems for governments, regulated financial institutions, and large enterprises. We deliver certainty in complex environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onOpenConsultation}>
                Request Enterprise Consultation
              </Button>
              <Link to="/solutions">
                <Button variant="outline" size="lg">
                    Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted to deliver by</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder logos for institutional vibe */}
                <div className="flex justify-center items-center h-12 bg-gray-50 rounded text-xs font-bold text-gray-400">CENTRAL BANK SYSTEMS</div>
                <div className="flex justify-center items-center h-12 bg-gray-50 rounded text-xs font-bold text-gray-400">MINISTRY OF FINANCE</div>
                <div className="flex justify-center items-center h-12 bg-gray-50 rounded text-xs font-bold text-gray-400">TIER-1 COMMERCIAL BANK</div>
                <div className="flex justify-center items-center h-12 bg-gray-50 rounded text-xs font-bold text-gray-400">NATIONAL PENSION COMMISSION</div>
            </div>
        </div>
      </section>

      {/* Value Proposition / Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="md:w-2/3">
                <h2 className="text-3xl font-serif font-bold text-scalar-dark mb-4">Engineered for Complexity</h2>
                <p className="text-lg text-slate-600">
                    We do not build generic websites or apps. We engineer compliant, high-availability transaction engines and public sector record systems.
                </p>
            </div>
            <div className="mt-4 md:mt-0">
                <Link to="/solutions" className="text-scalar-red font-semibold flex items-center hover:underline">
                    View all capabilities <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="group border border-gray-100 p-8 hover:border-scalar-red/30 hover:shadow-lg transition-all duration-300 bg-slate-50">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center text-scalar-dark mb-6 shadow-sm group-hover:bg-scalar-red group-hover:text-white transition-colors">
                    {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-scalar-dark mb-3">{pillar.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    {pillar.description}
                </p>
                <ul className="space-y-2 mb-8">
                    {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-500">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-scalar-red shrink-0 mt-0.5" />
                            {feature}
                        </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-scalar-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Uncompromised Security & Compliance</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    In our sector, trust is not a sentiment; it is an auditable outcome. Scalar IT operates with a security-first posture, ensuring every line of code and every architecture decision aligns with national regulations and global standards.
                </p>
                <div className="space-y-6">
                    {TRUST_SIGNALS.map((signal, idx) => (
                        <div key={idx} className="flex">
                            <div className="shrink-0 mr-4">
                                {signal.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">{signal.title}</h4>
                                <p className="text-slate-400 text-sm">{signal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-10">
                    <Link to="/trust">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-scalar-dark">
                            Review Compliance Standards
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="relative h-full min-h-[400px] bg-slate-800 rounded p-8 border border-slate-700">
                {/* Decorative technical diagram abstraction */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-80">
                     <div className="flex justify-between text-xs text-slate-500 font-mono uppercase">
                        <span>System Status</span>
                        <span className="text-green-400">Operational</span>
                     </div>
                     <div className="space-y-4 my-8">
                        <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                        <div className="h-2 bg-slate-700 rounded w-full"></div>
                        <div className="h-2 bg-slate-700 rounded w-5/6"></div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-900 p-4 rounded border border-slate-700">
                            <span className="block text-xs text-slate-500 mb-1">Uptime (YTD)</span>
                            <span className="text-2xl font-mono text-white">99.999%</span>
                        </div>
                        <div className="bg-slate-900 p-4 rounded border border-slate-700">
                            <span className="block text-xs text-slate-500 mb-1">Security Audit</span>
                            <span className="text-2xl font-mono text-green-400">PASSED</span>
                        </div>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-scalar-dark mb-6">
                Ready to discuss your infrastructure requirements?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
                Engage our solutions architects for a confidential discovery session. 
                Designed for C-Level executives and government officials.
            </p>
            <Button size="lg" onClick={onOpenConsultation}>
                Initiate Enterprise Consultation
            </Button>
            <p className="mt-6 text-sm text-slate-400">
                All consultations are subject to standard NDA and Conflict of Interest checks.
            </p>
        </div>
      </section>
    </>
  );
};