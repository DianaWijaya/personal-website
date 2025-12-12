import { SelectedPage } from "@/reusables/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import GithubIcon from "@/assets/GithubIcon.png";
import LinkedinIcon from "@/assets/LinkedinIcon.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden pt-20"
    >
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
        {/* Floating circles */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-10 left-10 w-60 h-60 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* CONTENT */}
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
        {/* MAIN CONTENT */}
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
            A passionate Computer Science graduate turning creative ideas into reality by building scalable solutions with modern technologies and clean code.
          </motion.p>

          {/* CALL TO ACTION */}
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

          {/* SOCIAL LINKS */}
          <motion.div 
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="https://linkedin.com/in/dianawijaya39"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <img src={LinkedinIcon} alt="LinkedIn" className="w-full h-full rounded-full" />
            </a>
            <a
              href="https://github.com/DianaWijaya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <img src={GithubIcon} alt="GitHub" className="w-full h-full rounded-full" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;