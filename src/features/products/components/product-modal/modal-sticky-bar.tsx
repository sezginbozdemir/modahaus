import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "../../../../config";

interface Props {
  productId: string;
  isOut: boolean;
}

export function ModalStickyBar({ productId, isOut }: Props) {
  return (
    <div className="flex-shrink-0 px-4 py-3 border-t border-gray-100 bg-white">
      <a
        href={buildWhatsAppLink(productId)}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-white font-medium text-sm tracking-wide transition-colors ${
          isOut
            ? "bg-gray-200 text-gray-400 pointer-events-none cursor-not-allowed"
            : "bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a852]"
        }`}
        aria-label={`Comandă Cod ${productId} pe WhatsApp`}
      >
        <FaWhatsapp size={18} />
        {isOut ? "INDISPONIBIL" : "COMANDĂ PE WHATSAPP"}
      </a>
      <p className="text-[11px] text-gray-400 text-center mt-2">
        Scrie-ne pentru detalii despre mărimi sau disponibilitate
      </p>
    </div>
  );
}
