import { motion } from "framer-motion";
import { Project } from "@/reusables/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  colSpan: string;
  onSelect: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const ProjectCard = ({
  project,
  index,
  colSpan,
  onSelect,
  onHoverStart,
  onHoverEnd,
}: ProjectCardProps) => {
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
      <div
        className={`h-full min-h-[200px] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between ${
          backgrounds[index % backgrounds.length]
        }`}
      >
        <div>
          <span className="text-purple-main font-semibold text-sm">
            {String(index + 2).padStart(2, "0")}
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