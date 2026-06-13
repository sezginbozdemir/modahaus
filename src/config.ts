export const CONFIG = {
  /** WhatsApp number in international format WITHOUT + or spaces, e.g. "40712345678" */
  whatsappNumber: "40745460352",
  storeName: "MODAHAUS",
  tagline: "Catalog",
  initialLoad: 20,
  loadMoreCount: 12,
  companyLegalName: "SC ERCONF SRL",
  companyCUI: "RO9638399",
  companyRegCom: "J40/6163/1997",
} as const;

export function buildWhatsAppLink(productId: string): string {
  const msg = encodeURIComponent(
    `Bună ziua! Sunt interesat de Cod: ${productId}. Vă rog să-mi confirmați disponibilitatea și detaliile de livrare.`,
  );
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}

export function buildWhatsAppGeneralLink(): string {
  const msg = encodeURIComponent(
    "Bună ziua! Sunt interesat de produsele voastre en-gros.",
  );
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}
