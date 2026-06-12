import { Product } from "../../data/products";
import { ProductCard } from "../product-card/produt-card";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  visible: Product[];
  hasMore: boolean;
  loadMore: () => void;
}

export function ProductGrid({ visible, hasMore, loadMore }: Props) {
  return (
    <>
      {visible.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {visible.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMore}
                className="flex items-center gap-2 border-2 border-black text-black font-heading font-700 
                             text-sm tracking-widest uppercase px-8 py-3 rounded
                             hover:bg-black hover:text-white transition-all duration-200"
              >
                ÎNCARCĂ MAI MULTE MODELE
                <IoChevronDown size={15} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-heading font-700 text-2xl text-gray-600">
            Niciun produs găsit
          </p>
          <p className="text-sm mt-1">Încearcă o altă mărime</p>
        </div>
      )}
    </>
  );
}
