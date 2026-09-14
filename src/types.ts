export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'web' | 'marketing' | 'branding' | 'tech';
  icon: string;
  deliverables: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  categoryKey: 'business' | 'ecommerce' | 'fitness' | 'salon' | 'local' | 'marketing' | 'branding';
  industry: string;
  servicesProvided: string[];
  shortDesc: string;
  resultsSummary: string;
  fullOverview: string;
  challenges: string[];
  deliverables: string[];
  techStack: string[];
  clientLocation: string;
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  idealFor: string;
  timeline: string;
  features: string[];
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  businessName: string;
  location: string;
  industry: string;
  rating: number;
  quote: string;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  whatsapp: string;
  service: string;
  projectDetails: string;
  budget?: string;
}
