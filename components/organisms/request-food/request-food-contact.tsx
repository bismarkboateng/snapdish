import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Input } from "@/components/atoms/input";
import { UseFormReturn } from "react-hook-form";
import { RequestFormData } from "./request-food.types";

const RequestFoodContact = ({ form }: { form: UseFormReturn<RequestFormData> }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="contactMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Preferred Contact Method
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="border-[#e5e7eb] focus:border-[#009379]">
                  <SelectValue placeholder="Select contact method" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="both">Both Phone & Email</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1f1f1f] font-medium">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="+1 (555) 123-4567"
                  className="border-[#e5e7eb] focus:border-[#009379]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1f1f1f] font-medium">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
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

export default RequestFoodContact;
