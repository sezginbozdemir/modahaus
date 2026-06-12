import { useState, useMemo } from "react";
import { products, sortProducts, SortKey } from "../data/products";
import { CONFIG } from "../../../config";
export function useProductCatalog() {
  const [sortKey, setSortKey] = useState<SortKey>("code-asc");
  const [visibleCount, setVisibleCount] = useState<number>(CONFIG.initialLoad);
  const [brand, setBrand] = useState<string[]>([]);
  const [fit, setFit] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [onSale, setOnSale] = useState<boolean>(false);
  const [batal, setBatal] = useState<boolean>(false);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      // 1. Brand Array Filter
      if (
        brand.length > 0 &&
        !brand.map((b) => b.toLowerCase()).includes(product.brand.toLowerCase())
      ) {
        return false;
      }

      // 2. Fit/Type Array Filter
      if (
        fit.length > 0 &&
        !fit.map((f) => f.toLowerCase()).includes(product.type.toLowerCase())
      ) {
        return false;
      }

      // 3. Color Array Filter
      if (
        color.length > 0 &&
        !color.map((c) => c.toLowerCase()).includes(product.color.toLowerCase())
      ) {
        return false;
      }

      // 4. Price Filter
      if (product.unitPrice > maxPrice) {
        return false;
      }

      // 5. Sizes Array Filter (Matches if product has ANY of the selected sizes)

      if (sizes.length > 0) {
        // Assuming product.sizes is an array of strings like ['M', 'L']

        const hasMatchingSize = sizes.some((s) => product.sizeList.includes(s));

        if (!hasMatchingSize) return false;
      }
      // 6. On Sale Filter
      if (onSale && product.salePrice === null) {
        return false;
      }

      // 7. Plus Size (Batal) Filter
      if (batal && !product.plusSize) {
        return false;
      }
      return true;
    });
  }, [brand, fit, color, sizes, maxPrice, onSale, batal]);

  const sorted = useMemo(
    () => sortProducts(filtered, sortKey),
    [filtered, sortKey],
  );

  // Apply pagination
  const visible = useMemo(
    () => sorted.slice(0, visibleCount),
    [sorted, visibleCount],
  );

  const hasMore = visibleCount < sorted.length;

  function loadMore() {
    setVisibleCount((c) => c + CONFIG.loadMoreCount);
  }

  function handleSetBrand(value: string) {
    setBrand((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value],
    );
    setVisibleCount(CONFIG.initialLoad);
  }

  function handleSetFit(value: string) {
    setFit((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value],
    );
    setVisibleCount(CONFIG.initialLoad);
  }

  function handleSetColor(value: string) {
    setColor((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value],
    );
    setVisibleCount(CONFIG.initialLoad);
  }

  function handleSetSize(value: string) {
    setSizes((prev) => {
      const nextSizes = prev.includes(value)
        ? prev.filter((x) => x !== value)
        : [...prev, value];

      // LOG THIS: This will show you the exact array being saved right now
      console.log("Updated sizes array instantly:", nextSizes);

      return nextSizes;
    });

    setVisibleCount(CONFIG.initialLoad);
  }

  function handleSetPrice(key: number) {
    setMaxPrice(key);

    setVisibleCount(CONFIG.initialLoad);
  }

  function handleSetSortKey(key: SortKey) {
    setSortKey(key);
    setVisibleCount(CONFIG.initialLoad);
  }
  function handleToggleOnSale() {
    setOnSale((prev) => !prev);
    setVisibleCount(CONFIG.initialLoad);
  }

  function handleToggleBatal() {
    setBatal((prev) => !prev);
    setVisibleCount(CONFIG.initialLoad);
  }

  const clearBrand = () => {
    setBrand([]);
    setVisibleCount(CONFIG.initialLoad);
  };
  const clearFit = () => {
    setFit([]);
    setVisibleCount(CONFIG.initialLoad);
  };
  const clearColor = () => {
    setColor([]);
    setVisibleCount(CONFIG.initialLoad);
  };
  const clearSizes = () => {
    setSizes([]);
    setVisibleCount(CONFIG.initialLoad);
  };
  return {
    visible,
    brand,
    fit,
    sizes,
    color,
    maxPrice,

    setBrand: handleSetBrand,
    setFit: handleSetFit,
    setSize: handleSetSize,
    setColor: handleSetColor,
    setPrice: handleSetPrice,
    toggleOnSale: handleToggleOnSale,
    toggleBatal: handleToggleBatal,

    clearBrand,
    clearFit,
    clearColor,
    clearSizes,

    sortKey,

    setSortKey: handleSetSortKey,
    totalFiltered: sorted.length,
    totalVisible: visible.length,
    hasMore,
    loadMore,

    onSale,
    batal,
  };
}
