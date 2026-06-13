import { Product } from "../../data/products";
import { ModalTopbar } from "./modal-topbar";
import { ModalImageGallery } from "./modal-image-gallery";
import { ModalSizePills } from "./modal-size-pills";
import { ModalInfoCards } from "./modal-info-cards";
import { ModalContactStrip } from "./modal-contact-strip";
import { ModalStickyBar } from "./modal-sticky-bar";

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
  images: string[];
  setModalImg: React.Dispatch<React.SetStateAction<number>>;
  modalImg: number;
  hasSale: boolean;
  price: number;
  isOut: boolean;
  discountPct: number | null;
  formatLei: (x: number) => string;
}

export function ProductModal({
  setModalOpen,
  product,
  images,
  setModalImg,
  modalImg,
  hasSale,
  isOut,
  price,
  discountPct,
  formatLei,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      <ModalTopbar
        onClose={() => setModalOpen(false)}
        productId={product.id}
        hasSale={hasSale}
        discountPct={discountPct}
        isOut={isOut}
      />

      <div className="flex-1 overflow-y-auto">
        <ModalImageGallery
          images={images}
          modalImg={modalImg}
          setModalImg={setModalImg}
          productId={product.id}
          productTitle={product.title}
        />

        <div className="px-5 pt-5 pb-6 space-y-5">
          {/* Title + price */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] font-medium tracking-wide text-gray-400 uppercase mb-1">
                {product.brand} • {product.type} • {product.color}
              </p>
              <h2 className="text-xl font-bold text-gray-900 leading-snug">
                {product.title}
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">Cod: {product.id}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p
                className={`text-2xl font-bold leading-none ${hasSale ? "text-red-500" : "text-gray-900"}`}
              >
                {formatLei(price)}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">LEI / buc</p>
              {hasSale && (
                <p className="text-xs text-gray-400 line-through mt-1">
                  {formatLei(product.unitPrice)} LEI
                </p>
              )}
            </div>
          </div>

          <div className="h-px bg-gray-100" />
          <ModalSizePills product={product} />

          <div className="h-px bg-gray-100" />
          <ModalInfoCards />

          <div className="h-px bg-gray-100" />
          <ModalContactStrip />

          <div className="h-px bg-gray-100" />

          {/* Description */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Descriere produs
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size guide */}
          <img
            src="/size-guide.png"
            alt="Ghid mărimi"
            className="w-full rounded-xl border border-gray-100"
          />
        </div>
      </div>

      <ModalStickyBar productId={product.id} isOut={isOut} />
    </div>
  );
}
