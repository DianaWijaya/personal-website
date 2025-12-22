import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import { educationData } from "@/reusables/data/educationData";
import { SectionHeader } from "@/components/SectionHeader";
import { EducationCard } from "./EducationCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Education = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-b from-bg-light to-bg-white py-10 px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Education)}
      >
        <SectionHeader 
          backgroundText="LEARN" 
          mainText="EDUCATION"
        />

        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;