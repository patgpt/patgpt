"use client";

import { motion } from "motion/react";
import { Card, CardBody, CardTitle } from "@/components/atoms";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive web applications using Next.js, React, and TypeScript",
    icon: "💻",
  },
  {
    title: "AI Integration",
    description: "Implementing AI-powered features and chatbots for enhanced user experiences",
    icon: "🤖",
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful, accessible interfaces with DaisyUI and Motion animations",
    icon: "🎨",
  },
  {
    title: "Consulting",
    description: "Technical consulting and architecture design for scalable applications",
    icon: "💡",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardBody>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <p>{service.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
