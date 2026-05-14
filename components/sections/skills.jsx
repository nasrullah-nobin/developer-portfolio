"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers3,
  Palette,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Modern Frontend",
    description:
      "Responsive, animation-rich interfaces built with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Scalable APIs, authentication systems, and clean backend architecture using Node.js & Express.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Efficient schema design, optimized queries, and production-ready database structures.",
  },
  {
    icon: Palette,
    title: "UI / UX Focus",
    description:
      "Interfaces designed to feel intuitive, smooth, and visually polished.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "Framer Motion",
  "PostgreSQL",
  "Firebase",
];

const specialties = [
  "Scalable full-stack applications",
  "Modern responsive UI",
  "REST API architecture",
  "Authentication systems",
  "Performance optimization",
  "Interactive user experiences",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden scroll-mt-32 py-28 md:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm text-white/70">
              Skills & Capabilities
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tools, technologies &
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              systems
            </span>{" "}
            I use to build modern products.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            My workflow focuses on building scalable,
            high-performance applications with polished user
            experiences and clean architecture.
          </p>
        </motion.div>

        {/* Featured Expertise Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                <Rocket className="h-4 w-4" />
                Core Expertise
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Full-stack development with a strong focus on
                performance & modern UI.
              </h3>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
                I specialize in creating responsive web
                applications that combine scalable backend
                systems with smooth, interactive frontend
                experiences.
              </p>

              {/* Tech pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-2">
              {specialties.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-xl bg-cyan-500/10 p-2">
                      <Code2 className="h-4 w-4 text-cyan-400" />
                    </div>

                    <p className="text-sm leading-relaxed text-white/70">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Capability Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-blue-500/10" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Mini Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 text-center backdrop-blur-2xl"
        >
          <div className="mx-auto max-w-3xl">
            <Layers3 className="mx-auto h-10 w-10 text-cyan-400" />

            <h3 className="mt-6 text-3xl font-bold text-white">
              Clean systems. Smooth experiences.
            </h3>

            <p className="mt-4 text-base leading-relaxed text-white/60">
              Beyond writing code, I focus on building products
              that are scalable, maintainable, and enjoyable to
              use — with strong attention to performance,
              structure, and design quality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}