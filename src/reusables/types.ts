export enum SelectedPage {
  Home = "home",
  AboutMe = "about me",
  Projects = "projects",
  Skills = "skills",
  Experience = "experience",
  Education = "education",
  Contact = "contact",
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

export interface ExperienceElement {
  organization: string;
  position: string;
  description: string;
  date: string;
}