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
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[var(--color-text-primary)] text-sm font-medium">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  placeholder="you@example.com"
                  className="h-10 lg:h-12 px-3 lg:px-4 bg-[var(--color-surface)] border border-gray-200
                  rounded-lg focus:border-[var(--color-orange-base)] focus:ring-2 focus:ring-[var(--color-orange-base)]/20
                  transition-all duration-200 text-sm lg:text-base"
                />
              </FormControl>
              <FormMessage className="text-destructive text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[var(--color-text-primary)] text-sm font-medium">
                Password
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

        <Button
          type="submit"
          className="w-full h-10 lg:h-12 bg-[var(--color-orange-base)]
          hover:bg-[var(--color-orange-dark)] text-white font-semibold rounded-lg transition-colors
          duration-200 shadow-sm hover:shadow-md text-sm lg:text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={isPending}
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Log In"}
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-100 text-[var(--color-text-muted)]">
              OR
            </span>
          </div>
        </div>

        <GoogleButton label="Login with google" />

        <div className="mt-6 text-center text-sm text-[var(--color-text-muted)]">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[var(--color-orange-accent)] hover:text-[var(--color-orange-base)] font-medium hover:underline transition-colors duration-200"
          >
            Register
          </Link>
        </div>
        <div className="text-center text-sm mt-2">
          <Link
            href="/forgot-password"
            className="text-[var(--color-orange-accent)] hover:text-[var(--color-orange-base)] font-medium hover:underline transition-colors duration-200"
          >
            Forgot your password?
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
