import { motion } from "framer-motion";

interface SectionHeaderProps {
  backgroundText: string;
  mainText: string;
  subtitle?: string;
}

export const SectionHeader = ({ 
  backgroundText, 
  mainText,
  subtitle 
}: SectionHeaderProps) => {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative mb-8">
        <div className="text-[120px] md:text-[200px] font-bold text-purple-soft/30 leading-none text-center select-none">
          {backgroundText}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold text-text-dark">
            {mainText}
          </h2>
        </div>
      </div>
      {subtitle && (
        <p className="text-center text-lg text-text-medium mt-8">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};