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

  // define the form
  // const step1Form = useForm<z.infer<typeof step1Schema>>({
  //   resolver: zodResolver(step1Schema),
  //   defaultValues: {
  //     fullName: "",
  //     email: "",
  //   },
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleNextStep = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     step1Schema.parse(formData);
  //     setErrors({});
  //     nextStep();
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       const newErrors = error.errors.reduce((acc, err) => {
  //         acc[err.path[0]] = err.message;
  //         return acc;
  //       }, {} as Record<string, string>);
  //       setErrors(newErrors);
  //     }
  //   }
  // };

  return (
    <>
      <Form {...useForm()}>
        <form className="form-outer" onSubmit={handleSubmit(onSubmit)}>
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
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              </FormItem>
            )}
          />

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

          <Button type="submit">Next</Button>
        </form>
      </Form>
    </>
  );
};

export default Step1;
