import { SelectedPage } from "@/reusables/types";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { experienceData } from "@/reusables/data/experienceData";
import { ExperienceCard } from "./ExperienceCard";
import { ProgressBar } from "./ProgressBar";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Experience = ({ setSelectedPage }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  return (
    <section
      id="experience"
      className="min-h-screen overflow-hidden bg-gradient-to-b from-bg-white to-bg-light py-10 px-6"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
      >
        <SectionHeader backgroundText="PATH" mainText="EXPERIENCE" />

        <div className="relative">
          <ProgressBar scrollProgress={scrollXProgress} />

          {/* Scrollable container */}
          <div
            ref={containerRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-8 overflow-x-auto pb-8 pt-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;