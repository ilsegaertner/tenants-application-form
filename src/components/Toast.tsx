import React from "react";
import { motion } from "framer-motion";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg"
      >
        {message}
        <button onClick={onClose} className="button-fill ml-4 text-white">
          X
        </button>
      </motion.div>
    </>
  );
};

export default Toast;
