"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

const featuredProject = {
  title: "SkillSphere Platform",
  description:
    "A modern full-stack learning management platform designed for interactive online education. Built with scalable architecture, responsive dashboards, authentication systems, and polished user experience.",
  image: "/projects/skillsphere.png",
  tags: [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind",
  ],
  github:
    "https://github.com/nasrullah-nobin/skillsphere-platform",
  live:
    "https://skillsphere-platform-8vzmujt4q-nasrullahbd82-6827s-projects.vercel.app/",
};

const projects = [
  {
    title: "Keen Keeper",
    description:
      "A modern productivity-focused web application with clean UI systems and responsive frontend experiences.",
    image: "/projects/keen-keeper.png",
    tags: [
      "React",
      "Tailwind",
      "Firebase",
    ],
    github:
      "https://github.com/nasrullah-nobin/Keen-Keeper-web",
    live: "https://keen-keeper-smoky.vercel.app/",
  },

  {
    title: "English Janala",
    description:
      "An interactive vocabulary learning application focused on improving English learning through engaging UI and smooth interactions.",
    image: "/projects/English.png",
    tags: [
      "JavaScript",
      "API",
      "CSS",
    ],
    github:
      "https://github.com/nasrullah-nobin/english-janala-vocabulary-app",
    live:
      "https://nasrullah-nobin.github.io/english-janala-vocabulary-app/",
  },

  {
    title: "Book Vibe",
    description:
      "A responsive book discovery platform with modern layouts and intuitive reading-focused experience.",
    image: "/projects/Books.png",
    tags: [
      "React",
      "Tailwind",
      "Routing",
    ],
    github:
      "https://github.com/nasrullah-nobin/book-vibe-web",
    live: "https://book-vibe-nobin.netlify.app/",
  },

  {
    title: "GitHub Issues Tracker",
    description:
      "A clean issue tracking interface for monitoring repositories and managing GitHub workflows.",
    image: "/projects/Issues.png",
    tags: [
      "GitHub API",
      "JavaScript",
      "REST API",
    ],
    github:
      "https://github.com/nasrullah-nobin/GitHub-Issues-Tracker",
    live:
      "https://nasrullah-nobin.github.io/GitHub-Issues-Tracker/",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden scroll-mt-32 py-28 md:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-emerald-400" />

            <span className="text-sm text-white/70">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projects focused on
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              modern product experiences
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            A collection of full-stack applications and
            frontend experiences built with modern
            technologies, scalable architecture, and polished
            UI systems.
          </p>
        </div>

        {/* Featured Project */}
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
          }}
          className="group relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                Featured Project
              </div>

              <h3 className="mt-6 text-4xl font-bold text-white">
                {featuredProject.title}
              </h3>

              <p className="mt-6 text-base leading-relaxed text-white/60">
                {featuredProject.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02]"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  GitHub
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                width={1200}
                height={700}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative p-7">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <p className="mt-5 text-base leading-relaxed text-white/60">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 text-center">
          <motion.a
            href="https://github.com/nasrullah-nobin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
            Explore More Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
}