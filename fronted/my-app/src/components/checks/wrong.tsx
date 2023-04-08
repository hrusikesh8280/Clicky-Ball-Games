import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
export const Textanim = () => {
  return (
    <div>
      <motion.div
        animate={{ scale: [1, 1.2, 0.8, 1.1, 0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        <FaTimes size={100} color="#ff6b6b" />
      </motion.div>
    </div>
  );
};
