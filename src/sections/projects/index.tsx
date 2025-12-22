import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import { projectsData } from "@/reusables/data/projectsData";
import { useProjectSelection } from "@/hooks/useProjectSelection";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const { hoveredId, selectedProject, handleSelect, handleClose, handleHover } = 
    useProjectSelection();

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-bg-white via-purple-soft/20 to-bg-light py-10 px-6"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <SectionHeader 
          backgroundText="WORK" 
          mainText="PROJECTS"
          subtitle="Click project box for details"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Project 1 - Large Featured */}
          <motion.div
            className="md:col-span-8 md:row-span-2 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHover(null)}
            onClick={() => handleSelect(projectsData[0])}
          >
            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-purple-main to-purple-light rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-between text-white">
                <div>
                  <span className="text-white/80 font-semibold text-sm">01</span>
                  <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                    {projectsData[0].title}
                  </h3>
                  <p className="text-white/90 text-lg max-w-lg mb-6">
                    {projectsData[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {projectsData[0].liveUrl && (
                    <a
                      href={projectsData[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white text-purple-main py-2 px-6 rounded-xl font-semibold hover:bg-white/90 transition-all"
                    >
                      View
                    </a>
                  )}
                  <a
                    href={projectsData[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white/20 backdrop-blur-sm text-white py-2 px-6 rounded-xl font-semibold hover:bg-white/30 transition-all"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Remaining Projects */}
          <ProjectCard 
            project={projectsData[1]} 
            index={0}
            colSpan="md:col-span-4 md:row-span-2"
            onSelect={() => handleSelect(projectsData[1])}
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHover(null)}
          />

          <ProjectCard 
            project={projectsData[2]} 
            index={1}
            colSpan="md:col-span-7"
            onSelect={() => handleSelect(projectsData[2])}
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHover(null)}
          />

          <ProjectCard 
            project={projectsData[3]} 
            index={2}
            colSpan="md:col-span-5"
            onSelect={() => handleSelect(projectsData[3])}
            onHoverStart={() => handleHover(4)}
            onHoverEnd={() => handleHover(null)}
          />

          <ProjectCard 
            project={projectsData[4]} 
            index={3}
            colSpan="md:col-span-5"
            onSelect={() => handleSelect(projectsData[4])}
            onHoverStart={() => handleHover(5)}
            onHoverEnd={() => handleHover(null)}
          />

          <ProjectCard 
            project={projectsData[5]} 
            index={0}
            colSpan="md:col-span-7"
            onSelect={() => handleSelect(projectsData[5])}
            onHoverStart={() => handleHover(6)}
            onHoverEnd={() => handleHover(null)}
          />
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-text-medium text-lg">
            More projects on{" "}
            <a
              href="https://github.com/DianaWijaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-main font-semibold hover:text-purple-light transition-colors"
            >
              GitHub →
            </a>
          </p>
        </motion.div>
      </motion.div>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
};

export default Projects;