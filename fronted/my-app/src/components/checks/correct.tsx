import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
export const Correctans = () => {
  return (
    <div>
      <motion.div
        animate={{ scale: [1, 1.2, 0.8, 1.1, 0.9, 1] }}
        transition={{ duration: 0.5 }}
      >
        <FaCheck size={100} color="#27ae60" />
      </motion.div>
    </div>
  );
};
