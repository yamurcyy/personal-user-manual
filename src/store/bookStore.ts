import { create } from "zustand";

interface BookState {
  opened: boolean;
  bubblesVisible: boolean;
  currentPage: string | null;

  openBook: () => void;
  closePage: () => void;
  showBubbles: () => void;
  setPage: (page: string) => void;
}

export const useBookStore = create<BookState>((set) => ({
  opened: false,
  bubblesVisible: false,
  currentPage: null,

  openBook: () => {
    set({ opened: true });

    setTimeout(() => {
      set({ bubblesVisible: true });
    }, 1800);
  },

  showBubbles: () =>
    set({
      bubblesVisible: true,
    }),

  setPage: (page) =>
    set({
      currentPage: page,
    }),
  closePage: () =>
    set({
      currentPage: null,
    }),
}));
