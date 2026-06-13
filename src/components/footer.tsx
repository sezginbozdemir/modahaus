import { useMemo, useState } from "react";
import { CONFIG, buildWhatsAppGeneralLink } from "../config";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { LEGAL_DOCS, LegalDocKey } from "../content/legal";
import { InfoModal } from "./info-modal";

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3">
      {children}
    </p>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

function FooterModalLink({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors text-left"
    >
      {children}
    </button>
  );
}

type DocKey = LegalDocKey | "shipping-returns" | null;

export function Footer() {
  const year = new Date().getFullYear();
  const [doc, setDoc] = useState<DocKey>(null);

  const modal = useMemo(() => {
    if (!doc) return null;

    if (doc === "shipping-returns") {
      return {
        title: "Livrare & Retur",
        body: (
          <div className="space-y-6">
            <section>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {LEGAL_DOCS.shipping.title}
              </h3>
              {LEGAL_DOCS.shipping.body}
            </section>

            <div className="h-px bg-gray-100" />

            <section>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {LEGAL_DOCS.returns.title}
              </h3>
              {LEGAL_DOCS.returns.body}
            </section>
          </div>
        ),
      };
    }

    return {
      title: LEGAL_DOCS[doc].title,
      body: LEGAL_DOCS[doc].body,
    };
  }, [doc]);

  return (
    <footer className="bg-black text-white mt-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div>
              <div className="font-heading font-black text-lg tracking-wide">
                {CONFIG.storeName}
              </div>
              <div className="text-green-400 text-[10px] font-semibold tracking-widest uppercase -mt-0.5">
                {CONFIG.tagline}
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Prețuri corecte, modele noi și livrare rapidă. Pentru detalii și
              comenzi, scrie-ne pe WhatsApp.
            </p>

            <a
              href={buildWhatsAppGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 hover:bg-green-500
                         px-3 py-2 text-sm font-semibold transition-colors w-fit"
            >
              <FaWhatsapp />
              Contact pe WhatsApp
            </a>
          </div>

          {/* Support (no repetition) */}
          <div className="space-y-2 text-sm">
            <FooterTitle>Suport</FooterTitle>

            <FooterModalLink onClick={() => setDoc("shipping-returns")}>
              Livrare & Retur
            </FooterModalLink>
            <br />

            <FooterLink href={buildWhatsAppGeneralLink()} external>
              Contact WhatsApp
            </FooterLink>
          </div>

          {/* Company */}
          <div className="space-y-2 text-sm">
            <FooterTitle>Companie</FooterTitle>

            <div className="text-gray-300 space-y-2">
              <div className="flex items-center gap-2">
                <FaPhone className="text-white/70" />
                <span>+{CONFIG.whatsappNumber}</span>
              </div>

              <div className="text-xs text-gray-500 leading-relaxed pt-2">
                {CONFIG.companyLegalName}
                <br />
                CUI/CIF: {CONFIG.companyCUI}
                <br />
                Reg. Com.: {CONFIG.companyRegCom}
              </div>
            </div>
          </div>

          {/* Legal (modal) */}
          <div className="space-y-2 text-sm">
            <FooterTitle>Legal</FooterTitle>

            <FooterModalLink onClick={() => setDoc("terms")}>
              Termeni și condiții
            </FooterModalLink>
            <br />

            <FooterModalLink onClick={() => setDoc("privacy")}>
              Politica de confidențialitate (GDPR)
            </FooterModalLink>
            <br />

            <FooterModalLink onClick={() => setDoc("cookies")}>
              Politica de cookies
            </FooterModalLink>
            <br />

            <FooterModalLink onClick={() => setDoc("returns")}>
              Politica de retur
            </FooterModalLink>

            <div className="pt-3 text-xs text-gray-500 leading-relaxed">
              <div className="mb-2">
                ANPC:{" "}
                <FooterLink href="https://anpc.ro/" external>
                  anpc.ro
                </FooterLink>
              </div>
              <div>
                SOL (ODR):{" "}
                <FooterLink href="https://ec.europa.eu/consumers/odr" external>
                  ec.europa.eu/consumers/odr
                </FooterLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-gray-500 text-xs">
            © {year} {CONFIG.storeName}. Toate drepturile rezervate.
          </p>

          <div className="text-gray-500 text-xs flex flex-wrap gap-x-4 gap-y-2 justify-center">
            <FooterModalLink onClick={() => setDoc("terms")}>
              Termeni
            </FooterModalLink>
            <FooterModalLink onClick={() => setDoc("privacy")}>
              Confidențialitate
            </FooterModalLink>
            <FooterModalLink onClick={() => setDoc("cookies")}>
              Cookies
            </FooterModalLink>
          </div>
        </div>
      </div>

      <InfoModal
        open={doc !== null}
        title={modal?.title ?? ""}
        onClose={() => setDoc(null)}
      >
        {modal?.body}
      </InfoModal>

      {/* Floating WhatsApp button */}
      <a
        href={buildWhatsAppGeneralLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-400
                   text-white rounded-full w-14 h-14 flex items-center justify-center
                   shadow-xl hover:shadow-green-500/30 hover:scale-110 transition-all duration-200"
        aria-label="Contactează-ne pe WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </footer>
  );
}
