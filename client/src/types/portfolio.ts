export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  isConfigurableGithub?: boolean;
  isConfigurableLive?: boolean;
  metric?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period?: string;
  location?: string;
  score: string;
  scoreType: string;
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  verificationUrl?: string;
  badgeColor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

