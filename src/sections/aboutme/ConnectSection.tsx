import { motion } from "framer-motion";
import { getAboutMeSocialLinks } from "@/reusables/data/socialLinks";

export const ConnectSidebar = () => {
  const links = getAboutMeSocialLinks();

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <div className="bg-gradient-purple p-8 rounded-2xl shadow-lg sticky top-24">
        <h3 className="text-2xl font-bold text-text-dark mb-6">
          Connect With Me
        </h3>
        <div className="space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.isEmail ? undefined : "_blank"}
              rel={link.isEmail ? undefined : "noopener noreferrer"}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              whileHover={{ x: 5 }}
            >
              {link.icon ? (
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <div className="w-12 h-12 bg-purple-main rounded-full flex items-center justify-center text-white font-bold text-xl">
                  @
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-text-dark group-hover:text-purple-main transition-colors">
                  {link.name}
                </p>
                {link.description && (
                  <p className="text-sm text-text-light">{link.description}</p>
                )}
              </div>
              <svg
                className="w-5 h-5 text-purple-main opacity-0 group-hover:opacity-100 transition-opacity"
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
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};