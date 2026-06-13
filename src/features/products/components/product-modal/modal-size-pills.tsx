import { Product } from "../../data/products";

interface Props {
  product: Product;
}

export function ModalSizePills({ product }: Props) {
  const sizes = product.sizeList?.length
    ? product.sizeList
    : product.sizes.split(/[,\s]+/).filter(Boolean);

  return (
    <div className="space-y-2">
      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest">
        Mărimi disponibile
      </h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((s) => {
          const qty = product.stock?.[s] ?? null;
          const disabled = product.stock ? qty === 0 : false;
          return (
            <span
              key={s}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm border select-none ${
                disabled
                  ? "bg-gray-50 text-gray-300 border-gray-100 line-through"
                  : "bg-white text-gray-800 border-gray-200"
              }`}
              aria-disabled={disabled ? "true" : "false"}
              title={disabled ? "Indisponibil" : "Disponibil"}
            >
              {s}
            </span>
          );
        })}
      </div>
      {product.stock == null && (
        <p className="text-xs text-gray-400">
          Stocul pe mărimi nu este afișat pentru acest produs.
        </p>
      )}
    </div>
  );
}
