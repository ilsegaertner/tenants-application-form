import React from "react";
import { useState } from "react";
import { z } from "zod";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  age: z.coerce.number().min(18, "You must be at least 18 years old"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// For passing props to the RegistrationForm component
interface RegistrationFormProps {
  initialValues: {
    fullName: string;
    age: string;
    email: string;
    password: string;
  };
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  initialValues,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="fullName"
              id="name"
              value={formData.fullName}
              placeholder="Enter your full name"
              onChange={handleChange}
            />{" "}
          </div>
          <div className="form-group">
            <label htmlFor="age" className="">
              Age
            </label>
            <input
              type="text"
              name="age"
              id="age"
              value={formData.age}
              placeholder="Enter your age"
              onChange={handleChange}
            />{" "}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />{" "}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />{" "}
          </div>
          <button
            type="submit"
            onClick={nextStep}
            className="bg-blue-900 p-3 rounded-md text-white"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
