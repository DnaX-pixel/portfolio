"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding" style={{ paddingTop: '80px' }}>
      {/* Animated Network Background */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64ffda" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#64ffda" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Network Nodes */}
          {[
            { x: 200, y: 150 },
            { x: 400, y: 200 },
            { x: 600, y: 100 },
            { x: 800, y: 250 },
            { x: 1000, y: 180 },
            { x: 300, y: 400 },
            { x: 500, y: 450 },
            { x: 700, y: 350 },
            { x: 900, y: 500 },
            { x: 1100, y: 400 },
            { x: 250, y: 600 },
            { x: 450, y: 650 },
            { x: 650, y: 550 },
            { x: 850, y: 700 },
            { x: 1050, y: 600 },
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#64ffda"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
          
          {/* Network Connections */}
          {[
            [0, 1], [1, 2], [2, 3], [3, 4],
            [5, 6], [6, 7], [7, 8], [8, 9],
            [10, 11], [11, 12], [12, 13], [13, 14],
            [0, 5], [2, 7], [4, 9], [5, 10], [7, 12], [9, 14],
          ].map(([start, end], i) => {
            const nodes = [
              { x: 200, y: 150 },
              { x: 400, y: 200 },
              { x: 600, y: 100 },
              { x: 800, y: 250 },
              { x: 1000, y: 180 },
              { x: 300, y: 400 },
              { x: 500, y: 450 },
              { x: 700, y: 350 },
              { x: 900, y: 500 },
              { x: 1100, y: 400 },
              { x: 250, y: 600 },
              { x: 450, y: 650 },
              { x: 650, y: 550 },
              { x: 850, y: 700 },
              { x: 1050, y: 600 },
            ];
            return (
              <motion.line
                key={i}
                x1={nodes[start].x}
                y1={nodes[start].y}
                x2={nodes[end].x}
                y2={nodes[end].y}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ delay: i * 0.05, duration: 1 }}
              />
            );
          })}
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background Image - Above Profile Picture */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto mb-8 h-64 md:h-80 rounded-2xl overflow-hidden opacity-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/background.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={75}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/60" />
          </motion.div>

          {/* Profile Picture - Below Background Image */}
          <motion.div
            className="flex justify-center -mt-24 md:-mt-32 mb-8 relative z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-teal/30 overflow-hidden shadow-2xl bg-navy-light">
              <Image
                src="/images/profile.png"
                alt="Muhammad Daniel Rosley"
                fill
                className="object-cover"
                priority
                quality={90}
                onError={(e) => {
                  // Try .jpg if .png doesn't exist
                  const img = e.currentTarget as HTMLImageElement;
                  if (img.src.includes('.png')) {
                    img.src = '/images/profile.jpg';
                    return;
                  }
                  // Show placeholder if both don't exist
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-navy-light flex items-center justify-center text-teal text-4xl font-bold">MDR</div>';
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - Below Profile Picture */}
          <div className="space-y-6">
            {/* Greeting */}
            <motion.p
              className="text-teal font-mono text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hi, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <span className="text-slate-light">{personalInfo.name.split(" ")[0]}</span>{" "}
              <span className="gradient-text">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {personalInfo.tagline}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-slate text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Field-oriented Network Engineer specializing in network deployment, fiber optic systems, 
              and high-speed Ethernet commissioning. Building scalable web platforms and IoT solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-teal text-navy font-semibold rounded hover:bg-teal-dark transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-teal text-teal font-semibold rounded hover:bg-teal/10 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-slate hover:text-teal transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope size={24} />
              </motion.a>
              <motion.a
                href={`tel:${personalInfo.phone}`}
                className="text-slate hover:text-teal transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm">{personalInfo.phone}</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <HiArrowDown className="text-teal text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
