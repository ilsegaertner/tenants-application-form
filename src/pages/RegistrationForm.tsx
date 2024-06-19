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
            />{" "}
          </div>
        </div>
      </form>
    </>
  );
};
