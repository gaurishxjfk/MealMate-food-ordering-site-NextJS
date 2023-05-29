import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const dialoguePopOver: React.FC<Props> = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: [0, 20, 0] }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.2 }}
      className=" right-0 bg-white border-l-2 border-b-2 border-gray-200 w-full md:w-[60%] fixed right-0 z-50 rounded  drop-shadow-[-15px_15px_12px_rgba(0,0,0,0.25)]"
    >
      {children}
    </motion.section>
  );
};

export default dialoguePopOver;
