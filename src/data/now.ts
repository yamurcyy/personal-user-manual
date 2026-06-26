// ============================================================
// ŞU AN VERİSİ
// En sık güncellenen dosya — ay sonunda veya önemli değişimde güncelle
// Son güncelleme tarihini mutlaka değiştir
// ============================================================

import type { NowData } from "../types";

export const nowData: NowData = {
  // Son güncelleme — ISO format
  lastUpdated: "2025-01-15",

  // ── Bu Ayki Hedef ─────────────────────────────────────────
  monthlyGoal: {
    month: "Ocak 2025",
    goal: "Kişisel sitemin ilk versiyonunu yayına almak",
    progress: 35,
    subTasks: [
      { task: "Mimari planını tamamla", done: true },
      { task: "Veri katmanını yaz", done: true },
      { task: "3D sahneyi kur", done: false },
      { task: "Sayfa içeriklerini doldur", done: false },
      { task: "Deploy et", done: false },
    ],
  },

  // ── Öğreniyorum ───────────────────────────────────────────
  learning: [
    {
      topic: "React Three Fiber",
      resource: "drei dokümantasyonu + Poimandres örnekleri",
      progress: 40,
      startedAt: "2025-01-01",
      icon: "🎮",
    },
    {
      topic: "3D Modelleme (Blender)",
      resource: "Blender Guru — Donut serisi",
      progress: 20,
      startedAt: "2024-12-15",
      icon: "🍩",
    },
    {
      topic: "Sistem Tasarımı",
      resource: "Designing Data-Intensive Applications kitabı",
      progress: 60,
      startedAt: "2024-11-01",
      icon: "🏗️",
    },
    // Yeni öğrenme eklemek için kopyala ↑
  ],

  // ── Okuyorum ──────────────────────────────────────────────
  reading: {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    coverColor: "#1a1a2e", // koyu lacivert
    currentPage: 287,
    totalPages: 562,
    startedAt: "2024-11-01",
    quote:
      "The limits of my language mean the limits of my world. Aynısı veri modelleri için de geçerli.",
  },

  // ── Dinliyorum ────────────────────────────────────────────
  listening: {
    type: "album",
    title: "A Lot of Sorrow",
    creator: "The National",
    genre: "Indie Rock / Post-Rock",
    moodTag: "konsantrasyon",
    since: "2025-01-10",
  },

  // ── Üzerinde Çalıştığım Proje ─────────────────────────────
  currentProject: {
    name: "Bu Site",
    description:
      "3D kitap formatında kişisel web sitesi. Three.js, React Three Fiber ve Framer Motion ile açılabilen, sayfa çevrilebilen interaktif bir deneyim.",
    stack: ["React", "Three.js", "R3F", "Framer Motion", "TypeScript", "Vite"],
    phase: "Geliştirme",
    progress: 30,
    repoUrl: "https://github.com/kullaniciadiniz/book-site",
    nextMilestone: "3D sahne ve kitap açılış animasyonu",
  },

  // ── Son Zaferler ──────────────────────────────────────────
  recentWins: [
    "TypeScript'te generic tip sistemini sonunda kavradım",
    "İlk Blender render'ımı tamamladım (berbat ama var)",
    "30 gün boyunca her gün kod yazdım",
  ],

  // ── Ruh Hali ─────────────────────────────────────────────
  mood: {
    emoji: "🧘",
    label: "Odaklanmış",
    energy: 7,
    note: "Yeni bir proje başlangıcının o taze enerjisi — sürdürmek asıl zorluk.",
  },
};
