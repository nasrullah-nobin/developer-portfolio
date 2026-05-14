"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { BentoCard } from "@/components/bento-grid";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    title: "Independent MERN Stack Developer",
    company: "Self Learning & Personal Projects",
    period: "2024 - Present",
    description:
      "Focused on building modern full-stack web applications using the MERN stack while continuously improving frontend design, backend architecture, and user experience skills.",
    achievements: [
      "Built multiple full-stack projects",
      "Developed responsive UI systems",
      "Worked with REST APIs and databases",
    ],
  },

  {
    title: "Founder & Instructor",
    company: "Darul Bayan",
    period: "2023 - Present",
    description:
      "Managing an online Islamic educational platform focused on Quran, Arabic, and foundational Islamic learning through online classes and structured teaching.",
    achievements: [
      "Conducted online classes",
      "Built educational presence online",
      "Managed student communication",
    ],
  },

  {
    title: "Farm & Business Operations",
    company: "Nobin Agro",
    period: "2022 - Present",
    description:
      "Involved in planning and managing agricultural and livestock initiatives focused on long-term sustainable farming and entrepreneurship.",
    achievements: [
      "Managed operational planning",
      "Developed long-term growth vision",
      "Worked on branding and digital presence",
    ],
  },
];

const education = [
  {
    title: "Dawra-e-Hadith",
    institution: "Qawmi Madrasa Education",
    period: "Completed",
    description:
      "Completed advanced Islamic studies with specialization in Hadith, Arabic, Fiqh, and classical Islamic sciences.",
  },

  {
    title: "SSC 2024",
    institution: "Secondary School Education",
    period: "2024",
    description:
      "Completed secondary school education alongside continuous self-learning in technology and web development.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-orange-400" />

              <span className="text-sm text-white/70">
                Journey & Background
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              My learning journey,
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}
                experience & growth
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              A journey shaped by self-learning,
              independent building, Islamic education,
              and entrepreneurial experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Experience */}
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/10 p-3">
                <Briefcase className="h-5 w-5 text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ScrollReveal
                  key={exp.title}
                  delay={index * 0.1}
                >
                  <BentoCard className="relative overflow-hidden border border-white/10 bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

                    <div className="relative">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-white">
                            {exp.title}
                          </h4>

                          <p className="mt-1 text-blue-400">
                            {exp.company}
                          </p>
                        </div>

                        <span className="text-sm text-white/40">
                          {exp.period}
                        </span>
                      </div>

                      <p className="mt-5 leading-relaxed text-white/60">
                        {exp.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {exp.achievements.map(
                          (achievement) => (
                            <div
                              key={achievement}
                              className="flex items-center gap-3 text-sm text-white/60"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                              {achievement}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </BentoCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/10 p-3">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <ScrollReveal
                  key={edu.title}
                  delay={0.1 * index}
                >
                  <BentoCard className="border border-white/10 bg-white/5">
                    <h4 className="text-lg font-semibold text-white">
                      {edu.title}
                    </h4>

                    <p className="mt-2 text-sm text-emerald-400">
                      {edu.institution}
                    </p>

                    <p className="mt-1 text-sm text-white/40">
                      {edu.period}
                    </p>

                    <p className="mt-4 leading-relaxed text-white/60">
                      {edu.description}
                    </p>
                  </BentoCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}