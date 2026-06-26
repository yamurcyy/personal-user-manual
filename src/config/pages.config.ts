// ============================================================
// SAYFA REGİSTRY — projenin omurgası
//
// YENİ BÖLÜM EKLEMEK:
//   1. Bu dosyaya yeni bir BubbleConfig nesnesi ekle
//   2. src/pages/ altında yeni sayfa bileşenini oluştur
//   3. src/pages/index.ts'e import et
//   4. Hazır — balon menü, navigasyon, animasyon otomatik güncellenir
// ============================================================

import type { BubbleConfig } from "../types";

export const PAGES: BubbleConfig[] = [
  {
    id: "cover",
    label: "Ana Sayfa",
    icon: "🏠",
    color: "slate",
    pageIndex: 0,
    description: "Başa dön",
  },
  {
    id: "about",
    label: "Temel Bilgiler",
    icon: "👤",
    color: "white",
    pageIndex: 1,
    description: "Kim olduğum, ne düşündüğüm",
  },
  {
    id: "manual",
    label: "Kullanım Kılavuzu",
    icon: "📋",
    color: "amber",
    pageIndex: 2,
    description: "Teknik özellikler ve bakım rehberi",
  },
  {
    id: "now",
    label: "Şu An",
    icon: "⚡",
    color: "mint",
    pageIndex: 3,
    description: "Bu an ne yapıyorum",
  },
  // ── Gelecekte buraya yeni bölümler eklenir ──────────────
  // {
  //   id: "projects",
  //   label: "Projeler",
  //   icon: "🚀",
  //   color: "sky",
  //   pageIndex: 4,
  //   description: "Geliştirdiğim şeyler",
  // },
];

// Yardımcı fonksiyonlar
export const getPageById = (id: string): BubbleConfig | undefined =>
  PAGES.find((p) => p.id === id);

export const getPageByIndex = (index: number): BubbleConfig | undefined =>
  PAGES.find((p) => p.pageIndex === index);

export const TOTAL_PAGES = PAGES.length;

// Balon renk paleti — Tailwind sınıflarına map
export const BUBBLE_COLORS: Record<
  BubbleConfig["color"],
  { bg: string; border: string; text: string; glow: string }
> = {
  white: {
    bg: "rgba(255,255,255,0.25)",
    border: "rgba(255,255,255,0.6)",
    text: "#ffffff",
    glow: "rgba(255,255,255,0.3)",
  },
  sky: {
    bg: "rgba(147,197,253,0.2)",
    border: "rgba(147,197,253,0.5)",
    text: "#bae6fd",
    glow: "rgba(56,189,248,0.25)",
  },
  mint: {
    bg: "rgba(110,231,183,0.2)",
    border: "rgba(110,231,183,0.5)",
    text: "#a7f3d0",
    glow: "rgba(16,185,129,0.25)",
  },
  amber: {
    bg: "rgba(252,211,77,0.2)",
    border: "rgba(252,211,77,0.5)",
    text: "#fde68a",
    glow: "rgba(245,158,11,0.25)",
  },
  rose: {
    bg: "rgba(251,113,133,0.2)",
    border: "rgba(251,113,133,0.5)",
    text: "#fecdd3",
    glow: "rgba(244,63,94,0.25)",
  },
  violet: {
    bg: "rgba(167,139,250,0.2)",
    border: "rgba(167,139,250,0.5)",
    text: "#ddd6fe",
    glow: "rgba(139,92,246,0.25)",
  },
  slate: {
    bg: "rgba(148,163,184,0.2)",
    border: "rgba(148,163,184,0.4)",
    text: "#cbd5e1",
    glow: "rgba(100,116,139,0.2)",
  },
};
