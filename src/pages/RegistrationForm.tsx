import React from "react";
import { useState } from "react";
import { z } from "zod";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import LastStep from "../components/LastStep";
import { error } from "console";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  phoneNumber: z.coerce.number(),
  email: z.string().email("Invalid email address"),
  salary: z.string().min(1, "You must select a salary range"),
});

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    salary: "",
  });
  // const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // const nextStep = () => {
  //   const newErrors = validateForm(formData);
  //   setErrors(newErrors);
  //   if (Object.keys(newErrors).length === 0) {
  //     setStep((prev) => prev + 1);
  //   }
  // };

  // const nextStep = () => {
  //   setStep((prev) => prev + 1);
  // };

  console.log(step);

  // const validateForm = (data: typeof formData) => {
  //   try {
  //     registrationSchema.parse(data);
  //     return {};
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       return error.errors.reduce((acc, err) => {
  //         if (err.path[0] in data) {
  //           acc[err.path[0]] = err.message;
  //         }
  //         return acc;
  //       }, {} as Record<string, string>);
  //     }
  //     return { form: "An unexpected error occurred" };
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const newErrors = validateForm(formData);
  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     console.log("Form data is valid:", formData);
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

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

  return <>{renderStep()}</>;
};

export default RegistrationForm;
