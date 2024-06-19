import React from "react";

// Name/Email component

interface Step1Props {
  nextStep: () => void;
  formData: { fullName: string; email: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  errors: Record<string, string>;
}

const Step1: React.FC<Step1Props> = ({
  nextStep,
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
          <button type="button" onClick={nextStep}>
            next
          </button>
        </div>
      </form>
    </>
  );
};

export default Step1;
