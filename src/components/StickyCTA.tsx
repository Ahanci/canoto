"use client";

import { useEffect, useState } from "react";
import { site, telLink, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-sticky-hero]");
    const footer = document.querySelector("footer");
    if (!hero || !footer) return;

    const heroObs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" },
    );
    const footerObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0.05 },
    );
    heroObs.observe(hero);
    footerObs.observe(footer);
    return () => {
      heroObs.disconnect();
      footerObs.disconnect();
    };
  }, []);

  return (
    <aside
      aria-label="Hızlı iletişim"
      aria-hidden={!visible}
      className={`fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={telLink()}
        tabIndex={visible ? 0 : -1}
        aria-label={`Hızlı telefon — ${site.phoneDisplay}`}
        className="group flex items-center gap-2 rounded-full bg-[var(--color-accent)] py-3 pl-3.5 pr-4 font-semibold text-white shadow-[0_14px_30px_-10px_rgba(37,99,235,0.7)] transition hover:scale-[1.03] hover:bg-[var(--color-accent-600)]"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
          <PhoneIcon width={20} height={20} />
        </span>
        <span className="hidden text-sm sm:inline">Hemen Ara</span>
      </a>

      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        aria-label="Hızlı WhatsApp mesajı gönder"
        className="btn-whatsapp group flex items-center gap-2 rounded-full py-3 pl-3.5 pr-4 font-semibold transition hover:scale-[1.03]"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/25">
          <WhatsAppIcon width={20} height={20} />
        </span>
        <span className="hidden text-sm sm:inline">WhatsApp</span>
      </a>
    </aside>
  );
}
