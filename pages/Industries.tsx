import React from 'react';
import { Building2, Rocket, Heart, Briefcase, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../components/Button';

interface SectorSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  focus_areas: string[];
}

const SECTORS: SectorSection[] = [
  {
    id: 'growth-companies',
    title: 'Growth Companies & Startups',
    icon: <Rocket className="w-8 h-8" />,
    description: 'For companies in the scaling phase, speed and precision are everything. We provide the technical backbone and growth marketing strategies to help you capture market share rapidly.',
    focus_areas: [
      'MVP Development',
      'Scalable SaaS Architecture',
      'Growth Hacking & Analytics',
      'Investor-Ready Tech Due Diligence'
    ]
  },
  {
    id: 'smb',
    title: 'Small & Medium Businesses (SMBs)',
    icon: <Briefcase className="w-8 h-8" />,
    description: 'We bring enterprise-grade tools to the SMB market. Whether it is automating workflows or rebuilding your digital presence, we help you operate more efficiently.',
    focus_areas: [
      'Digital Transformation',
      'E-commerce Solutions',
      'Workflow Automation',
      'Customer CRM Integration'
    ]
  },
  {
    id: 'ngo',
    title: 'NGOs & Non-Profits',
    icon: <Heart className="w-8 h-8" />,
    description: 'Impact requires reach. We help non-profits maximize their influence through better donor management systems, impactful web presence, and transparent reporting tools.',
    focus_areas: [
      'Donor Management Systems',
      'Impact Visualization Dashboards',
      'Volunteer Platforms',
      'Secure Data Collection'
    ]
  },
  {
    id: 'government',
    title: 'Government Projects',
    icon: <Building2 className="w-8 h-8" />,
    description: 'We serve public interest with modest, effective, and secure technology. We modernize public services to be more accessible to citizens while ensuring data integrity.',
    focus_areas: [
      'Citizen Portals',
      'Public Record Digitization',
      'Secure Data Infrastructure',
      'Accessibility Compliance'
    ]
  }
];

export const Industries: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-serif font-bold text-scalar-dark mb-6">Who We Serve</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We are niched by approach, not just by industry. We partner with organizations that value clarity, quality, and sustainable growth.
            </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SECTORS.map((sector) => (
                <div key={sector.id} className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:border-scalar-red/50 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                        <div className="bg-white p-3 rounded-lg shadow-sm text-scalar-dark">
                            {sector.icon}
                        </div>
                        <Zap className="w-5 h-5 text-slate-300" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-scalar-dark mb-4">{sector.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                        {sector.description}
                    </p>
                    
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Focus Areas</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {sector.focus_areas.map((cap, i) => (
                                <div key={i} className="flex items-center text-sm text-slate-700">
                                    <ArrowRight className="w-3 h-3 text-scalar-red mr-2" />
                                    {cap}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};