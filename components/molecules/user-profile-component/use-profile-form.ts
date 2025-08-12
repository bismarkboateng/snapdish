import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProfileFormValues,
  ProfileUpdateValues,
  profileInfoSchema,
  profileInfoInitialValues,
} from "./profile-info-schema";
import { useUpdateUser } from "@/features/users/hooks/use-update-user";
import { useCurrentUser } from "@/features/users/hooks/use-current-user";

export const useProfileForm = () => {
  const { mutate: updateUser, isPending } = useUpdateUser();
  const { data: currentUserData, isLoading, error } = useCurrentUser();

  const defaultValues = currentUserData
    ? {
        fullName: currentUserData.fullName || "",
        email: currentUserData.email || "",
        phone: currentUserData.phone || "",
      }
    : profileInfoInitialValues;

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileInfoSchema),
    defaultValues,
  });

  useEffect(() => {
    if (currentUserData) {
      form.reset({
        fullName: currentUserData.fullName || "",
        email: currentUserData.email || "",
        phone: currentUserData.phone || "",
      });
    }
  }, [currentUserData, form]);

  const onSubmit = (values: ProfileFormValues) => {
    const updateData: ProfileUpdateValues = {
      fullName: values.fullName,
      phone: values.phone,
    };
    updateUser(updateData);
  };

  return {
    form,
    currentUserData,
    defaultValues,
    isLoading,
    error,
    isPending,
    onSubmit,
  };
};
