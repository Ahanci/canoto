export const site = {
  name: "Can Oto Mekanik & Elektrik Özel Servisi",
  shortName: "Can Oto Servis",
  city: "Ankara",
  region: "Ankara",
  country: "TR",
  phoneDisplay: "0532 774 86 54",
  phoneHref: "+905327748654",
  whatsappHref: "+905327748654",
  whatsappText: "Merhaba, aracımda arıza var. Bilgisayarlı arıza tespiti için randevu almak istiyorum.",
  mapsUrl: "https://maps.google.com/?q=39.992526971511026,32.76033787599002",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3056.7126262000256!2d32.76033787599002!3d39.992526971511026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU5JzMzLjEiTiAzMsKwNDUnNDYuNSJF!5e0!3m2!1str!2str!4v1780339613674!5m2!1str!2str",
  // Üretimde gerçek domain ile değiştirilir; SEO metadata/sitemap için kullanılır.
  baseUrl: "https://www.canotoservis.com",
  address: {
    street: "İvedikköy, 1344. Sk. No:44",
    district: "Yenimahalle",
    city: "Ankara",
    region: "Ankara",
    postalCode: "06378",
    country: "TR",
  },
  addressLine: "İvedikköy, 1344. Sk. No:44, 06378 Yenimahalle/Ankara",
  geo: { lat: 39.992526971511026, lng: 32.76033787599002 },
  hours: "Pzt Kapalı · Sal–Cmt 08:00–19:00",
  hoursSchema: "Tu-Sa 08:00-19:00",
  services: [
    "Bilgisayarlı araç arıza tespiti",
    "Oto elektrik arıza çözümü",
    "Motor arıza lambası analizi",
    "Oto beyin (ECU) arıza tespiti ve tamiri",
    "Elektronik araç sistemleri arıza giderme",
  ],
};

export function waLink() {
  const num = site.whatsappHref.replace(/[^0-9]/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(site.whatsappText)}`;
}

export function telLink() {
  return `tel:${site.phoneHref}`;
}
