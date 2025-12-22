import { motion } from "framer-motion";

export const AboutContent = () => {
  return (
    <motion.div
      className="lg:col-span-2 space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="space-y-5 text-text-medium leading-relaxed text-lg">
          <p>
            <span className="text-3xl font-bold text-purple-main">H</span>ey
            there! I'm Diana Wijaya, a Computer Science graduate from Monash
            University with a passion for building innovative applications and
            solving complex technical challenges.
          </p>
          <p>
            During my intern at Moneylion, I built features with Spring Boot,
            React, and Redux that didn't crash when people actually used them (a
            win in my book). I think I have some type of OCD with writing
            efficient code, the kind that makes sense when you look at it six
            months later.
          </p>
          <p>
            Beyond coding, I've led initiatives at Monash University Student
            Association as the student representative, and also volunteered as a
            class assistant. I believe in continuous learning and enjoy taking on
            challenges that push me to grow.
          </p>
          <p className="text-purple-main font-semibold pt-4">
            Currently open to full-time opportunities in software development.
            Let's build tech for the future together!
          </p>
        </div>
      </div>
    </motion.div>
  );
};