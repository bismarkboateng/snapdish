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

import { GoogleButton } from "@/components/molecules/google-button/google-button";
import { useLoginForm } from "./use-login";
import Link from "next/link";

const LoginForm = () => {
  const { form, handleSubmit, showPassword, setShowPassword, isPending } = useLoginForm();

  return (
    <div className="bg-[var(--color-surface)] rounded-3xl p-8 shadow-[var(--shadow-default)] border border-[var(--color-border)]/50">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--color-text-primary)] text-sm font-semibold">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    placeholder="you@example.com"
                    className="h-12 px-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl
                    focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20
                    transition-all duration-300 text-base hover:border-[var(--color-primary)]/50"
                  />
                </FormControl>
                <FormMessage className="text-[var(--color-error)] text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[var(--color-text-primary)] text-sm font-semibold">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...field}
                      placeholder="••••••••"
                      className="h-12 px-4 pr-12 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl
                      focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20
                      transition-all duration-300 text-base hover:border-[var(--color-primary)]/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
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
                <FormMessage className="text-[var(--color-error)] text-sm" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-base disabled:opacity-50
            disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
              boxShadow: 'var(--shadow-default)'
            }}
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center justify-center">
                <Loader2 className="animate-spin w-5 h-5 mr-2" />
                Signing In...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                Sign In
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--color-border)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[var(--color-surface)] text-[var(--color-text-muted)] font-medium">
                OR
              </span>
            </div>
          </div>

          <GoogleButton label="Continue with Google" />

          <div className="mt-8 text-center text-base text-[var(--color-text-muted)]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-semibold hover:underline transition-colors duration-200"
            >
              Create Account
            </Link>
          </div>
          
          <div className="text-center text-base">
            <Link
              href="/forgot-password"
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-semibold hover:underline transition-colors duration-200"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
