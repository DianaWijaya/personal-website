export enum SelectedPage {
  Home = "home",
  Projects = "projects",
  Skills = "skills",
  Experience = "experience",
  Education = "education",
  Contact = "contact",
}

export interface ProjectElement {
  icon: JSX.Element;
  title: string;
  shortDescription: string;
  longDescription: string;
  skillsUsed: Array<{ image: string; name: string }>;
  relatedLink: string; 
  yearCreated: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
