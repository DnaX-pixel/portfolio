"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { personalInfo } from "@/data/portfolio";
import { FaNetworkWired, FaCode, FaServer, FaTools } from "react-icons/fa";

const highlights = [
  {
    icon: FaNetworkWired,
    title: "Field Network Engineering",
    description: "Experience in live carrier-grade environments, site surveys, and network deployments across Sabah & Sarawak.",
  },
  {
    icon: FaCode,
    title: "Web Development",
    description: "Building web platforms with PHP, MySQL, HTML, CSS, and JavaScript.",
  },
  {
    icon: FaServer,
    title: "Infrastructure & Systems",
    description: "Expertise in server rack installation, fiber optic patching, and network equipment configuration.",
  },
  {
    icon: FaTools,
    title: "IoT & Embedded Systems",
    description: "Developing smart solutions with ESP32, sensors, and real-time monitoring dashboards.",
  },
];

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Bridging Network Infrastructure and Software Development">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 text-slate leading-relaxed">
            <p>{personalInfo.about}</p>
            <p>
              What sets me apart is my unique combination of{" "}
              <span className="text-teal font-semibold">field-oriented network engineering</span> and{" "}
              <span className="text-teal font-semibold">web development</span> expertise. 
              I&apos;ve worked hands-on with carrier-grade network equipment in live environments, conducting 
              site surveys and deploying infrastructure across Sabah and Sarawak for Telekom Malaysia.
            </p>
            <p>
              Simultaneously, I&apos;ve developed web platforms like FreelanceForGood and IoT solutions 
              such as the Smart Charity Rack, demonstrating my ability to bridge the gap between 
              network infrastructure and software development.
            </p>
            <p>
              My approach combines the reliability and attention to detail required in network 
              engineering with the creativity and problem-solving skills of software development, 
              making me uniquely positioned to work on projects that span both domains.
            </p>
          </div>
        </motion.div>

        {/* Right: Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-lg hover:border-teal/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="text-teal text-3xl mb-4" />
                <h3 className="text-slate-light font-semibold mb-2">{highlight.title}</h3>
                <p className="text-slate text-sm">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

