import HText from "@/reusables/HText";
import { ProjectElement, SelectedPage } from "@/reusables/types";
import {
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Project from "./project-element";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const project: Array<ProjectElement> = [
  {
    icon: <AcademicCapIcon className="h-12 w-12" />,
    title: "Project Name",
    shortDescription:
      "Placeholder",
    longDescription:
      "Placeholder",
    skillsUsed: [
      
    ],
    relatedLink: "",
    yearCreated: "",
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12" />,
    title: "Project Name",
    shortDescription:
      "Placeholder",
      longDescription:
      "Placeholder",
    skillsUsed: [
      
    ],
    relatedLink: "",
    yearCreated: "",
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12" />,
    title: "Project Name",
    shortDescription:
      "Placeholder",
      longDescription:
      "Placeholder",
    skillsUsed: [
      
    ],
    relatedLink: "",
    yearCreated: "",
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12" />,
    title: "Project Name",
    shortDescription:
      "Placeholder",
      longDescription:
      "Placeholder",
    skillsUsed: [
      
    ],
    relatedLink: "",
    yearCreated: "",
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12" />,
    title: "Project Name",
    shortDescription:
      "Placeholder",
    longDescription:
      "Placeholder",
    skillsUsed: [
      
    ],
    relatedLink: "",
    yearCreated: "",
  },
  {
    icon: <AcademicCapIcon className="h-12 w-12" />,
    title: "Project Name",
    shortDescription:
      "Placeholder",
      longDescription:
      "Placeholder",
    skillsUsed: [
      
    ],
    relatedLink: "",
    yearCreated: "",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>PROJECTS</HText>
        </motion.div>

        <motion.div 
          className="mt-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {project.map((proj: ProjectElement) => (
            <Project
              key={proj.title}
              icon={proj.icon}
              title={proj.title}
              shortDescription={proj.shortDescription}
              longDescription={proj.longDescription}
              skillsUsed={proj.skillsUsed}
              relatedLink={proj.relatedLink}
              yearCreated={proj.yearCreated}
            />
          ))}
        </motion.div>

        {/* PROJECTS */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
