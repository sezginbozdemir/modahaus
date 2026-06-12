export function Chip({
  children,
  onRemove,
}: {
  children: React.ReactNode;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800">
      {children}
      <button
        type="button"
        onClick={onRemove}
        className="text-gray-500 hover:text-gray-900"
        aria-label="Remove"
      >
        ×
      </button>
    </span>
  );
}
