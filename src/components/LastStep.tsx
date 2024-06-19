import React from "react";

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form data submitted successfully");
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
              className="text-gray-800 border-gray-800 border-2 rounded-md p-2"
            >
              back
            </button>
            <button
              type="submit"
              className="bg-gray-800 text-red-200 p-2 rounded-md"
            >
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
