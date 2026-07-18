import { site, telLink, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function CTASection({
  title = "Aracınızda Arıza mı Var?",
  text = "Bilgisayarlı arıza tespiti ile sorunu tahminle değil, veriyle çözüyoruz. Ankara'da hemen randevu alın.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x my-16">
      <div className="card relative overflow-hidden p-8 text-center md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px 200px at 50% 0%, rgba(245,158,11,0.18), transparent 70%)",
          }}
        />
        <div className="relative">
          <h2 className="text-balance text-2xl font-bold text-[var(--color-heading)] md:text-3xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--color-muted)]">{text}</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={telLink()} className="btn btn-cta w-full sm:w-auto" aria-label={`Telefonla randevu al — ${site.phoneDisplay}`}>
              <PhoneIcon width={18} height={18} />
              {site.phoneDisplay}
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full sm:w-auto" aria-label="WhatsApp üzerinden randevu al">
              <WhatsAppIcon width={18} height={18} />
              WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
