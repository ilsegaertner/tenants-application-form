import React from "react";
import { z } from "zod";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

// Name/Email component

const step1Schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
});

interface Step1Props {
  nextStep: () => void;
  formData: { fullName: string; email: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step1: React.FC<Step1Props> = ({ nextStep, formData, setFormData }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // define the form
  const step1Form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      step1Schema.parse(formData);
      setErrors({});
      nextStep();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {} as Record<string, string>);
        setErrors(newErrors);
      }
    }
  };

  return (
    <>
      <Form {...step1Form}>
        <form className="form-outer" onSubmit={(e) => e.preventDefault()}>
          <FormField
            control={step1Form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Name"
                    {...field}
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </FormControl>
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName}</p>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={step1Form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Email"
                    {...field}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="form-wrapper border-2">
            {/* <div className="mb-4 ">
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
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div> */}

            <Button
              type="submit"
              className="button-filled"
              onClick={handleNextStep}
            >
              next
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Step1;
