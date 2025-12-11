import { SelectedPage } from "@/reusables/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

const Projects = ({ setSelectedPage }: Props) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project Title",
      description: "Description",
      fullDescription: "Long Description",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Project Title",
      description: "Description",
      fullDescription: "Long Description",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 3,
      title: "Project Title",
      description: "Description",
      fullDescription: "Long Description",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 4,
      title: "Project Title",
      description: "Description",
      fullDescription: "Long Description",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 5,
      title: "Project Title",
      description: "Description",
      fullDescription: "Long Description",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 6,
      title: "Project Title",
      description: "Description",
      fullDescription: "Long Description",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      id: 7,
      title: "Project Title",
      description: "Description",
      fullDescription: "Long Description",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-bg-white via-purple-soft/20 to-bg-light py-20 px-6"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        {/* HEADER */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="text-[120px] md:text-[200px] font-bold text-purple-soft/30 leading-none text-center select-none">
              WORK
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-text-dark">
                SELECTED PROJECTS
              </h2>
            </div>
          </div>
          <p className="text-center text-lg text-text-medium mt-8">
            Click any project for details
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Project 1 - Large Featured */}
          <motion.div
            className="md:col-span-8 md:row-span-2 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setHoveredId(1)}
            onHoverEnd={() => setHoveredId(null)}
            onClick={() => setSelectedProject(projects[0])}
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
                    {projects[0].title}
                  </h3>
                  <p className="text-white/90 text-lg max-w-lg mb-6">
                    {projects[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech) => (
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
                  {projects[0].liveUrl && (
                    <a
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white text-purple-main py-2 px-6 rounded-xl font-semibold hover:bg-white/90 transition-all"
                    >
                      View Live
                    </a>
                  )}
                  <a
                    href={projects[0].githubUrl}
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

          {/* Project 2 - Tall */}
          <ProjectCard 
            project={projects[1]} 
            index={1}
            colSpan="md:col-span-4 md:row-span-2"
            onSelect={() => setSelectedProject(projects[1])}
            onHoverStart={() => setHoveredId(2)}
            onHoverEnd={() => setHoveredId(null)}
          />

          {/* Project 3 - Wide */}
          <ProjectCard 
            project={projects[2]} 
            index={2}
            colSpan="md:col-span-7"
            onSelect={() => setSelectedProject(projects[2])}
            onHoverStart={() => setHoveredId(3)}
            onHoverEnd={() => setHoveredId(null)}
          />

          {/* Project 4 */}
          <ProjectCard 
            project={projects[3]} 
            index={3}
            colSpan="md:col-span-5"
            onSelect={() => setSelectedProject(projects[3])}
            onHoverStart={() => setHoveredId(4)}
            onHoverEnd={() => setHoveredId(null)}
          />

          {/* Project 5 */}
          <ProjectCard 
            project={projects[4]} 
            index={4}
            colSpan="md:col-span-4"
            onSelect={() => setSelectedProject(projects[4])}
            onHoverStart={() => setHoveredId(5)}
            onHoverEnd={() => setHoveredId(null)}
          />

          {/* Project 6 */}
          <ProjectCard 
            project={projects[5]} 
            index={5}
            colSpan="md:col-span-5"
            onSelect={() => setSelectedProject(projects[5])}
            onHoverStart={() => setHoveredId(6)}
            onHoverEnd={() => setHoveredId(null)}
          />

          {/* Project 7 */}
          <ProjectCard 
            project={projects[6]} 
            index={6}
            colSpan="md:col-span-3"
            onSelect={() => setSelectedProject(projects[6])}
            onHoverStart={() => setHoveredId(7)}
            onHoverEnd={() => setHoveredId(null)}
          />
        </div>

        {/* FOOTER */}
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

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-purple-soft rounded-full flex items-center justify-center hover:bg-purple-light transition-colors"
              >
                <svg className="w-5 h-5 text-purple-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-purple-main font-semibold text-sm">PROJECT DETAILS</span>
                  <h3 className="text-4xl font-bold text-text-dark mt-2">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-text-medium text-lg leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div>
                  <h4 className="text-text-dark font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-purple-soft text-purple-main font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-main text-white py-3 px-6 rounded-xl text-center font-semibold hover:bg-purple-light transition-all"
                    >
                      View Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-text-dark text-white py-3 px-6 rounded-xl text-center font-semibold hover:bg-text-medium transition-all"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Reusable Project Card Component
const ProjectCard = ({ 
  project, 
  index, 
  colSpan, 
  onSelect,
  onHoverStart,
  onHoverEnd 
}: { 
  project: Project; 
  index: number; 
  colSpan: string;
  onSelect: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  const backgrounds = [
    "bg-white border border-purple-soft/50",
    "bg-purple-soft",
    "bg-gradient-to-br from-purple-main/20 to-purple-light/20",
    "bg-gradient-to-br from-white to-purple-soft/50",
  ];

  return (
    <motion.div
      className={`${colSpan} cursor-pointer`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onSelect}
    >
      <div className={`h-full min-h-[200px] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between ${backgrounds[index % backgrounds.length]}`}>
        <div>
          <span className="text-purple-main font-semibold text-sm">
            {String(index + 2).padStart(2, '0')}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-text-dark mt-2 mb-3">
            {project.title}
          </h3>
          <p className="text-text-medium text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-purple-main/10 text-purple-main text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-purple-main/10 text-purple-main text-xs font-medium rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-purple-main text-white py-2 px-3 rounded-lg text-center text-xs font-semibold hover:bg-purple-light transition-colors"
            >
              View
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 bg-text-dark text-white py-2 px-3 rounded-lg text-center text-xs font-semibold hover:bg-text-medium transition-colors"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects