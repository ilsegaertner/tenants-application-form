import React from "react";
import { useState } from "react";
import { z } from "zod";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  phoneNumber: z.coerce.number(),
  email: z.string().email("Invalid email address"),
  salary: z.string().min(1, "You must select a salary range"),
});

// For passing props to the RegistrationForm component
interface RegistrationFormProps {
  initialValues: {
    fullName: string;
    phoneNumber: string;
    email: string;
    salary: string;
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
          </div>

          <div className="form-group">
            <label htmlFor="salary" className="">
              Salary range
            </label>
            <div className="salary-wrapper flex flex-col">
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary1"
                  value="0-1000"
                  checked={formData.salary === "0-1000"}
                  onChange={handleChange}
                />
                0-1000
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary2"
                  value="1000-2000"
                  checked={formData.salary === "1000-2000"}
                  onChange={handleChange}
                />
                1000-2000
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary3"
                  value="2000-3000"
                  checked={formData.salary === "2000-3000"}
                  onChange={handleChange}
                />
                2000-3000
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary4"
                  value="3000-4000"
                  checked={formData.salary === "3000-4000"}
                  onChange={handleChange}
                />
                3000-4000
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary5"
                  value=">4000"
                  checked={formData.salary === ">4000"}
                  onChange={handleChange}
                />
                Mehr als 4000
              </label>
            </div>
          </div>
          <button
            type="submit"
            // onClick={nextStep}
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
