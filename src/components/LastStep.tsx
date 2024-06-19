import React from "react";
import { useNavigate } from "react-router-dom";

interface LastStepProps {
  previousStep: () => void;
  formData: {
    fullName: string;
    email: string;
    phoneNumber: string;
    salary: string;
  };
}

const LastStep: React.FC<LastStepProps> = ({ previousStep, formData }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form data submitted successfully");
    navigate("/");
  };
  return (
    <>
      <form className="px-72 my-8" onSubmit={handleSubmit}>
        <div className="form-wrapper border-2">
          <div className="form-group border-2">
            <label>
              <p>Your name: {formData.fullName}</p>
            </label>
            <label>
              <p>Your email: {formData.email}</p>
            </label>
            <label>
              <p>Your phone number: {formData.phoneNumber}</p>
            </label>
            <label>
              <p> Your salary: {formData.salary}</p>
            </label>
          </div>
          <div className="button-wrapper flex gap-10">
            <button
              type="button"
              onClick={previousStep}
              className="button-outline"
            >
              back
            </button>
            <button type="submit" className="button-filled">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LastStep;
