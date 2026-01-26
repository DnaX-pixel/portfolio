"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { projects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Web Platforms & IoT Solutions">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-effect rounded-lg overflow-hidden group hover:border-teal/50 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Project Header */}
            <div className="p-6 border-b border-slate-dark/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-light mb-2 flex items-center gap-2">
                    <HiCode className="text-teal" />
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate text-sm mb-3">
                    <FaCalendarAlt />
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={project.demo.endsWith('.pdf') ? undefined : undefined}
                      className="flex items-center gap-2 text-slate hover:text-teal transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Click Here</span>
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
              <p className="text-slate-light font-medium mb-2">{project.description}</p>
              <p className="text-slate text-sm leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className="p-6 border-b border-slate-dark/50">
              <h4 className="text-slate-light font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-slate text-sm">
                    <span className="text-teal mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="p-6">
              <h4 className="text-slate-light font-semibold mb-3">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-teal/10 text-teal rounded-full text-xs border border-teal/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

