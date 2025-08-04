import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";

import { MapPin, Clock } from "lucide-react";
import { RequestFormData } from "./request-food.types";
import { UseFormReturn } from "react-hook-form";

const RequestFoodLocation = ({ form }: { form: UseFormReturn<RequestFormData> }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., Downtown area, near Main Street"
                className="border-[#e5e7eb] focus:border-[#009379]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Provide your general area for food pickup or delivery coordination
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="neededBy"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Needed By
            </FormLabel>
            <FormControl>
              <Input
                type="datetime-local"
                className="border-[#e5e7eb] focus:border-[#009379]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              When do you need the food by?
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="familySize"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Family Size (Optional)
            </FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., 4 people (2 adults, 2 children)"
                className="border-[#e5e7eb] focus:border-[#009379]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Help donors understand how much food would be helpful
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default RequestFoodLocation;
