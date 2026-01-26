"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/data/portfolio";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="Field Network Engineering & Infrastructure Deployment">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-dark hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-start gap-8`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-teal rounded-full border-4 border-dark transform -translate-x-1/2 z-10" />

              {/* Content Card */}
              <div
                className={`flex-1 glass-effect p-6 md:p-8 rounded-lg ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-light mb-1 flex items-center gap-2">
                      <FaBriefcase className="text-teal" />
                      {exp.position}
                    </h3>
                    <h4 className="text-xl text-teal mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-slate">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  {exp.description.map((desc, descIndex) => (
                    <motion.li
                      key={descIndex}
                      className="flex items-start gap-3 text-slate"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + descIndex * 0.1 }}
                    >
                      <span className="text-teal mt-1.5">▹</span>
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Image Slider */}
                {exp.images && exp.images.length > 0 && (
                  <ImageSlider
                    images={exp.images}
                    alt={`${exp.position} at ${exp.company}`}
                  />
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm border border-teal/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

