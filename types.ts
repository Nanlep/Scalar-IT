import { ReactNode } from "react";

export interface NavItem {
  label: string;
  path: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  image: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface TrustedByLogo {
  name: string;
  placeholderUrl: string;
}

export enum InquiryType {
  TECH_DEVELOPMENT = "Technology Development",
  GROWTH_STRATEGY = "Growth & Acceleration",
  DIGITAL_TRANSFORMATION = "Digital Transformation",
  GOV_PROJECT = "Government Project",
  NGO_IMPACT = "NGO / Impact Project"
}

export enum OrganizationScale {
  STARTUP = "Growth Startup (Pre-Series A)",
  SMB = "Small/Mid-Sized Business",
  NGO = "Non-Governmental Org",
  ENTERPRISE = "Large Enterprise",
  GOVERNMENT = "Government Agency"
}