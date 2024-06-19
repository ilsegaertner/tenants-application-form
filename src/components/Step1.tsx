import React from "react";
import { z } from "zod";
import { useState } from "react";

// Name/Email component

const step1Schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
});

interface Step1Props {
  nextStep: () => void;
  formData: { fullName: string; email: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step1: React.FC<Step1Props> = ({ nextStep, formData, setFormData }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    try {
      step1Schema.parse(formData);
      setErrors({});
      nextStep();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {} as Record<string, string>);
        setErrors(newErrors);
      }
    }
  };

  return (
    <>
      <form className="form-outer" onSubmit={(e) => e.preventDefault()}>
        <div className="form-wrapper border-2">
          <div className="mb-4 ">
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <button
            type="submit"
            className="button-filled"
            onClick={handleNextStep}
          >
            next
          </button>
        </div>
      </form>
    </>
  );
};

export default Step1;
