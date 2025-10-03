"use client";

import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export const Dialog = {
  Root: ArkDialog.Root,
  Trigger: ({ className, ...props }: ComponentPropsWithoutRef<typeof ArkDialog.Trigger>) => (
    <ArkDialog.Trigger className={cn("btn btn-primary", className)} {...props} />
  ),
  Backdrop: ({ className, ...props }: ComponentPropsWithoutRef<typeof ArkDialog.Backdrop>) => (
    <ArkDialog.Backdrop
      className={cn("fixed inset-0 bg-black/50 backdrop-blur-sm z-40", className)}
      {...props}
    />
  ),
  Positioner: ({ className, ...props }: ComponentPropsWithoutRef<typeof ArkDialog.Positioner>) => (
    <ArkDialog.Positioner className={cn("fixed inset-0 z-50 flex items-center justify-center", className)} {...props} />
  ),
  Content: ({ className, children, ...props }: ComponentPropsWithoutRef<typeof ArkDialog.Content>) => (
    <ArkDialog.Content className={cn("modal-box max-w-lg", className)} {...props}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {children}
      </motion.div>
    </ArkDialog.Content>
  ),
  Title: ({ className, ...props }: ComponentPropsWithoutRef<typeof ArkDialog.Title>) => (
    <ArkDialog.Title className={cn("text-2xl font-bold", className)} {...props} />
  ),
  Description: ({ className, ...props }: ComponentPropsWithoutRef<typeof ArkDialog.Description>) => (
    <ArkDialog.Description className={cn("py-4 text-base-content/70", className)} {...props} />
  ),
  CloseTrigger: ({ className, ...props }: ComponentPropsWithoutRef<typeof ArkDialog.CloseTrigger>) => (
    <ArkDialog.CloseTrigger className={cn("btn btn-sm btn-circle btn-ghost absolute right-2 top-2", className)} {...props}>
      ✕
    </ArkDialog.CloseTrigger>
  ),
  Portal,
};
