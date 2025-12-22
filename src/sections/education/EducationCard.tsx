import { motion } from "framer-motion";
import { Education } from "@/reusables/types";

interface EducationCardProps {
  education: Education;
  index: number;
}

export const EducationCard = ({ education, index }: EducationCardProps) => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* EDUCATION TITLE */}
      <div className="relative">
        <div className="sticky top-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            {education.institution}
          </h3>
          <p className="text-lg text-gray-600 mb-2">{education.period}</p>
          <p className="text-md text-gray-500">{education.location}</p>

          {/* LINE */}
          <div className="hidden md:block absolute top-0 -right-6 w-px h-full bg-gradient-to-b from-purple-600 to-purple-300"></div>
          <div className="hidden md:block absolute top-8 -right-8 w-4 h-4 bg-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            {education.degree}
          </h4>
          <p className="text-purple-600 font-medium">{education.honors}</p>
        </div>

        <div className="flex gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1">
            <p className="text-sm text-gray-500 mb-1">CGPA</p>
            <p className="text-2xl font-bold text-purple-600">{education.gpa}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1">
            <p className="text-sm text-gray-500 mb-1">WAM</p>
            <p className="text-2xl font-bold text-purple-600">{education.wam}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};