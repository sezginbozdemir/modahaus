import { FaArrowLeftLong, FaWhatsapp } from "react-icons/fa6";
import { ImagePlaceholder } from "./image-placeholder";
import { buildWhatsAppLink } from "../../../../config";
import { Product } from "../../data/products";

function SizePill({ label, disabled }: { label: string; disabled?: boolean }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm border select-none ${
        disabled
          ? "bg-gray-50 text-gray-400 border-gray-200 line-through"
          : "bg-white text-gray-800 border-gray-200"
      }`}
      aria-disabled={disabled ? "true" : "false"}
      title={disabled ? "Indisponibil" : "Disponibil"}
    >
      {label}
    </span>
  );
}

function InfoStrip({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold text-gray-900 leading-tight">
          {title}
        </p>
        <p className="text-[12px] text-gray-500 mt-0.5 leading-tight">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

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
  const sizes = product.sizeList?.length
    ? product.sizeList
    : product.sizes.split(/[,\s]+/).filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 flex-shrink-0">
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer text-sm font-medium"
        >
          <FaArrowLeftLong /> Înapoi
        </button>

        <div className="flex items-center gap-2">
          {isOut && (
            <span className="text-[11px] font-semibold px-2 py-1 rounded-md bg-gray-900/80 text-white">
              Epuizat
            </span>
          )}
          <span className="text-xs text-gray-400 font-mono tracking-wider">
            COD {product.id}
          </span>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        {/* Main image with nav */}
        <div className="relative bg-gray-50">
          {images[modalImg] ? (
            <img
              src={images[modalImg]}
              alt={`${product.title} Cod ${product.id}`}
              className="w-full aspect-square object-contain object-top md:aspect-[4/3] md:max-h-[60vh]"
            />
          ) : (
            <ImagePlaceholder id={product.id} />
          )}

          {/* Sale badge on image */}
          {hasSale && !isOut && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center rounded-md bg-red-600 text-white text-[11px] font-semibold px-2 py-1 shadow">
                Reducere{discountPct ? ` -${discountPct}%` : ""}
              </span>
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setModalImg((i) => (i - 1 + images.length) % images.length)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-2xl border border-white/60 cursor-pointer shadow"
                aria-label="Imaginea anterioară"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => setModalImg((i) => (i + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-2xl border border-white/60 cursor-pointer shadow"
                aria-label="Imaginea următoare"
              >
                ›
              </button>

              {/* Thumbnail strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-10 flex gap-2 justify-center overflow-x-auto">
                {images.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setModalImg(i)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                      i === modalImg
                        ? "border-white scale-105"
                        : "border-white/30"
                    }`}
                    aria-label={`Imagine ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Product info */}
        <div className="px-5 pt-5 pb-10 space-y-5">
          {/* Title + price */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase">
                {product.brand} • {product.type} • {product.color}
              </p>
              <h2 className="text-xl font-bold text-gray-900 leading-snug mt-1">
                {product.title}
              </h2>
              <p className="text-sm text-gray-400 mt-0.5">Cod: {product.id}</p>
            </div>

            <div className="text-right flex-shrink-0">
              <p
                className={`text-2xl font-bold leading-none ${
                  hasSale ? "text-red-600" : "text-gray-900"
                }`}
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

          <div className="border-t border-gray-100" />

          {/* Sizes */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">
              Mărimi disponibile
            </h3>

            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => {
                const qty = product.stock?.[s] ?? null;
                const disabled = qty === 0;

                return (
                  <SizePill
                    key={s}
                    label={s}
                    disabled={product.stock ? disabled : false}
                  />
                );
              })}
            </div>

            {product.stock == null && (
              <p className="text-xs text-gray-400">
                Stocul pe mărimi nu este afișat pentru acest produs.
              </p>
            )}
          </div>

          <div className="border-t border-gray-100" />

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Descriere produs
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Info strips */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 divide-y divide-gray-100">
            <InfoStrip
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
              title="Livrare gratuită!"
              subtitle="La comenzi peste 350 LEI"
            />
            <InfoStrip
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="3" width="15" height="13" rx="1" />
                  <path d="M16 8h4l3 5v3h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              }
              title="Livrare în 1–5 zile"
              subtitle="Toate taxele incluse, fără costuri ascunse"
            />
            <InfoStrip
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              }
              title="Schimbare produs"
              subtitle="Poți schimba produsul în 15 zile"
            />
          </div>

          {/* Size guide */}
          <img
            src="/size-guide.png"
            alt="Ghid mărimi"
            className="w-full rounded-xl border border-gray-100"
          />

          {/* WhatsApp button */}
          <a
            href={buildWhatsAppLink(product.id)}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2.5 text-white font-bold text-sm tracking-wider py-4 rounded-2xl transition-colors w-full no-underline ${
              isOut
                ? "bg-gray-300 cursor-not-allowed pointer-events-none"
                : "bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a852]"
            }`}
            aria-label={`Comandă Cod ${product.id} pe WhatsApp`}
          >
            <FaWhatsapp size={18} />
            {isOut ? "INDISPONIBIL" : "COMANDĂ PE WHATSAPP"}
          </a>

          <p className="text-[11px] text-gray-400 text-center">
            Pentru detalii despre mărimi / disponibilitate, scrie-ne pe
            WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
