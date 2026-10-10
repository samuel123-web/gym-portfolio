export interface PersonalInfo {
  name: string;
  roleTitle: string;
  location: string;
  phone: string;
  phoneRaw: string;
  headline: string;
  subHeadline: string;
  bioParagraph1: string;
  bioParagraph2: string;
  brandStatement: string;
  avatarUrl: string;
  gymPhotoUrl: string;
  boxingPhotoUrl: string;
}

export interface BrandPillar {
  number: string;
  title: string;
  description: string;
  iconName: 'Flame' | 'Target' | 'Activity' | 'HeartPulse' | 'Dumbbell' | 'Shield';
}

export interface SkillItem {
  name: string;
  category: 'strength' | 'combat' | 'mobility' | 'coaching';
  isPlaceholder?: boolean;
  tag?: string;
}

export interface SkillCategory {
  id: 'all' | 'strength' | 'combat' | 'mobility' | 'coaching';
  label: string;
  description: string;
}

export interface TrainingProgramItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  goal: string;
  duration: string;
  targetFocus: string;
  features: string[];
  tags: string[];
  keyExercises: string[];
  image: string;
  isFeatured?: boolean;
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  certificateImage?: string;
  certificateTitle?: string;
  isPlaceholder?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  iconName: 'Dumbbell' | 'Flame' | 'Activity' | 'Trophy';
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isPlaceholder?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
