import { buildWhatsAppGeneralLink } from "../config";

export function HeroBanner() {
  return (
    <a
      href={buildWhatsAppGeneralLink()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/hero.png"
        alt="Hero Banner"
        className="w-full h-auto block cursor-pointer"
      />
    </a>
  );
}
