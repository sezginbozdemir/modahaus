import { useState } from "react";
import { Drawer } from "../../../components/drawer";
import { AccordionSection, SectionKey } from "./accordion-section";
import { OptionList } from "./option-list";
import { BRANDS, TYPES, COLORS, SIZES } from "../../products/data/products";
import { useFilterStore } from "../../../store/filter-store";

export function FilterDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openSection, setOpenSection] = useState<SectionKey>(null);

  const {
    brand,
    fit,
    color,
    sizes,
    maxPrice,
    onSale,
    plusSize,
    toggleBrand,
    toggleFit,
    toggleColor,
    toggleSize,
    setMaxPrice,
    toggleOnSale,
    togglePlusSize,
    clearBrand,
    clearFit,
    clearColor,
    clearSizes,
    clearAllFilters,
  } = useFilterStore();

  const activeFilterCount =
    brand.length +
    fit.length +
    color.length +
    sizes.length +
    (onSale ? 1 : 0) +
    (plusSize ? 1 : 0) +
    (maxPrice < 200 ? 1 : 0);

  return (
    <Drawer open={open} onClose={onClose} title="Filtre">
      {/* Quick toggles */}
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
          onClick={togglePlusSize}
          className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${
            plusSize
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
          onPick={toggleBrand}
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
          onPick={toggleFit}
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
          onPick={toggleColor}
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
          options={[...new Set(SIZES.map((s) => s.toUpperCase()))]}
          selected={sizes.map((s) => s.toUpperCase())}
          onPick={(size) => toggleSize(size.toUpperCase())}
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
            onChange={(e) => setMaxPrice(Number(e.target.value))}
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
          onClick={clearAllFilters}
          className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-gray-400 transition-colors"
        >
          Resetează
        </button>
        <button
          type="button"
          onClick={onClose}
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
  );
}
