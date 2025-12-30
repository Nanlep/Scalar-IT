import React from 'react';
import { Activity, Clock, Server, CheckCircle2 } from 'lucide-react';

export const SLA: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-scalar-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Service Level Agreement (SLA)</h1>
            <p className="text-slate-300 text-lg max-w-2xl">
                This document outlines the standard performance guarantees for Scalar IT's Enterprise & Government Production Environments.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Availability Tiers */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-scalar-dark mb-6 flex items-center">
                <Server className="w-6 h-6 mr-3 text-scalar-red" />
                1. System Availability Targets
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm whitespace-nowrap">
                    <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-slate-50 font-medium text-slate-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">Service Tier</th>
                            <th scope="col" className="px-6 py-4">Availability Target</th>
                            <th scope="col" className="px-6 py-4">Max Downtime / Month</th>
                            <th scope="col" className="px-6 py-4">Use Case</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="bg-white hover:bg-slate-50">
                            <td className="px-6 py-4 font-bold text-scalar-dark">Tier 1 (Mission Critical)</td>
                            <td className="px-6 py-4 text-green-600 font-bold">99.999%</td>
                            <td className="px-6 py-4 text-slate-600">~26 seconds</td>
                            <td className="px-6 py-4 text-slate-600">Core Banking, National ID, Power Grid</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                            <td className="px-6 py-4 font-bold text-scalar-dark">Tier 2 (Enterprise)</td>
                            <td className="px-6 py-4 text-green-600 font-bold">99.99%</td>
                            <td className="px-6 py-4 text-slate-600">~4 minutes</td>
                            <td className="px-6 py-4 text-slate-600">ERP Systems, Payment Gateways</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                            <td className="px-6 py-4 font-bold text-scalar-dark">Tier 3 (Standard)</td>
                            <td className="px-6 py-4 text-green-600 font-bold">99.9%</td>
                            <td className="px-6 py-4 text-slate-600">~43 minutes</td>
                            <td className="px-6 py-4 text-slate-600">Internal Reporting, Non-Critical APIs</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Incident Severity */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-scalar-dark mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-3 text-scalar-red" />
                2. Incident Severity & Response Times
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-red-200 bg-red-50 p-6 rounded-sm">
                    <div className="font-bold text-red-800 text-lg mb-2">Severity 1</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-4">Critical Impact</div>
                    <p className="text-sm text-slate-700 mb-4">
                        Complete system outage. Core transaction processing is halted. Immediate financial or reputational damage.
                    </p>
                    <div className="text-sm font-bold text-slate-900">Response: &lt; 15 Minutes</div>
                    <div className="text-sm text-slate-600">Update freq: Every 30 mins</div>
                </div>

                <div className="border border-orange-200 bg-orange-50 p-6 rounded-sm">
                    <div className="font-bold text-orange-800 text-lg mb-2">Severity 2</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-4">High Impact</div>
                    <p className="text-sm text-slate-700 mb-4">
                        System is operational but severely degraded. Significant latency or feature failure. No workaround available.
                    </p>
                    <div className="text-sm font-bold text-slate-900">Response: &lt; 1 Hour</div>
                    <div className="text-sm text-slate-600">Update freq: Every 2 hours</div>
                </div>

                <div className="border border-yellow-200 bg-yellow-50 p-6 rounded-sm">
                    <div className="font-bold text-yellow-800 text-lg mb-2">Severity 3</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-yellow-600 mb-4">Medium Impact</div>
                    <p className="text-sm text-slate-700 mb-4">
                        Non-critical issues. Partial failure of non-core functions. Workaround exists.
                    </p>
                    <div className="text-sm font-bold text-slate-900">Response: &lt; 4 Hours</div>
                    <div className="text-sm text-slate-600">Update freq: Daily</div>
                </div>

                <div className="border border-slate-200 bg-slate-50 p-6 rounded-sm">
                    <div className="font-bold text-slate-800 text-lg mb-2">Severity 4</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Low Impact</div>
                    <p className="text-sm text-slate-700 mb-4">
                        Cosmetic issues, minor bugs, or feature requests. No impact on operations.
                    </p>
                    <div className="text-sm font-bold text-slate-900">Response: &lt; 24 Hours</div>
                    <div className="text-sm text-slate-600">Update freq: Weekly</div>
                </div>
            </div>
        </div>

        {/* Maintenance */}
        <div className="mb-16">
            <h2 className="text-2xl font-bold text-scalar-dark mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-scalar-red" />
                3. Maintenance Policy
            </h2>
            <div className="bg-slate-50 p-8 border border-gray-200 rounded-sm">
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                            <span className="font-bold text-scalar-dark">Planned Maintenance:</span>
                            <p className="text-sm text-slate-600 mt-1">
                                Scalar IT provides a minimum of 72 hours notice for planned maintenance. 
                                We adhere to standard freeze windows during critical financial periods (e.g., Month-End, Year-End).
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                            <span className="font-bold text-scalar-dark">Emergency Maintenance:</span>
                            <p className="text-sm text-slate-600 mt-1">
                                Reserved for critical security patches (Zero-Day vulnerabilities) or imminent hardware failure. 
                                Notification is provided as soon as technically feasible.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Contact */}
        <div className="bg-blue-50 border border-blue-100 p-8 text-center rounded-sm">
            <h3 className="text-xl font-bold text-scalar-dark mb-2">Support & Escalation</h3>
            <p className="text-slate-600 mb-6">
                Critical incidents (Sev 1 & 2) should be reported via the 24/7 Enterprise Command Center hotline provided in your onboarding package.
            </p>
            <p className="text-sm text-slate-500">
                Network Operations Center (NOC): 5 Kwaji Close, Maitama, Abuja.
            </p>
        </div>

      </div>
    </div>
  );
};