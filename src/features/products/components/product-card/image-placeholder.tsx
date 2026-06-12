import { IoImageOutline } from "react-icons/io5";

export function ImagePlaceholder({ id }: { id: string }) {
  return (
    <div className="w-full aspect-square bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-300">
      <IoImageOutline size={50} />
      <span className="text-xs font-mono text-gray-400">COD {id}</span>
    </div>
  );
}
