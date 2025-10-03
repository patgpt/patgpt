"use client";

import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const inputVariants = cva("input", {
  variants: {
    variant: {
      bordered: "input-bordered",
      ghost: "input-ghost",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
    size: {
      xs: "input-xs",
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
    },
  },
  defaultVariants: {
    variant: "bordered",
    size: "md",
  },
});

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<typeof motion.input>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = ({
  className,
  variant,
  size,
  ...props
}: InputProps) => {
  return (
    <motion.input
      className={cn(inputVariants({ variant, size, className }))}
      whileFocus={{ scale: 1.02 }}
      {...props}
    />
  );
};
