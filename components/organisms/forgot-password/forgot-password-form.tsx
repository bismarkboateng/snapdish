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
import { Loader2 } from "lucide-react";

const ForgotPasswordForm = () => {
  const { form, handleSubmit, isPending } = useForgotPasswordForm();

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
        <Button
          type="submit"
          className="w-full h-10 lg:h-12 bg-[var(--color-orange-base)]
          hover:bg-[var(--color-orange-dark)] text-white font-semibold rounded-lg transition-colors
          duration-200 shadow-sm hover:shadow-md text-sm lg:text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-300 disabled:hover:bg-gray-300"
          disabled={isPending}
        >
          {isPending ? <Loader2 /> : "Reset Password"}
        </Button>
        <p className="text-center text-sm">
          Back to{" "}
          <Link
            href="/login"
            className="text-[var(--color-orange-base)] hover:underline"
          >
            login
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
