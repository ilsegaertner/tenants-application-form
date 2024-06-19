import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { AnimatePresence } from "framer-motion";

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
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = () => {
    alert("Form data submitted successfully");
    navigate("/");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <form className="form-outer" onSubmit={handleSubmit}>
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
      <AnimatePresence>
        {showModal && (
          <ModalComponent onCancel={handleCancel} onConfirm={handleConfirm} />
        )}
      </AnimatePresence>
    </>
  );
};

export default LastStep;
