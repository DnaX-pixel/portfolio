"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skills } from "@/data/portfolio";
// Using only verified icons from react-icons/fa
import { FaServer, FaCode, FaCog, FaDatabase, FaCircle } from "react-icons/fa";

const categoryConfig = {
  networking: {
    title: "Networking & Infrastructure",
    icon: FaServer,
    color: "from-teal to-teal-dark",
    description: "Core expertise in network deployment, configuration, and troubleshooting",
  },
  systems: {
    title: "Systems & Tools",
    icon: FaServer,
    color: "from-blue-400 to-blue-600",
    description: "Network equipment, monitoring tools, and operating systems",
  },
  web: {
    title: "Web Development",
    icon: FaCode,
    color: "from-purple-400 to-purple-600",
    description: "Full-stack web development and database management",
  },
  iot: {
    title: "IoT & Embedded Systems",
    icon: FaCog,
    color: "from-orange-400 to-orange-600",
    description: "Embedded systems, sensors, and IoT integration",
  },
};

// Simplified icon getter - always returns valid icon
const getSkillIcon = () => {
  return FaCircle;
};

export default function Skills() {
  const categorizedSkills = {
    networking: skills.filter((s) => s.category === "networking"),
    systems: skills.filter((s) => s.category === "systems"),
    web: skills.filter((s) => s.category === "web"),
    iot: skills.filter((s) => s.category === "iot"),
  };

  return (
    <Section id="skills" title="Skills & Expertise" subtitle="Technical Proficiency Across Multiple Domains">
      <div className="space-y-12">
        {Object.entries(categorizedSkills).map(([category, categorySkills], categoryIndex) => {
          const config = categoryConfig[category as keyof typeof categoryConfig];
          
          if (!config || !config.icon) {
            return null;
          }
          
          const Icon = config.icon;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`text-3xl bg-gradient-to-r ${config.color} bg-clip-text text-transparent`} />
                  <h3 className="text-2xl font-bold text-slate-light">{config.title}</h3>
                </div>
                <p className="text-slate text-sm ml-11">{config.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categorySkills.map((skill, skillIndex) => {
                  const SkillIcon = getSkillIcon();

                  return (
                    <motion.div
                      key={skillIndex}
                      className="glass-effect p-4 rounded-lg text-center group hover:border-teal/50 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.15 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <SkillIcon className="text-teal text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-slate-light text-xs font-medium leading-tight">{skill.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
