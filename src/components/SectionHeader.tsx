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
        <div className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold text-purple-soft/30 leading-none text-center select-none">
          {backgroundText}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark text-center px-4">
            {mainText}
          </h2>
        </div>
      </div>
      {subtitle && (
        <p className="text-center text-base sm:text-lg text-text-medium mt-8 px-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};