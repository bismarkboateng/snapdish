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
import {
  ProfileFormValues,
  profileInfoInitialValues,
  profileInfoSchema,
} from "./profile-info-schema";

export const ProfileInfoForm = ({ isEditing }: { isEditing: boolean }) => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileInfoSchema),
    defaultValues: profileInfoInitialValues,
  });

  const onSubmit = (values: ProfileFormValues) => {
    console.log("Updated Profile:", values);
    // Send to API or backend handler
  };

  const joinedDate = new Date(2023, 0, 15);

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
                  placeholder="Evans Boadi"
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
                  placeholder="evans@gmail.com"
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
                  placeholder="+233591151759"
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
