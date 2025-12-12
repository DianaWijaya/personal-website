import { SelectedPage } from "@/reusables/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience = ({ setSelectedPage }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Company",
      role: "Role",
      period: "Period - period",
      description: "Description",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind"]
    },
    {
      id: 2,
      company: "Company",
      role: "Role",
      period: "Period - period",
      description: "Description",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind"]
    },
    {
      id: 3,
      company: "Company",
      role: "Role",
      period: "Period - period",
      description: "Description",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind"]
    },
    {
      id: 4,
      company: "Company",
      role: "Role",
      period: "Period - period",
      description: "Description",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind"]
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-bg-white to-bg-light py-20 px-6 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
      >
        {/* HEADER */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[200px] font-bold text-purple-soft/30 leading-none text-center select-none">
              PATH
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-text-dark">
                EXPERIENCE
              </h2>
            </div>
          </div>
          <p className="text-center text-lg text-text-medium">
            Scroll horizontally to explore my journey →
          </p>
        </motion.div>

        {/* HORIZONTAL TIMELINE */}
        <div className="relative">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-purple-soft/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-purple-main origin-left"
              style={{ scaleX: scrollXProgress }}
            />
          </div>

          {/* Scrollable container */}
          <div
            ref={containerRef}
            className="flex gap-8 overflow-x-auto pb-8 pt-8 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="flex-shrink-0 w-[400px] snap-center"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot and line */}
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-main rounded-full border-4 border-white shadow-lg z-10" />
                  
                  {/* Vertical line connecting to card */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-purple-main/30" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-purple-soft/50">
                  {/* Period badge */}
                  <div className="inline-block bg-purple-soft px-4 py-1 rounded-full mb-4">
                    <span className="text-purple-main font-semibold text-sm">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company and role */}
                  <h3 className="text-2xl font-bold text-text-dark mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-purple-main font-semibold mb-4">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-text-medium text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-text-dark font-semibold text-sm mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-text-medium text-xs flex items-start">
                          <span className="text-purple-main mr-2">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-text-dark font-semibold text-sm mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-soft text-purple-main text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-text-light text-sm">
              <span>Drag to scroll</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Summary stats
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <div className="text-4xl font-bold text-purple-main mb-2">5+</div>
            <div className="text-text-medium text-sm">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <div className="text-4xl font-bold text-purple-main mb-2">30+</div>
            <div className="text-text-medium text-sm">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <div className="text-4xl font-bold text-purple-main mb-2">4</div>
            <div className="text-text-medium text-sm">Companies</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <div className="text-4xl font-bold text-purple-main mb-2">15+</div>
            <div className="text-text-medium text-sm">Technologies</div>
          </div>
        </motion.div> */}
      </motion.div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Experience;