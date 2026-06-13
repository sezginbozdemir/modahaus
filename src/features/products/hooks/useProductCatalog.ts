import { useEffect, useMemo } from "react";
import { Product, products } from "../data/products";
import { useFilterStore } from "../../../store/filter-store";
import { useCatalogStore } from "../../../store/catalog-store";

export type SortKey = "code-asc" | "code-desc" | "price-asc" | "price-desc";

export function sortProducts(list: Product[], key: SortKey): Product[] {
  return [...list].sort((a, b) => {
    switch (key) {
      case "code-asc":
        return a.id.localeCompare(b.id);
      case "code-desc":
        return b.id.localeCompare(a.id);
      case "price-asc":
        return a.unitPrice - b.unitPrice;
      case "price-desc":
        return b.unitPrice - a.unitPrice;
    }
  });
}

export function useProductCatalog() {
  const { brand, fit, color, sizes, maxPrice, onSale, plusSize, sortKey } =
    useFilterStore();
  const { visibleCount, loadMore, setTotals } = useCatalogStore();

  const filtered = useMemo(() => {
    const brandLower = brand.map((b) => b.toLowerCase());
    const fitLower = fit.map((f) => f.toLowerCase());
    const colorLower = color.map((c) => c.toLowerCase());

    return products.filter((p) => {
      if (brandLower.length > 0 && !brandLower.includes(p.brand.toLowerCase()))
        return false;
      if (fitLower.length > 0 && !fitLower.includes(p.type.toLowerCase()))
        return false;
      if (colorLower.length > 0 && !colorLower.includes(p.color.toLowerCase()))
        return false;
      if (p.unitPrice > maxPrice) return false;
      if (sizes.length > 0 && !sizes.some((s) => p.sizeList.includes(s)))
        return false;
      if (onSale && p.salePrice === null) return false;
      if (plusSize && !p.plusSize) return false;
      return true;
    });
  }, [brand, fit, color, sizes, maxPrice, onSale, plusSize]);
  const sorted = useMemo(
    () => sortProducts(filtered, sortKey),
    [filtered, sortKey],
  );
  const visible = useMemo(
    () => sorted.slice(0, visibleCount),
    [sorted, visibleCount],
  );

  useEffect(() => {
    setTotals(sorted.length, visible.length);
  }, [sorted.length, visible.length]);

  return {
    visible,
    totalFiltered: sorted.length,
    totalVisible: visible.length,
    hasMore: visibleCount < sorted.length,
    loadMore,
  };
}
