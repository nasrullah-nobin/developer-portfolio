"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Sparkles,
  Terminal,
  Rocket,
  Globe,
} from "lucide-react";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

const highlights = [
  {
    icon: Rocket,
    title: "Performance Focused",
    description:
      "Fast, scalable, and optimized web experiences.",
  },
  {
    icon: Layers3,
    title: "Clean Architecture",
    description:
      "Maintainable structure with modern best practices.",
    },
  {
    icon: Sparkles,
    title: "Premium UI/UX",
    description:
      "Interfaces that feel smooth, polished, and intuitive.",
  },
];

const stats = [
  {
    value: "20+",
    label: "Projects Built",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Attention to Detail",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-32 py-28 md:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-75 w-75 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="absolute right-0 top-0 h-100 w-100 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
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
              duration: 0.7,
            }}
          >
            {/* Section label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Globe className="h-4 w-4 text-cyan-400" />

              <span className="text-sm text-white/70">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building modern products with
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                clean code
              </span>{" "}
              & thoughtful design.
            </h2>

            {/* Main description */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              I’m Nobin — a full-stack developer focused on
              creating scalable applications with modern
              technologies and polished user experiences.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50">
              My approach combines clean architecture,
              performance optimization, and intuitive design
              to build products that not only work reliably —
              but also feel smooth and engaging to use.
            </p>

            {/* Tech stack */}
            <div className="mt-10 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-12 space-y-5">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    x: 4,
                  }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl">
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

              {/* Terminal header */}
              <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="flex items-center gap-2 text-sm text-white/40">
                  <Terminal className="h-4 w-4" />
                  developer.tsx
                </div>
              </div>

              {/* Code block */}
              <div className="relative mt-6 space-y-4 font-mono text-sm">
                <div>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-cyan-400">
                    developer
                  </span>{" "}
                  = {"{"}
                </div>

                <div className="pl-5 text-white/70">
                  name:{" "}
                  <span className="text-emerald-400">
                    "Nobin"
                  </span>
                  ,
                </div>

                <div className="pl-5 text-white/70">
                  role:{" "}
                  <span className="text-emerald-400">
                    "Full Stack Developer"
                  </span>
                  ,
                </div>

                <div className="pl-5 text-white/70">
                  stack: [
                  <span className="text-emerald-400">
                    "React", "Next.js", "Node.js"
                  </span>
                  ],
                </div>

                <div className="pl-5 text-white/70">
                  focus:{" "}
                  <span className="text-emerald-400">
                    "Performance & UI/UX"
                  </span>
                  ,
                </div>

                <div className="text-white/70">{"}"}</div>
              </div>

              {/* Floating mini card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-3 top-25 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl"
              >
                <Code2 className="h-6 w-6 text-cyan-400" />

                <h4 className="mt-3 text-2xl font-bold text-white">
                  Clean
                </h4>

                <p className="text-sm text-white/50">
                  modern architecture
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>

                  <p className="mt-2 text-sm text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}