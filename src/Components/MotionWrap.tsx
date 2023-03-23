import { motion } from "framer-motion";
import { ComponentType, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MotionWrap = ({ children }: Props) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex"
      style={{ opacity: 1, transform: "none" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrap;
