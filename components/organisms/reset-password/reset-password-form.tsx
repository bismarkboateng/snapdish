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
import { Eye, EyeOff, Loader2, Lock, Shield } from "lucide-react";
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
    <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-[var(--shadow-card)] border border-[var(--color-border)]">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--color-text-primary)] font-semibold">
                  New Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-muted)]" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...field}
                      placeholder="Enter your new password"
                      className="pl-12 pr-12 h-12 bg-[var(--color-background)] border-2 border-[var(--color-border)]
                      rounded-xl focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10
                      transition-all duration-200 placeholder:text-[var(--color-text-muted)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]
                      hover:text-[var(--color-text-primary)] transition-colors duration-200"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-[var(--color-status-error)] text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--color-text-primary)] font-semibold">
                  Confirm New Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-muted)]" />
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      {...field}
                      placeholder="Confirm your new password"
                      className="pl-12 pr-12 h-12 bg-[var(--color-background)] border-2 border-[var(--color-border)]
                      rounded-xl focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10
                      transition-all duration-200 placeholder:text-[var(--color-text-muted)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]
                      hover:text-[var(--color-text-primary)] transition-colors duration-200"
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-[var(--color-status-error)] text-sm" />
              </FormItem>
            )}
          />

          <div className="bg-[var(--color-background)] rounded-xl p-4 border border-[var(--color-border)]">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                Password Requirements
              </span>
            </div>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-1">
              <li>• At least 8 characters long</li>
              <li>• Include uppercase and lowercase letters</li>
              <li>• Include at least one number</li>
              <li>• Include at least one special character</li>
            </ul>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]
            hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] text-white font-semibold 
            rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 
            disabled:cursor-not-allowed"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Updating Password...</span>
              </div>
            ) : (
              "Update Password"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
