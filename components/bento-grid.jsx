"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BentoCard({
  children,
  className,
  glowColor = "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-6",
        "hover:border-border hover:bg-card/80 transition-all duration-500",
        className
      )}
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute -inset-px rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
          glowColor
        )}
      />
      <div className="absolute inset-0 rounded-3xl bg-card/90" />
      
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={cn("absolute inset-0 rounded-3xl bg-gradient-to-r p-px", glowColor)}>
          <div className="h-full w-full rounded-3xl bg-card" />
        </div>
      </div>
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function BentoGrid({ children, className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}
