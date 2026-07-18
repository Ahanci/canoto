import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrand } from "@/lib/brands";
import { site } from "@/lib/site";
import { CTASection } from "@/components/CTASection";
import { FAQList } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, ChipIcon } from "@/components/icons";
import type { FAQ } from "@/lib/blog";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  const title = `${brand.name} Arıza Tespiti — Arıza Lambaları & Gösterge İşaretleri`;
  return {
    title,
    description: `${brand.name} araçlarda arıza lambaları, gösterge paneli işaretleri ve elektronik arızalar. Ankara'da bilgisayarlı ${brand.name} arıza tespiti ve çözümü.`,
    keywords: brand.keywords,
    alternates: { canonical: `/markalar/${brand.slug}` },
  };
}

const commonFaults = [
  "Motor arıza lambasının (check engine) yanması",
  "Gösterge panelinde anlam verilemeyen ikaz lambaları",
  "Marş basıyor ama aracın çalışmaması",
  "Tekleme, güç kaybı ve yüksek yakıt tüketimi",
  "ABS, ESP ve airbag uyarı lambaları",
  "Sensör (lambda, MAF, MAP, krank) ve EGR/DPF arızaları",
];

export default async function MarkaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const others = brands.filter((b) => b.slug !== brand.slug).slice(0, 6);
  const topKeywords = brand.keywords.slice(0, 16);

  const faqs: FAQ[] = [
    {
      q: `${brand.name} araçlarda arıza lambası neden yanar?`,
      a: `${brand.name} araçlarda arıza lambası; sensör arızası, ateşleme sorunu, yakıt sistemi ya da emisyon kaynaklı bir arıza nedeniyle yanabilir. Kesin nedeni öğrenmek için bilgisayarlı arıza tespiti ile beyindeki arıza kodlarının okunması gerekir.`,
    },
    {
      q: `${brand.name} arıza tespiti Ankara'da nasıl yapılır?`,
      a: `Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da ${brand.name} aracınıza profesyonel cihaz bağlar, tüm kontrol ünitelerini tarar ve canlı veriyi analiz ederek arızanın kök nedenini tespit ederiz.`,
    },
    {
      q: `${brand.name} gösterge panelindeki işaretler ne anlama gelir?`,
      a: `Kırmızı lambalar acil (yağ, ısı, fren), sarı/turuncu lambalar ise en kısa sürede kontrol gerektiren arızaları gösterir. ${brand.name} modeline özel sembollerin kesin anlamı için aracınızın kontrol ettirilmesi en doğrusudur.`,
    },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${brand.name} araç arıza tespiti ve tamiri`,
    provider: { "@type": "AutoRepair", name: site.name },
    areaServed: { "@type": "City", name: "Ankara" },
  };

  return (
    <>
      <JsonLd data={[serviceLd, faqLd]} />

      <article className="container-x py-12 md:py-16">
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-heading)]">Ana Sayfa</Link>
          <span className="px-1.5">/</span>
          <Link href="/markalar" className="hover:text-[var(--color-heading)]">Markalar</Link>
        </nav>

        <span className="chip"><ChipIcon width={14} height={14} className="text-[var(--color-accent)]" /> {brand.name}</span>
        <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight text-[var(--color-heading)] md:text-5xl">
          {brand.name} Arıza Tespiti ve Çözümü — Ankara
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
          {brand.name} araçlarda motor arıza lambası, gösterge paneli işaretleri ve elektronik
          sistem arızalarında doğru teşhis kritik önem taşır. Can Oto Mekanik & Elektrik Özel
          Servisi olarak Ankara&apos;da {brand.name} modellerinde bilgisayarlı arıza tespiti yapar,
          arızanın kök nedenini bularak kalıcı çözüm sunarız.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[var(--color-heading)]">{brand.name} Araçlarda Sık Görülen Arızalar</h2>
            <ul className="mt-5 grid gap-2.5">
              {commonFaults.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[var(--color-text)]">
                  <CheckIcon width={18} height={18} className="mt-1 shrink-0 text-[var(--color-cta)]" />
                  {f}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-[var(--color-heading)]">
              {brand.name} İçin Sık Aranan Arıza Konuları
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              Aşağıdaki konularda {brand.name} sahipleri en sık bilgi arıyor. Hepsinde Ankara&apos;da
              size yardımcı olabiliriz:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {topKeywords.map((kw) => (
                <span key={kw} className="chip capitalize">{kw}</span>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-[var(--color-heading)]">Neden Can Oto?</h2>
            <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
              {brand.name} aracınızın arızasını tahminle değil, beyninden okuduğumuz gerçek verilerle
              tespit ederiz. Arıza kodunu körlemesine silmek yerine kök nedeni gideririz; böylece
              gereksiz parça değişiminden ve tekrar eden arızalardan kaçınırsınız. Oto beyin (ECU)
              kaynaklı sorunlarda ise mümkün olduğunda tamir ederek size zaman ve maliyet kazandırırız.
            </p>
          </div>

          <aside className="lg:col-span-1">
            <div className="card sticky top-20 p-6">
              <h3 className="text-lg font-bold text-[var(--color-heading)]">{brand.name} Arızası mı Var?</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Ankara&apos;da aynı gün arıza tespiti için bize ulaşın.
              </p>
              <div className="mt-5 grid gap-2">
                <a href={`tel:${site.phoneHref}`} className="btn btn-accent w-full">Hemen Ara</a>
                <a
                  href={`https://wa.me/${site.whatsappHref.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full"
                >
                  WhatsApp ile Yaz
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <FAQList items={faqs} title={`${brand.name} Arıza — Sıkça Sorulan Sorular`} />

      <section className="container-x my-12">
        <h2 className="text-2xl font-bold text-[var(--color-heading)]">Diğer Markalar</h2>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {others.map((b) => (
            <Link key={b.slug} href={`/markalar/${b.slug}`} className="chip card-hover hover:text-[var(--color-heading)]">
              {b.name} arıza
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title={`${brand.name} Aracınızı Bugün Kontrol Ettirin`}
        text="Bilgisayarlı arıza tespiti ile sorunu net belirleyip kalıcı çözüyoruz. Ankara'da hemen randevu alın."
      />
    </>
  );
}
