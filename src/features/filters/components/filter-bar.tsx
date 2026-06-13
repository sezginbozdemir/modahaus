import { useState } from "react";
import { SortKey } from "../../products/hooks/useProductCatalog";
import { FilterChips } from "./filter-chips";
import { FilterDrawer } from "./filter-drawer";
import { useFilterStore } from "../../../store/filter-store";
import { useCatalogStore } from "../../../store/catalog-store";
import { IoFilterOutline } from "react-icons/io5";

export function FilterBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    sortKey,
    setSortKey,
    brand,
    fit,
    color,
    sizes,
    onSale,
    plusSize,
    maxPrice,
  } = useFilterStore();
  const { totalFiltered, totalVisible } = useCatalogStore();

  const activeFilterCount =
    brand.length +
    fit.length +
    color.length +
    sizes.length +
    (onSale ? 1 : 0) +
    (plusSize ? 1 : 0) +
    (maxPrice < 200 ? 1 : 0);

  return (
    <>
      <div className="bg-white border-b border-gray-100 sticky top-[90px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-2.5 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-gray-400 tabular-nums">
              {totalFiltered === totalVisible
                ? `${totalVisible} produse`
                : `${totalVisible} / ${totalFiltered} produse`}
            </span>

            <div className="flex items-center gap-2">
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                className="h-8 px-2 pr-7 rounded-full border border-gray-200 text-xs text-gray-700 bg-white appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:border-gray-400"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239ca3af'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 8px center",
                }}
                aria-label="Sortează"
              >
                <option value="code-asc">Cod A–Z</option>
                <option value="code-desc">Cod Z–A</option>
                <option value="price-asc">Preț ↑</option>
                <option value="price-desc">Preț ↓</option>
              </select>

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="relative inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-gray-200 text-xs font-medium text-gray-700 bg-white hover:border-gray-400 transition-colors"
              >
                <IoFilterOutline size={15} />
                Filtre
                {activeFilterCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center leading-none">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <FilterChips />
        </div>
      </div>

      <FilterDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
