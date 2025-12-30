import React from 'react';
import { Building2, Landmark, Zap, Radio, Factory, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

interface IndustrySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  capabilities: string[];
}

const SECTORS: IndustrySection[] = [
  {
    id: 'government',
    title: 'Government & Public Sector',
    icon: <Building2 className="w-8 h-8" />,
    description: 'We enable the sovereign state to function digitally. Our systems decouple national data assets from vendor lock-in, ensuring long-term continuity for census, revenue, and identity infrastructure.',
    capabilities: [
      'Sovereign Digital Identity (SDI)',
      'Fiscal Data Lakes & Tax Automation',
      'National Public Key Infrastructure (PKI)',
      'Inter-Agency Data Interoperability'
    ]
  },
  {
    id: 'finance',
    title: 'Banking & Financial Services',
    icon: <Landmark className="w-8 h-8" />,
    description: 'Infrastructure for high-frequency, high-value environments. We engineer the settlement layers and compliance engines that allow Tier-1 banks to innovate without compromising Basel III or ISO 20022 requirements.',
    capabilities: [
      'Real-Time Gross Settlement (RTGS)',
      'Algorithmic Trading Latency Reduction',
      'Cross-Border Payment Switches',
      'Fraud Detection at Ledger Level'
    ]
  },
  {
    id: 'utilities',
    title: 'Energy & Utilities',
    icon: <Zap className="w-8 h-8" />,
    description: 'Bridging the air-gap between OT and IT. We secure the critical data flows from SCADA systems to central billing, ensuring grid integrity and accurate revenue assurance.',
    capabilities: [
      'Smart Grid Data Aggregation',
      'Critical Infrastructure Protection (CIP)',
      'Automated Metering Infrastructure (AMI)',
      'Predictive Asset Maintenance'
    ]
  },
  {
    id: 'telecoms',
    title: 'Telecommunications',
    icon: <Radio className="w-8 h-8" />,
    description: 'Carrier-grade systems for the 5G era. We assist CSPs in hardening their signaling networks against interception and modernizing OSS/BSS stacks for enterprise slicing.',
    capabilities: [
      '5G Network Slicing Orchestration',
      'Convergent Charging Systems',
      'Lawful Intercept Architecture',
      'SS7/Diameter Firewalling'
    ]
  }
];

export const Industries: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-scalar-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold mb-4">Industries Served</h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                We operate exclusively in high-stakes environments. Our systems underpin national economies, critical utilities, and sovereign data assets.
            </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
            {SECTORS.map((sector, index) => (
                <div key={sector.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 border-b border-gray-100 pb-16 last:border-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/3 shrink-0">
                        <div className="bg-slate-50 p-8 h-full border-t-4 border-scalar-red">
                            <div className="text-scalar-dark mb-6">
                                {sector.icon}
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-scalar-dark mb-4">{sector.title}</h2>
                            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                                {sector.description}
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-center">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Technical Competencies</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sector.capabilities.map((cap, i) => (
                                <div key={i} className="flex items-start p-4 border border-gray-200 bg-white">
                                    <Lock className="w-5 h-5 text-scalar-red mr-3 shrink-0 mt-0.5" />
                                    <span className="font-medium text-slate-800 text-sm">{cap}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 bg-scalar-dark rounded-none text-white p-12 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Systemic Importance</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Our architecture principles are sector-agnostic, but our rigor is specific. 
                If your organization manages data of systemic consequence, we should talk.
            </p>
            <Button variant="primary" size="lg">Engage Strategy Team</Button>
        </div>
      </div>
    </div>
  );
};