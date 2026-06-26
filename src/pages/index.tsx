// ============================================================
// SAYFA BILEŞEN REGİSTRY
// Yeni sayfa eklemek: burada tanımla, config/pages.config.ts'e kayıt ekle
// ============================================================

import { lazy, Suspense } from "react";
import type { PageId } from "../types";

// Lazy loading — her sayfa kendi chunk'ına ayrılır (performans)
const CoverPage  = lazy(() => import("./CoverPage"));
const AboutPage  = lazy(() => import("./AboutPage"));
const ManualPage = lazy(() => import("./ManualPage"));
const NowPage    = lazy(() => import("./NowPage"));

// Sayfa bileşen haritası — ID → Component
const PAGE_COMPONENTS: Record<string, React.ComponentType> = {
  cover:  CoverPage,
  about:  AboutPage,
  manual: ManualPage,
  now:    NowPage,
  // projects: lazy(() => import("./ProjectsPage")), // ileride ekle
};

interface PageRendererProps {
  pageId: PageId;
}

// Yükleme göstergesi — sayfa gelene kadar
function PageSkeleton() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-2 border-white/30 border-t-white/80 rounded-full animate-spin" />
    </div>
  );
}

// Aktif sayfayı render eden bileşen
export function PageRenderer({ pageId }: PageRendererProps) {
  const Component = PAGE_COMPONENTS[pageId];

  if (!Component) {
    return (
      <div className="flex items-center justify-center h-full text-white/50 text-sm">
        Sayfa bulunamadı: {pageId}
      </div>
    );
  }

  return (
    <Suspense fallback={<PageSkeleton />}>
      <Component />
    </Suspense>
  );
}

export default PAGE_COMPONENTS;
