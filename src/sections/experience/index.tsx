import HText from "@/reusables/HText";
import { SelectedPage, ExperienceElement as ExperienceElementType } from "@/reusables/types";
import { motion } from "framer-motion";
import ExperienceElement from "./experience-element";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const experienceList: ExperienceElementType[] = [
    {
        organization: "Humanforce",
        position: "Software Engineer",
        description: "Software engineer in the intelliHR platform team. We focus on feature enablement, scale, and reducing technical debt.",
        date: "January 2024 - Present",
    },
    {
        organization: "The University of Queensland",
        position: "Software Engineer",
        description: "Full-stack developer in the Application Development and Support team. Worked on CAHP, UQ Maps, and UQ Donations. Full-stack developer in the Application Development and Support team. Worked on CAHP, UQ Maps, and UQ Donations. Full-stack developer in the Application Development and Support team. Worked on CAHP, UQ Maps, and UQ Donations. Full-stack developer in the Application Development and Support team. Worked on CAHP, UQ Maps, and UQ Donations. Full-stack developer in the Application Development and Support team. Worked on CAHP, UQ Maps, and UQ Donations.",
        date: "November 2022 - January 2024",
    },
    {
        organization: "The University of Queensland",
        position: "Software Engineer",
        description: "Full-stack developer in the Application Development and Support team. Worked on CAHP, UQ Maps, and UQ Donations.",
        date: "November 2022 - January 2024",
    },
];

const Experience = ({ setSelectedPage }: Props) => {
    return (
        <section id="experience" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}>
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
                    <HText>EXPERIENCE</HText>
                </motion.div>

                {/* TIMELINE CONTAINER */}
                <div className="relative flex flex-col items-center w-full">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-300 h-full"></div>

                    {/* Experience Entries */}
                    {experienceList.map((item, index) => (
                        <ExperienceElement key={index} experience={item} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
