"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BentoCard } from "@/components/bento-grid";
import { MagneticButton } from "@/components/magnetic-button";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nobin01636817986@gmail.com",
    href: "mailto:nobin01636817986@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pirojpur, Barishal, Bangladesh",
    href: null,
  },
  {
    label: "Availability",
    value: "Open for freelance & collaboration",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/nasrullah-nobin",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nabin-hossen/",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://web.facebook.com/profile.php?id=61581531930488",
    label: "Facebook",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitted(true);

      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-150 w-150 rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 h-100 w-100 rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Contact
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Let&apos;s Build Something Great
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
              Whether it&apos;s a modern web application, freelance project,
              startup idea, or collaboration — feel free to reach out.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">
            <ScrollReveal direction="left">
              <BentoCard
                glowColor="from-blue-500/20 via-cyan-500/20 to-teal-500/20"
                className="space-y-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    Contact Information
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    Building modern digital experiences while managing
                    entrepreneurial and educational initiatives.
                  </p>
                </div>

                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        {item.icon ? (
                          <item.icon className="h-5 w-5 text-cyan-400" />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm text-white/40">
                          {item.label}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white transition-colors hover:text-cyan-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social */}
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-4 text-sm text-white/40">
                    Connect With Me
                  </p>

                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white"
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </ScrollReveal>

            {/* Status Card */}
            <ScrollReveal direction="left" delay={0.1}>
              <BentoCard
                glowColor="from-emerald-500/20 to-teal-500/20"
                className="text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>

                  Available for Projects
                </div>

                <p className="leading-relaxed text-white/60">
                  Open to freelance work, collaborations, startup ideas, and
                  impactful digital products.
                </p>
              </BentoCard>
            </ScrollReveal>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <BentoCard
                glowColor="from-cyan-500/20 via-blue-500/20 to-teal-500/20"
                className="p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                {submitted ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="py-14 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
                      <Send className="h-9 w-9 text-emerald-400" />
                    </div>

                    <h3 className="mb-3 text-3xl font-semibold text-white">
                      Message Sent
                    </h3>

                    <p className="mb-6 text-white/60">
                      Thanks for reaching out. I&apos;ll respond as soon as
                      possible.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                        {error}
                      </div>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                          Name
                        </label>

                        <input
                          type="text"
                          required
                          minLength={2}
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              name: e.target.value,
                            })
                          }
                          placeholder="Your Name"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20 focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                          Email
                        </label>

                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                          placeholder="you@example.com"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20 focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white">
                        Message
                      </label>

                      <textarea
                        rows={6}
                        required
                        minLength={20}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        placeholder="Tell me about your project..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20 focus:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                      />
                    </div>

                    {/* Submit Button */}
                    <MagneticButton
                      type="submit"
                      className="w-full justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                          />

                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </MagneticButton>
                  </form>
                )}
              </BentoCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}