import { motion } from "framer-motion";
import { Skill } from "@/reusables/types";

interface SkillsCloudProps {
  skills: Skill[];
}

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

export const SkillsCloud = ({ skills }: SkillsCloudProps) => {
  return (
    <motion.div
      className="bg-white rounded-3xl p-12 md:p-16 shadow-lg border-2 border-purple-soft/50 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {skills.map((skill, index) => (
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
  );
};