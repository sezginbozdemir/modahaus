import { useEffect } from "react";

export function InfoModal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Închide"
      />

      {/* panel */}
      <div
        className="absolute left-1/2 top-1/2 w-[min(920px,calc(100vw-2rem))] max-h-[80vh]
                      -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl flex flex-col"
      >
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Închide
          </button>
        </div>

        <div className="p-5 overflow-auto text-sm text-gray-700 leading-relaxed">
          {children}
        </div>

        <div className="px-5 py-4 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 rounded-md bg-gray-900 text-white text-sm"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
