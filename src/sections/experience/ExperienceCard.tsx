import { motion } from "framer-motion";
import { Experience } from "@/reusables/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      className="w-[400px] flex-shrink-0 snap-center"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Timeline connector */}
      <div className="relative">
        <div className="absolute -top-8 left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-purple-main shadow-lg" />
        <div className="absolute -top-8 left-1/2 h-8 w-0.5 -translate-x-1/2 transform bg-purple-main/30" />
      </div>

      {/* Card */}
      <div className="h-full rounded-2xl border-2 border-purple-soft/50 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl">
        {/* Period */}
        <div className="mb-4 inline-block rounded-full bg-purple-soft px-4 py-1">
          <span className="text-sm font-semibold text-purple-main">
            {experience.period}
          </span>
        </div>

        {/* Role */}
        <h3 className="mb-2 text-2xl font-bold text-text-dark">
          {experience.role}
        </h3>

        {/* Company */}
        <p className="mb-4 font-semibold text-purple-main">
          {experience.company}
        </p>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-text-medium">
          {experience.description}
        </p>

        {/* Technologies */}
        {experience.technologies?.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-text-dark">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-purple-soft px-3 py-1 text-xs font-medium text-purple-main"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};