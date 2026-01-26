"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { personalInfo } from "@/data/portfolio";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Note: User needs to set up EmailJS service
      // Replace with actual EmailJS service ID, template ID, and public key
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id",
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's Connect and Discuss Opportunities">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <div>
              <p className="text-slate mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, network engineering projects, 
                or collaboration on web development and IoT solutions. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-teal/50 transition-all group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <FaEnvelope className="text-teal text-xl" />
                <div>
                  <p className="text-slate text-sm">Email</p>
                  <p className="text-slate-light">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-teal/50 transition-all group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <FaPhone className="text-teal text-xl" />
                <div>
                  <p className="text-slate text-sm">Phone</p>
                  <p className="text-slate-light">{personalInfo.phone}</p>
                </div>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-teal/50 transition-all group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <FaLinkedin className="text-teal text-xl" />
                <div>
                  <p className="text-slate text-sm">LinkedIn</p>
                  <p className="text-slate-light">Connect with me</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 glass-effect p-4 rounded-lg">
                <FaMapMarkerAlt className="text-teal text-xl" />
                <div>
                  <p className="text-slate text-sm">Location</p>
                  <p className="text-slate-light">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-slate-light mb-2 text-sm font-medium">
                Name *
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-navy-light border border-slate-dark rounded-lg text-slate-light focus:outline-none focus:border-teal transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-light mb-2 text-sm font-medium">
                Email *
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-navy-light border border-slate-dark rounded-lg text-slate-light focus:outline-none focus:border-teal transition-colors"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-slate-light mb-2 text-sm font-medium">
                Subject *
              </label>
              <input
                {...register("subject", { required: "Subject is required" })}
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-navy-light border border-slate-dark rounded-lg text-slate-light focus:outline-none focus:border-teal transition-colors"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-light mb-2 text-sm font-medium">
                Message *
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-navy-light border border-slate-dark rounded-lg text-slate-light focus:outline-none focus:border-teal transition-colors resize-none"
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3"
              >
                <HiCheckCircle />
                <span>Message sent successfully!</span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
              >
                <HiXCircle />
                <span>Failed to send message. Please try again or email directly.</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

