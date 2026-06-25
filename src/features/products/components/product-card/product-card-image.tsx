import { useState } from "react";
import { TbZoomInFilled } from "react-icons/tb";
import { useSwipeable } from "react-swipeable";
import { GalleryImage } from "./gallery-image";

interface Props {
  id: string;
  images: string[];
  currentImg: number;
  setCurrentImg: (x: number) => void;
  title: string;
  prevImg: (e: React.MouseEvent) => void;
  nextImg: (e: React.MouseEvent) => void;
  isOut: boolean;
  hasSale: boolean;
  discountPct: number | null;
  isLimited: boolean;
}

export function ProductCardImage({
  images,
  title,
  id,
  currentImg,
  setCurrentImg,
  prevImg,
  nextImg,
  isOut,
  hasSale,
  discountPct,
  isLimited,
}: Props) {
  const showSale = hasSale && !isOut;
  const showLimited = isLimited && !isOut;
  const [isDragging, setIsDragging] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwiping: () => setIsDragging(true),
    onSwiped: () => {
      setTimeout(() => setIsDragging(false), 0);
    },
    onSwipedLeft: () => {
      if (images.length > 1) {
        setCurrentImg((currentImg + 1) % images.length);
      }
    },
    onSwipedRight: () => {
      if (images.length > 1) {
        setCurrentImg((currentImg - 1 + images.length) % images.length);
      }
    },
    preventScrollOnSwipe: false,
    trackMouse: true,
  });

  return (
    <div
      {...swipeHandlers}
      onClickCapture={(e) => {
        if (isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      className="relative overflow-hidden bg-gray-50 group cursor-pointer select-none"
    >
      <GalleryImage
        images={images}
        currentIdx={currentImg}
        alt={`${title} Cod ${id}`}
        productId={id}
      />
      {showSale && (
        <div className="absolute top-2 left-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 rounded-md bg-red-600 text-white text-[11px] font-semibold px-2 py-1 shadow">
            <span className="font-bold leading-none">
              -{discountPct ?? ""}
              {discountPct ? "%" : ""}
            </span>
          </span>
        </div>
      )}

      {/* Stock badge (top-right) */}
      {(isOut || showLimited) && (
        <div className="absolute top-2 right-2 pointer-events-none">
          {isOut ? (
            <span className="inline-flex items-center rounded-md bg-gray-900/80 text-white text-[11px] font-semibold px-2 py-1 backdrop-blur-sm shadow">
              Epuizat
            </span>
          ) : (
            <span className="inline-flex items-center rounded-md bg-amber-400/90 text-gray-900 text-[11px] font-semibold px-2 py-1 backdrop-blur-sm shadow">
              Stoc limitat
            </span>
          )}
        </div>
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />

      <div
        className="absolute bottom-2 right-2 bg-white/85 backdrop-blur-sm text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <TbZoomInFilled />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevImg}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/85 text-gray-900 w-8 h-8 rounded-full
                       flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity
                       text-xl border border-white/60 cursor-pointer shadow"
            aria-label="Imaginea anterioară"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextImg}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/85 text-gray-900 w-8 h-8 rounded-full
                       flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity
                       text-xl border border-white/60 cursor-pointer shadow"
            aria-label="Imaginea următoare"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImg(i);
                }}
                aria-label={`Imagine ${i + 1}`}
                className={`w-2 h-2 rounded-full border border-white/70 cursor-pointer transition-all ${
                  i === currentImg
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
