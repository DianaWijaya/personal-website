import { motion } from "framer-motion";
import { getHomeSocialLinks } from "@/reusables/data/socialLinks";

export const SocialLinks = () => {
  const links = getHomeSocialLinks();

  return (
    <motion.div
      className="flex justify-center gap-6 pt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {links.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
          aria-label={social.name}
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-full h-full rounded-full"
          />
        </a>
      ))}
    </motion.div>
  );
};