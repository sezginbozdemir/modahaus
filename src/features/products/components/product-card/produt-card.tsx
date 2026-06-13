import { useState, useEffect, useCallback } from "react";
import { Product } from "../../data/products";
import { ProductCardImage } from "./product-card-image";
import { ProductCardInfo } from "./product-card-info";
import { ProductModal } from "../product-modal/product-modal";

interface ProductCardProps {
  product: Product;
  index: number;
}

function totalStock(stock: Record<string, number> | null) {
  if (!stock) return null;
  return Object.values(stock).reduce((a, b) => a + b, 0);
}
function formatLei(x: number) {
  return new Intl.NumberFormat("ro-RO").format(x);
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [currentImg, setCurrentImg] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(0);

  const images = [
    ...(product.image ? [product.image] : []),
    ...(product.extraImages ?? []),
  ];
  const price = product.salePrice ?? product.unitPrice;

  const stockTotal = totalStock(product.stock);
  const isOut = stockTotal === 0; // if stock provided and sums to 0
  const isLimited = stockTotal != null && stockTotal > 0 && stockTotal <= 5;

  const hasSale =
    product.salePrice != null && product.salePrice < product.unitPrice;

  const discountPct =
    hasSale && product.salePrice != null && product.unitPrice > 0
      ? Math.round(
          ((product.unitPrice - product.salePrice) / product.unitPrice) * 100,
        )
      : null;

  const delayStyle: React.CSSProperties = {
    animationDelay: `${Math.min(index * 40, 400)}ms`,
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((i) => (i - 1 + images.length) % images.length);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((i) => (i + 1) % images.length);
  };

  const openModal = () => {
    setModalImg(currentImg);
    setModalOpen(true);
  };

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft")
        setModalImg((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setModalImg((i) => (i + 1) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (modalOpen) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen, handleKey]);

  return (
    <>
      <div
        className="card-animate bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden border border-gray-200 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
        style={delayStyle}
        onClick={openModal}
      >
        <ProductCardImage
          prevImg={prevImg}
          nextImg={nextImg}
          images={images}
          title={product.title}
          id={product.id}
          currentImg={currentImg}
          setCurrentImg={setCurrentImg}
          hasSale={hasSale}
          discountPct={discountPct}
          isOut={isOut}
          isLimited={isLimited}
        />

        <ProductCardInfo
          hasSale={hasSale}
          isOut={isOut}
          formatLei={formatLei}
          price={price}
          product={product}
        />
      </div>

      {modalOpen && (
        <ProductModal
          product={product}
          setModalImg={setModalImg}
          setModalOpen={setModalOpen}
          images={images}
          modalImg={modalImg}
          hasSale={hasSale}
          isOut={isOut}
          formatLei={formatLei}
          price={price}
          discountPct={discountPct}
        />
      )}
    </>
  );
}
