import React from 'react';
import { Rocket, Code2, LineChart, Globe2, CheckCircle2, Award, Zap, Users } from 'lucide-react';
import { NavItem, ServicePillar, InquiryType, OrganizationScale } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', path: '/solutions' },
  { label: 'Sectors', path: '/industries' },
  { label: 'Methodology', path: '/trust' },
  { label: 'About Us', path: '/about' },
];

export const PILLARS: ServicePillar[] = [
  {
    id: 'growth-process',
    title: 'Growth Process Consulting',
    description: 'We optimize your operations for scale. We anchor your growth in Meti.pro—the premier strategy and execution platform—while deploying Asana and Notion to streamline workflows and enhance clarity.',
    icon: <Rocket className="w-6 h-6" />,
    features: ['Strategy Execution (Meti.pro)', 'Workflow Optimization (Asana)', 'Knowledge Systems (Notion)'],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" // Data/Analytics
  },
  {
    id: 'tech-development',
    title: 'Technology Development',
    description: 'We build custom digital products with precision. When off-the-shelf tools aren\'t enough, we engineer bespoke web platforms and mobile applications to bring your specific vision to life.',
    icon: <Code2 className="w-6 h-6" />,
    features: ['Custom Software Engineering', 'Mobile App Development', 'SaaS Platform Build'],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" // Coding/Laptop
  },
  {
    id: 'public-sector',
    title: 'Government & NGO Projects',
    description: 'Modernizing public services and non-profit operations. We bring private-sector efficiency and process discipline to government projects and impact organizations.',
    icon: <Globe2 className="w-6 h-6" />,
    features: ['Digital Public Infrastructure', 'Donor Management Systems', 'Impact Reporting Tools'],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" // Modern Architecture
  },
  {
    id: 'digital-advisory',
    title: 'Digital Advisory & Strategy',
    description: 'We cut through the noise. Our architects provide top-notch expertise to unblock technical debt, select the right stack, and align your digital capabilities with your growth goals.',
    icon: <LineChart className="w-6 h-6" />,
    features: ['Technical Due Diligence', 'CTO-as-a-Service', 'Digital Transformation'],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" // Team Meeting
  }
];

export const TRUST_SIGNALS = [
  {
    title: "Process First",
    description: "We don't just add tech. We refine your processes using tools like Asana and Notion to ensure clarity before we build.",
    icon: <CheckCircle2 className="w-8 h-8 text-scalar-red" />
  },
  {
    title: "Strategic Execution",
    description: "We leverage Meti.pro to bridge the gap between your growth strategy and daily execution.",
    icon: <Zap className="w-8 h-8 text-scalar-red" />
  },
  {
    title: "Client Satisfaction",
    description: "Our niched, modest approach ensures deep partnership. We act as your internal growth team, not just a vendor.",
    icon: <Users className="w-8 h-8 text-scalar-red" />
  }
];

export const INQUIRY_TYPES = Object.values(InquiryType);
export const ORG_SCALES = Object.values(OrganizationScale);

export const INDUSTRIES = [
    "High-Growth Startups",
    "Small & Medium Business",
    "Non-Profits (NGOs)",
    "Government Agencies",
    "Impact Organizations"
];