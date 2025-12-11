import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import { socialLinks } from "./social-links"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="aboutme"
      className="min-h-screen bg-gradient-to-b from-bg-light to-bg-white py-20 px-6"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        {/* CREATIVE HEADER - MATCHING PROJECTS STYLE */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="text-[120px] md:text-[200px] font-bold text-purple-soft/30 leading-none text-center select-none">
              ME
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-text-dark">
                ABOUT ME
              </h2>
            </div>
          </div>
          {/* <p className="text-center text-lg text-text-medium mt-8">
            Get to know the person behind the code
          </p> */}
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-5 text-text-medium leading-relaxed text-lg">
                <p>
                  <span className="text-3xl font-bold text-purple-main">H</span>ey there! I'm Diana Wijaya, a Computer Science graduate from Monash University with a passion for building innovative web applications and solving complex technical challenges.
                </p>
                <p>
                  With experience as a Full-Stack Engineer Intern at Moneylion, I've worked on scalable architectures using Spring Boot, React, and Redux. I'm driven by a love for clean code, optimal performance, and creating solutions that make a real impact.
                </p>
                <p>
                  Beyond coding, I've led initiatives at Monash University Student Association, organizing events for hundreds of students and serving as a liaison for over 1,500 IT students. I believe in continuous learning and enjoy taking on challenges that push me to grow.
                </p>
                <p className="text-purple-main font-semibold pt-4">
                  Currently open to full-time opportunities in software development. Let's build something amazing together!
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONNECT WITH ME - Takes 1 column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-gradient-purple p-8 rounded-2xl shadow-lg sticky top-24">
              <h3 className="text-2xl font-bold text-text-dark mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={link.isEmail ? undefined : "_blank"}
                    rel={link.isEmail ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    {link.icon ? (
                      <img 
                        src={link.icon} 
                        alt={link.name} 
                        className="w-12 h-12 rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-purple-main rounded-full flex items-center justify-center text-white font-bold text-xl">
                        @
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-text-dark group-hover:text-purple-main transition-colors">
                        {link.name}
                      </p>
                      <p className="text-sm text-text-light">
                        {link.description}
                      </p>
                    </div>
                    <svg 
                      className="w-5 h-5 text-purple-main opacity-0 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;