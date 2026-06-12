import React, { useMemo, useState } from "react";
import {
  BRANDS,
  TYPES,
  COLORS,
  SIZES,
  SortKey,
} from "../../products/data/products";
import { Chip } from "../../../components/chip";
import { Drawer } from "../../../components/drawer";

interface FilterBarProps {
  brand: string[];
  setBrand: (x: string) => void;
  fit: string[];
  setFit: (x: string) => void;
  color: string[];
  setColor: (x: string) => void;
  sizes: string[];
  setSizes: (x: string) => void;
  maxPrice: number;
  setPrice: (x: number) => void;
  sortKey: SortKey;
  setSortKey: (key: SortKey) => void;
  totalVisible: number;
  totalFiltered: number;
  clearColor: () => void;
  clearSizes: () => void;
  clearFit: () => void;
  clearBrand: () => void;
  onSale: boolean;
  toggleOnSale: () => void;
  batal: boolean;
  toggleBatal: () => void;
}

type SectionKey = "brand" | "fit" | "color" | "sizes" | "price" | null;

export function FilterBar(props: FilterBarProps) {
  const {
    brand,
    setBrand,
    clearBrand,
    fit,
    setFit,
    clearFit,
    color,
    setColor,
    clearColor,
    sizes,
    setSizes,
    clearSizes,
    maxPrice,
    setPrice,
    sortKey,
    setSortKey,
    totalVisible,
    totalFiltered,
    onSale,
    toggleOnSale,
    batal,
    toggleBatal,
  } = props;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSection, setOpenSection] = useState<SectionKey>(null);

  const chips = useMemo(() => {
    const out: Array<{ key: string; label: string; onRemove: () => void }> = [];
    brand.forEach((b) =>
      out.push({ key: `brand:${b}`, label: b, onRemove: () => setBrand(b) }),
    );
    fit.forEach((f) =>
      out.push({ key: `fit:${f}`, label: f, onRemove: () => setFit(f) }),
    );
    color.forEach((c) =>
      out.push({ key: `color:${c}`, label: c, onRemove: () => setColor(c) }),
    );
    sizes.forEach((s) =>
      out.push({ key: `size:${s}`, label: s, onRemove: () => setSizes(s) }),
    );
    if (onSale)
      out.push({ key: "onSale", label: "Reduceri", onRemove: toggleOnSale });
    if (batal)
      out.push({ key: "batal", label: "Mărimi Mari", onRemove: toggleBatal });
    return out;
  }, [brand, fit, color, sizes, setBrand, setFit, setColor, setSizes]);

  const clearAll = () => {
    clearBrand();
    clearFit();
    clearColor();
    clearSizes();
    setPrice(200);
    if (onSale) toggleOnSale();
    if (batal) toggleBatal();
  };

  const activeFilterCount =
    brand.length +
    fit.length +
    color.length +
    sizes.length +
    (onSale ? 1 : 0) +
    (batal ? 1 : 0) +
    (maxPrice < 200 ? 1 : 0);

  return (
    <>
      <div className="bg-white border-b border-gray-100 sticky top-14 z-40">
        <div className="max-w-7xl mx-auto px-4 py-2.5 space-y-2">
          {/* Main row */}
          <div className="flex items-center justify-between gap-3">
            {/* Left: count */}
            <span className="text-xs text-gray-400 tabular-nums">
              {totalFiltered === totalVisible
                ? `${totalVisible} produse`
                : `${totalVisible} / ${totalFiltered} produse`}
            </span>

            <div className="flex items-center gap-2">
              {/* Sort */}
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

              {/* Filter drawer button */}
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="relative inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-gray-200 text-xs font-medium text-gray-700 bg-white hover:border-gray-400 transition-colors"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                  <line x1="11" y1="18" x2="13" y2="18" />
                </svg>
                Filtre
                {activeFilterCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center leading-none">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Active chips row */}
          {chips.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pb-0.5">
              {chips.map((c) => (
                <Chip key={c.key} onRemove={c.onRemove}>
                  {c.label}
                </Chip>
              ))}
              <button
                type="button"
                onClick={clearAll}
                className="text-xs text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
              >
                Resetează tot
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Filtre"
      >
        {/* Quick toggles at top of drawer */}
        <div className="flex gap-2 pb-1">
          <button
            type="button"
            onClick={toggleOnSale}
            className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${
              onSale
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
            }`}
          >
            Reduceri
          </button>
          <button
            type="button"
            onClick={toggleBatal}
            className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${
              batal
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
            }`}
          >
            Mărimi Mari
          </button>
        </div>

        <div className="border-t border-gray-100 my-1" />

        <AccordionSection
          id="brand"
          title="Brand"
          openId={openSection}
          setOpenId={setOpenSection}
          activeCount={brand.length}
        >
          <OptionList
            options={BRANDS}
            selected={brand}
            onPick={setBrand}
            onClear={clearBrand}
          />
        </AccordionSection>

        <AccordionSection
          id="fit"
          title="Tip / Fit"
          openId={openSection}
          setOpenId={setOpenSection}
          activeCount={fit.length}
        >
          <OptionList
            options={TYPES}
            selected={fit}
            onPick={setFit}
            onClear={clearFit}
          />
        </AccordionSection>

        <AccordionSection
          id="color"
          title="Culoare"
          openId={openSection}
          setOpenId={setOpenSection}
          activeCount={color.length}
        >
          <OptionList
            options={COLORS}
            selected={color}
            onPick={setColor}
            onClear={clearColor}
          />
        </AccordionSection>

        <AccordionSection
          id="sizes"
          title="Mărime"
          openId={openSection}
          setOpenId={setOpenSection}
          activeCount={sizes.length}
        >
          <OptionList
            options={SIZES}
            selected={sizes}
            onPick={setSizes}
            onClear={clearSizes}
          />
        </AccordionSection>

        <AccordionSection
          id="price"
          title="Preț maxim"
          openId={openSection}
          setOpenId={setOpenSection}
          activeCount={maxPrice < 200 ? 1 : 0}
          subtitle={`${maxPrice} LEI`}
        >
          <div className="pt-1 pb-2 px-1">
            <input
              type="range"
              min={0}
              max={200}
              step={5}
              value={maxPrice}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-gray-900"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>0 LEI</span>
              <span className="font-medium text-gray-700">{maxPrice} LEI</span>
              <span>200 LEI</span>
            </div>
          </div>
        </AccordionSection>

        {/* Footer */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
          <button
            type="button"
            onClick={clearAll}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-gray-400 transition-colors"
          >
            Resetează
          </button>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium"
          >
            Aplică
            {activeFilterCount > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/20 text-[10px] font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </Drawer>
    </>
  );
}

function AccordionSection({
  id,
  title,
  subtitle,
  openId,
  setOpenId,
  children,
  activeCount = 0,
}: {
  id: Exclude<SectionKey, null>;
  title: string;
  subtitle?: string;
  openId: SectionKey;
  setOpenId: React.Dispatch<React.SetStateAction<SectionKey>>;
  children: React.ReactNode;
  activeCount?: number;
}) {
  const isOpen = openId === id;

  const toggle = () => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <section className="rounded-xl border border-gray-100 overflow-hidden">
      <button
        type="button"
        onClick={toggle}
        className="w-full px-4 py-3 flex items-center justify-between gap-3 bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm font-medium text-gray-800">{title}</span>
          {subtitle && !activeCount && (
            <span className="text-xs text-gray-400">{subtitle}</span>
          )}
          {activeCount > 0 && (
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-900 text-white text-[10px] font-bold leading-none">
              {activeCount}
            </span>
          )}
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-3 pb-3 border-t border-gray-100 bg-white">
          {children}
        </div>
      )}
    </section>
  );
}

function OptionList({
  options,
  selected,
  onPick,
  onClear,
}: {
  options: readonly string[];
  selected: string[];
  onPick: (x: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="pt-3 space-y-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onClear}
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
            selected.length === 0
              ? "bg-gray-900 text-white border-gray-900"
              : "border-gray-200 text-gray-600 hover:border-gray-400"
          }`}
        >
          Toate
        </button>
        {selected.length > 0 && (
          <span className="text-xs text-gray-400">
            {selected.length} selectate
          </span>
        )}
      </div>

      <div className="max-h-48 overflow-auto pr-0.5 grid grid-cols-1 gap-1">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onPick(opt)}
              className={`text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                active
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-100 hover:border-gray-300"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
