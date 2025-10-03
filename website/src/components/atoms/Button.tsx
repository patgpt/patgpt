"use client";

import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      ghost: "btn-ghost",
      link: "btn-link",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
      neutral: "btn-neutral",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    outline: {
      true: "btn-outline",
    },
    wide: {
      true: "btn-wide",
    },
    block: {
      true: "btn-block",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof motion.button>, "onDrag" | "onDragEnd" | "onDragStart">,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  variant,
  size,
  outline,
  wide,
  block,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      className={cn(buttonVariants({ variant, size, outline, wide, block, className }))}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    />
  );
};
