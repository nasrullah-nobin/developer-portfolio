"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/nasrullah-nobin",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nabin-hossen/?skipRedirect=true",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main glow */}
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        {/* Secondary glows */}
        <div className="absolute left-0 top-1/3 h-87.5 w-87.5 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-purple-500/10 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[80px_80px]" />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-black/40 mask-[radial-gradient(circle_at_center,transparent_10%,black_90%)]" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-between gap-20 px-6 lg:flex-row lg:px-8">
        {/* LEFT CONTENT */}
        <div className="max-w-3xl text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm text-white/70">
              Available for freelance & full-stack projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building modern
            <br />

            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              web experiences
            </span>

            <br />
            that feel alive.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            Hi, I&apos;m Nobin — a full-stack developer focused on
            crafting scalable applications with clean architecture,
            smooth interactions, and premium user experiences.
          </motion.p>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {techStack.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl"
              >
                {tech}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/60 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative"
        >
          {/* Floating card */}
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl">
            {/* Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/developer.png"
                alt="Nobin"
                width={420}
                height={520}
                className="h-125 w-100 object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-6 top-10 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl"
            >
              <p className="text-sm text-white/50">
                Experience
              </p>

              <h4 className="text-xl font-bold text-white">
                2+ Years
              </h4>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-6 right-4 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl"
            >
              <p className="text-sm text-white/50">
                Projects
              </p>

              <h4 className="text-xl font-bold text-white">
                20+
              </h4>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white"
      >
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}