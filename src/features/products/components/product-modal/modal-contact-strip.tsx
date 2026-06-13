import { FaWhatsapp } from "react-icons/fa";
import { CONFIG, buildWhatsAppGeneralLink } from "../../../../config";

export function ModalContactStrip() {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] text-gray-400 uppercase tracking-widest">
          Telefon / WhatsApp
        </span>
        <span className="text-[15px] font-medium text-gray-900">
          +{CONFIG.whatsappNumber}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={buildWhatsAppGeneralLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-400 text-gray-700 text-sm px-4 py-2 rounded-full transition-colors"
        >
          <FaWhatsapp size={14} />
          Chat
        </a>
      </div>
    </div>
  );
}
