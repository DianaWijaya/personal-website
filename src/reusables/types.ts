export enum SelectedPage {
  Home = "home",
  AboutMe = "about me",
  Projects = "projects",
  Skills = "skills",
  Experience = "experience",
  Education = "education",
  Contact = "contact",
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
  greyIcon?: string;
  description?: string;
  isEmail?: boolean;
  homeVisibility: boolean;
  aboutMeVisibility: boolean;
  footerVisibility: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate";
  category: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  wam: string;
  honors: string;
}