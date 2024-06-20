import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import LastStep from "../components/LastStep";
import ProgressIndicator from "../components/ProgressIndicator";

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
  }

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
      <div className="container-wrapper noborder-2 nop-10">
        <Link to="/" className="notext-xl hover:notext-blue-800 nopb-10">
          Buena
        </Link>
        <ProgressIndicator progress={getProgressValue()}/>
        {renderStep()}
      </div>
    </>
  );
};

export default RegistrationForm;
