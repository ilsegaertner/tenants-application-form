import * as React from "react";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

interface ProgressIndicatorProp {
  progress: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProp> = ({ progress }) => {
  return (
    <div className="w-[60%] h-2 bg-gray-200 rounded">
      <motion.div
        className="h-2 bg-blue-600 rounded"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      >
        <Progress value={progress} />
      </motion.div>
    </div>
  );
};

export default ProgressIndicator;
