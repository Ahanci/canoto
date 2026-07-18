import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ChipIcon, EngineIcon, BoltIcon, WrenchIcon, GaugeIcon, CheckIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hizmetlerimiz — Bilgisayarlı Arıza Tespiti & Oto Elektrik",
  description:
    "Ankara'da bilgisayarlı araç arıza tespiti, motor arıza lambası analizi, oto beyin (ECU) tamiri, oto elektrik ve marş arızaları çözümü.",
  alternates: { canonical: "/hizmetler" },
};

const services = [
  {
    icon: ChipIcon,
    title: "Bilgisayarlı Araç Arıza Tespiti",
    desc: "Profesyonel OBD cihazlarıyla motor, ABS, airbag ve şanzıman dahil tüm kontrol ünitelerini tarar; arıza kodlarını okur ve canlı veriyi analiz ederek arızanın kök nedenini buluruz.",
    points: ["Tüm marka ve modeller", "Canlı veri (live data) analizi", "Donma karesi (freeze frame) okuma"],
  },
  {
    icon: EngineIcon,
    title: "Motor Arıza Lambası Analizi",
    desc: "Sarı motor arıza lambasının (check engine) gerçek sebebini tespit eder; sensör, ateşleme, yakıt ve emisyon kaynaklı arızaları ayırt ederek kalıcı çözüm sunarız.",
    points: ["Sensör ve ateşleme kontrolü", "Yakıt ve emisyon analizi", "Dizel EGR / DPF / turbo"],
  },
  {
    icon: ChipIcon,
    title: "Oto Beyin (ECU) Arıza Tespiti ve Tamiri",
    desc: "Aracın beynini körlemesine değiştirmeden önce gerçek arızayı tespit eder, mümkün olduğunda donanım seviyesinde tamir eder; gerekirse araca özel kodlama yaparız.",
    points: ["Donanım seviyesinde tamir", "Immobilizer & anahtar kodlama", "Ekonomik çözüm"],
  },
  {
    icon: BoltIcon,
    title: "Oto Elektrik Arıza Çözümü",
    desc: "Marş, şarj, akü, aydınlatma ve kablo tesisatı arızalarını ölçüm cihazlarıyla tespit eder; temassızlık ve kaçak akım sorunlarını çözeriz.",
    points: ["Akü & şarj testi", "Tesisat ve kaçak akım", "Aydınlatma sistemleri"],
  },
  {
    icon: WrenchIcon,
    title: "Marş ve Çalışmama Sorunları",
    desc: "Marş basıyor ama çalışmıyor, marş basmıyor ya da yolda stop ediyor şikayetlerinde doğru teşhis ile tek seferde çözüm üretiriz.",
    points: ["Marş & krank sensörü", "Yakıt sistemi kontrolü", "Soğuk çalıştırma sorunları"],
  },
  {
    icon: GaugeIcon,
    title: "Sensör & Performans Arızaları",
    desc: "Tekleme, güç kaybı ve yüksek yakıt tüketimi gibi performans sorunlarında sensör ve sistem verilerini analiz ederek nedeni buluruz.",
    points: ["Tekleme tespiti", "Sensör doğrulama", "Yakıt tüketimi analizi"],
  },
];

export default function HizmetlerPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Oto mekanik ve elektrik arıza tespiti ve tamiri",
    provider: { "@type": "AutoRepair", name: site.name },
    areaServed: { "@type": "City", name: "Ankara" },
    description:
      "Ankara'da bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin (ECU) tamiri hizmetleri.",
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <section className="container-x py-14 md:py-20">
        <span className="chip">Hizmetler</span>
        <h1 className="mt-5 text-balance text-4xl font-extrabold text-[var(--color-heading)] md:text-5xl">
          Oto Mekanik & Elektrik Arıza Çözümleri
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
          Ankara&apos;da aracınızın her türlü mekanik ve elektronik arızasında, tahmine değil
          veriye dayalı teşhis ve kalıcı çözüm sunuyoruz.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card card-hover p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                <s.icon width={26} height={26} />
              </span>
              <h2 className="mt-4 text-xl font-bold text-[var(--color-heading)]">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{s.desc}</p>
              <ul className="mt-4 grid gap-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                    <CheckIcon width={16} height={16} className="text-[var(--color-cta)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/markalar" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:underline">
            Markaya özel arıza sayfalarını gör <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
