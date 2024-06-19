import React from "react";
import { motion } from "framer-motion";

interface ModalComponentProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 className="text-xl mb-4">
          {" "}
          Are you sure you want to submit the form?
        </h2>
        <div className="button-wrapper">
          <button className="button-outline" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="button-filled" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalComponent;
