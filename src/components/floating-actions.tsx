import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { buildWhatsAppGeneralLink } from "../config";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClass =
    "flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-200 hover:scale-110";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <button
        onClick={scrollToTop}
        aria-label="Înapoi sus"
        className={`
    ${buttonClass}
    bg-white text-black border border-gray-300
    hover:shadow-2xl
    ${
      showTop
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "translate-y-2 opacity-0 pointer-events-none"
    }
  `}
      >
        <FaArrowUp size={20} />
      </button>

      <a
        href={buildWhatsAppGeneralLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactează-ne pe WhatsApp"
        className={`${buttonClass} bg-green-500 text-white hover:bg-green-400`}
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
