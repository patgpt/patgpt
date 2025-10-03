"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "bordered" | "compact" | "side" | "normal";
  imageFull?: boolean;
}

export const Card = motion.create(({ className, variant = "normal", imageFull, ...props }: CardProps) => (
  <div
    className={cn(
      "card bg-base-100 shadow-xl",
      variant === "bordered" && "card-bordered",
      variant === "compact" && "card-compact",
      variant === "side" && "card-side",
      imageFull && "image-full",
      className
    )}
    {...props}
  />
));

export const CardBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("card-body", className)} {...props} />
);

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("card-title", className)} {...props} />
);

export const CardActions = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("card-actions justify-end", className)} {...props} />
);
