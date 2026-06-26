// ============================================================
// CUSTOM HOOKS — animasyon ve etkileşim mantığı
// ============================================================

import { useEffect, useCallback, useRef } from "react";
import { useBookStore } from "../store/useStore";
import type { PageId } from "../types";

// ── Sayfa Geçiş Animasyon Hook'u ─────────────────────────
export function usePageAnimation() {
  const { activePage, activePageIndex, turnDirection, isAnimating } =
    useBookStore();

  // Sayfa geçişinde çalıştırılacak callback kaydı
  const callbacks = useRef<Set<() => void>>(new Set());

  const onPageChange = useCallback((cb: () => void) => {
    callbacks.current.add(cb);
    return () => callbacks.current.delete(cb);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      callbacks.current.forEach((cb) => cb());
    }
  }, [isAnimating, activePage]);

  return {
    activePage,
    activePageIndex,
    turnDirection,
    isAnimating,
    onPageChange,
  };
}

// ── Kitap Açma/Kapama Etkileşimi ─────────────────────────
export function useBookInteraction() {
  const { bookState, openBook, closeBook, goToPage, isAnimating } =
    useBookStore();

  const handleBookClick = useCallback(() => {
    if (bookState === "closed") {
      openBook();
    }
  }, [bookState, openBook]);

  const handleNavigate = useCallback(
    (pageId: PageId) => {
      if (bookState !== "open" || isAnimating) return;
      goToPage(pageId);
    },
    [bookState, isAnimating, goToPage],
  );

  return {
    bookState,
    isOpen: bookState === "open",
    isAnimating,
    handleBookClick,
    handleNavigate,
    closeBook,
  };
}

// ── Klavye Navigasyonu ─────────────────────────────────────
export function useKeyboardNavigation() {
  const { goToPageByIndex, activePageIndex, bookState, isAnimating } =
    useBookStore();

  useEffect(() => {
    if (bookState !== "open") return;

    const handleKey = (e: KeyboardEvent) => {
      if (isAnimating) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goToPageByIndex(activePageIndex + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goToPageByIndex(activePageIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [bookState, isAnimating, activePageIndex, goToPageByIndex]);
}

// ── İlerleme Hesaplama ─────────────────────────────────────
export function useReadingProgress(currentPage: number, totalPages: number) {
  const percentage = Math.round((currentPage / totalPages) * 100);
  const remaining = totalPages - currentPage;
  const estimatedMinutes = Math.round((remaining / totalPages) * 6 * 60); // ~6 saat ortalama

  return { percentage, remaining, estimatedMinutes };
}

// ── Tarih Formatlama ──────────────────────────────────────
export function useRelativeDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "bugün";
  if (diffDays === 1) return "dün";
  if (diffDays < 7) return `${diffDays} gün önce`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} hafta önce`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} ay önce`;
  return `${Math.floor(diffDays / 365)} yıl önce`;
}
