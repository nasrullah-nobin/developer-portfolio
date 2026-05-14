"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] transition-all duration-500",
          scrolled ? "max-w-3xl" : "max-w-5xl"
        )}
      >
        <nav
          aria-label="Main Navigation"
          className={cn(
            "group relative flex items-center justify-between rounded-2xl border border-white/10 transition-all duration-500",
            "bg-white/5 backdrop-blur-2xl",
            "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
            scrolled
              ? "px-5 py-3"
              : "px-7 py-4"
          )}
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          {/* Logo */}
          <a
            href="#"
            className="relative z-10 flex items-center gap-2"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />

            <span className="bg-linear-to-r from-white via-white to-white/70 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
              Nobin
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative"
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    className={cn(
                      "relative z-10 flex items-center px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {item.name}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute inset-0 rounded-xl border border-white/10 bg-white/10"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={cn(
              "hidden md:flex items-center rounded-xl px-5 py-2.5 text-sm font-medium",
              "bg-white text-black",
              "transition-all duration-300",
              "hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            )}
          >
            Let&apos;s Talk
          </motion.a>

          {/* Mobile Button */}
          <button
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 8 : 0,
                }}
                className="h-0.5 w-6 origin-center rounded-full bg-white"
              />

              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                className="h-0.5 w-6 rounded-full bg-white"
              />

              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -8 : 0,
                }}
                className="h-0.5 w-6 origin-center rounded-full bg-white"
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-x-4 top-24 z-50 md:hidden"
          >
            <div
              className={cn(
                "overflow-hidden rounded-3xl border border-white/10",
                "bg-neutral-950/90 backdrop-blur-2xl",
                "shadow-2xl"
              )}
            >
              <div className="flex flex-col p-3">
                {navItems.map((item, index) => {
                  const isActive =
                    activeSection ===
                    item.href.replace("#", "");

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      className={cn(
                        "rounded-2xl px-4 py-3 text-base font-medium transition-all",
                        isActive
                          ? "bg-white text-black"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}

                <motion.a
                  href="#contact"
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: navItems.length * 0.05,
                  }}
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="mt-3 rounded-2xl bg-white px-4 py-3 text-center text-base font-semibold text-black"
                >
                  Let&apos;s Talk
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}