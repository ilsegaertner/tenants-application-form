import React, { useState } from "react";
import { z } from "zod";
import "../App.css";

const step3Schema = z.object({
  salary: z.string().min(1, "You must select a salary range"),
});

// Salary range component

interface Step3Props {
  previousStep: () => void;
  nextStep: () => void;
  formData: { salary: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  // errors: Record<string, string>;
}

const Step3: React.FC<Step3Props> = ({
  previousStep,
  nextStep,
  formData,
  setFormData,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      step3Schema.parse(formData);
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
      <form className="form-outer">
        <div className="form-wrapper border-2">
          <div className="form-group border-2">
            <label htmlFor="salary" className="">
              Salary range
            </label>
            <div
              className="salary-wrapper flex flex-col"
              role="radiogroup"
              aria-labelledby="salary"
            >
              <label htmlFor="salary1">
                <input
                  type="radio"
                  name="salary"
                  id="salary1"
                  value="0-1000"
                  checked={formData.salary === "0-1000"}
                  onChange={handleChange}
                  aria-labelledby="salary1Label"
                />
                <span id="salary1Label">0-1000</span>
              </label>
              <label htmlFor="salary2">
                <input
                  type="radio"
                  name="salary"
                  id="salary2"
                  value="1000-2000"
                  checked={formData.salary === "1000-2000"}
                  onChange={handleChange}
                  aria-labelledby="salary2Label"
                />
                1000-2000
              </label>
              <label htmlFor="salary3">
                <input
                  type="radio"
                  name="salary"
                  id="salary3"
                  value="2000-3000"
                  checked={formData.salary === "2000-3000"}
                  onChange={handleChange}
                  aria-labelledby="salary3Label"
                />
                2000-3000
              </label>
              <label htmlFor="salary4">
                <input
                  type="radio"
                  name="salary"
                  id="salary4"
                  value="3000-4000"
                  checked={formData.salary === "3000-4000"}
                  onChange={handleChange}
                  aria-labelledby="salary4Label"
                />
                3000-4000
              </label>
              <label htmlFor="salary5">
                <input
                  type="radio"
                  name="salary"
                  id="salary5"
                  value=">4000"
                  checked={formData.salary === ">4000"}
                  onChange={handleChange}
                  aria-labelledby="salary5Label"
                />
                Mehr als 4000
              </label>
            </div>
            {errors.salary && <p className="text-red-500"> {errors.salary}</p>}
          </div>
          <div className="button-wrapper">
            <button
              type="button"
              onClick={previousStep}
              className="button-outline"
            >
              {" "}
              back{" "}
            </button>
            <button
              type="submit"
              onClick={handleNextStep}
              className="button-filled"
            >
              next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step3;
