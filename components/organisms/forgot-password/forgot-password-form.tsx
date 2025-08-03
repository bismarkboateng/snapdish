import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { useForgotPasswordForm } from "./use-forgot-password";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button/button";
import Link from "next/link";
import { Loader2, ArrowLeft, Mail } from "lucide-react";

const ForgotPasswordForm = () => {
  const { form, handleSubmit, isPending } = useForgotPasswordForm();

  return (
    <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-[var(--shadow-card)] border border-[var(--color-border)]">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--color-text-primary)] font-semibold">
                  Email Address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-muted)]" />
                    <Input
                      type="email"
                      {...field}
                      placeholder="Enter your email address"
                      className="pl-12 h-12 bg-[var(--color-background)] border-2 border-[var(--color-border)] rounded-xl 
                      focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 
                      transition-all duration-200 placeholder:text-[var(--color-text-muted)]"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-[var(--color-status-error)] text-sm" />
              </FormItem>
            )}
          />

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
                <span>Sending Reset Link...</span>
              </div>
            ) : (
              "Send Reset Link"
            )}
          </Button>

          <div className="text-center pt-4 border-t border-[var(--color-border)]">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] 
              transition-colors duration-200 text-sm font-medium group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Sign In
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
