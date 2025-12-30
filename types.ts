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
  STRATEGIC_ADVISORY = "Strategic Advisory",
  INFRASTRUCTURE_BUILD = "Infrastructure & Platform Build",
  REGULATORY_COMPLIANCE = "Regulatory & Compliance Systems",
  GOVERNMENT_PARTNERSHIP = "Government Partnership",
  OTHER = "Other Inquiry"
}

export enum OrganizationScale {
  MID_ENTERPRISE = "Mid-Market Enterprise",
  LARGE_ENTERPRISE = "Large Enterprise / Multinational",
  GOVERNMENT_agency = "Government Agency / Ministry",
  FINANCIAL_INSTITUTION = "Regulated Financial Institution"
}