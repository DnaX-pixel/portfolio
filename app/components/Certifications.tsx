"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { certifications } from "@/data/portfolio";
import { FaCertificate, FaAward, FaEye } from "react-icons/fa";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Industry-Recognized Credentials">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="glass-effect p-6 rounded-lg hover:border-teal/50 transition-all group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <FaCertificate className="text-teal text-3xl" />
              <span className="px-2 py-1 bg-teal/10 text-teal rounded text-xs font-semibold border border-teal/20">
                {cert.year}
              </span>
            </div>
            <h3 className="text-slate-light font-semibold mb-2 text-sm leading-tight">{cert.title}</h3>
            <p className="text-slate text-xs mb-4">{cert.organization}</p>
            {cert.pdf && (
              <motion.a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-teal/10 hover:bg-teal/20 text-teal rounded text-xs font-semibold border border-teal/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye size={14} />
                <span>View</span>
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

