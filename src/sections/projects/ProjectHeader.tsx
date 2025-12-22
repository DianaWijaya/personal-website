import { motion } from "framer-motion";

export const ProjectHeader = () => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        <div className="text-[120px] md:text-[200px] font-bold text-purple-soft/30 leading-none text-center select-none">
          WORK
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold text-text-dark">
            PROJECTS
          </h2>
        </div>
      </div>
      <p className="text-center text-lg text-text-medium mt-8">
        Click project box for details
      </p>
    </motion.div>
  );
};