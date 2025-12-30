import React from 'react';
import { PILLARS } from '../constants';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

interface SolutionsProps {
    onOpenConsultation: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-scalar-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold mb-4">Our Capabilities</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
                We bridge the gap between policy requirements and technical execution.
                Explore our core operational pillars.
            </p>
        </div>
      </div>

      {/* Pillars Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {PILLARS.map((pillar, index) => (
            <div 
                key={pillar.id} 
                id={pillar.id}
                className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
                <div className="lg:w-1/2">
                    <div className="inline-block p-3 bg-slate-100 rounded-lg text-scalar-red mb-6">
                        {React.cloneElement(pillar.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                    </div>
                    <h2 className="text-3xl font-bold text-scalar-dark mb-4">{pillar.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {pillar.description}
                    </p>
                    <div className="bg-slate-50 p-6 border border-slate-100 rounded-sm">
                        <h4 className="text-sm font-bold text-scalar-dark uppercase tracking-wider mb-4">Technical Competencies</h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {pillar.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-slate-700">
                                    <div className="w-1.5 h-1.5 bg-scalar-red rounded-full mr-3"></div>
                                    {feature}
                                </li>
                            ))}
                            {/* Adding mock extra depth for the page */}
                            <li className="flex items-center text-slate-700">
                                <div className="w-1.5 h-1.5 bg-scalar-red rounded-full mr-3"></div>
                                Automated Compliance Reporting
                            </li>
                            <li className="flex items-center text-slate-700">
                                <div className="w-1.5 h-1.5 bg-scalar-red rounded-full mr-3"></div>
                                Legacy System Migration
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2 bg-slate-100 h-96 w-full rounded flex items-center justify-center border border-slate-200 relative overflow-hidden">
                    {/* Abstract Representation of System */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10">
                        <div className="grid grid-cols-6 gap-2">
                             {[...Array(24)].map((_, i) => (
                                <div key={i} className="w-8 h-8 border border-slate-800"></div>
                             ))}
                        </div>
                    </div>
                    <div className="z-10 text-center">
                        <span className="block text-4xl font-serif text-slate-400 font-bold mb-2">0{index + 1}</span>
                        <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">System Architecture</span>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <div className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
             <h3 className="text-2xl font-bold text-scalar-dark mb-6">Need a custom architecture assessment?</h3>
             <Button onClick={onOpenConsultation}>Connect with an Architect</Button>
        </div>
      </div>
    </div>
  );
};