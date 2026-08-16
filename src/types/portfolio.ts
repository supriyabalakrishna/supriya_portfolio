export interface PersonalInfo {
  name: string;
  pronouns: string;
  role: string;
  specialization: string;
  location: string;
  university?: string;
  summary: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  duration: string;
  metric: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies?: string[];
  stack?: string[];
  theme?: string;
  highlighted?: boolean;
  featured?: boolean;
  github?: string;
  demo?: string;
  caseStudy?: string;
  image?: string;
  type?: string;
}

export interface Hackathon {
  id: string;
  name: string;
  result: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  highlighted: boolean;
  badge?: string;
}

export interface Quest {
  id: string;
  name: string;
  progress: number;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  contact: Contact;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  hackathons: Hackathon[];
  certifications: Certification[];
  quests: Quest[];
}
