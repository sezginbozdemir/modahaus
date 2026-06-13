import { create } from "zustand";
import { SortKey } from "../features/products/data/products";

interface FilterState {
  brand: string[];
  fit: string[];
  color: string[];
  sizes: string[];
  maxPrice: number;
  onSale: boolean;
  plusSize: boolean;
  sortKey: SortKey;

  // Actions
  toggleBrand: (value: string) => void;
  toggleFit: (value: string) => void;
  toggleColor: (value: string) => void;
  toggleSize: (value: string) => void;
  setMaxPrice: (value: number) => void;
  toggleOnSale: () => void;
  togglePlusSize: () => void;
  setSortKey: (key: SortKey) => void;

  clearBrand: () => void;
  clearFit: () => void;
  clearColor: () => void;
  clearSizes: () => void;
  clearAllFilters: () => void;
}

// Helper to toggle a value in an array
function toggle(arr: string[], value: string): string[] {
  return arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value];
}

export const useFilterStore = create<FilterState>((set) => ({
  brand: [],
  fit: [],
  color: [],
  sizes: [],
  maxPrice: 200,
  onSale: false,
  plusSize: false,
  sortKey: "code-asc",

  toggleBrand: (value) => set((s) => ({ brand: toggle(s.brand, value) })),
  toggleFit: (value) => set((s) => ({ fit: toggle(s.fit, value) })),
  toggleColor: (value) => set((s) => ({ color: toggle(s.color, value) })),
  toggleSize: (value) => set((s) => ({ sizes: toggle(s.sizes, value) })),
  setMaxPrice: (value) => set({ maxPrice: value }),
  toggleOnSale: () => set((s) => ({ onSale: !s.onSale })),
  togglePlusSize: () => set((s) => ({ plusSize: !s.plusSize })),
  setSortKey: (key) => set({ sortKey: key }),

  clearBrand: () => set({ brand: [] }),
  clearFit: () => set({ fit: [] }),
  clearColor: () => set({ color: [] }),
  clearSizes: () => set({ sizes: [] }),
  clearAllFilters: () =>
    set({
      brand: [],
      fit: [],
      color: [],
      sizes: [],
      maxPrice: 200,
      onSale: false,
      plusSize: false,
    }),
}));
