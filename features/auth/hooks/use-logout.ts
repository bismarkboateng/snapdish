import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logout } from "../services";
import { toast } from "sonner";

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logout successful");
      router.push("/login");
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });
};
