import React from "react";
import { error } from "console";

// Phone number component

interface Step2Props {
  nextStep: () => void;
  previousStep: () => void;
  formData: { phoneNumber: string; email: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  errors: Record<string, string>;
}

const Step2: React.FC<Step2Props> = ({
  nextStep,
  previousStep,
  formData,
  setFormData,
  errors,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <div className="button-wrapper border-2 flex gap-10">
            <button type="button" onClick={nextStep}>
              next
            </button>
            <button type="button" onClick={previousStep}>
              back
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step2;
