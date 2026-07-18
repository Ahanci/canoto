"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-bg)]",
        containerClassName,
      )}
    >
      <motion.div
        aria-hidden
        initial="initial"
        animate={animate ? "animate" : "initial"}
        variants={variants}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `
            radial-gradient(70% 60% at 18% 15%, rgba(37, 99, 235, 0.32) 0%, transparent 60%),
            radial-gradient(60% 55% at 82% 25%, rgba(245, 158, 11, 0.28) 0%, transparent 65%),
            radial-gradient(80% 70% at 50% 95%, rgba(10, 37, 64, 0.18) 0%, transparent 60%)
          `,
          backgroundSize: "200% 200%",
        }}
        className={cn(
          "pointer-events-none absolute inset-0 z-0 will-change-[background-position]",
          className,
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
