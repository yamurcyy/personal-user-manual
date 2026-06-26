// ============================================================
// KULLANIM KILAVUZU VERİSİ
// Kendini bir ürün gibi tanıtma sayfası — eğlenebilirsin!
// ============================================================

import type { ManualData } from "../types";

export const manualData: ManualData = {
  productName: "İNSAN v2.5 — Adın Soyadın Modeli",
  version: "25.1.0",
  serialNumber: "TR-IST-2000-XXXXXX",
  manufacturingDate: "01.01.2000",

  // ── Teknik Özellikler Tablosu ─────────────────────────────
  specs: [
    {
      category: "İşlemci & Bellek",
      specs: [
        { label: "CPU", value: "İnsan Beyni™ v1 (86 milyar nöron)" },
        { label: "RAM", value: "Sınırsız (yavaş erişim)" },
        { label: "Depolama", value: "Duygusal hafıza: yüksek kapasiteli" },
        { label: "Önbellek", value: "Son 3 utanç anı hep aktif" },
        { label: "İşlem hızı", value: "Kahvesiz: 0.3x | Kahveli: 1.0x" },
      ],
    },
    {
      category: "Giriş / Çıkış",
      specs: [
        { label: "Dil desteği", value: "Türkçe (ana), İngilizce (B2+)" },
        { label: "Tercih edilen girdi", value: "Yazılı metin, podcast, kitap" },
        { label: "Ses çıkışı", value: "Düşük sesli, net" },
        { label: "Beden dili", value: "Sakin, bazen jestli" },
        { label: "Göz teması", value: "Yeterli miktarda" },
      ],
    },
    {
      category: "Performans",
      specs: [
        { label: "Odak süresi", value: "2–4 saat (flow state)" },
        { label: "Çoklu görev", value: "Desteklenmiyor — lütfen sıra bekleyin" },
        { label: "Hata toleransı", value: "Yüksek (kendininkiler için düşük)" },
        { label: "Gece modu", value: "Aktif — sabah tepkisi gecikebilir" },
        { label: "Güç tüketimi", value: "Yüksek kahve, düşük sosyal enerji" },
      ],
    },
    {
      category: "Bağlantı",
      specs: [
        { label: "İnsan arayüzü", value: "1-1 bağlantı tercih edilir" },
        { label: "Grup boyutu", value: "Optimal: 2–5 kişi" },
        { label: "Tepki süresi", value: "Mesaj: 2–24 saat | Acil: hemen" },
        { label: "Güven protokolü", value: "Yavaş başlar, kararlı kalır" },
      ],
    },
  ],

  // ── Kurulum Talimatları ───────────────────────────────────
  installation: [
    {
      step: 1,
      title: "İlk temas",
      description:
        "Selam ver. Basit bir konuyla başla — teknoloji, kitap veya fikirleri iyi çalışır. Küçük konuşmaya toleransı sınırlıdır.",
      duration: "~5 dakika",
      tip: "Doğrudan ve ilgi çekici ol. Yüzeysel sorulardan kaçın.",
    },
    {
      step: 2,
      title: "Bağlantı kurma",
      description:
        "Ortak bir ilgi alanı bul. Kitap, müzik veya proje önerisi güçlü bir bağlantı noktasıdır. Sabırlı ol — güven yavaş inşa edilir.",
      duration: "~1–4 hafta",
      tip: "Merak göster. Sahte ilgi hemen fark edilir.",
    },
    {
      step: 3,
      title: "Kalibrasyon",
      description:
        "Doğrudan iletişimi dene. Açık uçlu sorular sor. Kibarca farklı fikir belirtmekten çekinme — bu bağlantıyı güçlendirir.",
      duration: "Birkaç ay",
    },
    {
      step: 4,
      title: "Tam entegrasyon",
      description:
        "Bu noktada ortak bir dil gelişmiş olur. İçten paylaşımlara, uzun sohbetlere ve karşılıklı derinliğe hazır.",
      tip: "Nimet: bu aşamdaki insanlar uzun süre kalır.",
    },
  ],

  // ── Garanti ───────────────────────────────────────────────
  warranty: {
    duration: "Ömür boyu (koşullar uygulanır)",
    coverage: [
      "Dürüst, tutarlı davranış",
      "Söz verilirse tutulur",
      "Zor anlarda destek",
      "Eleştiri kabul edilir (yapıcı olması şartıyla)",
      "Merak ve öğrenme kapasitesi",
    ],
    notCovered: [
      "Sabah 7'den önce mantıklı konuşma",
      "Hafif besin miktarında yüksek verim beklentisi",
      "Haftalık büyük sosyal etkinlikler",
      "Küçük konuşma (small talk) sonsuz sabrı",
    ],
    supportContact: "Doğrudan mesaj — en hızlı kanal",
  },

  // ── Bakım Önerileri ───────────────────────────────────────
  maintenance: [
    {
      frequency: "Günlük",
      tasks: [
        "En az 1 fincan kahve (tercihen sabah)",
        "Gürültüsüz çalışma süresi (deep work)",
        "Yürüyüş veya hafif egzersiz",
        "Ekrandan uzak kısa molalar",
      ],
    },
    {
      frequency: "Haftalık",
      tasks: [
        "En az 1 kitap seansı (60+ dk)",
        "Proje üzerine refleksiyon",
        "Sosyal bağlantı — küçük grup, derin sohbet",
      ],
    },
    {
      frequency: "Aylık",
      tasks: [
        "Hedef gözden geçirme",
        "Yeni bir şey öğrenme başlangıcı",
        "Dijital temizlik (notlar, dosyalar, abonelikler)",
      ],
    },
  ],

  // ── Sık Karşılaşılan Sorunlar ────────────────────────────
  troubleshooting: [
    {
      problem: "Yanıt vermeme / sessizlik",
      symptoms: [
        "Mesajlara geç cevap verme",
        "Kısa, düz yanıtlar",
        "Sohbeti sürdürmeme",
      ],
      solution:
        "Büyük ihtimalle aşırı yüklenme veya düşünme modu aktif. Baskı yapma — kendi başına döner. Alternatif: ilginç bir konu öner, genellikle işe yarar.",
      severity: "low",
    },
    {
      problem: "Kritik mod",
      symptoms: [
        "Detaylı analiz ve itirazlar",
        "'Ama şöyle de düşünebiliriz ki' cümleleri",
        "Mükemmeliyetçi yorumlar",
      ],
      solution:
        "Bu kötü bir işaret değil — ilgilendiği konularda olur. 'Sadece genel bir fikir paylaştım' demek yerine tartışmaya katıl; daha iyi sonuç verir.",
      severity: "low",
    },
    {
      problem: "Enerji düşüklüğü",
      symptoms: [
        "Uzun cümle kuramama",
        "Karar verememe",
        "Her şeyin 'fark etmez' olması",
      ],
      solution:
        "Kahve + sessiz ortam + 20 dakika kısa yürüyüş. Acil durum protokolü: favori müzik listesi.",
      severity: "medium",
    },
    {
      problem: "Aşırı odak / kaybolma",
      symptoms: [
        "Saatlerce yanıt vermeme",
        "Yemek, su unutma",
        "Zaman algısı kaybı",
      ],
      solution:
        "Flow state'e girilmiş — müdahale etme. İşi bitince kendisi çıkar. Acil durum için: fiziksel dokunuş veya yüksek sesle isim.",
      severity: "low",
    },
  ],

  // ── Uyarı Kutuları ────────────────────────────────────────
  warnings: [
    {
      type: "danger",
      title: "Pasif agresiflik uyumsuz",
      description:
        "Bu model pasif agresif iletişimi işleyemez. Doğrudan söyle, anlar. Söylemezsen anlamaz — ve çözüm de üretemez.",
      icon: "⚠️",
    },
    {
      type: "warning",
      title: "Sabah uyarısı",
      description:
        "08:00'den önce bağlantı kalitesi düşük olabilir. Kritik konuşmalar için kahve sonrasını bekle.",
      icon: "☕",
    },
    {
      type: "info",
      title: "Sessizlik ≠ sorun",
      description:
        "Uzun süre sessiz kalması düşünce modunu işaret eder. İyi bir şey geliyor demektir.",
      icon: "🔇",
    },
    {
      type: "tip",
      title: "Bonus özellik",
      description:
        "Kitap, müzik veya ilginç bir fikir getirirsen ekstra enerji üretir. Test edilmiş, tekrarlanabilir.",
      icon: "💡",
    },
  ],

  // ── Eğlenceli Teknik Notlar ───────────────────────────────
  funFacts: [
    "Favori hata mesajı: 'Undefined is not a function' (hayatta da geçerli)",
    "Terminal renk teması her 3 ayda bir değiştirilir — sebebi bilinmez",
    "Kitaplıkta 'okunacaklar' sırası hiçbir zaman kapanmaz",
    "Kahve tercihini sormak güven oluşturan ilk adımdır",
    "İçgüdüsel olarak dark mode'u tercih eder — neden? 'Göz yormuyor'",
  ],
};
