import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { ImagePlaceholder } from "../product-card/image-placeholder";

interface Props {
  images: string[];
  modalImg: number;
  setModalImg: React.Dispatch<React.SetStateAction<number>>;
  productId: string;
  productTitle: string;
}

export function ModalImageGallery({
  images,
  modalImg,
  setModalImg,
  productId,
  productTitle,
}: Props) {
  const last = images.length - 1;
  const [erroredIdx, setErroredIdx] = useState<Set<number>>(new Set());
  const [enableTransition, setEnableTransition] = useState(true);
  const prevIdxRef = useRef(modalImg);
  const [slidePos, setSlidePos] = useState(modalImg + 1);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const prev = prevIdxRef.current;
    const wrappedForward = prev === last && modalImg === 0;
    const wrappedBackward = prev === 0 && modalImg === last;

    setEnableTransition(true);

    if (wrappedForward) {
      setSlidePos(last + 2);
    } else if (wrappedBackward) {
      setSlidePos(0);
    } else {
      setSlidePos(modalImg + 1);
    }

    prevIdxRef.current = modalImg;
  }, [modalImg, last]);

  const handleTransitionEnd = () => {
    if (slidePos === last + 2) {
      setEnableTransition(false);
      setSlidePos(1);
    } else if (slidePos === 0) {
      setEnableTransition(false);
      setSlidePos(last + 1);
    }
  };

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }
  }, [enableTransition]);

  const goNext = () => setModalImg((i) => (i + 1) % images.length);
  const goPrev = () =>
    setModalImg((i) => (i - 1 + images.length) % images.length);

  const swipeHandlers = useSwipeable({
    onSwiping: () => setIsDragging(true),
    onSwiped: () => setTimeout(() => setIsDragging(false), 0),
    onSwipedLeft: () => images.length > 1 && goNext(),
    onSwipedRight: () => images.length > 1 && goPrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (images.length === 0) {
    return <ImagePlaceholder id={productId} />;
  }

  const extended =
    images.length > 1 ? [images[last], ...images, images[0]] : images;

  const renderSlide = (src: string, i: number, realIdx: number) =>
    erroredIdx.has(realIdx) || !src ? (
      <div key={i} className="w-full flex-shrink-0">
        <ImagePlaceholder id={productId} />
      </div>
    ) : (
      <img
        key={i}
        src={src}
        alt={`${productTitle} Cod ${productId}`}
        className="w-full flex-shrink-0 aspect-square object-contain object-top md:aspect-[4/3] md:max-h-[60vh] [-webkit-user-drag:none]"
        loading={realIdx === modalImg ? "eager" : "lazy"}
        draggable={false}
        onError={() => setErroredIdx((prev) => new Set(prev).add(realIdx))}
      />
    );

  return (
    <div
      {...(images.length > 1 ? swipeHandlers : {})}
      onClickCapture={(e) => {
        if (isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      className="relative bg-gray-50 overflow-hidden select-none"
    >
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex ease-out ${
          enableTransition ? "transition-transform duration-300" : ""
        }`}
        style={{
          transform:
            images.length > 1
              ? `translateX(-${slidePos * 100}%)`
              : "translateX(0%)",
        }}
      >
        {images.length > 1
          ? extended.map((src, i) => {
              const realIdx =
                i === 0 ? last : i === extended.length - 1 ? 0 : i - 1;
              return renderSlide(src, i, realIdx);
            })
          : renderSlide(images[0], 0, 0)}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-2xl border border-white/60 shadow"
            aria-label="Imaginea anterioară"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-2xl border border-white/60 shadow"
            aria-label="Imaginea următoare"
          >
            ›
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-10 flex gap-2 justify-center overflow-x-auto">
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setModalImg(i)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  i === modalImg ? "border-white scale-105" : "border-white/30"
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
  );
}
