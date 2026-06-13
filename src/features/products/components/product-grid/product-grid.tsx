import { ProductCard } from "../product-card/produt-card";
import { IoChevronDown } from "react-icons/io5";
import { useProductCatalog } from "../../hooks/useProductCatalog";
import { useCatalogStore } from "../../../../store/catalog-store";

export function ProductGrid() {
  const { visible, hasMore, loadMore } = useProductCatalog();

  const { totalFiltered } = useCatalogStore();

  if (visible.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
          <IoChevronDown size={28} className="text-gray-300 rotate-180" />
        </div>
        <div className="text-center">
          <p className="text-base font-semibold text-gray-700">
            Niciun produs găsit
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Încearcă să ajustezi filtrele
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {visible.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {hasMore && (
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={loadMore}
            className="group flex items-center gap-2.5 bg-white border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 text-xs font-medium tracking-widest uppercase px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Încarcă mai multe
            <IoChevronDown
              size={13}
              className="group-hover:translate-y-0.5 transition-transform duration-200"
            />
          </button>
          <p className="text-xs text-gray-400">
            {visible.length} din {totalFiltered} produse
          </p>
        </div>
      )}
    </div>
  );
}
