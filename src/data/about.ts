// ============================================================
// TEMEL BİLGİLER VERİSİ
// Bu dosyayı düzenleyerek tüm "Hakkımda" içeriğini güncellersin
// ============================================================

import type { AboutData } from "../types";

export const aboutData: AboutData = {
  // ── Temel Bilgiler ────────────────────────────────────────
  basics: {
    name: "Adın Soyadın",
    age: 25, // doğum gününde otomatik güncellensin istersen hesapla
    birthdate: "01.01.2000",
    zodiac: "Oğlak",
    zodiacEmoji: "♑",
    location: "İstanbul, Türkiye",
    pronouns: "o/onun",
    tagline: "Kod yazan, kitap okuyan, kahve içen bir insan.",
  },

  // ── Fiziksel Özellikler ───────────────────────────────────
  physical: {
    height: "175 cm",
    eyeColor: "Kahverengi",
    hairColor: "Koyu kahverengi",
    otherNotes: "Sol eliyle yazı yazar. Gözlük takar.",
  },

  // ── Eğitim ────────────────────────────────────────────────
  education: [
    {
      institution: "Üniversite Adı",
      degree: "Lisans",
      field: "Bilgisayar Mühendisliği",
      years: "2018 – 2022",
      status: "graduated",
      highlight: "Mezuniyet derecesi: 3.4/4.0",
    },
    {
      institution: "Online Platform",
      degree: "Sertifika",
      field: "Full-Stack Web Geliştirme",
      years: "2022 – 2023",
      status: "graduated",
      highlight: "React, Node.js, PostgreSQL",
    },
    // Yeni eğitim eklemek için buraya kopyala ↑
  ],

  // ── Kişilik ───────────────────────────────────────────────
  personality: {
    mbti: "INTJ",
    mbtiDescription:
      "Mimar — stratejik düşünen, bağımsız, uzun vadeli planlara odaklanan biri.",
    coreTraits: [
      "Meraklı",
      "Analitik",
      "Doğrudan",
      "Kararlı",
      "Mükemmeliyetçi",
      "Mizahçı",
    ],
    communicationStyle:
      "Doğrudan ve özlü. Gereksiz şeyler söylememeyi tercih ederim.",
    decisionStyle:
      "Veri ve mantık önce gelir. İçgüdüye çok az güvenirim, güvenince de haklı çıkarım.",
    energySource: "introvert",
  },

  // ── İlgi Alanları ─────────────────────────────────────────
  interests: [
    {
      category: "Teknoloji",
      icon: "💻",
      items: [
        "Web geliştirme",
        "Açık kaynak",
        "Yapay zeka",
        "3D grafik",
        "Terminal araçları",
      ],
    },
    {
      category: "Okuma",
      icon: "📚",
      items: [
        "Bilim kurgu",
        "Felsefe",
        "Bilim popüler",
        "Tarih",
      ],
    },
    {
      category: "Müzik",
      icon: "🎵",
      items: [
        "Post-rock",
        "Ambient",
        "Jazz",
        "Elektronik",
      ],
    },
    {
      category: "Diğer",
      icon: "🌱",
      items: [
        "Uzun yürüyüşler",
        "Ev bitkileri",
        "Belgeseller",
        "Satranç",
      ],
    },
    // Yeni kategori eklemek için buraya kopyala ↑
  ],

  // ── 3D Karakter Alanı ─────────────────────────────────────
  character3D: {
    placeholder: true, // kendi modelini ekleyince false yap
    placeholderText: "Karakterin yakında burada olacak ✨",
    // modelPath: "/models/my-character.glb",     // ileride ekle
    // animationName: "idle",                      // ileride ekle
  },
};
