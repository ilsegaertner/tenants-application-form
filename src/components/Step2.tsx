import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/button";
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
import "../App.css";

// Phone number component

const step2Schema = z.object({
  phoneNumber: z
    .string()
    .regex(/^\d+$/, "Phone Number must contain only numbers")
    .min(
      7,
      "Phone Number is required and needs to be at least 7 characters long"
    ),
});

interface Step2Props {
  nextStep: () => void;
  previousStep: () => void;
  formData: { phoneNumber: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step2: React.FC<Step2Props> = ({
  nextStep,
  previousStep,
  formData,
  setFormData,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: formData,
  });

  useEffect(() => {
    setValue("phoneNumber", formData.phoneNumber);
  }, [formData, setValue]);

  const onSubmit = (data: z.infer<typeof step2Schema>) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <>
      <Form {...useForm()}>
        <form className="form-outer" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                {errors.phoneNumber && (
                  <FormMessage>{errors.phoneNumber.message}</FormMessage>
                )}
                <FormDescription>Enter your phone number.</FormDescription>
              </FormItem>
            )}
          />

          <div className="button-wrapper">
            <Button type="button" onClick={previousStep} variant="secondary">
              back
            </Button>
            <Button type="submit">next</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Step2;
