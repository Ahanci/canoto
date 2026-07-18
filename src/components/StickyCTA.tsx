import { site, telLink, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function StickyCTA() {
  return (
    <aside
      aria-label="Hızlı iletişim"
      className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3"
    >
      <a
        href={telLink()}
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
