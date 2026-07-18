export type FAQ = { q: string; a: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  keywords: string[];
  category: string;
  date: string;
  readMins: number;
  body: Block[];
  faqs: FAQ[];
};

export const posts: Post[] = [
  {
    slug: "motor-ariza-lambasi-neden-yanar",
    title: "Motor Arıza Lambası Neden Yanar? Sarı Işık Ne Anlama Gelir?",
    description:
      "Motor arıza lambası neden yanar, sarı motor ışığı ne demek, dizel ve benzinli araçlarda hangi arızaları gösterir? Ankara'da bilgisayarlı arıza tespiti.",
    excerpt:
      "Gösterge panelinde sarı motor arıza lambası yandığında panik yapmayın ama ihmal de etmeyin. İşte nedenleri ve doğru yaklaşım.",
    keywords: [
      "motor arıza lambası",
      "motor arıza lambası sarı yanıyor",
      "dizel motor arıza lambası",
      "sarı motor ışığı",
      "motor ikaz lambaları",
    ],
    category: "Arıza Tespiti",
    date: "2026-05-20",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Aracınızın gösterge panelinde turuncu-sarı renkte, motor bloğu şeklindeki ikaz lambası (check engine) yandığında çoğu sürücü ilk anda endişelenir. Bu lamba, motor yönetim sistemindeki bir veya birden fazla bileşenin beklenen değerlerin dışında çalıştığını ya da bir sensörden hatalı sinyal geldiğini gösterir. İyi haber şu: sürekli sabit yanan sarı bir lamba genellikle yola devam edebileceğiniz, ancak en kısa sürede kontrol ettirmeniz gereken bir durumu işaret eder.",
      },
      { type: "h2", text: "Motor Arıza Lambası Tam Olarak Neyi Gösterir?" },
      {
        type: "p",
        text: "Modern araçlarda motor beyni (ECU), yüzlerce sensörden saniyede defalarca veri okur. Bu verilerden biri tanımlı sınırların dışına çıktığında ECU bir arıza kodu (DTC) kaydeder ve sürücüyü uyarmak için motor arıza lambasını yakar. Yani lamba bir 'sonuç'tur; gerçek sebep arkasındaki arıza kodunda gizlidir. Bu nedenle lambanın neden yandığını anlamanın tek kesin yolu, bilgisayarlı arıza tespiti ile bu kodları okutmaktır.",
      },
      { type: "h2", text: "Sarı Motor Işığının En Sık Nedenleri" },
      {
        type: "ul",
        items: [
          "Oksijen (lambda) sensörü veya hava-yakıt karışım sensörü arızası",
          "Hatalı veya gevşek yakıt deposu kapağı (en sık gözden kaçan neden)",
          "Buji, bobin veya ateşleme sisteminde tekleme (misfire)",
          "Hava kütle (MAF) ya da emme manifoldu basınç (MAP) sensörü arızası",
          "Katalitik konvertör verimsizliği",
          "Dizel araçlarda EGR valfi, DPF (partikül filtresi) veya turbo basınç sorunları",
          "Enjektör arızası veya yakıt basınç sensörü hatası",
        ],
      },
      { type: "h2", text: "Sarı, Kırmızı ve Yanıp Sönen Lamba Farkı" },
      {
        type: "p",
        text: "Sabit yanan sarı lamba 'kontrol ettir' anlamına gelir; aracı dikkatli kullanarak servise götürebilirsiniz. Ancak motor arıza lambası yanıp sönüyorsa bu ciddi bir tekleme demektir ve katalizöre kalıcı zarar vermemek için aracı durdurup çekici çağırmak en güvenlisidir. Lamba kırmızı yanıyorsa (genellikle yağ basıncı veya ısı ile birlikte) derhal durmanız gerekir.",
      },
      { type: "h2", text: "Dizel Araçlarda Motor Arıza Lambası" },
      {
        type: "p",
        text: "Dizel motorlarda sarı motor arıza lambası çoğunlukla EGR valfi kirlenmesi, DPF filtresinin dolması, kızdırma bujileri, turbo aktüatörü veya yakıt basınç sensörü kaynaklıdır. Özellikle şehir içi kısa mesafe kullanımında DPF kendini yeterince temizleyemez ve lamba yanabilir. Bu tür arızalarda performans düşüşü, gaz tepkisinde azalma ve yakıt tüketiminde artış da hissedilir.",
      },
      { type: "h2", text: "Lamba Yandığında Ne Yapmalısınız?" },
      {
        type: "ul",
        items: [
          "Önce yakıt deposu kapağının tam kapalı olduğundan emin olun.",
          "Lamba sabitse aracı normal sürerek en kısa sürede servise getirin.",
          "Lamba yanıp sönüyorsa veya güç kaybı varsa aracı zorlamayın.",
          "Arıza kodunu sildirmeden önce mutlaka okutun; çünkü kodu silmek sorunu çözmez, sadece geçici olarak gizler.",
        ],
      },
      { type: "h2", text: "Arıza Lambasını Görmezden Gelmek Risk Taşır mı?" },
      {
        type: "p",
        text: "Pek çok sürücü, araç normal çalışmaya devam ettiği için sarı motor arıza lambasını uzun süre görmezden gelir. Oysa lamba yandığı andan itibaren motor çoğu zaman 'acil durum' adı verilen koruma moduna geçebilir; bu modda performans kısıtlanır ve yakıt tüketimi artar. Daha önemlisi, küçük bir sensör arızası zamanında giderilmediğinde katalitik konvertör gibi çok daha pahalı parçaların zarar görmesine yol açabilir. Örneğin sürekli tekleyen bir motor, yanmamış yakıtı egzoza göndererek katalizörü eritebilir.",
      },
      {
        type: "p",
        text: "Bu nedenle lamba sabit dahi olsa, mümkün olan en kısa sürede arızayı okutmak hem güvenliğiniz hem de bütçeniz için en doğru karardır. Erken teşhis, çoğu durumda küçük ve ekonomik bir müdahaleyle çözülebilecek bir sorunun büyümeden giderilmesini sağlar. Unutmayın: lamba bir uyarıdır, arızanın kendisi değil.",
      },
      { type: "h2", text: "Can Oto'da Çözüm" },
      {
        type: "p",
        text: "Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da profesyonel arıza tespit cihazları ile aracınızın beynindeki tüm arıza kodlarını okur, canlı veri (live data) üzerinden sensörlerin gerçek değerlerini analiz eder ve sorunun kök nedenini tespit ederiz. Kodu körlemesine silmek yerine arızayı kalıcı olarak gideririz. Motor arıza lambası yandıysa bizi arayın ya da WhatsApp'tan yazın, aracınızı aynı gün kontrol edelim.",
      },
    ],
    faqs: [
      {
        q: "Motor arıza lambası yanan araç kullanılır mı?",
        a: "Lamba sabit sarı yanıyorsa aracı dikkatli şekilde kısa süre kullanabilir ve servise götürebilirsiniz. Ancak lamba yanıp sönüyorsa veya belirgin güç kaybı varsa aracı durdurmanız ve kontrol ettirmeniz gerekir.",
      },
      {
        q: "Motor arıza lambası kendi kendine söner mi?",
        a: "Bazı geçici arızalarda (örneğin gevşek yakıt kapağı) sorun ortadan kalkınca lamba birkaç çalıştırma sonrası sönebilir. Ancak çoğu durumda arıza devam eder ve kodun cihazla okunup giderilmesi gerekir.",
      },
      {
        q: "Arıza lambasının yanma sebebini nasıl öğrenirim?",
        a: "Tek kesin yöntem bilgisayarlı arıza tespitidir. OBD cihazı ile motor beynindeki arıza kodları okunur ve hangi bileşenin sorun çıkardığı net olarak belirlenir.",
      },
    ],
  },
  {
    slug: "oto-beyin-ecu-tamiri-nedir",
    title: "Oto Beyin (ECU) Tamiri Nedir? Belirtileri ve Çözümü",
    description:
      "Oto beyin (ECU) nedir, hangi belirtilerle arızalanır, oto beyin tamiri nasıl yapılır? Ankara'da oto beyinci ve ECU arıza tespiti.",
    excerpt:
      "Araç çalışmıyor, marş basıyor ama ateşleme yok ya da sürekli arıza kodu mu alıyorsunuz? Sorun oto beyninde olabilir.",
    keywords: [
      "oto beyin tamiri",
      "oto beyinci",
      "oto beyin",
      "oto beyinciler",
      "ecu arıza tespiti",
    ],
    category: "Oto Elektronik",
    date: "2026-05-19",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Oto beyin, teknik adıyla ECU (Engine Control Unit) ya da motor kontrol ünitesi, aracın motorunu yöneten elektronik kumanda kartıdır. Yakıt enjeksiyonundan ateşleme zamanlamasına, turbo basıncından rölanti devrine kadar onlarca fonksiyonu sensörlerden gelen veriye göre milisaniyeler içinde kontrol eder. Beyinde oluşan bir arıza, aracın çalışmamasına, teklemesine ya da sürekli hata vermesine yol açabilir. Çünkü motor ne kadar sağlam olursa olsun, onu yöneten beyin doğru çalışmadığında araç güvenli ve verimli biçimde çalışamaz. Bu nedenle beyin arızaları, hem doğru teşhis hem de doğru müdahale gerektiren özel bir uzmanlık alanıdır.",
      },
      { type: "h2", text: "Oto Beyin Arızası Belirtileri" },
      {
        type: "ul",
        items: [
          "Araç marş basıyor ama çalışmıyor ya da zor çalışıyor",
          "Motor arıza lambası sürekli yanıyor ve kod silinince hemen geri geliyor",
          "Rölantide düzensiz çalışma, ani stop etme",
          "Gaza basınca tepkisizlik, performans düşüşü",
          "Aynı anda mantıksız ve birbiriyle ilgisiz çok sayıda arıza kodu",
          "Cihazın araç beynine hiç bağlanamaması (haberleşme yok)",
        ],
      },
      { type: "h2", text: "Oto Beyin Neden Arızalanır?" },
      {
        type: "p",
        text: "Beyin arızalarının en yaygın sebepleri; akü değişimi sırasında yapılan yanlış bağlantılar, takviye (şarj) verirken kutup başlarının ters bağlanması, su/nem alması, kısa devre, voltaj dalgalanmaları ve aşırı ısınmadır. Ayrıca zamanla kart üzerindeki lehim noktalarında çatlaklar, kondansatör bozulmaları ve yazılım (eeprom) hataları da görülür. Bu nedenle beyin arızasında önce sebebin doğru teşhis edilmesi şarttır; aksi halde tamir edilen beyin tekrar bozulabilir.",
      },
      { type: "h2", text: "Oto Beyin Tamiri Nasıl Yapılır?" },
      {
        type: "p",
        text: "Profesyonel bir oto beyinci, önce arızanın gerçekten beyinden mi yoksa sensör, kablo tesisatı ya da besleme hattından mı kaynaklandığını ayırt eder. Beyin doğrulandıktan sonra kart açılır; donanım seviyesinde mikro işlemci, güç katları, sürücü entegreleri ve lehim bağlantıları kontrol edilir. Donanım tamiri mümkün değilse uygun bir muadil beyin temin edilip araca özel yazılım ve immobilizer eşleştirmesi yapılır.",
      },
      { type: "h2", text: "Tamir mi, Değişim mi?" },
      {
        type: "p",
        text: "Birçok durumda beyin tamiri, sıfır beyin almaktan çok daha ekonomiktir ve aracın orijinal yazılımı korunur. Ancak donanımı tamamen zarar görmüş beyinlerde değişim ve yeniden kodlama gerekir. Doğru karar, ancak beyin açılıp arıza haritası çıkarıldıktan sonra verilebilir. Bu yüzden 'beyin gitti' denilen araçların önemli bir kısmı aslında tamir edilebilir durumdadır.",
      },
      { type: "h2", text: "Oto Beyin Arızasında Yapılan Yaygın Hatalar" },
      {
        type: "p",
        text: "Beyin arızalarında en sık yapılan hata, sorunun gerçekten beyinden kaynaklanıp kaynaklanmadığı doğrulanmadan beynin değiştirilmesidir. Birçok araçta 'beyin gitti' denilen sorunun arkasında aslında zarar görmüş bir sensör, oksitlenmiş bir soket ya da kopmuş bir kütle (şase) kablosu yatar. Beyin değiştirildiğinde sorun bir süre çözülmüş gibi görünse de, asıl arıza giderilmediği için kısa sürede yeni beyin de zarar görebilir.",
      },
      {
        type: "p",
        text: "İkinci yaygın hata, beyinin araca özel kodlama ve immobilizer eşleştirmesi yapılmadan takılmaya çalışılmasıdır. Modern araçlarda beyin, anahtar ve gövde kontrol modülü birbiriyle haberleşir; bu eşleştirme doğru yapılmazsa araç çalışmaz. Bu yüzden oto beyin işlemleri, hem donanım hem yazılım tarafında deneyimli bir ustanın yapması gereken hassas işlerdir.",
      },
      {
        type: "p",
        text: "Ayrıca akü değişimi veya takviye gibi basit işlemler sırasında alınan küçük önlemler (kutup başlarının doğru sırayla bağlanması, kontağın kapalı olması) beyin arızalarının büyük kısmını baştan önler. Koruyucu yaklaşım, sonradan yapılacak masraflı tamirlerden çok daha akıllıcadır.",
      },
      { type: "h2", text: "Ankara'da Oto Beyin Tamiri için Can Oto" },
      {
        type: "p",
        text: "Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da oto beyin (ECU) arıza tespiti, tamiri ve kodlama hizmeti veriyoruz. Aracınızın beynini körlemesine değiştirmeden önce gerçek arızayı tespit eder, mümkün olduğunda tamir ederek hem zaman hem maliyet kazandırırız. Aracınız çalışmıyorsa ya da beyin arızasından şüpheleniyorsanız bizimle iletişime geçin.",
      },
    ],
    faqs: [
      {
        q: "Oto beyin tamir edilir mi yoksa değişmeli mi?",
        a: "Birçok beyin arızası donanım seviyesinde tamir edilebilir ve bu genellikle değişimden daha ekonomiktir. Donanımı tamamen hasar görmüş beyinlerde ise değişim ve araca özel yeniden kodlama gerekir.",
      },
      {
        q: "Oto beyin arızasını nasıl anlarım?",
        a: "Aracın marş basıp çalışmaması, silinen arıza kodlarının hemen geri gelmesi, cihazın beyne bağlanamaması ve birbiriyle ilgisiz çok sayıda hata kodu beyin arızasının tipik belirtileridir.",
      },
      {
        q: "Akü takviyesi beyne zarar verir mi?",
        a: "Kutup başları ters bağlanır veya yüksek voltaj uygulanırsa beyin zarar görebilir. Bu, oto beyin arızalarının en sık nedenlerinden biridir.",
      },
    ],
  },
  {
    slug: "araba-mars-basiyor-ama-calismiyor",
    title: "Araba Marş Basıyor Ama Çalışmıyor: Nedenleri ve Çözümü",
    description:
      "Marş basıyor ama araba çalışmıyor mu? Dizel, benzinli ve LPG'li araçlarda nedenleri, kontrol adımları ve Ankara'da arıza tespiti çözümü.",
    excerpt:
      "Marş motoru dönüyor, sesi geliyor ama motor bir türlü tutmuyorsa sorun yakıt, ateşleme ya da immobilizer kaynaklı olabilir.",
    keywords: [
      "marş basıyor ama çalışmıyor",
      "marş basıyor ama araba çalışmıyor",
      "dizel araç marş basıyor ama çalışmıyor",
      "lpg li araç marş basıyor ama çalışmıyor",
      "benzinli araba marş basıyor ama çalışmıyor",
    ],
    category: "Arıza Tespiti",
    date: "2026-05-18",
    readMins: 7,
    body: [
      {
        type: "p",
        text: "Kontağı çevirdiğinizde marş motorunun döndüğünü duyuyor ama motorun bir türlü çalışmadığını görüyorsanız, bu durum 'marş basıyor ama araba çalışmıyor' arızası olarak adlandırılır. Marşın dönmesi, akü ve marş motorunun büyük olasılıkla sağlam olduğunu gösterir. Sorun genellikle motorun çalışması için gereken üç temel unsurdan birindedir: yakıt, ateşleme ve hava/kompresyon. Bu üç unsurdan biri eksik olduğunda motor dönmesine rağmen ateşleme gerçekleşmez ve araç çalışmaz. Doğru teşhis için hangi unsurun devre dışı kaldığını belirlemek, çözümün ilk ve en önemli adımıdır.",
      },
      { type: "h2", text: "En Sık Karşılaşılan Nedenler" },
      {
        type: "ul",
        items: [
          "Yakıt pompası arızası veya yakıt basıncının düşük olması",
          "Tıkalı yakıt filtresi",
          "Krank/eksantrik mil konum sensörü (CKP/CMP) arızası",
          "Immobilizer veya anahtar tanıma sorunu (yedek anahtar arabayı çalıştırmıyor)",
          "Benzinli araçlarda buji/bobin arızası",
          "Dizel araçlarda kızdırma bujileri, yakıt basıncı veya hava alma sorunu",
          "Enjektör arızası ya da yakıt sisteminde hava kaçağı",
        ],
      },
      { type: "h2", text: "Dizel Araçlarda Marş Basıyor Çalışmıyor" },
      {
        type: "p",
        text: "Dizel araçlarda bu arıza sıklıkla yakıt sistemine hava girmesi, mazot pompası, yüksek basınç sistemi veya kızdırma bujileri kaynaklıdır. Özellikle soğuk havalarda kızdırma bujileri zayıfsa motor zor tutar. Yakıt deposu boşalıp tekrar dolduğunda ya da filtre değişiminde sisteme giren hava da dizel araçların çalışmamasının yaygın bir sebebidir.",
      },
      { type: "h2", text: "LPG'li Araçlarda Marş Basıyor Çalışmıyor" },
      {
        type: "p",
        text: "LPG'li araçlarda motor benzinle çalışmaya başlayıp sonra gaza geçtiği için, araç çalışmıyorsa önce benzin tarafının (pompa, buji, bobin) sağlam olup olmadığına bakılır. LPG'ye erken geçiş, regülatör arızası, LPG enjektör tıkanıklığı veya soğukta gaz buharlaşma sorunu da 'LPG'li araç marş basıyor ama çalışmıyor' şikayetine yol açabilir. Genellikle aracı önce benzinle çalıştırıp ısındıktan sonra gaza almak doğru yaklaşımdır.",
      },
      { type: "h2", text: "Kendiniz Yapabileceğiniz Hızlı Kontroller" },
      {
        type: "ul",
        items: [
          "Yakıt seviyesini kontrol edin; gösterge bazen hatalı olabilir.",
          "Kontak açıkken yakıt pompasının çalışma sesini (vızıltı) dinleyin.",
          "Immobilizer/anahtar lambasının yanıp sönüp sönmediğine bakın; yedek anahtarı deneyin.",
          "Dizelde kontağı 2-3 kez 'on' konumda bekletip kızdırma yaptırmayı deneyin.",
        ],
      },
      { type: "h2", text: "Benzinli Araçlarda Marş Basıyor Çalışmıyor" },
      {
        type: "p",
        text: "Benzinli araçlarda bu arıza genellikle ateşleme veya yakıt sisteminden kaynaklanır. Buji ve bobinlerin zayıflaması, yakıt pompasının basınç verememesi ya da gaz kelebeğinin aşırı kirlenmesi motorun tutmasını engeller. Ayrıca krank veya eksantrik konum sensörü sinyal vermediğinde, motor beyni ateşleme ve enjeksiyon zamanlamasını hesaplayamaz ve marş dönse bile motor çalışmaz.",
      },
      {
        type: "p",
        text: "Önemli bir nokta da immobilizer sistemidir: anahtar tanınmıyorsa beyin, yakıt ve ateşlemeyi güvenlik amacıyla keser. Bu durumda gösterge panelinde anahtar veya immobilizer ikaz lambası yanıp söner. Özellikle yedek anahtar kullanıldığında ya da anahtar pili bittiğinde bu sorunla sık karşılaşılır. Bu durumda anahtarın araç sistemine yeniden tanıtılması ya da pilin değiştirilmesi sorunu çözer; ancak immobilizer arızasının gerçekten anahtardan mı yoksa alıcı modülden mi kaynaklandığı cihazla doğrulanmalıdır.",
      },
      { type: "h2", text: "Neden Parça Değiştirerek Çözmeye Çalışmamalısınız?" },
      {
        type: "p",
        text: "Bu arızanın birden fazla olası nedeni olduğu için, tahminle parça değiştirmek hem maliyetli hem de çoğu zaman sonuçsuzdur. Yeni bir yakıt pompası ya da buji takmak, sorun aslında krank sensöründeyse hiçbir işe yaramaz. Doğru yöntem, önce hangi sistemin (yakıt, ateşleme, sensör veya immobilizer) eksik olduğunu ölçümle belirlemektir.",
      },
      { type: "h2", text: "Doğru Teşhis için Can Oto" },
      {
        type: "p",
        text: "Bu arızada en büyük hata, parça parça deneme yaparak para ve zaman kaybetmektir. Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da aracınıza arıza tespit cihazı bağlar; yakıt basıncını, krank sensörü sinyalini, immobilizer durumunu ve ateşleme verilerini canlı olarak ölçerek sorunun kaynağını net şekilde tespit ederiz. Aracınız marş basıp çalışmıyorsa bizi arayın, doğru teşhisle tek seferde çözelim.",
      },
    ],
    faqs: [
      {
        q: "Marş basıyor ama araba çalışmıyorsa akü mü bitmiş?",
        a: "Marş motoru dönüyorsa akü büyük olasılıkla yeterlidir. Sorun genellikle yakıt, ateşleme, krank sensörü veya immobilizer tarafındadır.",
      },
      {
        q: "Yedek anahtarla araba neden çalışmıyor?",
        a: "Yedek anahtar immobilizer sistemine tanıtılmamışsa marş basar ama motor çalışmaz. Anahtarın araca kodlanması gerekir.",
      },
      {
        q: "Dizel araç marş basıyor ama çalışmıyor, ilk ne kontrol edilmeli?",
        a: "Yakıt sistemine hava girip girmediği, kızdırma bujileri ve yakıt basıncı öncelikli kontrol edilir. Bilgisayarlı tespit kök nedeni netleştirir.",
      },
    ],
  },
  {
    slug: "araba-mars-basmiyor-nedenleri",
    title: "Araba Marş Basmıyor: Olası Nedenler ve Çözümler",
    description:
      "Araba marş basmıyor mu? Akü, marş motoru, kontak ve immobilizer kaynaklı nedenler ve Ankara'da oto elektrik arıza tespiti çözümleri.",
    excerpt:
      "Kontağı çeviriyorsunuz ama hiç ses yok ya da sadece tıkırtı geliyorsa marş sistemi devrede demektir. İşte nedenleri.",
    keywords: [
      "araba marş basmıyor",
      "araç marş basmıyor",
      "motorum marş basmıyor",
      "otomatik araba marş basmıyor",
      "marş motoru arızası",
    ],
    category: "Oto Elektrik",
    date: "2026-05-17",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "'Araba marş basmıyor' ifadesi, kontak çevrildiğinde marş motorunun motoru döndürememesi anlamına gelir. Bu durumda ya hiç ses gelmez ya da tek bir 'tık' sesi duyulur. Marşın basmaması çoğunlukla elektriksel bir sorundur ve en sık karşılaşılan neden zayıf ya da bitmiş aküdür. Ancak tek sebep bu değildir. Marş sistemi; akü, marş motoru, kontak, kablo tesisatı ve immobilizer gibi birden fazla bileşenin birlikte çalışmasıyla görev yapar. Bu zincirdeki herhangi bir halkanın zayıflaması, marşın basmamasına yol açabilir; bu yüzden doğru teşhis önemlidir.",
      },
      { type: "h2", text: "Araba Marş Basmamasının Nedenleri" },
      {
        type: "ul",
        items: [
          "Akünün bitmiş, zayıflamış ya da kutup başlarının oksitlenmiş olması",
          "Marş motorunun veya marş selenoidinin arızalanması",
          "Kontak anahtarı / kontak switch arızası",
          "Akü kablolarında gevşeklik, korozyon veya kopukluk",
          "Otomatik vitesli araçlarda vites P/N konumunda değilse marşın basmaması",
          "Immobilizer arızası ya da anahtar pili bitmiş keyless sistem",
          "Ana sigorta veya marş rölesi arızası",
        ],
      },
      { type: "h2", text: "Tek 'Tık' Sesi Geliyorsa" },
      {
        type: "p",
        text: "Kontağı çevirdiğinizde tek bir tıkırtı duyup motorun dönmemesi, genellikle akünün marş motorunu çevirecek akımı verememesinden ya da marş selenoidinin tutmamasından kaynaklanır. Hiç ses gelmiyorsa kontak, immobilizer veya besleme hattı; far ve gösterge ışıkları da çok zayıfsa büyük olasılıkla akü sorumludur.",
      },
      { type: "h2", text: "Otomatik Vitesli Araçlarda Marş Basmaması" },
      {
        type: "p",
        text: "Otomatik şanzımanlı araçlarda marşın basabilmesi için vites kolunun P (park) veya N (boş) konumunda olması gerekir. Vites konum sensörü (selektör switch) arızalandığında araç P'de olmasına rağmen marş basmayabilir. Bu durumda kolu N konumuna alıp denemek pratik bir kontroldür; çalışıyorsa selektör switch'i kontrol edilmelidir.",
      },
      { type: "h2", text: "Hızlı Kontrol Adımları" },
      {
        type: "ul",
        items: [
          "Farları yakın; çok zayıfsa veya hiç yanmıyorsa akü/akü bağlantısı şüphelidir.",
          "Kutup başlarını ve kabloları gevşeklik/oksit için kontrol edin.",
          "Otomatik viteste kolu N'e alıp marş deneyin.",
          "Keyless sistemde anahtar pilini değiştirip tekrar deneyin.",
        ],
      },
      { type: "h2", text: "Akü mü, Marş Motoru mu, Şarj Sistemi mi?" },
      {
        type: "p",
        text: "Marş basmama sorununda en kritik adım, arızanın aküde mi, marş motorunda mı yoksa şarj sisteminde mi olduğunu doğru ayırt etmektir. Akü zayıfsa farlar söner, gösterge ışıkları titrer ve marşta yavaş bir dönme sesi duyulur. Marş motoru arızalıysa akü dolu olduğu halde tek tık sesi gelir ya da hiç tepki olmaz. Şarj sistemi (alternatör) arızalıysa akü sürekli boşalır; araç çalışsa bile bir süre sonra tekrar marş basmaz hale gelir.",
      },
      {
        type: "p",
        text: "Bu üç bileşen birbirini etkilediği için yalnızca aküyü değiştirmek çoğu zaman kalıcı çözüm olmaz. Örneğin alternatör aküyü doldurmuyorsa, yeni akü de kısa sürede biter. Bu nedenle marş basmama arızasında akü, marş motoru ve şarj sisteminin birlikte test edilmesi gerekir.",
      },
      { type: "h2", text: "Kutup Başı ve Kütle Bağlantılarının Önemi" },
      {
        type: "p",
        text: "Çoğu zaman gözden kaçan ama marş basmamanın en basit nedenlerinden biri, oksitlenmiş veya gevşemiş kutup başları ve şase (kütle) bağlantılarıdır. Akü tam dolu olsa bile, oksit tabakası akımın marş motoruna ulaşmasını engeller. Bu tür temas sorunları, aracın bazen çalışıp bazen çalışmaması gibi kararsız belirtiler de verebilir ve ancak dikkatli bir ölçümle tespit edilir. Bu yüzden marş basmama arızasında, pahalı parçalara yönelmeden önce bağlantı noktalarının temizlenip sıkılması çoğu zaman hızlı ve ekonomik bir çözüm sağlar.",
      },
      { type: "h2", text: "Ankara'da Oto Elektrik Çözümü" },
      {
        type: "p",
        text: "Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da marş ve şarj sistemi arızalarını profesyonel ölçüm cihazlarıyla tespit ediyoruz. Akü sağlığını, marş motoru akım çekişini, şarj dinamosu çıkışını ve immobilizer durumunu kontrol ederek sorunu net biçimde belirleriz. Aracınız marş basmıyorsa bizi arayın; gerekirse yerinde değerlendirme için yönlendirelim.",
      },
    ],
    faqs: [
      {
        q: "Araba marş basmıyorsa ilk ne kontrol edilmeli?",
        a: "Önce akü ve kutup başı bağlantıları kontrol edilir. Farlar çok zayıf yanıyorsa veya hiç yanmıyorsa sorun büyük olasılıkla aküdedir.",
      },
      {
        q: "Tek tık sesi gelip marş basmamasının sebebi nedir?",
        a: "Genellikle akünün yeterli akımı verememesi veya marş selenoidinin tutmaması nedeniyle olur. Akü ve marş motoru kontrol edilmelidir.",
      },
      {
        q: "Otomatik vitesli araçta marş neden basmaz?",
        a: "Vites P veya N'de değilse ya da vites konum sensörü arızalıysa marş basmaz. Kolu N konumuna alıp denemek hızlı bir kontroldür.",
      },
    ],
  },
  {
    slug: "bilgisayarli-arac-ariza-tespiti-obd",
    title: "Bilgisayarlı Araç Arıza Tespiti Nedir? OBD ile Arıza Okuma",
    description:
      "Bilgisayarlı araç arıza tespiti nedir, OBD cihazı nasıl çalışır, hangi arızaları bulur? Ankara'da profesyonel arıza tespit hizmeti.",
    excerpt:
      "Modern araçlarda arızanın kaynağını tahminle değil, beyindeki verilerle bulmanın yolu bilgisayarlı arıza tespitidir.",
    keywords: [
      "bilgisayarlı arıza tespiti",
      "obd arıza tespiti",
      "arıza tespit cihazı",
      "araç arıza tespiti",
      "ekü arıza okuma",
    ],
    category: "Arıza Tespiti",
    date: "2026-05-16",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Bilgisayarlı araç arıza tespiti, aracın elektronik kontrol ünitelerine (motor beyni, ABS, airbag, şanzıman, klima vb.) özel bir cihazla bağlanarak sistemde kayıtlı arıza kodlarının okunması ve canlı verilerin analiz edilmesi işlemidir. Bu yöntem, arızayı 'deneme yanılma' ile değil, aracın kendi kaydettiği verilerle bulmayı sağlar; böylece hem zaman hem de gereksiz parça değişimi maliyetinden tasarruf edersiniz. Modern araçlar onlarca elektronik kontrol ünitesi ve yüzlerce sensör içerdiği için, gözle yapılan klasik muayene çoğu arızayı görmekte yetersiz kalır. İşte bu noktada bilgisayarlı tespit, aracın kendi iç verisine ulaşarak gözle görülemeyen sorunları açığa çıkarır.",
      },
      { type: "h2", text: "OBD Nedir, Nasıl Çalışır?" },
      {
        type: "p",
        text: "OBD (On-Board Diagnostics), aracın kendi kendini izleme sistemidir. 2004 sonrası üretilen araçların neredeyse tamamında OBD-II soketi bulunur; bu soket genellikle direksiyonun alt kısmındadır. Arıza tespit cihazı bu sokete bağlandığında araçtaki tüm kontrol üniteleriyle haberleşir ve kayıtlı arıza kodlarını (DTC) okur. Her kod, hangi sistemde ne tür bir sapma olduğunu standart bir formatta ifade eder.",
      },
      { type: "h2", text: "Arıza Kodu Okumak Yeterli mi?" },
      {
        type: "p",
        text: "Hayır. Arıza kodu yalnızca bir başlangıç noktasıdır. Örneğin bir oksijen sensörü kodu, her zaman sensörün bozuk olduğu anlamına gelmez; sorun hava kaçağı, kablo, besleme ya da katalizör kaynaklı olabilir. Profesyonel arıza tespiti, kodun yanı sıra canlı veriyi (sensör değerleri, yakıt düzeltme oranları, basınç ve sıcaklık verileri) yorumlayarak kök nedeni bulmayı gerektirir. İşte tecrübeli bir ustanın farkı buradadır.",
      },
      { type: "h2", text: "Bilgisayarlı Tespit Hangi Arızaları Bulur?" },
      {
        type: "ul",
        items: [
          "Motor arıza lambası (check engine) nedenleri",
          "Tekleme, performans düşüşü ve yüksek yakıt tüketimi",
          "ABS, ESP ve airbag uyarı lambaları",
          "Şanzıman ve otomatik vites arızaları",
          "Sensör (lambda, MAF, MAP, krank, eksantrik) hataları",
          "EGR, DPF, turbo ve emisyon sistemi sorunları",
          "Immobilizer ve anahtar kodlama durumları",
        ],
      },
      { type: "h2", text: "Canlı Veri (Live Data) Analizi" },
      {
        type: "p",
        text: "Modern arıza tespitinin en güçlü tarafı canlı veridir. Motor çalışırken sensörlerin gerçek değerleri anlık olarak izlenir; örneğin yakıt düzeltme oranları, lambda sensörü salınımı, turbo basıncı ve enjektör ayarları incelenir. Bu sayede henüz arıza koduna dönüşmemiş 'gizli' sorunlar bile yakalanabilir. Doğru yorumlandığında canlı veri, arızanın parmak izini ortaya çıkarır.",
      },
      { type: "h2", text: "Bilgisayarlı Tespitin Sürücüye Faydaları" },
      {
        type: "p",
        text: "Bilgisayarlı arıza tespitinin en büyük avantajı, gereksiz parça değişiminin önüne geçmesidir. Klasik yöntemde usta, arızayı bulmak için sırayla parça deneyebilir; bu hem zaman hem para kaybıdır. OBD tabanlı tespitte ise sorun, daha ilk aşamada belirli bir sisteme indirgenir ve sadece gerçekten arızalı olan bileşene müdahale edilir. Böylece tamir süresi kısalır, maliyet düşer ve aynı arızanın tekrarlama ihtimali azalır.",
      },
      {
        type: "p",
        text: "Ayrıca düzenli yapılan bilgisayarlı kontroller, henüz uyarı lambası yakmamış olan gizli arızaları erkenden ortaya çıkarır. İkinci el araç alırken yapılan bir tespit taraması da aracın elektronik geçmişi hakkında değerli bilgi verir; silinmiş ama tekrar eden hata kodları, gizli bir sorunun işareti olabilir.",
      },
      { type: "h2", text: "Hangi Belirtilerde Tespit Yaptırmalısınız?" },
      {
        type: "p",
        text: "Gösterge panelinde herhangi bir uyarı lambasının yanması, performans düşüşü, rölantide düzensizlik, yakıt tüketiminde artış, vites geçişlerinde sertlik veya açıklayamadığınız davranış değişiklikleri bilgisayarlı tespit için yeterli sebeptir. Belirti küçük görünse bile, erken teşhis çoğu zaman küçük bir müdahaleyle çözülebilecek sorunun büyümesini engeller.",
      },
      { type: "h2", text: "Ankara'da Bilgisayarlı Arıza Tespiti" },
      {
        type: "p",
        text: "Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da profesyonel cihazlarla tüm marka ve modellerde bilgisayarlı arıza tespiti yapıyoruz. Sadece kod okuyup silmiyor; canlı veriyi analiz ederek arızanın gerçek nedenini buluyor ve kalıcı çözüm sunuyoruz. Aracınızda bir uyarı lambası yandıysa veya açıklayamadığınız bir sorun varsa bizimle iletişime geçin.",
      },
    ],
    faqs: [
      {
        q: "Bilgisayarlı arıza tespiti her araçta yapılır mı?",
        a: "2004 ve sonrası üretilen, OBD-II soketine sahip neredeyse tüm araçlarda yapılabilir. Daha eski araçlarda marka özel protokoller gerekebilir.",
      },
      {
        q: "Arıza kodunu silmek sorunu çözer mi?",
        a: "Hayır. Kodu silmek yalnızca uyarıyı geçici olarak kapatır; arıza devam ediyorsa kod kısa süre içinde geri gelir. Önce kök neden giderilmelidir.",
      },
      {
        q: "Canlı veri analizi neden önemli?",
        a: "Canlı veri, sensörlerin motor çalışırken gerçek değerlerini gösterir ve henüz arıza koduna dönüşmemiş sorunların bile tespit edilmesini sağlar.",
      },
    ],
  },
  {
    slug: "ariza-lambalari-ve-anlamlari",
    title: "Arıza Lambaları ve Anlamları: Gösterge Panelindeki İşaretler",
    description:
      "Gösterge panelindeki arıza lambaları ve anlamları: motor, akü, yağ, ABS, airbag ve daha fazlası. Hangi ikaz acil, hangisi bekleyebilir?",
    excerpt:
      "Kırmızı lamba 'dur', sarı lamba 'dikkat' demektir. Gösterge panelindeki ikaz lambalarının anlamlarını öğrenin.",
    keywords: [
      "arıza lambaları ve anlamları",
      "araç arıza lambası",
      "motor ikaz lambaları",
      "gösterge paneli işaretleri",
      "ikaz lambaları ve anlamları",
    ],
    category: "Bilgi Rehberi",
    date: "2026-05-15",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Aracın gösterge panelindeki ikaz lambaları, sürücüyle aracın elektronik sistemleri arasındaki iletişim dilidir. Renkleri tesadüfi değildir: kırmızı lambalar acil ve riskli durumları, sarı/turuncu lambalar dikkat edilmesi gereken arızaları, yeşil ve mavi lambalar ise yalnızca bir sistemin aktif olduğunu bildirir. Bu renk mantığını bilmek, yolda kaldığınızda doğru karar vermenizi sağlar. Hangi lambanın acil müdahale gerektirdiğini, hangisinin yalnızca bilgilendirme amaçlı olduğunu ayırt edebilmek, hem güvenliğiniz hem de aracınızın sağlığı açısından büyük önem taşır. Aşağıda en sık karşılaşılan ikaz lambalarını renklerine göre açıklıyoruz.",
      },
      { type: "h2", text: "Kırmızı Lambalar: Hemen Durun" },
      {
        type: "ul",
        items: [
          "Yağ basıncı lambası (yağdanlık şekli): Motor yağ basıncı düşük; derhal durun, motora zarar verebilir.",
          "Akü/şarj lambası: Şarj sistemi çalışmıyor olabilir; dinamo veya kayış arızası.",
          "Motor sıcaklık (termometre) lambası: Motor aşırı ısınıyor; durup soğumasını bekleyin.",
          "Fren sistemi lambası: Fren hidroliği düşük ya da el freni çekili olabilir.",
        ],
      },
      { type: "h2", text: "Sarı/Turuncu Lambalar: En Kısa Sürede Kontrol Ettirin" },
      {
        type: "ul",
        items: [
          "Motor arıza lambası (check engine): Motor yönetiminde bir sorun var.",
          "ABS lambası: Kilitlenme önleyici fren sistemi devre dışı olabilir.",
          "Lastik basıncı (TPMS) lambası: Bir veya birden fazla lastikte basınç düşük.",
          "Dizel araçlarda kızdırma bujisi (bobin şekli) ve DPF lambaları.",
          "ESP/traksiyon kontrol lambası: Sürüş destek sistemi uyarısı.",
        ],
      },
      { type: "h2", text: "Yeşil ve Mavi Lambalar: Bilgilendirme" },
      {
        type: "p",
        text: "Yeşil renkli lambalar (sinyal, far, seyir kontrolü gibi) yalnızca ilgili sistemin çalıştığını gösterir ve bir arıza belirtmez. Mavi renkli uzun far lambası da bilgilendirme amaçlıdır. Bu lambalar yanıyorsa endişelenmenize gerek yoktur; ancak yanması beklenmeyen bir anda görülüyorsa ilgili kumandayı kontrol edin.",
      },
      { type: "h2", text: "Marka ve Modele Göre Farklılıklar" },
      {
        type: "p",
        text: "İkaz lambalarının genel anlamı tüm araçlarda benzer olsa da sembollerin görünümü ve bazı özel uyarılar marka ve modele göre değişebilir. Örneğin Opel, Ford, Fiat, Renault ve Volkswagen araçlarda gösterge paneli işaretleri ve uyarı metinleri farklılık gösterebilir. Aracınızın kullanım kılavuzu, modele özel sembollerin en doğru kaynağıdır.",
      },
      { type: "h2", text: "Aynı Lamba Neden Farklı Arızaları Gösterebilir?" },
      {
        type: "p",
        text: "Sürücülerin en çok kafasının karıştığı nokta, tek bir ikaz lambasının çok farklı arızalara işaret edebilmesidir. Örneğin motor arıza lambası; bir araçta basit bir oksijen sensörü, başka bir araçta ise turbo veya katalizör sorunu nedeniyle yanabilir. Bunun sebebi, lambanın yalnızca 'motor yönetiminde bir sorun var' mesajını iletmesi, ancak sorunun ayrıntısını gösterge panelinde belirtmemesidir. Detay, motor beynine kaydedilen arıza kodunda saklıdır.",
      },
      {
        type: "p",
        text: "Bu yüzden ikaz lambasının rengine bakıp aciliyetini değerlendirmek ilk adımdır; ancak kesin nedeni öğrenmek için mutlaka arıza kodunun okutulması gerekir. Lambanın yanıp sönmesi, sabit yanması veya başka lambalarla birlikte yanması da teşhise yardımcı olan önemli ipuçlarıdır.",
      },
      { type: "h2", text: "İkaz Lambalarıyla İlgili Yaygın Yanlış İnanışlar" },
      {
        type: "p",
        text: "Birçok sürücü, lamba söndüğünde arızanın da geçtiğini düşünür. Oysa bazı arızalar belirli koşullarda kendini gizler ve lamba geçici olarak sönebilir; arıza ise sürmektedir. Bir diğer yanlış inanış, kontak kapatılıp açıldığında lambanın sönmesinin sorunu çözdüğü düşüncesidir. Gerçekte arıza giderilmedikçe kod beyinde kayıtlı kalır ve uygun koşulda lamba yeniden yanar. Aynı şekilde, arıza lambasını bantla kapatmak ya da görmezden gelmek de sorunu ortadan kaldırmaz; yalnızca daha büyük ve masraflı arızaların habercisi olan bir uyarıyı gizlemiş olursunuz.",
      },
      { type: "h2", text: "Lamba Yanınca Doğru Adım" },
      {
        type: "p",
        text: "Bir ikaz lambası yandığında en doğru yaklaşım, lambanın rengine göre hareket etmek ve nedenini bilgisayarlı arıza tespiti ile öğrenmektir. Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da gösterge panelinizdeki tüm uyarı lambalarının arkasındaki gerçek nedeni cihazla tespit eder, gereksiz parça değişimi olmadan çözüm sunarız. Panelinizde anlam veremediğiniz bir lamba varsa bize danışın.",
      },
    ],
    faqs: [
      {
        q: "Hangi arıza lambası en acildir?",
        a: "Kırmızı renkli lambalar (yağ basıncı, motor sıcaklığı, fren) acildir ve genellikle aracı hemen durdurmanızı gerektirir. Sarı lambalar en kısa sürede kontrol gerektirir.",
      },
      {
        q: "Sarı motor arıza lambası ile araç kullanılır mı?",
        a: "Lamba sabit yanıyorsa kısa süre dikkatli kullanılabilir ve servise götürülür. Yanıp sönüyorsa araç durdurulmalıdır.",
      },
      {
        q: "Lastik basıncı lambası neden yanar?",
        a: "Bir veya birden fazla lastikte hava basıncının düşmesi ya da TPMS sensör arızası nedeniyle yanar. Basınçları kontrol edip gerekirse sensör okutmak gerekir.",
      },
    ],
  },
  {
    slug: "sogukta-araba-calismiyor",
    title: "Soğukta Araba Çalışmıyor: Kışın Marş ve Çalıştırma Sorunları",
    description:
      "Soğukta araba çalışmıyor mu, sabah marş zorlanıyor mu? Akü, kızdırma bujisi ve yakıt kaynaklı kış arızaları ve Ankara'da çözümü.",
    excerpt:
      "Kış sabahları araç zor çalışıyor ya da hiç çalışmıyorsa sebebi genellikle akü, kızdırma bujileri ya da yakıt sistemidir.",
    keywords: [
      "soğukta araba çalışmıyor",
      "soğuktan araba çalışmıyor",
      "arabam sabah çalışmıyor",
      "lpg li araç soğukken stop ediyor",
      "kışın araba çalışmıyor",
    ],
    category: "Arıza Tespiti",
    date: "2026-05-14",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Soğuk havalarda araçların çalıştırılması motor için en zorlu anlardan biridir. Düşük sıcaklık hem akünün performansını düşürür hem de yağın akışkanlığını azaltır, dizel araçlarda ise yakıtın tutuşmasını zorlaştırır. 'Soğukta araba çalışmıyor' ya da 'arabam sabah çalışmıyor' şikayetinin arkasında çoğunlukla bu mevsimsel etkilerle tetiklenen, aslında zayıflamış bir bileşen vardır. Yani soğuk hava çoğu zaman arızanın sebebi değil, var olan bir zayıflığı ortaya çıkaran tetikleyicidir. Bu yüzden kış aylarında yaşanan çalıştırma sorunları, aracın bakım ihtiyacını gösteren önemli bir uyarı olarak değerlendirilmelidir.",
      },
      { type: "h2", text: "Kışın Çalıştırma Sorununun Nedenleri" },
      {
        type: "ul",
        items: [
          "Zayıflamış akü: Soğukta akü kapasitesi belirgin şekilde düşer.",
          "Dizel araçlarda yetersiz kızdırma bujileri",
          "Yoğunlaşmış/kalınlaşmış motor yağı ve eski yakıt filtresi",
          "Benzinli araçlarda buji ve bobin zayıflığı",
          "Yakıtta donma/parafinleşme (özellikle dizelde kış yakıtı kullanılmadığında)",
          "Marş motorunun yük altında zorlanması",
        ],
      },
      { type: "h2", text: "Akü: Kışın Bir Numaralı Suçlu" },
      {
        type: "p",
        text: "Akünün kimyasal tepkimeleri sıcaklığa bağlıdır. Soğukta bir akü, yaz aylarında sorunsuz çalışırken bile marş motorunu çevirecek akımı veremeyebilir. Yaz boyunca gizli kalan zayıf bir akü, ilk soğuklarda kendini 'sabah araç çalışmıyor' şeklinde gösterir. Akünün yaşı 4 yılın üzerindeyse ve kışın zorlanma başladıysa akü testi yaptırmak en doğrusudur.",
      },
      { type: "h2", text: "Dizel Araçlarda Soğuk Çalıştırma" },
      {
        type: "p",
        text: "Dizel motorlar ateşleme için yüksek sıkıştırma ısısına ihtiyaç duyar; soğukta bu ısıyı sağlamak için kızdırma bujileri devreye girer. Bujiler zayıfladığında motor soğukken zor çalışır, çalışsa bile duman yapar ve titrer. Ayrıca kışın uygun yakıt kullanılmadığında mazot parafinleşerek filtreyi tıkayabilir. Bu durumda araç soğukken çalışmaz ya da çalışıp hemen stop eder.",
      },
      { type: "h2", text: "LPG'li Araçlarda Soğuk Sorunu" },
      {
        type: "p",
        text: "LPG'li araçlarda soğukta gazın buharlaşması zorlaşır. Bu nedenle aracı her zaman benzinle çalıştırıp, motor bir miktar ısındıktan sonra otomatik olarak gaza geçmesini beklemek gerekir. 'LPG'li araç soğukken stop ediyor' şikayetinin temel nedeni budur; sistemin doğru ayarlanması ve benzin tarafının sağlam olması sorunu çözer.",
      },
      { type: "h2", text: "Soğukta Çalıştırma İçin Doğru Alışkanlıklar" },
      {
        type: "p",
        text: "Soğuk havalarda aracı çalıştırırken birkaç basit alışkanlık hem motoru korur hem de çalıştırma sorunlarını azaltır. Dizel araçlarda kontağı 'on' konumuna alıp kızdırma bujisi lambasının sönmesini bekledikten sonra marş yapmak, soğuk tutuşmayı kolaylaştırır. Marş sırasında debriyaja basmak, marş motorunun üzerindeki yükü azaltarak zayıf aküye yardımcı olur. Ayrıca araç çalıştıktan hemen sonra yüksek devirde gaz vermek yerine, motorun birkaç dakika düşük devirde ısınmasını beklemek hem yağlamayı iyileştirir hem de motor ömrünü uzatır.",
      },
      {
        type: "p",
        text: "Aracı mümkünse kapalı veya rüzgâr almayan bir alanda park etmek, sabah çalıştırma sorunlarını belirgin şekilde azaltır. Çok soğuk bölgelerde akünün gece koruma altında tutulması da etkili bir önlemdir.",
      },
      { type: "h2", text: "Çalışıp Hemen Stop Ediyorsa" },
      {
        type: "p",
        text: "Soğukta araç çalışıp birkaç saniye sonra stop ediyorsa, bu genellikle yakıt beslemesi ya da rölanti kontrol sistemi kaynaklıdır. Dizelde donmuş veya parafinleşmiş yakıt, benzinli ve LPG'li araçlarda ise soğukta zenginleşmesi gereken karışımın sağlanamaması bu duruma yol açar. Bu belirti, motor ısındığında kaybolsa bile altta yatan bir arızaya işaret edebileceği için kontrol ettirilmelidir. Sorunu sürekli benzinle çalıştırarak veya gaz vererek aşmaya çalışmak, yalnızca arızayı erteler; doğru olan, çalıştırma güçlüğünün kaynağını soğuk havalar yerleşmeden tespit ettirmektir.",
      },
      { type: "h2", text: "Kış Bakımı ve Ankara'da Çözüm" },
      {
        type: "p",
        text: "Kış gelmeden akü, kızdırma bujileri, yakıt filtresi ve şarj sisteminin kontrol edilmesi soğuk sabah sürprizlerini önler. Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da akü ve şarj testi, kızdırma sistemi kontrolü ve soğuk çalıştırma arızalarının tespitini yapıyoruz. Aracınız soğukta zor çalışıyor ya da hiç çalışmıyorsa, kış sizi yolda bırakmadan kontrol ettirin.",
      },
    ],
    faqs: [
      {
        q: "Soğukta araba neden zor çalışır?",
        a: "Düşük sıcaklık akü performansını ve yağ akışkanlığını düşürür, dizelde yakıtın tutuşmasını zorlaştırır. Zayıf bir akü veya kızdırma bujisi bu durumda kendini gösterir.",
      },
      {
        q: "Sabah araba çalışmıyorsa ne yapmalı?",
        a: "Önce farların parlaklığına bakarak akü durumunu değerlendirin. Akü zayıfsa test ettirin; dizelde kızdırma ve yakıt sistemi kontrol edilmelidir.",
      },
      {
        q: "LPG'li araç soğukta neden stop eder?",
        a: "Soğukta gaz iyi buharlaşamaz. Aracı benzinle çalıştırıp ısındıktan sonra gaza geçmesini beklemek gerekir; sistem ayarı ve benzin tarafı da kontrol edilmelidir.",
      },
    ],
  },
  {
    slug: "seyir-halinde-arac-stop-ediyor",
    title: "Seyir Halinde Araç Stop Ediyor: Nedenleri ve Çözümü",
    description:
      "Araç yolda giderken stop ediyor mu? Yakıt, krank sensörü, elektrik ve dizel sistem kaynaklı nedenler ve Ankara'da arıza tespiti.",
    excerpt:
      "Aracın seyir halindeyken aniden stop etmesi hem tehlikeli hem de can sıkıcıdır. Arkasındaki yaygın nedenleri inceliyoruz.",
    keywords: [
      "seyir halinde aracın stop etmesi",
      "dizel araç yolda giderken neden stop eder",
      "dizel araç giderken neden stop eder",
      "araç çalışıyor sonra stop ediyor",
      "otomatik araba neden stop eder",
    ],
    category: "Arıza Tespiti",
    date: "2026-05-13",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Aracın seyir halindeyken, yani yolda giderken aniden stop etmesi, sürücü güvenliği açısından ciddiye alınması gereken bir arızadır. Direksiyon ve fren hidroliği desteği kesileceği için tehlikeli durumlar oluşabilir. Bu arıza genellikle motorun çalışması için gereken yakıt, ateşleme ya da sensör sinyallerinden birinin anlık olarak kesilmesinden kaynaklanır. Çoğu zaman sorun, tam olarak araç hareket halindeyken ya da belirli bir sıcaklığa ulaştığında ortaya çıktığı için tespiti zordur. Bu nedenle stop etme arızaları, sabırlı ve sistematik bir yaklaşım gerektirir.",
      },
      { type: "h2", text: "Seyir Halinde Stop Etmenin Nedenleri" },
      {
        type: "ul",
        items: [
          "Krank veya eksantrik mil konum sensörü (CKP/CMP) arızası",
          "Yakıt pompası zayıflığı veya yakıt basıncı düşüklüğü",
          "Tıkalı yakıt filtresi",
          "Elektrik tesisatında temassızlık, gevşek kütle (şase) bağlantısı",
          "Dizel araçlarda yakıt sistemine hava girmesi, mazot pompası arızası",
          "Immobilizer veya anahtar sinyalinde kesinti",
          "Devir (rölanti) kontrol sistemi ya da gaz kelebeği arızası",
        ],
      },
      { type: "h2", text: "Krank Sensörü: En Sık Sebep" },
      {
        type: "p",
        text: "Krank mili konum sensörü, motorun çalışması için kritik olan devir ve konum bilgisini beyne gönderir. Bu sensör ısındığında sinyal kesen tipte bir arıza yaptığında, araç bir süre çalışır, ardından aniden stop eder; soğuyunca tekrar çalışır. 'Araç çalışıyor sonra stop ediyor' şikayetinin klasik nedenlerinden biri budur ve ancak canlı veriyle yakalanabilir.",
      },
      { type: "h2", text: "Dizel Araçlarda Yolda Stop Etme" },
      {
        type: "p",
        text: "Dizel araçlarda 'yolda giderken neden stop eder' sorusunun yanıtı çoğunlukla yakıt beslemesindedir. Yakıt sistemine giren hava, zayıflamış mazot pompası, tıkalı filtre veya yüksek basınç sistemindeki bir kaçak, motorun aniden susmasına yol açar. Özellikle yokuş, viraj ya da fren gibi yakıt seviyesinin kaydığı anlarda stop etme, hava kaçağına işaret edebilir.",
      },
      { type: "h2", text: "Otomatik Araçlarda Stop Etme" },
      {
        type: "p",
        text: "Otomatik vitesli araçlarda durma anlarında ya da rölantide stop etme genellikle gaz kelebeği kirliliği, rölanti kontrol arızası ya da düşük yakıt basıncı kaynaklıdır. Bazı araçlarda Start-Stop sisteminin devreye girmesi normal bir stop sanılabilir; gerçek arıza ile sistem fonksiyonunu ayırt etmek için bilgisayarlı kontrol gerekir.",
      },
      { type: "h2", text: "Stop Ettiğinde Güvenli Davranış" },
      {
        type: "p",
        text: "Araç seyir halindeyken stop ettiğinde motor durur ancak fren ve direksiyon tamamen kilitlenmez; yalnızca hidrolik destek azalır. Bu nedenle panik yapmadan dörtlüleri yakıp, frene ve direksiyona daha güçlü kuvvet uygulayarak aracı güvenli bir şekilde yol kenarına almak gerekir. Vites kolunu boşa alıp aracı tekrar çalıştırmayı denemek çoğu zaman mümkündür; ancak araç sürekli stop ediyorsa zorlamak yerine çekici çağırmak en güvenli yoldur.",
      },
      {
        type: "p",
        text: "Otoyol gibi yüksek hızlı yollarda stop etme ciddi risk taşır. Bu tür bir olay yaşadıysanız, araç sonradan normal çalışsa bile arızanın tekrarlama ihtimali yüksektir; bu yüzden ilk fırsatta kontrol ettirmek hayati önem taşır.",
      },
      { type: "h2", text: "Aralıklı Arızalar Neden Zor Bulunur?" },
      {
        type: "p",
        text: "Seyir halinde stop etme gibi aralıklı arızalar, servise gelindiğinde çoğu zaman kendini göstermez; araç tezgâhta sorunsuz çalışır. İşte bu noktada motor beynine kaydedilen arıza geçmişi ve donma karesi (freeze frame) verileri devreye girer. Bu veriler, arızanın hangi koşullarda (hız, sıcaklık, devir) oluştuğunu gösterir ve ustaya değerli ipuçları sunar. Doğru yorumlandığında, araç o an arıza vermese bile kök neden bulunabilir.",
      },
      { type: "h2", text: "Bu Arızada Doğru Yaklaşım" },
      {
        type: "p",
        text: "Seyir halinde stop etme, kesintili (aralıklı) bir arıza olduğu için en zor teşhis edilen sorunlardandır; çünkü servise geldiğinde araç sorunsuz çalışıyor olabilir. Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da bu tür arızalarda kayıtlı arıza geçmişini ve donma kareleri (freeze frame) verilerini okur, canlı veri ile sensör sinyallerini izleyerek kök nedeni tespit ederiz. Aracınız yolda stop ediyorsa güvenliğiniz için vakit kaybetmeden bize başvurun.",
      },
    ],
    faqs: [
      {
        q: "Araç seyir halinde neden aniden stop eder?",
        a: "En sık nedenler krank sensörü arızası, yakıt basıncı düşüklüğü, yakıt sistemine hava girmesi ve elektrik tesisatındaki temassızlıktır. Kesin neden bilgisayarlı tespitle bulunur.",
      },
      {
        q: "Stop edip sonra tekrar çalışan araçta sorun nedir?",
        a: "Isındığında sinyal kesen krank sensörü ya da ısıyla etkilenen elektrik bağlantıları tipik nedendir. Canlı veri ile sinyal takibi yapılmalıdır.",
      },
      {
        q: "Yolda stop eden araçla devam edilir mi?",
        a: "Seyir halinde stop etme güvenlik riski taşır; direksiyon ve fren desteği kesilebilir. Arıza giderilene kadar aracı kullanmamak ve en kısa sürede tespit ettirmek gerekir.",
      },
    ],
  },
  {
    slug: "arac-yillik-periyodik-bakim-rehberi",
    title: "Araç Yıllık (Periyodik) Bakımı: Neler Değişir, Nasıl Yapılır?",
    description:
      "Araç yıllık ve periyodik bakımında neler yapılır, hangi parçalar değişir, kaç km'de bir bakım gerekir? Ankara'da güvenilir periyodik bakım.",
    excerpt:
      "Periyodik bakım, arızaları oluşmadan önlemenin en ekonomik yoludur. İşte yıllık bakımda neler yapıldığı ve nelere dikkat edilmesi gerektiği.",
    keywords: [
      "araç periyodik bakım",
      "yıllık araç bakımı",
      "periyodik bakımda neler değişir",
      "araç bakımı kaç km",
      "oto bakım ankara",
    ],
    category: "Bakım",
    date: "2026-05-22",
    readMins: 7,
    body: [
      {
        type: "p",
        text: "Periyodik bakım, aracınızın üretici tarafından belirlenen aralıklarla kontrol edilip aşınan parçalarının yenilenmesidir. Amaç, bir arıza ortaya çıkmadan önce risk taşıyan bileşenleri tespit edip değiştirmek; böylece hem güvenliği artırmak hem de büyük ve masraflı arızaların önüne geçmektir. Düzenli bakım yapılan bir araç daha az yakıt tüketir, daha az arıza çıkarır ve ikinci el değerini korur. Bu yüzden bakım, bir masraf değil, akıllı bir yatırımdır.",
      },
      { type: "h2", text: "Periyodik Bakım Kaç Kilometrede Bir Yapılır?" },
      {
        type: "p",
        text: "Bakım aralığı araç markası, motor tipi ve kullanım koşullarına göre değişir. Genel olarak benzinli araçlarda her 15.000 km veya yılda bir, dizel araçlarda ise 10.000–20.000 km arasında bakım önerilir. Ancak şehir içi kısa mesafe, tozlu yol veya ağır yük gibi zorlu koşullarda bu aralık kısalır. En doğru bilgi aracınızın kullanım kılavuzunda yer alır; yine de yılda en az bir kez genel kontrol her araç için faydalıdır.",
      },
      { type: "h2", text: "Yıllık Bakımda Neler Yapılır?" },
      {
        type: "ul",
        items: [
          "Motor yağı ve yağ filtresi değişimi",
          "Hava filtresi, polen (kabin) filtresi ve yakıt filtresi kontrolü/değişimi",
          "Buji kontrolü (benzinli) ve gerekiyorsa değişimi",
          "Fren balatası, disk ve fren hidroliği kontrolü",
          "Akü ve şarj sistemi testi",
          "Triger/aksesuar kayışı ve devirdaim kontrolü",
          "Antifriz, direksiyon ve cam suyu seviyeleri",
          "Lastik diş derinliği, basınç ve rot balans kontrolü",
          "Bilgisayarlı arıza taraması (hata kodu kontrolü)",
        ],
      },
      { type: "h2", text: "Hangi Parçalar Düzenli Olarak Değişir?" },
      {
        type: "p",
        text: "Bazı parçalar belirli aralıklarla mutlaka değişmesi gereken sarf malzemeleridir. Motor yağı ve yağ filtresi her bakımda yenilenir. Hava ve polen filtresi genellikle yılda bir, yakıt filtresi ve bujiler ise belirli kilometrelerde değişir. Triger kayışı ise atlanmaması gereken en kritik kalemlerden biridir: kopması halinde motor ciddi ve pahalı şekilde zarar görebilir. Bu yüzden triger değişim aralığı (genelde 60.000–150.000 km arası, modele göre) titizlikle takip edilmelidir.",
      },
      { type: "h2", text: "Bakımı İhmal Etmenin Sonuçları" },
      {
        type: "p",
        text: "Bakımı geciktirmek kısa vadede tasarruf gibi görünse de, uzun vadede çok daha pahalıya mal olur. Zamanında değişmeyen yağ motoru aşındırır, tıkalı filtre performansı düşürür, eskiyen balata fren mesafesini uzatarak güvenliği tehlikeye atar. Ayrıca düzenli bakımı yapılmayan araçlarda küçük sorunlar zincirleme büyüyerek motor veya şanzıman gibi yüksek maliyetli arızalara dönüşebilir.",
      },
      { type: "h2", text: "Küçük Bakım ve Büyük Bakım Farkı" },
      {
        type: "p",
        text: "Servislerde sık duyduğunuz 'küçük bakım' ve 'büyük bakım' kavramları, yapılan işlemlerin kapsamını ifade eder. Küçük bakım genellikle motor yağı, yağ filtresi ve temel kontrolleri içerir; daha kısa aralıklarla yapılır. Büyük bakım ise bunlara ek olarak hava ve yakıt filtresi, buji, fren sistemi, kayış kontrolü ve daha kapsamlı bir gözden geçirmeyi kapsar ve belirli kilometre dönümlerinde uygulanır. Hangi bakımın zamanı geldiğini aracın kilometresi ve son bakım geçmişi belirler.",
      },
      { type: "h2", text: "Bakım Defteri ve Araç Değeri" },
      {
        type: "p",
        text: "Düzenli tutulan bir bakım geçmişi, aracın gelecekteki değerini doğrudan etkiler. İkinci el alıcılar, bakımları zamanında ve eksiksiz yapılmış araçlara daha fazla güvenir ve daha yüksek fiyat öder. Ayrıca düzenli bakım, aracın garanti kapsamının korunması açısından da önemlidir. Bu nedenle yapılan her bakımın kayıt altına alınması, hem güven hem de ekonomik değer sağlar.",
      },
      { type: "h2", text: "Ankara'da Periyodik Bakım için Can Oto" },
      {
        type: "p",
        text: "Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da tüm marka ve modellerde periyodik bakım hizmeti veriyoruz. Bakım sırasında yalnızca sarf parçalarını değiştirmekle kalmıyor, bilgisayarlı tarama ile aracınızın elektronik sağlığını da kontrol ediyor; oluşmakta olan arızaları erkenden tespit ediyoruz. Aracınızın bakım zamanı geldiyse bizi arayın ya da WhatsApp'tan yazın.",
      },
    ],
    faqs: [
      {
        q: "Araç bakımı kaç kilometrede bir yapılmalı?",
        a: "Genellikle benzinli araçlarda 15.000 km veya yılda bir, dizel araçlarda 10.000–20.000 km arası önerilir. Kesin aralık marka ve kullanım koşullarına göre değişir; kullanım kılavuzu en doğru kaynaktır.",
      },
      {
        q: "Periyodik bakımda hangi parçalar değişir?",
        a: "Motor yağı ve yağ filtresi her bakımda; hava, polen ve yakıt filtreleri ile bujiler belirli aralıklarla değişir. Triger kayışı da modele göre belirlenen kilometrede mutlaka yenilenmelidir.",
      },
      {
        q: "Az kullanılan araçta da yıllık bakım gerekir mi?",
        a: "Evet. Az kullanılsa bile motor yağı ve sıvılar zamanla özelliğini kaybeder, akü zayıflar. Bu nedenle düşük kilometreli araçlarda bile yılda bir bakım önerilir.",
      },
    ],
  },
  {
    slug: "balata-degisimi-belirtileri-ve-nasil-yapilir",
    title: "Balata Değişimi: Belirtileri, Ne Zaman ve Nasıl Yapılır?",
    description:
      "Fren balatası ne zaman değişir, belirtileri nelerdir, nasıl değiştirilir? Disk ve balata değişimi hakkında bilmeniz gerekenler. Ankara Can Oto.",
    excerpt:
      "Frende ses, titreme ya da uzayan fren mesafesi balatalarınızın bittiğine işaret olabilir. Balata değişimi hakkında her şey.",
    keywords: [
      "balata değişimi",
      "fren balatası ne zaman değişir",
      "balata değişim belirtileri",
      "disk ve balata değişimi",
      "fren balatası ankara",
    ],
    category: "Bakım",
    date: "2026-05-21",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Fren balataları, aracınızın durması için sürtünme sağlayan ve zamanla aşınan güvenlik parçalarıdır. Frene her bastığınızda balata, dönen fren diskine baskı yaparak aracı yavaşlatır; bu sürtünme nedeniyle balata kademeli olarak incelir. Belirli bir kalınlığın altına indiğinde fren performansı düşer ve değişmesi gerekir. Balata, doğrudan can güvenliğinizi ilgilendirdiği için ihmal edilmemesi gereken bakım kalemlerinin başında gelir. Frenler aracınızın en önemli güvenlik sistemidir; ne kadar güçlü bir motora sahip olursanız olun, güvenle durabilmek aşınmamış balatalara bağlıdır. Bu yüzden balata durumu, sadece bir konfor meselesi değil, doğrudan hayati bir konudur.",
      },
      { type: "h2", text: "Balata Değişimi Belirtileri" },
      {
        type: "ul",
        items: [
          "Fren yaparken metalik cızırtı veya gıcırtı sesi",
          "Fren pedalında titreme ya da zorlanma hissi",
          "Fren mesafesinin uzaması, aracın geç durması",
          "Gösterge panelinde fren balatası uyarı lambasının yanması",
          "Direksiyonda fren sırasında bir tarafa çekme",
          "Jant üzerinde aşırı fren tozu birikmesi",
        ],
      },
      { type: "h2", text: "Balata Ne Zaman Değişir?" },
      {
        type: "p",
        text: "Balata ömrü; sürüş tarzı, araç ağırlığı ve kullanım koşullarına göre büyük değişkenlik gösterir. Genel olarak ön balatalar 30.000–50.000 km, arka balatalar ise daha uzun aralıklarla değişir. Ancak sık fren gerektiren şehir içi trafikte veya agresif sürüşte bu süre kısalır. Kilometreden bağımsız olarak, yukarıdaki belirtilerden biri ortaya çıktığında veya periyodik bakımda balata kalınlığı sınır değere yaklaştığında değişim yapılmalıdır.",
      },
      { type: "h2", text: "Balata Değişimi Nasıl Yapılır?" },
      {
        type: "p",
        text: "Balata değişimi, tekerlek söküldükten sonra fren kaliperinin açılması, eski balataların çıkarılıp yenilerinin takılmasıyla yapılır. İşlem sırasında fren diski de kontrol edilir; disk belirli bir aşınma sınırının altındaysa ya da yüzeyinde derin çizik/çarpıklık varsa disk de değiştirilir. Kaliper pistonu geri itilir, balata yuvaları temizlenir ve gerekli noktalara uygun gres uygulanır. Değişim sonrası fren pedalı birkaç kez basılarak sistem oturtulur ve test sürüşü yapılır.",
      },
      { type: "h2", text: "Sadece Balata mı, Disk de Değişmeli mi?" },
      {
        type: "p",
        text: "Her balata değişiminde disk değişmesi gerekmez. Diskler genellikle iki balata ömrüne kadar dayanabilir. Ancak disk yüzeyi aşırı aşınmış, ısınmadan dolayı çarpılmış ya da kalınlığı üretici sınırının altına inmişse, yeni balatalar takılsa bile frenleme verimli olmaz ve titreme yaşanır. Bu yüzden balata değişiminde diskin durumu mutlaka ölçülerek değerlendirilmelidir.",
      },
      { type: "h2", text: "Ön ve Arka Balatalar Neden Farklı Aşınır?" },
      {
        type: "p",
        text: "Fren yapıldığında aracın ağırlığı öne doğru aktarıldığı için frenleme kuvvetinin büyük kısmını ön frenler karşılar. Bu nedenle ön balatalar arka balatalara göre çok daha hızlı aşınır ve genellikle daha sık değişir. Arka balatalar ise daha uzun ömürlüdür; ancak el freni ve elektronik fren sistemleriyle de çalıştıkları için durumları ihmal edilmemelidir. Bu fark, balata değişiminde ön ve arka tarafın ayrı ayrı değerlendirilmesini gerektirir. Ön balatalar bittiğinde arka balatalarda hâlâ ömür kalmış olabilir; bu yüzden dört tekerleği birden değiştirmek her zaman gerekli değildir, önemli olan her aksın gerçek aşınma durumunu ölçmektir.",
      },
      { type: "h2", text: "Balata Ömrünü Uzatmak İçin İpuçları" },
      {
        type: "ul",
        items: [
          "Ani ve sert frenlerden mümkün olduğunca kaçının; öngörülü sürün.",
          "Trafikte mesafeyi koruyarak gereksiz fren kullanımını azaltın.",
          "Yokuş aşağı inişlerde motor freninden (vites küçültme) yararlanın.",
          "Frenlerde ses veya titreme başladığında erken kontrol ettirin.",
        ],
      },
      {
        type: "p",
        text: "Bu basit alışkanlıklar hem balata hem de disk ömrünü belirgin şekilde uzatır, aynı zamanda yakıt ekonomisine de katkı sağlar. Frenleri doğru kullanmak, hem güvenlik hem de bütçe açısından kazançlıdır.",
      },
      { type: "h2", text: "Ankara'da Balata Değişimi için Can Oto" },
      {
        type: "p",
        text: "Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da fren balatası ve disk kontrolü ile değişimini güvenle yapıyoruz. Frenlerinizde ses, titreme veya zayıflama hissediyorsanız, güvenliğinizi riske atmadan kontrol ettirin. Doğru parça ve doğru montajla frenlerinizi ilk günkü performansına kavuşturuyoruz.",
      },
    ],
    faqs: [
      {
        q: "Fren balatası ne zaman değişir?",
        a: "Ön balatalar genellikle 30.000–50.000 km arasında değişir; ancak fren sırasında ses, titreme ya da uzayan fren mesafesi gibi belirtiler ortaya çıktığında kilometreden bağımsız olarak kontrol ettirilmelidir.",
      },
      {
        q: "Balata değişirken disk de değişmeli mi?",
        a: "Her zaman gerekmez. Disk, üretici aşınma sınırının üzerindeyse ve yüzeyi düzgünse kullanılmaya devam edilir. Aşınmış, çarpılmış veya inceltilmiş disklerde ise balatayla birlikte değişim önerilir.",
      },
      {
        q: "Balatası biten araç kullanılır mı?",
        a: "Önerilmez. Aşırı aşınmış balata fren mesafesini uzatır ve diske zarar vererek hem güvenliği hem de onarım maliyetini artırır. En kısa sürede değiştirilmelidir.",
      },
    ],
  },
  {
    slug: "marka-bazinda-periyodik-bakim-farklari",
    title: "Marka Bazında Periyodik Bakım Farkları: Hangi Araçta Ne Değişir?",
    description:
      "Opel, Ford, Fiat, Renault, Volkswagen ve diğer markalarda periyodik bakım farkları, değişen parçalar ve bakım aralıkları. Ankara Can Oto bakım rehberi.",
    excerpt:
      "Her marka aynı bakımı istemez; bakım aralıkları, triger tipi ve değişen parçalar markaya göre farklılaşır. İşte marka bazında öne çıkan farklar.",
    keywords: [
      "marka bazında periyodik bakım",
      "opel periyodik bakım",
      "ford periyodik bakım",
      "fiat periyodik bakım",
      "volkswagen periyodik bakım",
    ],
    category: "Bakım",
    date: "2026-05-23",
    readMins: 7,
    body: [
      {
        type: "p",
        text: "Periyodik bakımın temel mantığı tüm araçlarda aynı olsa da, hangi parçanın ne zaman değişeceği ve bakım aralığı markadan markaya, hatta aynı markanın farklı motor seçeneklerine göre değişir. Üretici, her model için özel bir bakım planı belirler; doğru servis bu plana ve aracın gerçek durumuna göre hareket eder. Bu yazıda yaygın markalarda öne çıkan bakım farklarını ele alıyoruz. Aşağıdaki bilgiler genel eğilimleri yansıtır; kesin değerler her zaman aracın kullanım kılavuzundan ve şasi/motor koduna özel kataloglardan teyit edilmelidir.",
      },
      { type: "h2", text: "Bakım Aralıkları Neden Markaya Göre Değişir?" },
      {
        type: "p",
        text: "Bakım aralığını belirleyen en önemli etken motor teknolojisidir. Bazı markalar uzun ömürlü (long-life) yağ ve filtre kullanarak bakım aralığını 20.000–30.000 km'ye çıkarırken, bazıları daha sık bakım önerir. Ayrıca triger kayışı yerine zincir (eksantrik zinciri) kullanan motorlarda kayış değişimi gerekmez; bu da bakım planını köklü biçimde değiştirir. Turbo, DPF veya çift kavramalı şanzıman gibi sistemler ise markaya özel ek bakım kalemleri getirir.",
      },
      { type: "h2", text: "Yaygın Markalarda Öne Çıkan Bakım Farkları" },
      {
        type: "ul",
        items: [
          "Fiat / Egea, Doblo, Multijet dizeller: Yakıt filtresi ve mazot sistemine özen, triger kayışı takibi ve EGR temizliği öne çıkar.",
          "Renault / Megane, Clio, Symbol: Triger ve devirdaim seti birlikte değerlendirilir; bazı dizellerde yakıt sistemi hassasiyeti yüksektir.",
          "Volkswagen / Passat, Polo, Golf: TSI/TDI motorlarda zincir veya kayış ayrımı, DSG şanzıman yağı ve kaliteli yağ seçimi kritiktir.",
          "Opel / Astra, Corsa: Motor tipine göre kayış/zincir farkı ve PCV/karter havalandırma kontrolü önemlidir.",
          "Ford / Focus, Fiesta, Transit: EcoBoost ve TDCi motorlarda yağ kalitesi ve yakıt filtresi takibi öne çıkar.",
          "Audi / BMW / Mercedes: Long-life servis konsepti, özel yağ normları ve elektronik servis sıfırlama (service reset) gerektirir.",
        ],
      },
      { type: "h2", text: "Triger Kayışı mı, Zincir mi?" },
      {
        type: "p",
        text: "Bakım planındaki en büyük marka/model farklarından biri, motorun triger kayışı mı yoksa zincir mi kullandığıdır. Kayışlı motorlarda kayış, gergi rulmanı ve çoğu zaman devirdaim belirli kilometrede (modele göre 60.000–150.000 km) set halinde değişmelidir; aksi halde kopma motoru hurdaya çıkarabilir. Zincirli motorlarda ise zincir ömürlüktür ancak gergi sistemi ve yağ kalitesi yakından takip edilmelidir. Aracınızın hangi sisteme sahip olduğunu bilmek, bakım bütçenizi doğru planlamanın anahtarıdır.",
      },
      { type: "h2", text: "Doğru Bakım için Markaya Özel Yaklaşım" },
      {
        type: "p",
        text: "Marka farklarını bilmek, hem gereksiz işlemlerden kaçınmayı hem de kritik bir bakımı atlamamayı sağlar. Yanlış yağ normu kullanmak, atlanan bir triger değişimi ya da göz ardı edilen bir DPF bakımı, sonradan çok yüksek maliyetli arızalara yol açabilir. Bu yüzden bakım, markaya ve modele özel bilgi gerektiren bir iştir.",
      },
      { type: "h2", text: "Yedek Parçada Marka Uyumu" },
      {
        type: "p",
        text: "Marka bazında bir diğer önemli fark, kullanılan yedek parçanın araca uygunluğudur. Aynı işlevi gören bir filtre veya balata, farklı markalarda farklı ölçü ve teknik özelliklere sahip olabilir. Orijinal ya da orijinal kalitesinde (OEM) parça kullanmak, özellikle fren, filtre ve kayış gibi kritik bileşenlerde performans ve güvenlik açısından belirleyicidir. Ucuz ama uyumsuz bir parça, kısa sürede yeni arızalara ve tekrar eden masraflara yol açabilir. Bu nedenle markaya uygun, doğru parça seçimi bakımın ayrılmaz bir parçasıdır.",
      },
      { type: "h2", text: "Ankara'da Markaya Özel Bakım için Can Oto" },
      {
        type: "p",
        text: "Can Oto Mekanik & Elektrik Özel Servisi olarak Ankara'da her markanın kendi bakım planına uygun, modele özel periyodik bakım yapıyoruz. Doğru yağ normu, doğru parça ve gerektiğinde elektronik servis sıfırlama ile aracınıza üreticinin öngördüğü bakımı sağlıyoruz. Aracınızın markasına özel bakım için bizimle iletişime geçin.",
      },
    ],
    faqs: [
      {
        q: "Her marka aynı bakım aralığına mı sahiptir?",
        a: "Hayır. Bakım aralığı motor teknolojisine ve markaya göre değişir; bazı araçlar 15.000 km'de, bazıları long-life yağ ile 30.000 km'ye kadar bakım gerektirir. Kullanım kılavuzu esas alınmalıdır.",
      },
      {
        q: "Aracımın triger kayışlı mı zincirli mi olduğunu nasıl öğrenirim?",
        a: "Bu bilgi aracın motor koduna bağlıdır ve kullanım kılavuzundan ya da servis kontrolüyle öğrenilir. Kayışlı motorlarda belirli kilometrede set değişimi şarttır; zincirli motorlarda yağ ve gergi takibi önemlidir.",
      },
      {
        q: "Farklı marka aracın bakımını aynı serviste yaptırabilir miyim?",
        a: "Evet. Markaya özel bakım planını, doğru yağ normunu ve uygun parçaları uygulayan bir servis, farklı markaların bakımını güvenle yapabilir. Önemli olan modele özel gereksinimlerin bilinmesidir.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function blockToText(b: Block): string {
  if (b.type === "ul") return b.items.join(" ");
  return b.text;
}
