import React from "react";

interface Step1Props {
  nextStep: () => void;
  formData: { fullName: string; email: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step1: React.FC<Step1Props> = ({ nextStep, formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="px-72">
        <div className="mb-4 ">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
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
        </div>
        <button type="button" onClick={nextStep}>
          next
        </button>
      </form>
    </>
  );
};

export default Step1;
