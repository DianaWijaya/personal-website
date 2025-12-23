import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { certificationsData } from "@/reusables/data/certificationsData";
import { CertificationCard } from "./CertificationCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Certifications = ({ setSelectedPage }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY = 3;

  const displayedCerts = showAll
    ? [...certificationsData].reverse()
    : [...certificationsData].reverse().slice(0, INITIAL_DISPLAY);

  return (
    <section
      id="certifications"
      className="min-h-screen bg-gradient-to-b from-bg-white to-bg-light py-10 px-6"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Certifications)}
      >
        <SectionHeader 
          backgroundText="CERTIFIED" 
          mainText="AWARDS & CERTIFICATIONS" 
        />

        <div className="space-y-4">
          {displayedCerts.map((cert, index) => (
            <CertificationCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>

        {certificationsData.length > INITIAL_DISPLAY && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-purple-soft text-purple-main px-6 py-3 rounded-lg font-semibold hover:bg-purple-main hover:text-white transition-all"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  View All
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Certifications;