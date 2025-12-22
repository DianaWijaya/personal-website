import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import { skillsData, skillCategories } from "@/reusables/data/skillsData";
import { useSkillsFilter } from "@/hooks/useSkillsFilter";
import { SectionHeader } from "@/components/SectionHeader";
import { CategoryFilters } from "./CategoryFilters";
import { SkillsCloud } from "./SkillsCloud";
import { SkillsLegend } from "./SkillsLegend";
import { SkillsStats } from "./SkillsStats";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
  const { selectedCategory, setSelectedCategory, filteredSkills } = 
    useSkillsFilter(skillsData);

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-bg-light to-bg-white py-10 px-6"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
      >
        <SectionHeader 
          backgroundText="CODE" 
          mainText="SKILLS"
        />
        
        <CategoryFilters
          categories={skillCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <SkillsCloud skills={filteredSkills} />
        
        <SkillsLegend />
        
        <SkillsStats skills={skillsData} />
      </motion.div>
    </section>
  );
};

export default Skills;