import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/reusables/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
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
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-purple-soft rounded-full flex items-center justify-center hover:bg-purple-light transition-colors"
          >
            <svg
              className="w-5 h-5 text-purple-main"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="space-y-6">
            <div>
              <span className="text-purple-main font-semibold text-sm">
                PROJECT DETAILS
              </span>
              <h3 className="text-4xl font-bold text-text-dark mt-2">
                {project.title}
              </h3>
            </div>

            <p className="text-text-medium text-lg leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>

            <div>
              <h4 className="text-text-dark font-semibold mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-purple-main text-white py-3 px-6 rounded-xl text-center font-semibold hover:bg-purple-light transition-all"
                >
                  View Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
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
    </AnimatePresence>
  );
};