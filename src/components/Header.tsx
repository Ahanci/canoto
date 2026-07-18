"use client";

import Link from "next/link";
import { useState } from "react";
import { site, telLink } from "@/lib/site";
import { PhoneIcon, MenuIcon, EngineIcon } from "@/components/icons";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/markalar", label: "Markalar" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(255,255,255,0.85)] backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-[var(--color-heading)]" aria-label="Can Oto Servis ana sayfa">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent)] text-white">
            <EngineIcon width={20} height={20} />
          </span>
          <span className="leading-tight">
            Can Oto
            <span className="block text-[11px] font-medium text-[var(--color-muted)]">
              Mekanik & Elektrik Servisi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-bg-2)] hover:text-[var(--color-heading)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telLink()} className="btn btn-cta hidden whitespace-nowrap lg:inline-flex" aria-label={`Telefon ile ara: ${site.phoneDisplay}`}>
            <PhoneIcon width={18} height={18} />
            <span className="text-sm">Hemen Ara</span>
          </a>
          <button
            type="button"
            className="btn btn-ghost p-2.5 md:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon width={22} height={22} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--color-line)] bg-[var(--color-surface)] md:hidden" aria-label="Mobil menü">
          <div className="container-x flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-[var(--color-text)] hover:bg-[var(--color-bg-2)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
