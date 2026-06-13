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
  return (
    <div className="relative bg-gray-50">
      {images[modalImg] ? (
        <img
          src={images[modalImg]}
          alt={`${productTitle} Cod ${productId}`}
          className="w-full aspect-square object-contain object-top md:aspect-[4/3] md:max-h-[60vh]"
        />
      ) : (
        <ImagePlaceholder id={productId} />
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() =>
              setModalImg((i) => (i - 1 + images.length) % images.length)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-2xl border border-white/60 shadow"
            aria-label="Imaginea anterioară"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setModalImg((i) => (i + 1) % images.length)}
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
