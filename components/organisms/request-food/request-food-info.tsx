import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { dietaryRestrictions } from "./request-food.utils";
import { Checkbox } from "@/components/atoms/checkbox";
import { Textarea } from "@/components/atoms/textarea";
import { UseFormReturn } from "react-hook-form";
import { RequestFormData } from "./request-food.types";

const RequestFoodInfo = ({
  form,
}: {
  form: UseFormReturn<RequestFormData>;
}) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="dietaryRestrictions"
        render={() => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Dietary Restrictions (Optional)
            </FormLabel>
            <FormDescription className="text-[#6e6e6e]">
              Select any dietary restrictions that apply to you or your family
            </FormDescription>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
              {dietaryRestrictions.map((restriction) => (
                <FormField
                  key={restriction}
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(restriction)}
                          onCheckedChange={(checked: boolean) => {
                            return checked
                              ? field.onChange([
                                  ...(field.value || []),
                                  restriction,
                                ])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== restriction
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {restriction}
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
        name="additionalNotes"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Additional Notes
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Any additional information that would help donors understand your situation..."
                className="border-[#e5e7eb] focus:border-[#009379] min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Optional: Share any additional context or special circumstances
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default RequestFoodInfo;
