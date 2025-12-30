import React from 'react';
import { ShieldCheck, Server, Globe, Lock, Cpu, Briefcase, Building2, Landmark, Scale } from 'lucide-react';
import { NavItem, ServicePillar, TrustedByLogo, InquiryType, OrganizationScale } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Trust & Security', path: '/trust' },
  { label: 'About Scalar', path: '/about' },
];

export const PILLARS: ServicePillar[] = [
  {
    id: 'financial-infrastructure',
    title: 'Enterprise Financial Infrastructure',
    description: 'Core banking systems, payment gateways, and clearing house integrations designed for high-volume, regulated environments.',
    icon: <Landmark className="w-6 h-6" />,
    features: ['Real-time Ledger Systems', 'SWIFT/ISO20022 Integration', 'High-Frequency Trading Infra']
  },
  {
    id: 'digital-government',
    title: 'Digital Government & Public Systems',
    description: 'Sovereign digital identity, revenue collection, and public record management systems built for national scale.',
    icon: <Building2 className="w-6 h-6" />,
    features: ['National ID Interoperability', 'Tax & Revenue Platforms', 'Census & Registry Systems']
  },
  {
    id: 'cloud-security',
    title: 'Infrastructure, Cloud & Integration',
    description: 'Hybrid-cloud architectures that prioritize data sovereignty, latency reduction, and zero-trust security models.',
    icon: <Server className="w-6 h-6" />,
    features: ['Sovereign Cloud Architecture', 'Hybrid Data Centers', 'Zero-Trust Networks']
  },
  {
    id: 'advisory',
    title: 'Strategic Advisory & GTM',
    description: 'Technical due diligence, regulatory alignment strategy, and digital transformation roadmaps for the C-Suite.',
    icon: <Briefcase className="w-6 h-6" />,
    features: ['Regulatory Technology (RegTech)', 'Technical Due Diligence', 'Digital Transformation']
  }
];

export const TRUST_SIGNALS = [
  {
    title: "Regulatory Alignment",
    description: "Systems designed to comply with CBN, NDPR, GDPR, and Basel III frameworks by default.",
    icon: <Scale className="w-8 h-8 text-scalar-red" />
  },
  {
    title: "Security First",
    description: "ISO 27001 certified processes with end-to-end encryption and HSM integration capability.",
    icon: <Lock className="w-8 h-8 text-scalar-red" />
  },
  {
    title: "High Availability",
    description: "Mission-critical SLAs guaranteeing 99.999% uptime for core transaction infrastructure.",
    icon: <Cpu className="w-8 h-8 text-scalar-red" />
  }
];

export const INQUIRY_TYPES = Object.values(InquiryType);
export const ORG_SCALES = Object.values(OrganizationScale);

export const INDUSTRIES = [
    "Government & Public Sector",
    "Banking & Financial Services",
    "Energy & Utilities",
    "Telecommunications",
    "Industrial & Manufacturing"
];