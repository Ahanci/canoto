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
            radial-gradient(60% 50% at 20% 20%, rgba(37, 99, 235, 0.18) 0%, transparent 60%),
            radial-gradient(50% 50% at 80% 30%, rgba(245, 158, 11, 0.16) 0%, transparent 65%),
            radial-gradient(70% 60% at 50% 90%, rgba(10, 37, 64, 0.10) 0%, transparent 60%)
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
