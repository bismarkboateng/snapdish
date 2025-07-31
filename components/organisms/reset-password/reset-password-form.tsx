import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useResetPasswordForm } from "./use-reset-password";
import { useResetParams } from "./use-reset-params";

const ResetPasswordForm = () => {
  const { userId, secret } = useResetParams();
  const {
    form,
    handleSubmit,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isPending,
  } = useResetPasswordForm(userId, secret);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[var(--color-text-primary)] text-sm font-medium">
                New Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...field}
                    placeholder="••••••••"
                    className="h-10 lg:h-12 px-3 lg:px-4 pr-10 bg-[var(--color-surface)] border border-gray-200
                    rounded-lg focus:border-[var(--color-orange-base)] focus:ring-2 focus:ring-[var(--color-orange-base)]/20
                    transition-all duration-200 text-sm lg:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage className="text-destructive text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[var(--color-text-primary)] text-sm font-medium">
                Confirm New Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    {...field}
                    placeholder="••••••••"
                    className="h-10 lg:h-12 px-3 lg:px-4 pr-10 bg-[var(--color-surface)] border border-gray-200
                    rounded-lg focus:border-[var(--color-orange-base)] focus:ring-2 focus:ring-[var(--color-orange-base)]/20
                    transition-all duration-200 text-sm lg:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage className="text-destructive text-sm" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-10 lg:h-12 bg-[var(--color-orange-base)]
          hover:bg-[var(--color-orange-dark)] text-white font-semibold rounded-lg transition-colors
          duration-200 shadow-sm hover:shadow-md text-sm lg:text-base cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={isPending}
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Confirm"}
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
