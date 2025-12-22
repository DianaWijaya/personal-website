import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { AboutContent } from "./AboutMeContent";
import { ConnectSidebar } from "./ConnectSection";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="aboutme"
      className="min-h-screen bg-gradient-to-b from-bg-light to-bg-white py-10 px-6"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        <SectionHeader backgroundText="ME" mainText="ABOUT ME" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AboutContent />
          <ConnectSidebar />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;