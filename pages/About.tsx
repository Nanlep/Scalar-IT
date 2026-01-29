import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-scalar-dark text-white py-20 md:py-32 overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Office Texture" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Excellent Execution.</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Scalar was founded on a simple premise: bringing top-notch expertise and world-class tools to the organizations that drive our economy and society forward.
            </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
                <h4 className="text-scalar-red font-bold uppercase tracking-widest text-sm mb-4">Our Philosophy</h4>
                <h2 className="text-3xl font-serif font-bold text-scalar-dark mb-6">Bringing Clarity to Chaos</h2>
                <div className="prose prose-slate text-slate-600 leading-relaxed mb-8">
                    <p className="mb-4">
                        In the world of technology and growth, there is often too much noise and not enough signal. Projects get bloated, strategies get complicated, and budgets get wasted.
                    </p>
                    <p>
                        Scalar takes a "modest and niched" approach. We don't try to be everything to everyone. Instead, we focus on being the absolute best at what we do: developing robust technology and accelerating growth for our partners. We bring clarity, excellent execution, and ensured satisfaction to every engagement.
                    </p>
                </div>
                
                {/* Embedded modest image */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100">
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="Team working together" className="w-full h-64 object-cover" />
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                    <Target className="w-8 h-8 text-scalar-red mb-4" />
                    <h3 className="font-bold text-lg mb-2">Clarity</h3>
                    <p className="text-sm text-slate-600">We speak plain language and build clear roadmaps. No ambiguity.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                    <Zap className="w-8 h-8 text-scalar-red mb-4" />
                    <h3 className="font-bold text-lg mb-2">Execution</h3>
                    <p className="text-sm text-slate-600">We ship. We deliver. We get results on time and on budget.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                    <Award className="w-8 h-8 text-scalar-red mb-4" />
                    <h3 className="font-bold text-lg mb-2">Expertise</h3>
                    <p className="text-sm text-slate-600">World-class tools in the hands of seasoned professionals.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                    <Users className="w-8 h-8 text-scalar-red mb-4" />
                    <h3 className="font-bold text-lg mb-2">Satisfaction</h3>
                    <p className="text-sm text-slate-600">Your success is the only metric that matters to us.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};