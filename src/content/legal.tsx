import React from "react";
import { CONFIG } from "../config";

export type LegalDocKey =
  | "terms"
  | "privacy"
  | "cookies"
  | "returns"
  | "shipping";

const SHIPPING_COST_LEI = 15;
const COURIERS = "Fan Courier / DPD";
const DELIVERY_ESTIMATE = "24–48h lucrătoare";
export const LEGAL_DOCS: Record<
  LegalDocKey,
  { title: string; body: React.ReactNode }
> = {
  shipping: {
    title: "Livrare & Plată",
    body: (
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">Livrare</h3>
          <p>
            Livrarea se face prin curier rapid ({COURIERS}), oriunde în România.
            Termenul estimat de livrare este de{" "}
            <strong>{DELIVERY_ESTIMATE}</strong> de la confirmarea comenzii (în
            perioade aglomerate poate exista o întârziere).
          </p>
          <p>
            Cost transport: <strong>{SHIPPING_COST_LEI} lei</strong> / colet.
          </p>
          <p className="text-xs text-gray-500">
            Te rugăm să verifici coletul la primire. Dacă observi deteriorări
            evidente ale ambalajului, notează acest lucru împreună cu curierul.
          </p>
        </section>

        <div className="h-px bg-gray-100" />

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">Plată</h3>
          <p>
            Plata se poate face <strong>ramburs la livrare</strong> (numerar /
            POS, în funcție de dotarea curierului), sau prin alte metode
            comunicate la confirmarea comenzii.
          </p>
          <p className="text-xs text-gray-500">
            Dacă alegi ramburs, vei achita valoarea produselor + transport la
            curier, în momentul livrării.
          </p>
        </section>
      </div>
    ),
  },

  returns: {
    title: "Retur / Drept de retragere (14 zile)",
    body: (
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            Dreptul de retragere
          </h3>
          <p>
            Dacă ești consumator (persoană fizică), ai dreptul să te retragi din
            contract în termen de <strong>14 zile calendaristice</strong> de la
            data la care intri în posesia produselor, fără a fi necesară
            justificarea deciziei.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            Cum faci returul
          </h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Ne contactezi pe WhatsApp (numărul din site) și ne spui numărul
              comenzii + produsele returnate.
            </li>
            <li>
              Îți confirmăm detaliile și adresa pentru expedierea returului.
            </li>
            <li>
              Împachetezi produsul corespunzător și îl trimiți prin curier.
            </li>
          </ol>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">Condiții</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Produsele trebuie returnate în aceeași stare în care au fost
              primite, fără urme de purtare/uzură.
            </li>
            <li>
              Etichetele (dacă există) și ambalajul trebuie păstrate pe cât
              posibil.
            </li>
            <li>Recomandăm trimiterea cu număr de urmărire (AWB).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            Costuri & rambursare
          </h3>
          <p>
            Costul transportului pentru retur este, de regulă, suportat de
            client, cu excepția situațiilor în care produsul a fost livrat
            greșit sau prezintă un defect.
          </p>
          <p>
            După recepționarea și verificarea produselor returnate, îți
            rambursăm contravaloarea produselor în cel mai scurt timp posibil,
            folosind o metodă agreată împreună.
          </p>
          <p className="text-xs text-gray-500">
            Unele categorii de produse pot avea excepții conform legislației (de
            ex. produse sigilate care nu pot fi returnate din motive de igienă
            dacă au fost desigilate).
          </p>
        </section>
      </div>
    ),
  },

  terms: {
    title: "Termeni și condiții",
    body: (
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            1. Operatorul / Vânzătorul
          </h3>
          <p>
            Magazinul online <strong>{CONFIG.storeName}</strong> este operat de{" "}
            <strong>{CONFIG.companyLegalName}</strong>, CUI/CIF:{" "}
            <strong>{CONFIG.companyCUI}</strong>, Reg. Com.:{" "}
            <strong>{CONFIG.companyRegCom}</strong>.
          </p>
          <p className="text-xs text-gray-500">
            Pentru suport și comenzi, ne poți contacta pe WhatsApp / telefon
            (conform datelor afișate în site).
          </p>
        </section>

        <div className="h-px bg-gray-100" />

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">2. Comenzi</h3>
          <p>
            Comenzile se plasează prin site și se confirmă ulterior (de ex. prin
            WhatsApp / telefon). Ne rezervăm dreptul de a refuza comenzi
            neconfirmate sau care conțin informații incomplete.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">3. Prețuri</h3>
          <p>
            Prețurile sunt exprimate în lei (RON) și pot fi modificate fără
            notificare prealabilă. Prețul final este cel confirmat la momentul
            confirmării comenzii.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            4. Livrare & plată
          </h3>
          <p>
            Detaliile privind livrarea și plata sunt prezentate în secțiunea{" "}
            <strong>„Livrare & Plată”</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            5. Retur / retragere
          </h3>
          <p>
            Detaliile privind returul și dreptul de retragere sunt prezentate în
            secțiunea <strong>„Retur / Drept de retragere (14 zile)”</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">6. Răspundere</h3>
          <p>
            Depunem eforturi pentru a afișa informații corecte (descrieri,
            prețuri, disponibilitate). Imaginile au caracter informativ. Pot
            exista mici diferențe de nuanță în funcție de ecran/dispozitiv.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            7. Soluționarea reclamațiilor
          </h3>
          <p>
            Orice sesizare poate fi transmisă pe WhatsApp / telefon. Vom încerca
            soluționarea pe cale amiabilă.
          </p>
          <p className="text-xs text-gray-500">
            Poți folosi și ANPC (anpc.ro) sau platforma SOL (ODR) a Comisiei
            Europene.
          </p>
        </section>
      </div>
    ),
  },

  privacy: {
    title: "Politica de confidențialitate (GDPR)",
    body: (
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            1. Cine suntem
          </h3>
          <p>
            Operatorul de date este <strong>{CONFIG.companyLegalName}</strong>{" "}
            (magazin: <strong>{CONFIG.storeName}</strong>).
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            2. Ce date colectăm
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Date de contact: nume, telefon / WhatsApp, adresă de livrare.
            </li>
            <li>Detalii comandă: produse, cantități, preț, status.</li>
            <li>
              Date tehnice: informații minime despre dispozitiv/browser (dacă
              există loguri tehnice).
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            3. De ce le folosim
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Procesarea și livrarea comenzilor.</li>
            <li>
              Comunicarea cu tine privind comanda (confirmare, livrare, retur).
            </li>
            <li>Îndeplinirea obligațiilor legale (documente, evidențe).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            4. Cui divulgăm datele
          </h3>
          <p>
            Datele pot fi transmise către curier (pentru livrare) și către
            autorități/instituții atunci când există obligații legale.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            5. Cât timp păstrăm datele
          </h3>
          <p>
            Păstrăm datele atât cât este necesar pentru procesarea comenzilor și
            conform obligațiilor legale.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            6. Drepturile tale
          </h3>
          <p>
            Ai dreptul de acces, rectificare, ștergere, restricționare, opoziție
            și portabilitate, conform GDPR, în limitele legii. Pentru
            exercitarea drepturilor, ne poți contacta pe WhatsApp / telefon.
          </p>
        </section>
      </div>
    ),
  },

  cookies: {
    title: "Politica de cookies",
    body: (
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            1. Ce sunt cookies
          </h3>
          <p>
            Cookies sunt fișiere mici salvate în browser pentru a îmbunătăți
            funcționarea site-ului și experiența utilizatorului.
          </p>
        </section>

        {/* 
        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            2. Ce cookies folosim
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Necesare</strong>: pentru funcționarea site-ului (de ex.
              preferințe, sesiune).
            </li>
            <li>
              <strong>Statistice / marketing</strong> (opțional): doar dacă
              folosești instrumente precum analytics/pixel.
            </li>
          </ul>
        </section>
		*/}

        <section className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">
            3. Administrarea cookies
          </h3>
          <p>
            Poți controla și/sau șterge cookies din setările browserului tău.
            Dezactivarea anumitor cookies poate afecta funcționarea site-ului.
          </p>
        </section>
      </div>
    ),
  },
};
