import { create } from "zustand";
import { CONFIG } from "../config";

interface CatalogState {
  visibleCount: number;
  totalFiltered: number;
  totalVisible: number;

  resetPagination: () => void;
  loadMore: () => void;
  setTotals: (filtered: number, visible: number) => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  visibleCount: CONFIG.initialLoad,
  totalFiltered: 0,
  totalVisible: 0,

  resetPagination: () => set({ visibleCount: CONFIG.initialLoad }),
  loadMore: () =>
    set((s) => ({ visibleCount: s.visibleCount + CONFIG.loadMoreCount })),
  setTotals: (filtered, visible) =>
    set({ totalFiltered: filtered, totalVisible: visible }),
}));
