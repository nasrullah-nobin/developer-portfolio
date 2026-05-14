"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  href,
  onClick,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const Component = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full transition-all duration-300",
          "bg-primary text-primary-foreground",
          "hover:scale-105 active:scale-95",
          "shadow-[0_0_0_3px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 opacity-0 hover:opacity-100 blur-xl transition-opacity" />
      </Component>
    </motion.div>
  );
}
