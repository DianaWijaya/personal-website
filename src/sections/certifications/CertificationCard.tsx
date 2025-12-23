import { motion, AnimatePresence } from "framer-motion";
import { Certification } from "@/reusables/types";
import { useState } from "react";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export const CertificationCard = ({
  certification,
  index,
}: CertificationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="rounded-xl border-2 border-purple-soft/50 bg-white overflow-hidden hover:shadow-lg transition-all">
        {/* Header - Always Visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-purple-soft/20 transition-colors"
        >
          <div className="flex-1">
            <h3 className="text-lg font-bold text-text-dark mb-1">
              {certification.title}
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-purple-main font-semibold">
                {certification.issuer}
              </span>
              <span className="text-text-light">•</span>
              <span className="text-text-medium">{certification.year}</span>
            </div>
          </div>

          {/* Expand/Collapse Icon */}
          <motion.svg
            className="w-6 h-6 text-purple-main flex-shrink-0 ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-5 pb-5 border-t border-purple-soft/30">
                <p className="text-text-medium text-sm leading-relaxed mt-4 mb-4">
                  {certification.description}
                </p>

                {certification.certificateUrl && (
                  <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-main text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-light transition-all"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};