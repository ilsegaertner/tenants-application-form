import React, { useEffect } from "react";
import { z } from "zod";
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
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import "../App.css";

const step3Schema = z.object({
  salary: z.string().min(1, "You must select a salary range"),
});

// Salary range component

interface Step3Props {
  previousStep: () => void;
  nextStep: () => void;
  formData: { salary: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step3: React.FC<Step3Props> = ({
  previousStep,
  nextStep,
  formData,
  setFormData,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: formData,
  });

  useEffect(() => {
    setValue("salary", formData.salary);
  }, [formData, setValue]);

  const onSubmit = (data: z.infer<typeof step3Schema>) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <>
      <Form {...useForm()}>
        <form className="form-outer" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary Range</FormLabel>
                <FormControl>
                  <RadioGroup
                    defaultValue={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0-1000" id="salary1" />
                      <Label htmlFor="salary1" className="radio-label">
                        0-1000
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1000-2000" id="salary2" />
                      <Label htmlFor="salary2" className="radio-label">
                        1000-2000
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2000-3000" id="salary3" />
                      <Label htmlFor="salary3" className="radio-label">
                        2000-3000
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3000-4000" id="salary4" />
                      <Label htmlFor="salary4" className="radio-label">
                        3000-4000
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value=">4000" id="salary5" />
                      <Label htmlFor="salary5" className="radio-label">
                        Mehr als 4000
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                {errors.salary && (
                  <FormMessage>{errors.salary.message}</FormMessage>
                )}
                <FormDescription>Select your salary range.</FormDescription>
              </FormItem>
            )}
          />

          <div className="button-wrapper">
            <Button type="button" onClick={previousStep} variant="secondary">
              {" "}
              back{" "}
            </Button>
            <Button type="submit" className="button-filled">
              next
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Step3;
