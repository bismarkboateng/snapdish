import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Textarea } from "@/components/atoms/textarea";
import { UseFormReturn } from "react-hook-form";
import { DonationFormData } from "./donate-food.types";
import { foodTypes } from "./donate-food.utils";

const DonateFoodDetails = ({
  form,
}: {
  form: UseFormReturn<DonationFormData>;
}) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Donation Title
            </FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., Fresh vegetables from my garden"
                className="border-[#e5e7eb] focus:border-[#009379]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Give your donation a descriptive title
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Description
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe the food in detail..."
                className="border-[#e5e7eb] focus:border-[#009379] min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Provide details about the food, its condition, and any preparation
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="foodType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1f1f1f] font-medium">
                Food Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-[#e5e7eb] focus:border-[#009379]">
                    <SelectValue placeholder="Select food type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {foodTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1f1f1f] font-medium">
                Quantity/Servings
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., 5 servings, 2kg, 10 pieces"
                  className="border-[#e5e7eb] focus:border-[#009379]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default DonateFoodDetails;
