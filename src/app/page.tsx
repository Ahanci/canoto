import Link from "next/link";
import Image from "next/image";
import { site, telLink, waLink } from "@/lib/site";
import { posts } from "@/lib/blog";
import { brands } from "@/lib/brands";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { JsonLd } from "@/components/JsonLd";
import { aggregate } from "@/lib/reviews";
import {
  PhoneIcon,
  WhatsAppIcon,
  ChipIcon,
  BoltIcon,
  EngineIcon,
  GaugeIcon,
  WrenchIcon,
  CheckIcon,
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  BrakeIcon,
  OilIcon,
  CalendarIcon,
} from "@/components/icons";

const services = [
  { icon: ChipIcon, title: "Bilgisayarlı Arıza Tespiti", desc: "OBD cihazı ve canlı veri analizi ile arızanın kök nedenini buluruz." },
  { icon: EngineIcon, title: "Motor Arıza Lambası", desc: "Sarı motor ışığının gerçek sebebini okur, kalıcı çözüm sunarız." },
  { icon: ChipIcon, title: "Oto Beyin (ECU) Tamiri", desc: "Beyni körlemesine değiştirmeden tespit eder, mümkünse tamir ederiz." },
  { icon: BoltIcon, title: "Oto Elektrik Arızaları", desc: "Marş, şarj, akü ve tesisat arızalarında uçtan uca çözüm." },
  { icon: WrenchIcon, title: "Marş & Çalışmama Sorunları", desc: "Marş basıyor çalışmıyor, marş basmıyor arızalarına doğru teşhis." },
  { icon: GaugeIcon, title: "Sensör & Performans", desc: "Tekleme, güç kaybı ve sensör arızalarını veriyle tespit ederiz." },
  { icon: CalendarIcon, title: "Periyodik (Yıllık) Bakım", desc: "Motor yağı, filtreler, buji ve fren kontrolü dahil tüm kalemleri planlı bakım." },
  { icon: BrakeIcon, title: "Fren Balata & Disk Değişimi", desc: "Balata, disk ve fren hidroliği ölçümüyle güvenli frenleme için doğru parça." },
  { icon: OilIcon, title: "Motor Yağı & Filtre Değişimi", desc: "Doğru norm yağ, orijinal yağ/hava/polen filtresi ve atık yağ bertarafı." },
];

const steps = [
  { n: "01", t: "Dinleriz", d: "Şikayetinizi ve aracın geçmişini değerlendiririz." },
  { n: "02", t: "Cihazla Tespit", d: "Arıza kodlarını ve canlı veriyi okuyup analiz ederiz." },
  { n: "03", t: "Net Teşhis", d: "Sorunun kök nedenini ve çözüm yolunu açıkça anlatırız." },
  { n: "04", t: "Kalıcı Çözüm", d: "Onayınızla işlemi yapar, sonucu birlikte test ederiz." },
];

export default function Home() {
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.baseUrl,
  };

  const aggregateRatingLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregate.rating,
      reviewCount: aggregate.count,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <>
      <JsonLd data={[websiteLd, aggregateRatingLd]} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 350px at 75% 10%, rgba(245,158,11,0.12), transparent 60%)",
          }}
        />
        <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="chip">
              <MapPinIcon width={14} height={14} className="text-[var(--color-cta)]" />
              Ankara · Oto Mekanik & Elektrik Özel Servisi
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-heading)] md:text-4xl lg:text-5xl xl:text-6xl">
              Tüm Mekanik ve Oto Elektrik İşleriniz İçin Doğru Adres
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--color-muted)]">
              Ankara&apos;da <strong className="text-[var(--color-heading)]">bilgisayarlı arıza tespiti</strong>, oto
              elektrik ve oto beyin tamirinde sorunu tahminle değil, aracınızın kendi verisiyle
              çözüyoruz. Hızlı, net ve güvenilir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telLink()} className="btn btn-cta text-base" aria-label={`Telefonla ara ${site.phoneDisplay}`}>
                <PhoneIcon width={20} height={20} />
                Hemen Ara
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-accent text-base" aria-label="WhatsApp ile yaz">
                <WhatsAppIcon width={20} height={20} />
                WhatsApp
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-2 text-sm text-[var(--color-muted)] sm:grid-cols-3">
              {["Tüm marka & modeller", "Canlı veri analizi", "Aynı gün tespit"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon width={18} height={18} className="text-[var(--color-cta)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="card card-hover overflow-hidden p-0">
              <Image
                src="https://avatars.mds.yandex.net/get-altay/15510144/2a0000019568203299d3580cc86cae9b1521/XXL_height"
                alt="Can Oto Mekanik & Elektrik Özel Servisi — Ankara, Yenimahalle İvedikköy'deki atölyemizin dış görünümü"
                width={1100}
                height={733}
                priority
                unoptimized
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="card absolute -bottom-5 left-5 flex items-center gap-3 px-4 py-3 shadow-lg">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--color-cta)]/15 text-[var(--color-cta)]">
                <WrenchIcon width={22} height={22} />
              </span>
              <span>
                <span className="block text-sm font-bold text-[var(--color-heading)]">Uzman Kadro</span>
                <span className="block text-xs text-[var(--color-muted)]">Mekanik &amp; Elektrik</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-8" aria-labelledby="services-title">
        <div className="mb-8">
          <h2 id="services-title" className="text-3xl font-bold text-[var(--color-heading)]">Hizmetlerimiz</h2>
          <p className="mt-2 text-[var(--color-muted)]">Oto mekanik ve elektrik arızalarında uçtan uca çözüm.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card card-hover p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                <s.icon width={24} height={24} />
              </span>
              <h3 className="mt-4 font-semibold text-[var(--color-heading)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/hizmetler" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:underline">
            Tüm hizmetleri gör <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-14" aria-labelledby="process-title">
        <h2 id="process-title" className="text-3xl font-bold text-[var(--color-heading)]">Nasıl Çalışıyoruz?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="card p-6">
              <span className="text-2xl font-extrabold text-[var(--color-cta)]">{s.n}</span>
              <h3 className="mt-3 font-semibold text-[var(--color-heading)]">{s.t}</h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ATÖLYEMİZ */}
      <section className="container-x py-14" aria-labelledby="atolye-title">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="card overflow-hidden">
            <Image
              src="https://avatars.mds.yandex.net/get-altay/13906970/2a00000193b834f2be9ccc8e4ec3caa3518a/XXXL"
              alt="Can Oto atölye iç görünümü — usta ekibimiz araç üzerinde çalışırken"
              width={1100}
              height={1466}
              unoptimized
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="chip">Atölyemiz</span>
            <h2 id="atolye-title" className="mt-4 text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
              Ankara&apos;da Güvenebileceğiniz Bir Atölye
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
              İvedikköy&apos;deki modern atölyemizde tüm marka ve modellerde mekanik &amp; oto elektrik
              hizmeti veriyoruz. Profesyonel ölçüm cihazları, deneyimli usta kadromuz ve dürüst
              yaklaşımımızla sorununuzu net olarak ortaya koyup gerçek çözümü sunuyoruz.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {[
                "Bilgisayarlı arıza tespit cihazları",
                "Şeffaf çalışma ve net fiyatlandırma",
                "Aynı gün arıza tespiti",
                "Tüm marka ve modellerde uzmanlık",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[var(--color-text)]">
                  <CheckIcon width={18} height={18} className="text-[var(--color-cta)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="container-x py-8" aria-labelledby="brands-title">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 id="brands-title" className="text-3xl font-bold text-[var(--color-heading)]">Markaya Özel Arıza Çözümleri</h2>
            <p className="mt-2 text-[var(--color-muted)]">Aracınızın markasına tıklayıp sık arızaları inceleyin.</p>
          </div>
          <Link href="/markalar" className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:underline sm:inline-flex">
            Tümü <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {brands.map((b) => (
            <Link key={b.slug} href={`/markalar/${b.slug}`} className="chip card-hover hover:text-[var(--color-heading)]">
              {b.name} arıza
            </Link>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="container-x py-14" aria-labelledby="blog-title">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 id="blog-title" className="text-3xl font-bold text-[var(--color-heading)]">Arıza Rehberi</h2>
          <Link href="/blog" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:underline">
            Tüm yazılar <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-hover flex flex-col p-6">
              <span className="chip self-start">{p.category}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-[var(--color-heading)]">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-[var(--color-muted)]">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                Devamını oku <ArrowRightIcon width={16} height={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* MAP + INFO */}
      <section className="container-x py-8" aria-labelledby="map-title">
        <h2 id="map-title" className="text-3xl font-bold text-[var(--color-heading)]">Ankara&apos;da Buradayız</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="card p-6 lg:col-span-1">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon width={20} height={20} className="mt-0.5 text-[var(--color-accent)]" />
                <span className="text-[var(--color-muted)]"><strong className="block text-[var(--color-heading)]">Adres</strong>{site.addressLine}</span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon width={20} height={20} className="mt-0.5 text-[var(--color-accent)]" />
                <span className="text-[var(--color-muted)]"><strong className="block text-[var(--color-heading)]">Çalışma Saatleri</strong>{site.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon width={20} height={20} className="mt-0.5 text-[var(--color-cta)]" />
                <span className="text-[var(--color-muted)]"><strong className="block text-[var(--color-heading)]">Telefon</strong>
                  <a href={telLink()} className="hover:text-[var(--color-heading)]">{site.phoneDisplay}</a>
                </span>
              </li>
            </ul>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6 w-full">
              <MapPinIcon width={18} height={18} /> Google Maps&apos;te Aç
            </a>
          </div>
          <div className="card overflow-hidden lg:col-span-2">
            <iframe
              title="Can Oto Servis Ankara konum haritası — İvedikköy, 1344. Sk. No:44, Yenimahalle"
              src={site.mapsEmbedSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
