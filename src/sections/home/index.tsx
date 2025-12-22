import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AnimatedBackground } from "./AnimatedBackground";
import { SocialLinks } from "./SocialLinks";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden pt-20"
    >
      <AnimatedBackground />

      <motion.div
        className="max-w-3xl w-full text-center relative z-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="space-y-6">
          <motion.h1
            className="text-7xl md:text-8xl font-bold text-text-dark tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            HEY, I'M DIANA
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A passionate Computer Science graduate turning creative ideas into
            reality by building scalable solutions with modern technologies and
            clean code.
          </motion.p>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <AnchorLink
              href="#aboutme"
              className="inline-block bg-purple-main text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-purple-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              MORE ABOUT ME
            </AnchorLink>
          </motion.div>

          <SocialLinks />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;