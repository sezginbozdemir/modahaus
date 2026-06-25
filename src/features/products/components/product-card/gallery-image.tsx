import { useState, useEffect, useRef } from "react";
import { ImagePlaceholder } from "./image-placeholder";

export function GalleryImage({
  images,
  currentIdx,
  alt,
  productId,
}: {
  images: string[];
  currentIdx: number;
  alt: string;
  productId: string;
}) {
  const [erroredIdx, setErroredIdx] = useState<Set<number>>(new Set());
  const prevIdxRef = useRef(currentIdx);
  const [skipTransition, setSkipTransition] = useState(false);

  useEffect(() => {
    const prev = prevIdxRef.current;
    const last = images.length - 1;

    const isWrap =
      (prev === last && currentIdx === 0) ||
      (prev === 0 && currentIdx === last);

    if (isWrap) {
      setSkipTransition(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSkipTransition(false));
      });
    }

    prevIdxRef.current = currentIdx;
  }, [currentIdx, images.length]);

  if (images.length === 0) return <ImagePlaceholder id={productId} />;

  return (
    <div className="w-full aspect-square overflow-hidden relative">
      <div
        className={`flex h-full ease-out ${
          skipTransition ? "" : "transition-transform duration-300"
        }`}
        style={{ transform: `translateX(-${currentIdx * 100}%)` }}
      >
        {images.map((src, i) =>
          erroredIdx.has(i) ? (
            <div key={i} className="w-full h-full flex-shrink-0">
              <ImagePlaceholder id={productId} />
            </div>
          ) : (
            <img
              key={i}
              src={src}
              alt={alt}
              className="w-full h-full flex-shrink-0 object-cover object-top"
              loading={i === currentIdx ? "eager" : "lazy"}
              onError={() => setErroredIdx((prev) => new Set(prev).add(i))}
            />
          ),
        )}
      </div>
    </div>
  );
}
