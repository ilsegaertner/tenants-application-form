import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";

import { toast } from "sonner";

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
    setShowModal(false);
    toast("Form data is submitted successfully.");

    setTimeout(() => {
      navigate("/");
    }, 2000);
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
            <Button type="button" onClick={previousStep} variant="outline">
              back
            </Button>
            <Button type="submit" className="button-filled">
              {" "}
              Submit
            </Button>
          </div>
        </div>
      </form>
      <AnimatePresence>
        {showModal && (
          <ModalComponent
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            showModal={showModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default LastStep;
