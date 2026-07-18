import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/lib/brands";
import { CTASection } from "@/components/CTASection";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Markaya Özel Araç Arıza Çözümleri",
  description:
    "Opel, Ford, Fiat, Renault, Volkswagen, Audi ve daha fazlası için arıza lambaları, gösterge işaretleri ve arıza tespiti. Ankara Can Oto Servis.",
  alternates: { canonical: "/markalar" },
};

export default function MarkalarPage() {
  return (
    <>
      <section className="container-x py-14 md:py-20">
        <span className="chip">Markalar</span>
        <h1 className="mt-5 text-balance text-4xl font-extrabold text-[var(--color-heading)] md:text-5xl">
          Markaya Özel Arıza Çözümleri
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          Aracınızın markasını seçin; o markada en sık karşılaşılan arıza lambaları, gösterge
          işaretleri ve elektronik sorunlarla ilgili bilgi alın, Ankara&apos;da çözüm için bize ulaşın.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <Link key={b.slug} href={`/markalar/${b.slug}`} className="card card-hover flex items-center justify-between p-6">
              <div>
                <h2 className="text-xl font-bold text-[var(--color-heading)]">{b.name}</h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {b.keywordCount}+ arıza konusu · arıza tespiti
                </p>
              </div>
              <ArrowRightIcon width={20} height={20} className="text-[var(--color-accent)]" />
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
