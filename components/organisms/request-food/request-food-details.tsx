import React from "react";
import {
  FormControl,
  FormDescription,
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
import { foodTypes } from "./request-food.utils";
import { Checkbox } from "@/components/atoms/checkbox";
import { Input } from "@/components/atoms/input";
import { Textarea } from "@/components/atoms/textarea";
import { AlertTriangle, Clock, Heart } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { RequestFormData } from "./request-food.types";

const RequestFoodDetails = ({ form }: { form: UseFormReturn<RequestFormData> }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Request Title
            </FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., Need groceries for family of 4"
                className="border-[#e5e7eb] focus:border-[#009379]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Give your request a clear, descriptive title
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
                placeholder="Describe your situation and what type of food would help..."
                className="border-[#e5e7eb] focus:border-[#009379] min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormDescription className="text-[#6e6e6e]">
              Provide context about your need and what would be most helpful
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="requestedFoodTypes"
        render={() => (
          <FormItem>
            <FormLabel className="text-[#1f1f1f] font-medium">
              Requested Food Types
            </FormLabel>
            <FormDescription className="text-[#6e6e6e]">
              Select all types of food that would be helpful
            </FormDescription>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
              {foodTypes.map((type) => (
                <FormField
                  key={type}
                  control={form.control}
                  name="requestedFoodTypes"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(type)}
                          onCheckedChange={(checked: boolean) => {
                            return checked
                              ? field.onChange([...field.value, type])
                              : field.onChange(
                                  field.value?.filter((value) => value !== type)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {type}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="servings"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1f1f1f] font-medium">
                Number of Servings Needed
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., 10 meals, 5 people for 2 days"
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
          name="urgency"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#1f1f1f] font-medium">
                Urgency Level
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-[#e5e7eb] focus:border-[#009379]">
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#53b6ff]" />
                      <span>Low - Can wait a few days</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#ffb84c]" />
                      <span>Medium - Needed within 24 hours</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="high">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#e02e2e]" />
                      <span>High - Urgent need today</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default RequestFoodDetails;
