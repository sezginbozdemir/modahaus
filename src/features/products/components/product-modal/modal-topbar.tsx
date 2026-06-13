import { FaArrowLeftLong } from "react-icons/fa6";

interface Props {
  onClose: () => void;
  productId: string;
  hasSale: boolean;
  discountPct: number | null;
  isOut: boolean;
}

export function ModalTopbar({
  onClose,
  productId,
  hasSale,
  discountPct,
  isOut,
}: Props) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 flex-shrink-0">
      <button
        type="button"
        onClick={onClose}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <FaArrowLeftLong /> Înapoi
      </button>

      <div className="flex items-center gap-2">
        {isOut && (
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-900 text-white">
            Epuizat
          </span>
        )}
        {hasSale && !isOut && (
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-red-500 text-white">
            {discountPct ? `-${discountPct}%` : "Reducere"}
          </span>
        )}
        <span className="text-[11px] text-gray-400 font-mono tracking-wider">
          COD {productId}
        </span>
      </div>
    </div>
  );
}
