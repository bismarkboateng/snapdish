import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Textarea } from "@/components/atoms/textarea";

import { Checkbox } from "@/components/atoms/checkbox";
import { DonationFormData } from "./donate-food.types";
import { dietaryOptions } from "./donate-food.utils";

const DonateFoodDietryInfo = ({
  form,
}: {
  readonly form: UseFormReturn<DonationFormData>;
}) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="dietaryInfo"
        render={() => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Dietary Information
            </FormLabel>
            <FormDescription className="text-[#6e6e6e]">
              Select any that apply to help people with dietary restrictions
            </FormDescription>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
              {dietaryOptions.map((option) => (
                <FormField
                  key={option}
                  control={form.control}
                  name="dietaryInfo"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(option)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), option])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== option
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {option}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="specialInstructions"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Special Instructions
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Any additional notes, pickup instructions, or special requirements..."
                className="border-[#e5e7eb] focus:border-[#009379] min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Optional: Add any special instructions for pickup or handling
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DonateFoodDietryInfo;
