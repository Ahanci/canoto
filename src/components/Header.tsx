"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, telLink, waLink } from "@/lib/site";
import { PhoneIcon, MenuIcon, CloseIcon, EngineIcon, WhatsAppIcon } from "@/components/icons";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/markalar", label: "Markalar" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
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
            <a href={telLink()} className="btn btn-accent hidden whitespace-nowrap lg:inline-flex" aria-label={`Telefon ile ara: ${site.phoneDisplay}`}>
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
              {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu (mobile) */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[rgba(10,37,64,0.98)] text-white backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="container-x flex h-16 items-center justify-between border-b border-white/10">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 font-bold text-white"
            aria-label="Can Oto Servis ana sayfa"
            tabIndex={open ? 0 : -1}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent)] text-white">
              <EngineIcon width={20} height={20} />
            </span>
            <span className="leading-tight">
              Can Oto
              <span className="block text-[11px] font-medium text-white/70">
                Mekanik & Elektrik Servisi
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menüyü kapat"
            tabIndex={open ? 0 : -1}
            className="grid h-10 w-10 place-items-center rounded-lg text-white hover:bg-white/10"
          >
            <CloseIcon width={26} height={26} />
          </button>
        </div>

        <nav className="container-x flex-1 overflow-y-auto py-10" aria-label="Mobil menü">
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block rounded-xl px-4 py-4 text-2xl font-bold text-white transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="container-x space-y-3 border-t border-white/10 py-6">
          <a
            href={telLink()}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="btn btn-accent w-full"
          >
            <PhoneIcon width={18} height={18} />
            Hemen Ara
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="btn btn-whatsapp w-full"
          >
            <WhatsAppIcon width={18} height={18} />
            WhatsApp ile Yaz
          </a>
        </div>
      </div>
    </>
  );
}
