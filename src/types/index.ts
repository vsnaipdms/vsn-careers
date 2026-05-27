export interface Career {
  id: string;
  slug: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  overview: string;
  skillsRequired: string[];
  toolsToLearn: string[];
  salaryIndia: string;
  salaryAbroad: string;
  freelancingScope: string;
  remoteJobs: string;
  learningRoadmap: { level: string; topics: string[] }[];
  futureDemand: string;
  aiImpact: string;
  aiTools: string[];
  companiesHiring: string[];
  portfolioExamples: string[];
  interviewTips: string[];
  demandLevel: "high" | "medium" | "rising";
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  lessons: number;
  projects: number;
  salaryOpportunities: string[];
  careerOutcomes: string[];
  roadmap: { title: string; topics: string[] }[];
  certification: boolean;
}

export interface AITool {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: "design" | "marketing" | "video" | "coding" | "automation" | "content";
  description: string;
  features: string[];
  pricing: string;
  skillLevel: "beginner" | "intermediate" | "advanced";
  useCases: string[];
  website: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime: string;
}

export interface FreelancingTopic {
  id: string;
  title: string;
  icon: string;
  description: string;
  tips: string[];
  platforms: string[];
  income: string;
}

export interface SalaryData {
  role: string;
  indiaFresher: number;
  indiaExperienced: number;
  usSalary: number;
  ukSalary: number;
  canadaSalary: number;
  remoteDemand: "high" | "medium" | "low";
  growthRate: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
