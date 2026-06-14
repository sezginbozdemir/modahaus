import { MdCookie } from "react-icons/md";
import { HiCheck } from "react-icons/hi";

interface ConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function ConsentBanner({ onAccept, onDecline }: ConsentBannerProps) {
  return (
    <>
      <style>{`
        @keyframes gcmSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gcm-banner { animation: none !important; }
        }
      `}</style>

      <div
        className="fixed inset-x-0 bottom-0 z-[9999] flex justify-center px-3 pb-3 sm:px-4 sm:pb-5 pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-label="Consimțământ cookie-uri"
      >
        <div
          className="gcm-banner pointer-events-auto w-full max-w-2xl bg-white border border-slate-200 rounded-xl overflow-hidden"
          style={{
            animation: "gcmSlideUp 0.3s cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          {/* Denim accent bar */}
          <div className="h-[3px] bg-gradient-to-r from-[#1a3a5c] via-[#2d6a9f] to-[#1a3a5c]" />

          {/* Content */}
          <div className="flex items-start gap-3 px-4 pt-3.5 pb-3 sm:items-center">
            {/* Icon */}
            <div className="shrink-0 w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 sm:mt-0">
              <MdCookie
                size={18}
                className="text-[#1a3a5c]"
                aria-hidden="true"
              />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="m-0 mb-0.5 text-[0.8125rem] font-semibold text-slate-900 leading-snug">
                Respectăm confidențialitatea ta
              </p>
              <p className="m-0 text-[0.75rem] text-slate-500 leading-relaxed">
                Folosim cookie-uri pentru a îmbunătăți experiența ta de
                cumpărături și a afișa reclame personalizate prin{" "}
                <strong className="text-slate-700 font-medium">
                  Google Consent Mode v2
                </strong>
                .{" "}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 px-4 pb-3.5">
            <button
              type="button"
              onClick={onDecline}
              className="text-[0.75rem] font-medium text-slate-500 bg-transparent border border-slate-200 rounded-lg px-4 py-1.5 transition-colors hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-300 cursor-pointer"
            >
              Refuz
            </button>
            <button
              type="button"
              onClick={onAccept}
              className="flex items-center gap-1.5 text-[0.75rem] font-medium text-white bg-[#1a3a5c] rounded-lg px-4 py-1.5 transition-colors hover:bg-[#2d6a9f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a3a5c] cursor-pointer"
            >
              <HiCheck size={13} aria-hidden="true" />
              Accept tot
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
