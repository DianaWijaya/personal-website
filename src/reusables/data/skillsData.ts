import { Skill } from "../types";

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "JavaScript", level: "advanced", category: "Languages" },
  { name: "TypeScript", level: "advanced", category: "Languages" },
  { name: "Python", level: "expert", category: "Languages" },
  { name: "Java", level: "expert", category: "Languages" },
  { name: "C++", level: "intermediate", category: "Languages" },
  { name: "C", level: "intermediate", category: "Languages" },
  { name: "Haskell", level: "intermediate", category: "Languages" },
  { name: "SQL", level: "advanced", category: "Languages" },
  { name: "PHP", level: "intermediate", category: "Languages" },
  { name: "Golang", level: "intermediate", category: "Languages" },
  { name: "Ruby", level: "intermediate", category: "Languages" },
  { name: "R", level: "intermediate", category: "Languages" },
  { name: "Dart", level: "intermediate", category: "Languages" },
  
  // Frontend
  { name: "React", level: "expert", category: "Frontend" },
  { name: "Redux", level: "advanced", category: "Frontend" },
  { name: "HTML", level: "advanced", category: "Frontend" },
  { name: "CSS", level: "advanced", category: "Frontend" },
  { name: "Tailwind", level: "advanced", category: "Frontend" },
  { name: "Bootstrap", level: "intermediate", category: "Frontend" },
  { name: "Angular", level: "intermediate", category: "Frontend" },
  { name: "Node.js", level: "intermediate", category: "Frontend" },
  { name: "Flutter", level: "intermediate", category: "Frontend" },
  { name: "Router", level: "intermediate", category: "Frontend" },
  { name: "Express", level: "intermediate", category: "Frontend" },

  // Backend
  { name: "Spring Boot", level: "advanced", category: "Backend" },
  { name: "PostgreSQL", level: "intermediate", category: "Backend" },
  { name: "MongoDB", level: "advanced", category: "Backend" },
  { name: "Firebase", level: "intermediate", category: "Backend" },
  { name: "BeautifulSoup", level: "intermediate", category: "Backend" },
  { name: "Scrapy", level: "intermediate", category: "Backend" },
  { name: "Selenium", level: "intermediate", category: "Backend" },
  { name: "Supabase", level: "intermediate", category: "Backend" },
  { name: "Prisma", level: "intermediate", category: "Backend" },
  
  // Others
  { name: "Git", level: "advanced", category: "Others" },
  { name: "Docker", level: "intermediate", category: "Others" },
  { name: "Linux", level: "advanced", category: "Others" },
  { name: "PyTorch", level: "advanced", category: "Others" },
  { name: "TensorFlow", level: "intermediate", category: "Others" },
  { name: "RestAPI", level: "expert", category: "Others" },
];

export const skillCategories = ["all", "Languages", "Frontend", "Backend", "Others"];