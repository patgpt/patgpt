"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input } from "@/components/atoms";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <p className="mb-8 text-base-content/70">
          Have a question or want to work together? Send me a message!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <Input
              {...register("name")}
              variant={errors.name ? "error" : "bordered"}
              placeholder="Your name"
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.name.message}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <Input
              {...register("email")}
              type="email"
              variant={errors.email ? "error" : "bordered"}
              placeholder="your@email.com"
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.email.message}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              {...register("message")}
              className={`textarea textarea-bordered h-32 ${errors.message ? "textarea-error" : ""}`}
              placeholder="Your message..."
            />
            {errors.message && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.message.message}</span>
              </label>
            )}
          </div>

          {submitStatus === "success" && (
            <div className="alert alert-success">
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="alert alert-error">
              <span>Failed to send message. Please try again later.</span>
            </div>
          )}

          <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} block>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
