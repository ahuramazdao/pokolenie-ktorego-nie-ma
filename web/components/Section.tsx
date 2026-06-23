"use client";

import { motion } from "motion/react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 lg:py-32 ${className}`}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
}
