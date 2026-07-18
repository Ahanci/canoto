import type { Metadata } from "next";
import { site, telLink, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "İletişim — Ankara Oto Mekanik & Elektrik Servisi",
  description:
    "Can Oto Mekanik & Elektrik Özel Servisi ile iletişime geçin. Ankara'da bilgisayarlı arıza tespiti için telefon, WhatsApp ve konum bilgileri.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <section className="container-x py-14 md:py-20">
      <span className="chip">İletişim</span>
      <h1 className="mt-5 text-balance text-4xl font-extrabold text-[var(--color-heading)] md:text-5xl">
        Bize Ulaşın
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
        Aracınızda bir arıza mı var? Ankara&apos;da aynı gün bilgisayarlı arıza tespiti için bizi
        arayın ya da WhatsApp&apos;tan yazın.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="grid gap-4">
          <a href={telLink()} className="card card-hover flex items-center gap-4 p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
              <PhoneIcon width={24} height={24} />
            </span>
            <span>
              <span className="block text-sm text-[var(--color-muted)]">Telefon</span>
              <span className="text-lg font-bold text-[var(--color-heading)]">{site.phoneDisplay}</span>
            </span>
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-4 p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366]/15 text-[#1ebe57]">
              <WhatsAppIcon width={24} height={24} />
            </span>
            <span>
              <span className="block text-sm text-[var(--color-muted)]">WhatsApp</span>
              <span className="text-lg font-bold text-[var(--color-heading)]">Mesaj gönder</span>
            </span>
          </a>
          <div className="card flex items-center gap-4 p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
              <MapPinIcon width={24} height={24} />
            </span>
            <span>
              <span className="block text-sm text-[var(--color-muted)]">Adres</span>
              <span className="text-base font-bold text-[var(--color-heading)]">{site.addressLine}</span>
            </span>
          </div>
          <div className="card flex items-center gap-4 p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
              <ClockIcon width={24} height={24} />
            </span>
            <span>
              <span className="block text-sm text-[var(--color-muted)]">Çalışma Saatleri</span>
              <span className="text-lg font-bold text-[var(--color-heading)]">{site.hours}</span>
            </span>
          </div>
        </div>

        <div className="card overflow-hidden">
          <iframe
            title={`Can Oto Servis konum haritası — ${site.addressLine}`}
            src={site.mapsEmbedSrc}
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-8">
        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <MapPinIcon width={18} height={18} /> Google Maps&apos;te Görüntüle
        </a>
      </div>
    </section>
  );
}
