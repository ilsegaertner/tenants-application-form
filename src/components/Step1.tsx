import React from "react";
import { z } from "zod";
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
  // Define the form using useForm hook with Zod resolver
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: formData,
  });

  React.useEffect(() => {
    setValue("fullName", formData.fullName);
    setValue("email", formData.email);
  }, [formData, setValue]);

  const onSubmit = (data: z.infer<typeof step1Schema>) => {
    setFormData(data);
    nextStep();
  };

  return (
    <>
      <Form {...useForm()}>
        <form className="form-outer" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  {errors.fullName && (
                    <FormMessage>{errors.fullName.message}</FormMessage>
                  )}
              
                </FormItem>
              )}
            />
          </div>
          <div className="nopt-6">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Email" {...field} />
                  </FormControl>
                  {errors.email && (
                    <FormMessage> {errors.email.message}</FormMessage>
                  )}
                  <FormDescription>Enter your email address.</FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="button-wrapper">
            <Button type="submit">Next </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Step1;
