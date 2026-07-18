# CLAUDE.md — Can Oto Mekanik & Elektrik Özel Servisi

Bu dosya, bu repo (`/Users/abdulkerimhancioglu/Desktop/canoto`) üzerinde çalışan Claude için
kalıcı çalışma talimatlarını içerir. Burası **sprinter projesinden ayrı, yeni bir projedir.**

---

## 🟢 Yetki / İzin (ÖNEMLİ)

- Bu projede Claude, kullanıcıdan **hiç onay/izin istemeden** geliştirmeyi baştan sona bitirir.
- Plan onayı, ara onay, "başlayayım mı?" gibi sorular **sorulmaz**. Doğrudan yapılır.
- Dosya oluşturma, düzenleme, paket kurma, dev server başlatma, Playwright ile test etme
  serbesttir — her adım için onay beklenmez.
- İş tamamen bitip Playwright testi geçtikten sonra tek bir özetle "bitti" denir.
- `canoto` klasörü içinde **tüm işlemler** (dosya, paket, script, build, dev server,
  Playwright, lokal git commit) serbesttir. Ara ara durup soru sorma; turn'ü bölme,
  proje tümüyle bitene kadar kesintisiz devam et.
- **İstisna / yasak olanlar (mutlaka önce sor):**
  - Deploy (Vercel, prod, herhangi bir canlı ortam) — **YAPMA**, sadece lokal.
  - `git push`, force push, branch silme, remote'a dokunan işlemler.
  - Geri dönüşü zor / yıkıcı komutlar (`rm -rf`, `git reset --hard`, vb.).
  - Para harcatan veya dışarıya mesaj/istek gönderen işlemler.
- Çalışma bittiğinde kullanıcıya özet bilgi ver.

---

## 🧱 Proje Kapsamı

Can Oto Mekanik & Elektrik Özel Servisi için **SEO odaklı, lead üreten** Next.js sitesi.
Amaç: Ankara lokal aramalarından telefon / WhatsApp dönüşümü almak.

### Teknoloji
- Next.js (App Router) + TypeScript
- Tailwind CSS
- React Server Components, Next/Image
- SEO: Metadata API + OpenGraph + JSON-LD (LocalBusiness, Service, FAQ, Article)
- Mobile-first, WCAG AA erişilebilirlik
- **Deploy edilmez** — yalnızca lokal repo + lokal dev/test.

### Tasarım Dili
- Koyu tema, erkeksi/teknik, güven veren.
- Renkler: `#0A2540` koyu mavi, `#2563EB` vurgu mavi, `#F59E0B` CTA turuncu,
  `#111827` arka plan, `#E5E7EB` açık gri metin.
- Sticky mobil "Ara" çubuğu + WhatsApp floating button her sayfada.

---

## 🔑 Firma Bilgileri (NAP — tutarlı kullan)

- **Ad:** Can Oto Mekanik & Elektrik Özel Servisi
- **Şehir:** Ankara, Türkiye
- **Google Maps:** https://share.google/HMfL58CyLtlMM0hEk
- Hizmetler: Bilgisayarlı arıza tespiti, oto elektrik, motor arıza lambası analizi,
  oto beyin (ECU) tamiri, elektronik sistem arıza giderme.

> Not: Telefon/WhatsApp numarası kullanıcı tarafından netleştirilene kadar placeholder
> (`tel:+90XXXXXXXXXX`) olarak bırakılır ve `src/lib/site.ts` içinde tek yerden yönetilir.

---

## ✍️ Blog Kuralları

- Anahtar kelimeler `canoto/Keyword Stats*.csv` dosyalarından alınır.
- **Yalnızca** oto mekanik & elektrik, arıza tespit ve tamir ile ilgili kelimeler için yazılır.
- Her blog **en az 500 kelime**, Türkçe, SSS bölümlü, iç linkli, net CTA'lı.
- Her blog `Article` + `FAQPage` schema içerir.
- Her anahtar kelime için ayrı yazı YAZILMAZ — kelimeler temalara kümelenir.

---

## ✅ Çalışma Akışı

1. Geliştir (izin sormadan).
2. `npm run build` / `npm run lint` ile doğrula.
3. Dev server'ı çalıştır, **Playwright** ile sayfaları gez ve test et.
4. Sonuçları kullanıcıya raporla.
