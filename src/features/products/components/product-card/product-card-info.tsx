import { Product } from "../../data/products";

export function ProductCardInfo({
  product,
  hasSale,
  isOut,
  formatLei,
  price,
}: {
  product: Product;
  hasSale: boolean;
  isOut: boolean;
  formatLei: (x: number) => string;
  price: number;
}) {
  const sizesPreview =
    product.sizeList?.length > 0
      ? product.sizeList
          .slice(0, 3)
          .map((s) => s.toUpperCase())
          .join(", ") +
        (product.sizeList.length > 3 ? ` +${product.sizeList.length - 3}` : "")
      : product.sizes.toUpperCase();

  return (
    <div className="p-4 flex flex-col gap-2 flex-1">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase">
          {product.brand}
        </p>

        <p className="text-[11px] text-gray-400 font-mono">{product.id}</p>
      </div>

      <p className="font-semibold text-sm text-gray-900 leading-snug line-clamp-2">
        {product.title}
      </p>

      <p className="text-xs text-gray-500">
        {product.type} • {product.color}
      </p>

      <p className="text-xs text-gray-400">
        Mărimi: <span className="text-gray-600">{sizesPreview}</span>
      </p>

      <div className="mt-1 flex items-end gap-2">
        <p
          className={`font-bold text-lg leading-none ${
            isOut ? "text-gray-400" : hasSale ? "text-red-600" : "text-gray-900"
          }`}
        >
          {formatLei(price)}{" "}
          <span className="text-xs font-normal text-gray-400">LEI</span>
        </p>

        {hasSale && (
          <p className="text-xs text-gray-400 line-through pb-0.5">
            {formatLei(product.unitPrice)} LEI
          </p>
        )}
      </div>
    </div>
  );
}
