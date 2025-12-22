import { motion } from "framer-motion";

export const SkillsLegend = () => {
  return (
    <motion.div
      className="mt-12 bg-purple-soft/50 rounded-2xl p-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
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
  );
};