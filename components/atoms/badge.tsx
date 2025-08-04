"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#009379] text-white hover:bg-[#007566]",
        secondary: "border-transparent bg-[#fddf89] text-[#1f1f1f] hover:bg-[#fcd448]",
        destructive: "border-transparent bg-[#e02e2e] text-white hover:bg-[#cc2626]",
        outline: "text-[#1f1f1f] border-[#e5e7eb] hover:bg-[#f5fefe]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
