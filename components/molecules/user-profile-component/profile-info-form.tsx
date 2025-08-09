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
import {
  ProfileFormValues,
  profileInfoInitialValues,
  profileInfoSchema,
} from "./profile-info-schema";
import { useUpdateUser } from "@/features/users/hooks/use-update-user";
import { Loader2 } from "lucide-react";

export const ProfileInfoForm = ({ isEditing }: { isEditing: boolean }) => {
  const { mutate: updateUser, isPending } = useUpdateUser();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileInfoSchema),
    defaultValues: profileInfoInitialValues,
  });

  const onSubmit = (values: ProfileFormValues) => {
    updateUser(values);
  };

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
