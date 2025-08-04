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
import { availableTags, foodTypes } from "./donate-food.utils";
import { Checkbox } from "@/components/atoms/checkbox";
import { UseFormReturn } from "react-hook-form";
import { DonationFormData } from "./donate-food.types";

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

      <FormField
        control={form.control}
        name="tags"
        render={() => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">Tags</FormLabel>
            <FormDescription className="text-[#6e6e6e]">
              Select all that apply to help people find your donation
            </FormDescription>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
              {availableTags.map((tag) => (
                <FormField
                  key={tag}
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(tag)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, tag])
                              : field.onChange(
                                  field.value?.filter((value) => value !== tag)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {tag}
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
    </div>
  );
};

export default DonateFoodDetails;
