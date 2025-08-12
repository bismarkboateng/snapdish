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
import { Loader2 } from "lucide-react";
import { useProfileForm } from "./use-profile-form";
import { ErrorState } from "../error-state";

export const ProfileInfoForm = ({ isEditing }: { isEditing: boolean }) => {
  const { form, defaultValues, isLoading, error, isPending, onSubmit } =
    useProfileForm();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="animate-spin w-6 h-6" />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        title={`Failed to load user data: ${error.message}`}
        message=" Please refresh the page to try again."
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  disabled={!isEditing}
                  placeholder={defaultValues.fullName || "Enter your full name"}
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
                  disabled={true}
                  type="email"
                  placeholder={defaultValues.email || "Email address"}
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
                  placeholder={defaultValues.phone || "Enter your phone number"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isEditing && (
          <Button
            className="text-sm bg-[#009379] cursor-pointer hover:bg-[#007f6a] transition-colors duration-300"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {isPending ? (
              <div className="flex items-center justify-center text-sm">
                <Loader2 className="animate-spin w-5 h-5 mr-2" />
                Updating Profile...
              </div>
            ) : (
              "Save"
            )}
          </Button>
        )}
      </form>
    </Form>
  );
};
