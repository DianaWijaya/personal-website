import { motion, MotionValue } from "framer-motion";

interface ProgressBarProps {
  scrollProgress: MotionValue<number>;
}

export const ProgressBar = ({ scrollProgress }: ProgressBarProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden rounded-full bg-purple-soft/50">
      <motion.div
        className="h-full origin-left bg-purple-main"
        style={{ scaleX: scrollProgress }}
      />
    </div>
  );
};