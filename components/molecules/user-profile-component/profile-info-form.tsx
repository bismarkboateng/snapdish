"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ProfileFormValues, profileInfoSchema } from "./profile-info-schema";

export const ProfileInfoForm = ({ isEditing }: { isEditing: boolean }) => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileInfoSchema),
    defaultValues: {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "+233501234567",
    },
  });

  const onSubmit = (values: ProfileFormValues) => {
    console.log("Updated Profile:", values);
    // Send to API or backend handler
  };

  const joinedDate = new Date(2023, 0, 15); // Just a placeholder

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  placeholder="John Doe"
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  type="email"
                  placeholder="john@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  type="tel"
                  placeholder="+233501234567"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-sm text-muted-foreground">
          Joined on{" "}
          <span className="font-medium">{format(joinedDate, "PPP")}</span>
        </div>

        {isEditing && (
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Save
          </Button>
        )}
      </form>
    </Form>
  );
};
