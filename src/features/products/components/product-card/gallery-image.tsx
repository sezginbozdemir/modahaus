import { useState } from "react";
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
  const [imgError, setImgError] = useState(false);

  if (imgError || !images[currentIdx])
    return <ImagePlaceholder id={productId} />;
  return (
    <img
      src={images[currentIdx]}
      alt={alt}
      className="w-full aspect-square object-cover object-top transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      onError={() => setImgError(true)}
    />
  );
}
