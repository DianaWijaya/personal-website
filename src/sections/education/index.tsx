import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: any) => void;
};

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  wam: string;
  honors: string;
}

const Education = ({ setSelectedPage }: Props) => {
  const education: Education[] = [
    {
      id: 1,
      institution: "Monash University",
      degree: "Bachelor of Computer Science in Advanced Computer Science",
      period: "July 2022 – June 2025",
      location: "Malaysia",
      gpa: "3.95/4.0",
      wam: "87.59",
      honors: "With Honors",
    },
    {
      id: 2,
      institution: "Sunway College",
      degree: "Monash University Foundation Year (MUFY)",
      period: "August 2021 – June 2022",
      location: "Malaysia",
      gpa: "4.0/4.0",
      wam: "91.50",
      honors: "With Honors",
    }
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-b from-bg-light to-bg-white py-20 px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        onViewportEnter={() => setSelectedPage("education")}
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
              LEARN
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-text-dark">
                EDUCATION
              </h2>
            </div>
          </div>
        </motion.div>

        {/* TWO COLUMN LAYOUT */}
        <div className="space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* LEFT SIDE - Institution */}
              <div className="relative">
                <div className="sticky top-24">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">{edu.period}</p>
                  <p className="text-md text-gray-500">{edu.location}</p>

                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-0 -right-6 w-px h-full bg-gradient-to-b from-purple-600 to-purple-300"></div>
                  <div className="hidden md:block absolute top-8 -right-8 w-4 h-4 bg-purple-600 rounded-full"></div>
                </div>
              </div>

              {/* RIGHT SIDE - Details */}
              <div className="space-y-6">
                {/* Degree */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-600 font-medium">{edu.honors}</p>
                </div>

                {/* Stats */}
                <div className="flex gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1">
                    <p className="text-sm text-gray-500 mb-1">CGPA</p>
                    <p className="text-2xl font-bold text-purple-600">{edu.gpa}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1">
                    <p className="text-sm text-gray-500 mb-1">WAM</p>
                    <p className="text-2xl font-bold text-purple-600">{edu.wam}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;