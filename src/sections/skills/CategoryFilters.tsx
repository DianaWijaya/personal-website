import { motion } from "framer-motion";

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilters = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) => {
  return (
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
          onClick={() => onSelectCategory(category)}
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
  );
};