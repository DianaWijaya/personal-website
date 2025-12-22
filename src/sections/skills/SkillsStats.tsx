import { motion } from "framer-motion";
import { Skill } from "@/reusables/types";

interface SkillsStatsProps {
  skills: Skill[];
}

export const SkillsStats = ({ skills }: SkillsStatsProps) => {
  return (
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
  );
};