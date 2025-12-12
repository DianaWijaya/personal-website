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
      company: "Moneylion Sdn Bhd",
      role: "Full Stack Engineer Intern",
      period: "Nov 2024 - Feb 2025",
      description:
        "Contributed to full-stack web application development using Spring Boot, React, and Redux while collaborating in a cross-functional Agile team.",
      technologies: [
        "Spring Boot",
        "React",
        "Redux",
        "Java",
        "TypeScript",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      id: 2,
      company: "Monash University",
      role: "Class Assistant",
      period: "Jul 2024 - Jun 2025",
      description:
        "Supported four weekly tutorial classes by assisting students with technical questions, guiding them through complex OOP concepts, and collaborating with lecturers to address student challenges.",
      technologies: ["Java", "Object-Oriented Design"],
    },
    {
      id: 3,
      company: "Monash University Student Association (MUSA)",
      role: "School of Information Technology Representative",
      period: "Jan 2024 - Dec 2024",
      description:
        "Served as the primary liaison for 1,500 IT students, led subcommittees, and organized 26 events including workshops, competitions, and career sessions while bridging communication between students, faculty, and administration.",
      technologies: [],
    },
    // {
    //   id: 4,
    //   company: "Company",
    //   role: "Role",
    //   period: "Period - period",
    //   description: "Description",
    //   technologies: ["React", "TypeScript", "Next.js", "Tailwind"]
    // },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen overflow-hidden bg-gradient-to-b from-bg-white to-bg-light py-10 px-6"
    >
      <motion.div
        className="mx-auto max-w-7xl"
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
            <div className="select-none text-center text-[120px] font-bold leading-none text-purple-soft/30 md:text-[200px]">
              PATH
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl font-bold text-text-dark md:text-6xl">
                EXPERIENCE
              </h2>
            </div>
          </div>
          {/* <p className="text-center text-lg text-text-medium">
            Scroll horizontally to explore my journey →
          </p> */}
        </motion.div>

        {/* HORIZONTAL TIMELINE */}
        <div className="relative">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden rounded-full bg-purple-soft/50">
            <motion.div
              className="h-full origin-left bg-purple-main"
              style={{ scaleX: scrollXProgress }}
            />
          </div>

          {/* Scrollable container */}
          <div
            ref={containerRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-8 overflow-x-auto pb-8 pt-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="w-[400px] flex-shrink-0 snap-center"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot and line */}
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -top-8 left-1/2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-purple-main shadow-lg" />

                  {/* Vertical line connecting to card */}
                  <div className="absolute -top-8 left-1/2 h-8 w-0.5 -translate-x-1/2 transform bg-purple-main/30" />
                </div>

                {/* Card */}
                <div className="h-full rounded-2xl border-2 border-purple-soft/50 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl">
                  {/* Period badge */}
                  <div className="mb-4 inline-block rounded-full bg-purple-soft px-4 py-1">
                    <span className="text-sm font-semibold text-purple-main">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company and role */}
                  <h3 className="mb-2 text-2xl font-bold text-text-dark">
                    {exp.role}
                  </h3>
                  <p className="mb-4 font-semibold text-purple-main">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-text-medium">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  {exp.technologies?.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-text-dark">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
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
            ))}
          </div>

          {/* Scroll hint */}
          {/* <div className="mt-4 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-text-light">
              <span>Drag to scroll</span>
              <svg
                className="h-4 w-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
