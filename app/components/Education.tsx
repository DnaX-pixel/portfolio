"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "@/data/portfolio";
import { FaGraduationCap, FaTrophy, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic Excellence & Continuous Learning">
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="glass-effect p-6 md:p-8 rounded-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-teal text-2xl" />
                  <h3 className="text-2xl font-bold text-slate-light">{edu.degree}</h3>
                </div>
                <h4 className="text-xl text-teal mb-3">{edu.institution}</h4>
                <div className="flex flex-wrap items-center gap-4 text-slate text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{edu.period}</span>
                  </div>
                  {edu.location && (
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <span>{edu.location}</span>
                    </div>
                  )}
                  {edu.cgpa && (
                    <div className="px-3 py-1 bg-teal/10 text-teal rounded-full border border-teal/20 font-semibold">
                      CGPA: {edu.cgpa}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-dark/50">
                <div className="flex items-center gap-2 mb-4">
                  <FaTrophy className="text-teal" />
                  <h4 className="text-slate-light font-semibold">Achievements & Highlights</h4>
                </div>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      className="flex items-start gap-3 text-slate"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                    >
                      <span className="text-teal mt-1.5">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

