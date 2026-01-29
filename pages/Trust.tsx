import React from 'react';
import { CheckCircle2, Sliders, Layout, Smile } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <div className="bg-white">
       <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-serif font-bold text-scalar-dark mb-4">Our Methodology</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                How we ensure excellence and client satisfaction in every project.
            </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-scalar-dark text-white flex items-center justify-center font-bold text-xl">1</div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-scalar-dark mb-3">Deep Discovery & Clarity</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We don't write a line of code or spend a dollar on ads until we fully understand your objectives. We spend the initial phase of every project ensuring we have complete alignment. This is where we bring our "Top-Notch Expertise" to the table, challenging assumptions and refining the strategy.
                    </p>
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-scalar-dark text-white flex items-center justify-center font-bold text-xl">2</div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-scalar-dark mb-3">World-Class Tooling</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We select the right stack for the job. Whether it's React for web apps, React Native for mobile, or sophisticated marketing automation platforms for growth, we use modern, scalable, and secure tools. We build for the future, not just for today.
                    </p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-scalar-dark text-white flex items-center justify-center font-bold text-xl">3</div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-scalar-dark mb-3">Excellent Execution</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Our team works in agile sprints with transparent reporting. You are never left in the dark. We pride ourselves on hitting milestones and delivering quality work on time.
                    </p>
                </div>
            </div>

             {/* Step 4 */}
             <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-scalar-red text-white flex items-center justify-center font-bold text-xl">4</div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-scalar-dark mb-3">Ensured Client Satisfaction</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We are not satisfied until you are. Our modest, niched approach means we don't churn through clients. We build long-term relationships based on trust and results.
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-20 border-t border-gray-100 pt-12">
            <h3 className="text-center font-bold text-gray-400 uppercase tracking-widest mb-8">The Scalar Standard</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-slate-50 rounded">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-semibold text-slate-700">On-Time Delivery</span>
                </div>
                <div className="p-4 bg-slate-50 rounded">
                    <Sliders className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-semibold text-slate-700">Custom Solutions</span>
                </div>
                <div className="p-4 bg-slate-50 rounded">
                    <Layout className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <span className="text-sm font-semibold text-slate-700">Modern UX/UI</span>
                </div>
                <div className="p-4 bg-slate-50 rounded">
                    <Smile className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                    <span className="text-sm font-semibold text-slate-700">Happy Clients</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};