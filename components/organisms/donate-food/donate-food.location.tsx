import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { UseFormReturn } from "react-hook-form";
import { DonationFormData } from "./donate-food.types";
import { Input } from "@/components/atoms/input";
import { Clock, MapPin } from "lucide-react";
import { Textarea } from "@/components/atoms/textarea";

export default function DonateFoodLocation({
  form,
}: {
  readonly form: UseFormReturn<DonationFormData>;
}) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Pickup Location
            </FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., 123 Main St, City, State"
                className="border-[#e5e7eb] focus:border-[#009379]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Provide a detailed address or landmark for pickup
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="expiresAt"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Expiry Date & Time
            </FormLabel>
            <FormControl>
              <Input
                type="datetime-local"
                className="border-[#e5e7eb] focus:border-[#009379]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              When does this food expire or need to be picked up by?
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="availablePickupTimes"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Available Pickup Times
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="e.g., Monday-Friday 6PM-8PM, Weekends 10AM-2PM"
                className="border-[#e5e7eb] focus:border-[#009379]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              When are you available for food pickup?
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
