import React from 'react';
import { PILLARS } from '../constants';
import { Button } from '../components/Button';

interface SolutionsProps {
    onOpenConsultation: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-serif font-bold text-scalar-dark mb-4">Our Expertise</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We combine technical excellence with strategic growth services.
                Here is how we help you succeed.
            </p>
        </div>
      </div>

      {/* Pillars Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {PILLARS.map((pillar, index) => (
            <div 
                key={pillar.id} 
                id={pillar.id}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full text-scalar-red mb-6">
                        {React.cloneElement(pillar.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                    </div>
                    <h2 className="text-3xl font-bold text-scalar-dark mb-4">{pillar.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {pillar.description}
                    </p>
                    <div className="bg-white p-6 border-l-4 border-scalar-red shadow-sm">
                        <h4 className="text-sm font-bold text-scalar-dark uppercase tracking-wider mb-4">Key Capabilities</h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {pillar.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-slate-700 font-medium">
                                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 relative overflow-hidden shadow-lg group">
                         <img 
                            src={pillar.image} 
                            alt={pillar.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-scalar-dark/40 transition-opacity group-hover:bg-scalar-dark/20"></div>
                         
                         <span className="text-9xl font-serif text-white font-bold opacity-20 absolute -bottom-10 -right-10 pointer-events-none">0{index + 1}</span>
                         
                         <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                             <div className="text-sm font-bold text-white/80 uppercase tracking-widest mb-1">Service Area</div>
                             <div className="text-2xl font-serif text-white italic">{pillar.title}</div>
                         </div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <div className="bg-scalar-dark py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="Team meeting" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <h3 className="text-2xl font-bold mb-6">Not sure where to start?</h3>
             <p className="text-slate-300 mb-8">
                Our team excels at bringing clarity to complex projects. Let's discuss your specific needs.
             </p>
             <Button onClick={onOpenConsultation} className="bg-white text-scalar-dark hover:bg-gray-100 rounded">Get Expert Advice</Button>
        </div>
      </div>
    </div>
  );
};