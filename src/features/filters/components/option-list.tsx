export function OptionList({
  options,
  selected,
  onPick,
  onClear,
}: {
  options: readonly string[];
  selected: string[];
  onPick: (x: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="pt-3 space-y-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onClear}
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
            selected.length === 0
              ? "bg-gray-900 text-white border-gray-900"
              : "border-gray-200 text-gray-600 hover:border-gray-400"
          }`}
        >
          Toate
        </button>
        {selected.length > 0 && (
          <span className="text-xs text-gray-400">
            {selected.length} selectate
          </span>
        )}
      </div>
      <div className="max-h-48 overflow-auto pr-0.5 grid grid-cols-1 gap-1">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onPick(opt)}
            className={`text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
              selected.includes(opt)
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-100 hover:border-gray-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
