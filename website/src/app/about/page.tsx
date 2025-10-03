"use client";

import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose lg:prose-xl max-w-none">
          <p className="text-lg mb-4">
            Welcome! I'm a passionate developer with expertise in modern web technologies,
            AI integration, and creating exceptional user experiences.
          </p>
          <p className="text-lg mb-4">
            This site showcases my work, thoughts, and provides an AI-powered chat assistant
            to help you learn more about my experience and projects.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
