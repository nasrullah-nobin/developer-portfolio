"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
}
