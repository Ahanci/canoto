import Link from "next/link";
import { site, telLink, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon, EngineIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-line)] bg-[var(--color-bg-2)]">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 font-bold text-[var(--color-heading)]">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--color-accent)] text-white">
              <EngineIcon width={20} height={20} />
            </span>
            Can Oto Servis
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
            Ankara&apos;da bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin (ECU)
            tamiri. Hızlı, net ve güvenilir çözüm.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-heading)]">Hizmetler</h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            {site.services.map((s) => (
              <li key={s}>
                <Link href="/hizmetler" className="hover:text-[var(--color-heading)]">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-heading)]">Site</h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            <li><Link href="/markalar" className="hover:text-[var(--color-heading)]">Markalar</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--color-heading)]">Blog</Link></li>
            <li><Link href="/iletisim" className="hover:text-[var(--color-heading)]">İletişim</Link></li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-heading)]">
                Google Maps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-heading)]">İletişim</h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
            <li className="flex items-center gap-2">
              <PhoneIcon width={18} height={18} className="text-[var(--color-cta)]" />
              <a href={telLink()} className="hover:text-[var(--color-heading)]">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <WhatsAppIcon width={18} height={18} className="text-[#25D366]" />
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-heading)]">
                WhatsApp ile yaz
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon width={18} height={18} className="text-[var(--color-accent)]" />
              <span>{site.city}, Türkiye</span>
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon width={18} height={18} className="text-[var(--color-accent)]" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          <p>Ankara · Oto Mekanik & Elektrik · Bilgisayarlı Arıza Tespiti</p>
        </div>
      </div>
    </footer>
  );
}
