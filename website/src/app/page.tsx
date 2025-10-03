"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/atoms";

export default function HomePage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Welcome to PatGPT
          </motion.h1>
          <motion.p
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Explore my portfolio, read my blog, and chat with my AI assistant.
            Discover my experience, projects, and insights in technology.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/about">
              <Button variant="primary" size="lg">
                About Me
              </Button>
            </Link>
            <Link href="/chat">
              <Button variant="secondary" size="lg">
                Chat with AI
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
