import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/reusables/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import SelfPicture from "@/assets/SelfPicture.png";
import GithubIcon from "@/assets/GithubIcon.png";
import LinkedinIcon from "@/assets/LinkedinIcon.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-cream-20 text-brown-700 py-10 md:h-full md:pb-0">
      {/* MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 flex flex-col-reverse md:flex-row items-center justify-between md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* LEFT CONTENT */}
        <div className="z-10 mt-10 md:basis-3/5 text-center md:text-left">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-xl text-brown-700 uppercase tracking-wider">
              Hey, I'm Diana
            </p>
            <h1 className="text-6xl font-bold text-brown-500 mt-2">
              I'M A <span className="text-brown-500">DEVELOPER</span>
            </h1>
            <p className="mt-4 text-base text-black">
              Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* GET IN TOUCH BUTTON */}
            <AnchorLink
              href="#contact"
              className="bg-brown-400 text-cream-50 px-6 py-3 rounded-full text-lg hover:bg-brown-600 transition"
            >
              GET IN TOUCH →
            </AnchorLink>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/dianawijaya39"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinIcon} alt="LinkedIn" className="w-12 h-12 rounded-full" />
              </a>
              <a
                href="https://github.com/DianaWijaya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubIcon} alt="GitHub" className="w-12 h-12 rounded-full" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex basis-3/5 justify-center md:justify-end md:ml-40 md:mt-16">
          <img alt="self-picture" src={SelfPicture} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;