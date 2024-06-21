import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import LastStep from "../components/LastStep";
import ProgressIndicator from "../components/ProgressIndicator";
import { AnimatePresence, motion } from "framer-motion";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    salary: "",
  });
  // const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const getProgressValue = () => {
    return (step / totalSteps) * 100;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            previousStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            previousStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return <LastStep formData={formData} previousStep={prevStep} />;
      default:
        return (
          <Step1
            formData={formData}
            nextStep={nextStep}
            setFormData={setFormData}
          />
        );
    }
  };

  return (
    <>
      {/* <div className="container-wrapper"> */}
      <div className="nosticky notop-0 no-mx-4">
        {" "}
        <ProgressIndicator progress={getProgressValue()} />{" "}
      </div>

      <div className="outer-wrapper ">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="#9a9abc"></path>
        </svg>
        <h1 className="link-underline-animation notext-white nopx-0.5">
          {" "}
          <Link to="/">Go to Buena</Link>
        </h1>
        <AnimatePresence mode="wait">
          <motion.div
            className="container-wrapper"
            key={step}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.003 }}
            layout
          >
            <div className="noflex noflex-col sm:noflex-row nogap-10 nojustify-between">
              <div className="flex-dark norounded-sm"></div>
              {renderStep()}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* </div> */}
    </>
  );
};

export default RegistrationForm;
