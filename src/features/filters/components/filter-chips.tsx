import { useMemo } from "react";
import { Chip } from "../../../components/chip";
import { useFilterStore } from "../../../store/filter-store";

export function FilterChips() {
  const {
    brand,
    fit,
    color,
    sizes,
    onSale,
    plusSize,
    toggleBrand,
    toggleFit,
    toggleColor,
    toggleSize,
    toggleOnSale,
    togglePlusSize,
    clearAllFilters,
  } = useFilterStore();

  const chips = useMemo(() => {
    const out: Array<{ key: string; label: string; onRemove: () => void }> = [];
    brand.forEach((b) =>
      out.push({ key: `brand:${b}`, label: b, onRemove: () => toggleBrand(b) }),
    );
    fit.forEach((f) =>
      out.push({ key: `fit:${f}`, label: f, onRemove: () => toggleFit(f) }),
    );
    color.forEach((c) =>
      out.push({ key: `color:${c}`, label: c, onRemove: () => toggleColor(c) }),
    );
    sizes.forEach((s) =>
      out.push({ key: `size:${s}`, label: s, onRemove: () => toggleSize(s) }),
    );
    if (onSale)
      out.push({ key: "onSale", label: "Reduceri", onRemove: toggleOnSale });
    if (plusSize)
      out.push({
        key: "plusSize",
        label: "Mărimi Mari",
        onRemove: togglePlusSize,
      });
    return out;
  }, [brand, fit, color, sizes, onSale, plusSize]);

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5 pb-0.5">
      {chips.map((c) => (
        <Chip key={c.key} onRemove={c.onRemove}>
          {c.label}
        </Chip>
      ))}
      <button
        type="button"
        onClick={clearAllFilters}
        className="text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
      >
        Resetează tot
      </button>
    </div>
  );
}
