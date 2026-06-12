import { CONFIG, buildWhatsAppGeneralLink } from "../config";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaTruckFast,
  FaHeadset,
  FaArrowRotateLeft,
  FaMoneyBillWave,
} from "react-icons/fa6";

function Perk({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 text-gray-200">
      <div className="text-white/90">{icon}</div>
      <div className="leading-tight">
        <div className="text-[11px] font-semibold tracking-wide uppercase">
          {title}
        </div>
        <div className="text-[11px] text-gray-300">{subtitle}</div>
      </div>
    </div>
  );
}

function MobileTrustBar() {
  return (
    <div className="sm:hidden bg-black text-gray-200 border-t border-white/10 shadow-[0_-8px_20px_rgba(0,0,0,0.35)]">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-[11px]">
        <span className="inline-flex items-center gap-2">
          <FaTruckFast className="text-white/80" />
          Livrare 24–48h
        </span>

        <span className="text-white/20">•</span>

        <span className="inline-flex items-center gap-2">
          <FaArrowRotateLeft className="text-white/80" />
          Retur 14 zile
        </span>

        <span className="text-white/20">•</span>

        <span className="inline-flex items-center gap-2">
          <FaMoneyBillWave className="text-white/80" />
          Ramburs
        </span>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden sm:block bg-black text-gray-200 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5 text-[11px]">
            <span className="inline-flex items-center gap-2">
              <FaTruckFast className="text-white/80" />
              Livrare 24–48h
            </span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-2">
              <FaArrowRotateLeft className="text-white/80" />
              Retur 14 zile
            </span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-2">
              <FaMoneyBillWave className="text-white/80" />
              Plată ramburs
            </span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-2">
              <FaHeadset className="text-white/80" />
              L–S 10:00–18:00
            </span>
          </div>

          <a
            href={buildWhatsAppGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2 text-[11px] text-gray-200 hover:text-white"
          >
            <FaWhatsapp className="text-green-400" />
            <span>Suport pe WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-black text-white border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="font-heading font-black text-lg tracking-wide leading-tight">
              {CONFIG.storeName}
            </div>
            <div className="text-green-400 text-[10px] font-semibold tracking-widest uppercase -mt-0.5">
              {CONFIG.tagline}
            </div>
          </div>

          {/* Perks (desktop only) — bigger spacing */}
          <nav className="hidden lg:flex items-center gap-14">
            <Perk
              icon={<FaHeadset size={18} />}
              title="Suport rapid"
              subtitle="Răspundem repede"
            />
            <Perk
              icon={<FaArrowRotateLeft size={18} />}
              title="Retur simplu"
              subtitle="Fără bătăi de cap"
            />
            <Perk
              icon={<FaMoneyBillWave size={18} />}
              title="Ramburs"
              subtitle="Plătești la livrare"
            />
          </nav>

          {/* CTA */}
          <a
            href={buildWhatsAppGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-md
                       bg-green-600 hover:bg-green-500
                       px-3 sm:px-4 py-2 text-xs sm:text-sm
                       font-semibold tracking-wide uppercase transition-colors"
          >
            <FaWhatsapp size={16} />
            <span className="hidden sm:inline">Contact WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>

        <div className="sm:hidden h-1 shadow-[0_10px_18px_rgba(0,0,0,0.35)]" />
      </div>

      <MobileTrustBar />
    </header>
  );
}
