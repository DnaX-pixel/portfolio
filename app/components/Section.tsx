"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-slate-light">{title.split(" ")[0]}</span>{" "}
                <span className="gradient-text">{title.split(" ").slice(1).join(" ")}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-slate text-lg max-w-2xl mx-auto">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

