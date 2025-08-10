import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useResetPassword = () => {
  const router = useRouter();
  return useMutation<
    void,
    Error,
    { userId: string; secret: string; password: string }
  >({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success(
        "Password reset successful! You can now log in with your new password."
      );
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    },
    onError: (error) => {
      toast.error(`Reset password failed: ${error.message}`);
    },
  });
};
