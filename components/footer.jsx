"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  Heart,
  ArrowUpRight,
} from "lucide-react";

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
    href: "https://facebook.com",
    label: "Facebook",
  },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-14">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute top-0 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)]" />

              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                Nobin
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              MERN Stack Developer focused on crafting modern,
              scalable, and user-focused digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-4 md:justify-end">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="flex items-center gap-2 text-sm text-white/40">
            © {currentYear} Nobin Hossen Anam. Built with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            using Next.js & Tailwind CSS.
          </p>

          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}