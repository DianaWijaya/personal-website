import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  shortDescription: string;
  longDescription: string;
  skillsUsed: Array<{ image: string; name: string }>;
  relatedLink: string;
  yearCreated: string;
};

const Projects = ({ icon, title, shortDescription, longDescription, skillsUsed, relatedLink, yearCreated }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* PROJECT BOX */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="mt-5 rounded-md border border-cream-200 bg-cream-10 px-5 py-14 text-center cursor-pointer 
                   hover:bg-cream-20 shadow-lg hover:shadow-xl"
        onClick={() => setIsOpen(true)}
      >
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border border-cream-200 bg-cream-20 p-4 shadow-sm">
            {icon}
          </div>
        </div>

        <h4 className="font-bold text-brown-700 text-lg">{title}</h4>
        <p className="my-3 text-brown-500 text-sm">{shortDescription}</p>
      </motion.div>

      {/* POPUP MODAL */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-brown-700 bg-opacity-50 backdrop-blur-sm">
          <div className="bg-cream-10 p-6 rounded-xl shadow-2xl w-4/5 max-w-lg text-center border border-cream-200">
            {/* Title with Year */}
            <h3 className="text-xl text-brown-600 font-semibold mb-2">
              {title} <span className="text-brown-400 text-sm">({yearCreated})</span>
            </h3>

            {/* Long Description */}
            <p className="text-sm text-brown-500 leading-relaxed mb-4">{longDescription}</p>

            {/* Skills Used */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {skillsUsed.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={skill.image} alt={skill.name} className="w-10 h-10 rounded-md" />
                  <p className="text-xs text-brown-400 mt-1">{skill.name}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href={relatedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-brown-300 text-cream-10 text-base rounded-lg 
                           hover:bg-brown-400 shadow-md transition-all"
              >
                View Project
              </a>
              <button
                className="flex-1 px-4 py-2 bg-brown-400 text-cream-10 text-base rounded-lg 
                           hover:bg-brown-500 shadow-md transition-all"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
