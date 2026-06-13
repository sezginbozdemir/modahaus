import { CONFIG, buildWhatsAppGeneralLink } from "../config";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaTruckFast,
  FaHeadset,
  FaArrowRotateLeft,
  FaMoneyBillWave,
} from "react-icons/fa6";

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400">
      <span className="text-gray-500">{icon}</span>
      {label}
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gray-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <TrustItem
              icon={<FaTruckFast size={11} />}
              label="Livrare 24–48h"
            />
            <span className="text-white/10">·</span>
            <TrustItem
              icon={<FaArrowRotateLeft size={11} />}
              label="Retur 14 zile"
            />
            <span className="hidden min-[400px]:inline text-white/10">·</span>
            <span className="hidden min-[400px]:inline">
              <TrustItem icon={<FaMoneyBillWave size={11} />} label="Ramburs" />
            </span>
            <span className="hidden sm:inline text-white/10">·</span>
            <span className="hidden sm:inline">
              <TrustItem
                icon={<FaHeadset size={11} />}
                label="L–S 10:00–18:00"
              />
            </span>
          </div>
          <a
            href={buildWhatsAppGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-white transition-colors"
          >
            <FaWhatsapp className="text-green-500" size={11} />
            <span className="hidden sm:inline">Suport WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <picture>
              <source media="(min-width: 640px)" srcSet="/mh-m.png" />
              <img
                src="/mh-s.png"
                alt={CONFIG.storeName}
                className="h-12 w-auto object-contain"
              />
            </picture>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {[
              { icon: <FaTruckFast size={13} />, label: "Livrare rapidă" },
              { icon: <FaArrowRotateLeft size={13} />, label: "Retur 14 zile" },
              { icon: <FaMoneyBillWave size={13} />, label: "Plată ramburs" },
              { icon: <FaHeadset size={13} />, label: "Suport rapid" },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-3 py-1"
              >
                <span className="text-gray-400">{icon}</span>
                {label}
              </span>
            ))}
          </div>
          <a
            href={buildWhatsAppGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full
                       bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a852]
                       px-4 py-2 text-white text-xs font-semibold tracking-wide
                       transition-colors shadow-sm"
          >
            <FaWhatsapp size={15} />
            <span className="hidden sm:inline">Contact WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
