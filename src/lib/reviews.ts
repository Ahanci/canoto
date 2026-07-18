// Müşteri yorumları — Google İşletme yorumlarından çekildi.
//
// 📌 Yeni bir Google yorumu nasıl eklerim?
//   Google İşletme sayfanızdan kopyalayıp aşağıdaki diziye ekleyin:
//   { name, rating, date, text, source: "Google", featured: true/false }
//   Sadece `featured: true` olanlar ana sayfada görünür; diğerleri arşivde tutulur.
//   `aggregate.rating` ve `aggregate.count` değerlerini Google'da görünen güncel
//   puan ve toplam yorum sayısıyla eşitleyin.

export type Review = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  source?: "Google" | "WhatsApp" | "Yerinde";
  featured?: boolean;
};

export const aggregate = {
  rating: 4.6,
  count: 23,
  source: "Google İşletme",
};

// Sıralama: önce ana sayfada gösterilecek `featured` yorumlar (en güçlüler ve en yeniler),
// sonra arşivdeki diğer gerçek yorumlar.
export const reviews: Review[] = [
  // ——— Ana sayfada gösterilenler ———
  {
    name: "dvt fort",
    rating: 5,
    date: "8 ay önce",
    text:
      "Ersin ustama çok teşekkür ederim aracımı sorunsuz bir şekilde teslim aldım. İşinin ehli usta, gözünüz kapalı eşinize dostunuza tavsiye edebilirsiniz. İşyeri çok güzel.",
    source: "Google",
    featured: true,
  },
  {
    name: "Resul Yıldırım",
    rating: 5,
    date: "bir yıl önce",
    text:
      "Ersin usta, oğlu Haktan, Saffet usta çok güzel bir uyum içerisinde çalışıyorlar. Gerek bakım gerek kontrol, tamir ve onarım her konuda üstün bilgi ve özveriyle çalışıyorlar.",
    source: "Google",
    featured: true,
  },
  {
    name: "İlyas Şenol",
    rating: 5,
    date: "bir yıl önce",
    text:
      "Ersin usta işinin ehli, iyi bir insan, işini hakkıyla yapan nadir ustalardan. Gerçekten aldığı her kuruşun hakkını veriyor. Gönül rahatlığıyla arabayı emanet edebileceğiniz bir yer.",
    source: "Google",
    featured: true,
  },
  {
    name: "Mesude Lük",
    rating: 5,
    date: "bir yıl önce",
    text:
      "İletişimi ve yaptığı işi ile harika bir usta. Benim için iletişim çok önemli; arabamı kısa zamanda yapıp teslim etti, beni zor durumda bırakmadı. Ellerine sağlık.",
    source: "Google",
    featured: true,
  },
  {
    name: "Arda Büyükkuzukıran",
    rating: 5,
    date: "bir yıl önce",
    text:
      "Aracın yağ bakımları, balata, kızdırma bujileri değişti, işçilik on numara, hiçbir sorun çıkmadı. İyi usta arayan herkese öneririm.",
    source: "Google",
    featured: true,
  },
  {
    name: "EYÜB ECEVİT",
    rating: 5,
    date: "2 yıl önce",
    text:
      "Ersin usta ve ekibine sonsuz güvenebilirsiniz. Sorunu teşhis edip orijinal parça ile tamir ediyor. Diğer ustalar gibi 'tamam oldu hadi git' deyip göndermiyor; işini bitiriyor.",
    source: "Google",
    featured: true,
  },

  // ——— Arşiv (ana sayfada gösterilmez, veride saklanır) ———
  {
    name: "Galip KILINÇ",
    rating: 5,
    date: "3 yıl önce",
    text:
      "Çalışan arkadaşlar ve ustalar bizlerin mağduriyetini dikkate alıp ricamızı kırmadan, cumartesi olmasına rağmen 20:00'a kadar çalışıp aracımızı teslim ettiler. Çok teşekkür ederiz, emeğinize sağlık.",
    source: "Google",
  },
  {
    name: "m.i akdeniz",
    rating: 5,
    date: "2 yıl önce",
    text:
      "Güzel, temiz ve kaliteli işçilik. İyi servis, tavsiye ediyorum. Gönül rahatlığıyla araçlarınızı götürebilirsiniz.",
    source: "Google",
  },
  {
    name: "kayalar ankara",
    rating: 5,
    date: "3 yıl önce",
    text:
      "Ersin usta uzun yıllar önce tanıdığım ve hâlen gittiğim iyi bir ustadır. İşinin ehli, samimi bir yaklaşımı vardır. Teşekkür ediyorum, hayırlı işleri olsun inşallah.",
    source: "Google",
  },
  {
    name: "mesut aytekin",
    rating: 5,
    date: "3 yıl önce",
    text:
      "Aracımı aldığımdan beri Ersin ustaya ve onun ekibine gidiyorum. Gerçekten işinin ehli. Her türlü mekanik sıkıntınız için gidebilirsiniz.",
    source: "Google",
  },
  {
    name: "Arif Büyükkuzukıran",
    rating: 5,
    date: "2 yıl önce",
    text:
      "İşçilik güzel ve orijinal parça takıyor, yan sanayi parça takmıyor. Ersin ustam ve yanında çalışan ekip bilgili. Teşekkürler ustam.",
    source: "Google",
  },
  {
    name: "Oğuzhan KILIÇ",
    rating: 5,
    date: "2 yıl önce",
    text:
      "Ersin Usta, profesyonel ve dürüst bir esnaf. Yıllardır farklı farklı araçlarımda problem olduğunda ilk gittiğim yerdir.",
    source: "Google",
  },
  {
    name: "Emre Yıldırım",
    rating: 5,
    date: "2 yıl önce",
    text: "Güler yüzlü, yardımsever çalışanları ile on numara bir yer.",
    source: "Google",
  },
  {
    name: "MURAT ATLIHAN",
    rating: 5,
    date: "5 yıl önce",
    text: "Telefonla her aradığınızda yardımcı olan usta. Tavsiye ederim.",
    source: "Google",
  },
  {
    name: "Tayyar Demir",
    rating: 5,
    date: "5 yıl önce",
    text: "Süper, öneririm. Bana bir motor yaptı, böyle bir iş yok.",
    source: "Google",
  },
  {
    name: "Abdullah Bağ",
    rating: 5,
    date: "5 yıl önce",
    text: "Mükemmel ustasıyla, çırağıyla işlerini bilen bir kadro. Helal olsun Ersin usta.",
    source: "Google",
  },
  {
    name: "Bekir Tuncay",
    rating: 5,
    date: "5 yıl önce",
    text: "İşinde uzman, kusursuz işçilik, samimiyet ve memnuniyet.",
    source: "Google",
  },
  {
    name: "Mehmet DEMİRKAN",
    rating: 5,
    date: "3 yıl önce",
    text: "Temiz işçilik.",
    source: "Google",
  },
  {
    name: "taner öztürk",
    rating: 5,
    date: "4 yıl önce",
    text: "Çok iyi.",
    source: "Google",
  },
  {
    name: "ogün demirhan",
    rating: 5,
    date: "6 yıl önce",
    text: "İyi iş çıkarıyor.",
    source: "Google",
  },
  {
    name: "Kemalettin Öztürk",
    rating: 4,
    date: "7 yıl önce",
    text: "Her tür otonun tamir ve bakımı uygun ücretle yapılabiliyor.",
    source: "Google",
  },
];
