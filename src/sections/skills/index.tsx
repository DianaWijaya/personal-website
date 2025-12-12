import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate";
  category: string;
}

const Skills = ({ setSelectedPage }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const skills: Skill[] = [
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
    
    // Frontend
    { name: "React", level: "expert", category: "Frontend" },
    { name: "Redux", level: "advanced", category: "Frontend" },
    { name: "HTML", level: "advanced", category: "Frontend" },
    { name: "CSS", level: "advanced", category: "Frontend" },
    { name: "Tailwind", level: "advanced", category: "Frontend" },
    { name: "Bootstrap", level: "intermediate", category: "Frontend" },
    { name: "Angular", level: "intermediate", category: "Frontend" },

    // Backend
    { name: "Spring Boot", level: "advanced", category: "Backend" },
    { name: "Node.js", level: "advanced", category: "Backend" },
    { name: "PostgreSQL", level: "intermediate", category: "Backend" },
    { name: "MongoDB", level: "advanced", category: "Backend" },
    { name: "Firebase", level: "intermediate", category: "Backend" },
    { name: "BeautifulSoup", level: "intermediate", category: "Backend" },
    { name: "Scrapy", level: "intermediate", category: "Backend" },
    { name: "Selenium", level: "intermediate", category: "Backend" },
    
    // Others
    { name: "Git", level: "advanced", category: "Others" },
    { name: "Docker", level: "intermediate", category: "Others" },
    { name: "Linux", level: "advanced", category: "Others" },
    { name: "PyTorch", level: "advanced", category: "Others" },
    { name: "TensorFlow", level: "intermediate", category: "Others" },
    { name: "RestAPI", level: "expert", category: "Others" },
  ];

  const categories = ["all", "Languages", "Frontend", "Backend", "Others"];

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getLevelSize = (level: string) => {
    switch (level) {
      case "expert": return "text-4xl md:text-5xl";
      case "advanced": return "text-2xl md:text-3xl";
      case "intermediate": return "text-lg md:text-xl";
      default: return "text-xl";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert": return "bg-purple-main text-white hover:bg-purple-light";
      case "advanced": return "bg-purple-light text-white hover:bg-purple-main";
      case "intermediate": return "bg-purple-soft text-purple-main hover:bg-purple-light hover:text-white";
      default: return "bg-purple-soft text-purple-main";
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-bg-light to-bg-white py-10 px-6"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
      >
        {/* HEADER */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[200px] font-bold text-purple-soft/30 leading-none text-center select-none">
              CODE
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-text-dark">
                SKILLS
              </h2>
            </div>
          </div>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-main text-white shadow-lg scale-105"
                  : "bg-white text-text-dark border-2 border-purple-soft hover:border-purple-main"
              }`}
            >
              {category === "all" ? "All Skills" : category}
            </button>
          ))}
        </motion.div>

        {/* TAG CLOUD */}
        <motion.div
          className="bg-white rounded-3xl p-12 md:p-16 shadow-lg border-2 border-purple-soft/50 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`px-4 py-2 rounded-full font-bold transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl ${getLevelSize(skill.level)} ${getLevelColor(skill.level)}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: Math.random() * 10 - 5,
                  transition: { duration: 0.2 }
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LEGEND */}
        <motion.div
          className="mt-12 bg-purple-soft/50 rounded-2xl p-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* <h3 className="text-text-dark font-bold text-center mb-4">Proficiency Level</h3> */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-main rounded-full"></div>
              <span className="text-text-dark font-semibold">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-light rounded-full"></div>
              <span className="text-text-dark font-semibold">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-soft rounded-full"></div>
              <span className="text-text-dark font-semibold">Intermediate</span>
            </div>
          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-white p-6 rounded-xl text-center shadow-md border-2 border-purple-soft/50">
            <div className="text-4xl font-bold text-purple-main mb-2">
              {skills.filter(s => s.category === "Languages").length}
            </div>
            <div className="text-text-medium text-sm">Languages</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md border-2 border-purple-soft/50">
            <div className="text-4xl font-bold text-purple-main mb-2">
              {skills.filter(s => s.category === "Frontend").length}
            </div>
            <div className="text-text-medium text-sm">Frontend</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md border-2 border-purple-soft/50">
            <div className="text-4xl font-bold text-purple-main mb-2">
              {skills.filter(s => s.category === "Backend").length}
            </div>
            <div className="text-text-medium text-sm">Backend</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md border-2 border-purple-soft/50">
            <div className="text-4xl font-bold text-purple-main mb-2">
              {skills.filter(s => s.category === "Others").length}
            </div>
            <div className="text-text-medium text-sm">Others</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;