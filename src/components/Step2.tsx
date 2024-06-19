import React, { useState } from "react";
import { error } from "console";
import { z } from "zod";
import "../App.css";

// Phone number component

const step2Schema = z.object({
  phoneNumber: z
    .string()
    .min(7, "Phone Number is required and should be valid"),
  // salary: z.string().min(1, "You must select a salary range"),
});

interface Step2Props {
  nextStep: () => void;
  previousStep: () => void;
  formData: { phoneNumber: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step2: React.FC<Step2Props> = ({
  nextStep,
  previousStep,
  formData,
  setFormData,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    try {
      step2Schema.parse(formData);
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
      <form className="px-72 my-8">
        <div className="form-wrapper border-2">
          <div className="form-group">
            <label htmlFor="phoneNumber" className="">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Enter your phone number"
              onChange={handleChange}
            />{" "}
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="button-wrapper">
            <button
              type="button"
              className="button-outline"
              onClick={previousStep}
            >
              back
            </button>
            <button
              type="button"
              className="button-filled"
              onClick={handleNextStep}
            >
              next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step2;
