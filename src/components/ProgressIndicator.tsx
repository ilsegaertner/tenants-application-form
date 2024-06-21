import * as React from "react";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

interface ProgressIndicatorProp {
  progress: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProp> = ({ progress }) => {
  return (
    <div className="w-[60%] h-4 bg-gray-200 rounded relative overflow-hidden">
      <motion.div
        className="h-full bg-blue-900 absolute top-0 left-0"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.003 }}
      />
      <Progress value={progress} className="opacity-0" />
    </div>
  );
};

export default ProgressIndicator;
