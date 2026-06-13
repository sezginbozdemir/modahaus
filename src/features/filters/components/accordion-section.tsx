import React from "react";

type SectionKey = "brand" | "fit" | "color" | "sizes" | "price" | null;

export function AccordionSection({
  id,
  title,
  subtitle,
  openId,
  setOpenId,
  children,
  activeCount = 0,
}: {
  id: Exclude<SectionKey, null>;
  title: string;
  subtitle?: string;
  openId: SectionKey;
  setOpenId: React.Dispatch<React.SetStateAction<SectionKey>>;
  children: React.ReactNode;
  activeCount?: number;
}) {
  const isOpen = openId === id;
  const toggle = () => setOpenId((curr) => (curr === id ? null : id));

  return (
    <section className="rounded-xl border border-gray-100 overflow-hidden">
      <button
        type="button"
        onClick={toggle}
        className="w-full px-4 py-3 flex items-center justify-between gap-3 bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm font-medium text-gray-800">{title}</span>
          {subtitle && !activeCount && (
            <span className="text-xs text-gray-400">{subtitle}</span>
          )}
          {activeCount > 0 && (
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-900 text-white text-[10px] font-bold leading-none">
              {activeCount}
            </span>
          )}
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-3 pb-3 border-t border-gray-100 bg-white">
          {children}
        </div>
      )}
    </section>
  );
}

export type { SectionKey };
