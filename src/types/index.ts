// ============================================================
// CORE TYPES — tüm projenin tip altyapısı
// Yeni bir bölüm eklerken sadece PageId'yi genişlet
// ============================================================

// Kitaptaki her sayfa/bölümün kimliği
export type PageId =
  | "cover"
  | "about"
  | "manual"
  | "now"
  | string; // genişletilebilir — yeni sayfalar için string yeterli

// Kitabın genel durumu
export type BookState = "closed" | "opening" | "open" | "turning" | "closing";

// Balon menü navigasyon öğesi
export interface BubbleConfig {
  id: PageId;
  label: string;
  icon: string; // emoji veya SVG string
  color: BubbleColor;
  pageIndex: number; // kitaptaki sıra (0 = kapak)
  description: string; // hover tooltip
}

export type BubbleColor =
  | "white"
  | "sky"
  | "mint"
  | "amber"
  | "rose"
  | "violet"
  | "slate";

// Sayfa geçiş yönü
export type TurnDirection = "forward" | "backward";

// ============================================================
// ABOUT PAGE — Temel Bilgiler
// ============================================================

export interface AboutData {
  basics: BasicInfo;
  physical: PhysicalInfo;
  education: EducationItem[];
  personality: PersonalityInfo;
  interests: InterestItem[];
  character3D: Character3DConfig;
}

export interface BasicInfo {
  name: string;
  age: number;
  birthdate: string; // "DD.MM.YYYY"
  zodiac: ZodiacSign;
  zodiacEmoji: string;
  location: string;
  pronouns: string;
  tagline: string; // bir cümlelik özet
}

export type ZodiacSign =
  | "Koç" | "Boğa" | "İkizler" | "Yengeç" | "Aslan" | "Başak"
  | "Terazi" | "Akrep" | "Yay" | "Oğlak" | "Kova" | "Balık";

export interface PhysicalInfo {
  height: string; // "175 cm"
  eyeColor: string;
  hairColor: string;
  otherNotes?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  years: string; // "2018 – 2022"
  status: "graduated" | "ongoing" | "dropped";
  highlight?: string; // öne çıkan bir not
}

export interface PersonalityInfo {
  mbti: string; // "INTJ"
  mbtiDescription: string;
  coreTraits: string[]; // max 6 sıfat
  communicationStyle: string;
  decisionStyle: string;
  energySource: "introvert" | "extrovert" | "ambivert";
}

export interface InterestItem {
  category: string; // "Teknoloji", "Müzik" vb.
  icon: string;
  items: string[];
}

export interface Character3DConfig {
  placeholder: boolean; // true = yer tutucu, false = gerçek model
  placeholderText: string;
  modelPath?: string; // ileride: "/models/character.glb"
  animationName?: string;
}

// ============================================================
// MANUAL PAGE — Kullanım Kılavuzu
// ============================================================

export interface ManualData {
  productName: string;
  version: string;
  serialNumber: string;
  manufacturingDate: string;
  specs: SpecItem[];
  installation: InstallStep[];
  warranty: WarrantyInfo;
  maintenance: MaintenanceItem[];
  troubleshooting: TroubleshootItem[];
  warnings: WarningItem[];
  funFacts: string[];
}

export interface SpecItem {
  category: string;
  specs: { label: string; value: string }[];
}

export interface InstallStep {
  step: number;
  title: string;
  description: string;
  duration?: string; // "~5 dakika"
  tip?: string;
}

export interface WarrantyInfo {
  duration: string;
  coverage: string[];
  notCovered: string[];
  supportContact: string;
}

export interface MaintenanceItem {
  frequency: string; // "Günlük", "Haftalık"
  tasks: string[];
}

export interface TroubleshootItem {
  problem: string;
  symptoms: string[];
  solution: string;
  severity: "low" | "medium" | "high";
}

export interface WarningItem {
  type: "warning" | "danger" | "info" | "tip";
  title: string;
  description: string;
  icon: string;
}

// ============================================================
// NOW PAGE — Şu An
// ============================================================

export interface NowData {
  lastUpdated: string; // "2025-01-15"
  monthlyGoal: MonthlyGoal;
  learning: LearningItem[];
  reading: ReadingItem;
  listening: ListeningItem;
  currentProject: ProjectItem;
  recentWins: string[];
  mood: MoodEntry;
}

export interface MonthlyGoal {
  month: string; // "Ocak 2025"
  goal: string;
  progress: number; // 0-100
  subTasks: { task: string; done: boolean }[];
}

export interface LearningItem {
  topic: string;
  resource: string;
  progress: number; // 0-100
  startedAt: string;
  icon: string;
}

export interface ReadingItem {
  title: string;
  author: string;
  coverColor: string; // hex — kitap kapağı için
  currentPage: number;
  totalPages: number;
  startedAt: string;
  quote?: string; // sevdiğin bir alıntı
}

export interface ListeningItem {
  type: "album" | "playlist" | "podcast" | "artist";
  title: string;
  creator: string;
  genre: string;
  moodTag: string; // "konsantrasyon", "enerji" vb.
  since: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  stack: string[];
  phase: string; // "Prototip", "Geliştirme" vb.
  progress: number; // 0-100
  repoUrl?: string;
  liveUrl?: string;
  nextMilestone: string;
}

export interface MoodEntry {
  emoji: string;
  label: string;
  energy: number; // 1-10
  note: string;
}

// ============================================================
// STORE TYPES
// ============================================================

export interface BookStore {
  // Durum
  bookState: BookState;
  activePage: PageId;
  activePageIndex: number;
  previousPageIndex: number;
  turnDirection: TurnDirection;
  isAnimating: boolean;
  isMuted: boolean;

  // Aksiyonlar
  openBook: () => void;
  closeBook: () => void;
  goToPage: (pageId: PageId) => void;
  goToPageByIndex: (index: number) => void;
  setAnimating: (value: boolean) => void;
  toggleMute: () => void;
}
