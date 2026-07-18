"use client";

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
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-bg)]",
        containerClassName,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-0 will-change-[background-position]",
          animate ? "animate-gradient-shift" : "",
          className,
        )}
        style={{
          backgroundImage: `
            radial-gradient(70% 60% at 18% 15%, rgba(37, 99, 235, 0.32) 0%, transparent 60%),
            radial-gradient(60% 55% at 82% 25%, rgba(245, 158, 11, 0.28) 0%, transparent 65%),
            radial-gradient(80% 70% at 50% 95%, rgba(10, 37, 64, 0.18) 0%, transparent 60%)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 50%",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
