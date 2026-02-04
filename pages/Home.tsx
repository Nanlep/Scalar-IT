import React from 'react';
import { ArrowRight, LineChart, Rocket } from 'lucide-react';
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
      <section className="relative bg-white pt-20 pb-16 md:pt-28 md:pb-32 overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-[-10deg] transform origin-top translate-x-32 z-0 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-red-50 px-3 py-1 rounded-full text-xs font-semibold text-scalar-red mb-6 uppercase tracking-wider">
                <Rocket className="w-3 h-3" />
                <span>Growth Process Consulting</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-scalar-dark leading-[1.1] mb-8">
                Clarity. Execution. <br/>
                <span className="text-scalar-red">Growth.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-light">
                Scalar is a growth process consulting and technology development firm. We align your strategy with execution using <strong>Meti.pro</strong>, while streamlining operations with <strong>Asana</strong> and <strong>Notion</strong> to accelerate results for SMBs, NGOs, and Government projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={onOpenConsultation} className="rounded shadow-lg shadow-red-100">
                  Start Your Project
                </Button>
                <Link to="/solutions">
                  <Button variant="outline" size="lg" className="rounded bg-white">
                      Our Services
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Team collaborating on growth strategy" 
                    className="w-full h-auto object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-scalar-dark/10 to-transparent pointer-events-none"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-slate-50 max-w-xs hidden xl:block">
                  <p className="font-serif italic text-slate-600 text-lg">"The clarity Scalar brought to our strategy with Meti.pro was transformative."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Type Bar */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Empowering Organizations of All Sizes</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center opacity-70">
                <div className="text-sm font-bold text-slate-600">GROWTH STARTUPS</div>
                <div className="text-sm font-bold text-slate-600">SMBS & ENTERPRISES</div>
                <div className="text-sm font-bold text-slate-600">NGOs & NON-PROFITS</div>
                <div className="text-sm font-bold text-slate-600">GOVERNMENT AGENCIES</div>
            </div>
        </div>
      </section>

      {/* Value Proposition / Pillars */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-scalar-dark mb-4">World-Class Tools. Modest Approach.</h2>
             <p className="text-lg text-slate-600">
                We believe in process over complexity. We deploy proven operational stacks using <strong>Meti.pro</strong> for growth strategy execution, <strong>Asana</strong> for project velocity, and <strong>Notion</strong> for knowledge clarity.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="group bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-scalar-dark mb-6 group-hover:bg-scalar-red group-hover:text-white transition-colors">
                    {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-scalar-dark mb-3">{pillar.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    {pillar.description}
                </p>
                <ul className="space-y-3">
                    {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                            <div className="w-1.5 h-1.5 bg-scalar-red rounded-full mr-3"></div>
                            {feature}
                        </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/solutions" className="inline-flex items-center text-scalar-red font-semibold hover:text-red-700 transition-colors">
                View all capabilities <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
          </div>
        </div>
      </section>

      {/* The Scalar Difference */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-scalar-dark">Ensured Client Satisfaction</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    We are niched and modest by design. This allows us to act as your true growth partner. We don't just hand over software; we ensure your team is trained and your processes are optimized using the best tools available.
                </p>
                <div className="space-y-8">
                    {TRUST_SIGNALS.map((signal, idx) => (
                        <div key={idx} className="flex">
                            <div className="shrink-0 mr-4">
                                {signal.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-scalar-dark mb-1">{signal.title}</h4>
                                <p className="text-slate-500 text-sm">{signal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1553877615-30c73e656fc3?auto=format&fit=crop&q=80&w=1000" 
                      alt="Abstract architectural growth" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-scalar-dark/30 flex items-center justify-center">
                        <div className="text-center p-8 backdrop-blur-sm bg-white/90 rounded-xl max-w-xs shadow-lg">
                            <LineChart className="w-12 h-12 text-scalar-red mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-scalar-dark mb-2">Results Driven</h3>
                            <p className="text-slate-600 text-sm">
                                "Clarity in operations led to a 200% increase in efficiency."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-scalar-dark text-white relative overflow-hidden">
        {/* Abstract background image overlay */}
        <div className="absolute inset-0 opacity-10">
             <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="World map tech" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready to accelerate your growth?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Whether you need to align your strategy using Meti.pro, optimize workflows with Asana, or build a custom development project—we are ready to execute.
            </p>
            <Button size="lg" onClick={onOpenConsultation} className="bg-white text-scalar-dark hover:bg-slate-100 rounded">
                Book a Discovery Session
            </Button>
        </div>
      </section>
    </>
  );
};