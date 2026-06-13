// AUTO-GENERATED — do not edit by hand.
// Run: node generate-products.mjs

export interface Product {
  id: string;
  brand: string;
  title: string;
  description: string;
  sizes: string;
  sizeList: string[];
  unitPrice: number;
  salePrice: number | null;
  color: string;
  type: string;
  plusSize: boolean;
  stock: Record<string, number> | null;
  image: string;
  extraImages: string[];
}

export type SortKey = "code-asc" | "code-desc" | "price-asc" | "price-desc";

export function sortProducts(list: Product[], key: SortKey): Product[] {
  return [...list].sort((a, b) => {
    switch (key) {
      case "code-asc":  return a.id.localeCompare(b.id);
      case "code-desc": return b.id.localeCompare(a.id);
      case "price-asc": return a.unitPrice - b.unitPrice;
      case "price-desc": return b.unitPrice - a.unitPrice;
    }
  });
}

export const BRANDS: string[] = ["Cavallione","DEPOMODA","EVA","FAF","HAPPY PINK","HEPYEK","KAROL","Kentachvi","LOVE ME","MIELE","NYC","Noventa","ONDI","Powermix","Rock Jeans","TWN","The Bark"];
export const SIZES: string[] = ["26","27","28","29","30","31","32","33","34","35","36","38","40","42","44","46","48","50","52","54","l","L","m","M","s","S","xl","XL","xs"];
export const COLORS: string[] = ["Alb","Albastru","Albastru denim","Albastru deschis","Albastru inchis","Albastru mediu","Albastru închis","Animal print","Gri","Gri antracit","Negru","Negru spălăcit","Roșu","Verde"];
export const TYPES: string[] = ["Baggy fit","Flare fit","Flared / Evazați","Flared fit","Fustă","Fustă cargo","Fustă denim midi","Fustă-pantalon","Mom fit","Oversized fit","Pantaloni eleganți","Pantaloni scurți","Skinny fit","Slim fit","Straight fit","Wide leg"];

export const products: Product[] = [
  {
    "id": "6001",
    "brand": "Cavallione",
    "title": "Blugi lejeri Cavallione cu croială baggy",
    "description": "O pereche de blugi clasici din denim albastru, cu o croială lejeră de tip baggy fit și talie înaltă, ideali pentru un look casual, confortabil și modern în stilul streetwear.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 129.99,
    "salePrice": 98.99,
    "color": "Albastru",
    "type": "Baggy fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 1,
      "38": 1,
      "40": 1,
      "42": 1
    },
    "image": "/products/Cavallione/6001/cavallione-engros-6001-2_MAIN.jpeg",
    "extraImages": [
      "/products/Cavallione/6001/cavallione-engros-6001-1.jpeg",
      "/products/Cavallione/6001/cavallione-engros-6001-3.jpeg"
    ]
  },
  {
    "id": "00",
    "brand": "DEPOMODA",
    "title": "Pantaloni lejeri sport-casual cu buzunare din denim aplicate",
    "description": "Pantaloni sport-casual confecționați dintr-un material moale și confortabil, cu o croială foarte lejeră de tip baggy / wide leg. Se remarcă prin talia elastică înaltă cu șnur și buzunarele laterale contrastante din denim albastru, fiind disponibili în culorile negru, alb și gri.",
    "sizes": "s - l",
    "sizeList": [
      "s",
      "m",
      "l"
    ],
    "unitPrice": 98.9,
    "salePrice": 68.9,
    "color": "Negru",
    "type": "Baggy fit",
    "plusSize": false,
    "stock": {
      "s": 1,
      "m": 1,
      "l": 1
    },
    "image": "/products/DEPOMODA/00/depomoda-engros-00-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "000",
    "brand": "DEPOMODA",
    "title": "Cămașă lungă din denim negru cu aplicație stea din strasuri",
    "description": "Cămașă tip jachetă supradimensionată din denim negru, prezentând detalii decorative cu rupturi discrete și o aplicație strălucitoare în formă de stea din strasuri pe buzunarul frontal.",
    "sizes": "s - l",
    "sizeList": [
      "s",
      "m",
      "l"
    ],
    "unitPrice": 129.9,
    "salePrice": 84.5,
    "color": "Negru",
    "type": "Oversized fit",
    "plusSize": false,
    "stock": {
      "s": 2,
      "m": 2,
      "l": 1
    },
    "image": "/products/DEPOMODA/000/depomoda-engros-000-2_MAIN.jpg",
    "extraImages": [
      "/products/DEPOMODA/000/depomoda-engros-000-1.jpg"
    ]
  },
  {
    "id": "00023",
    "brand": "DEPOMODA",
    "title": "Pantaloni sport-casual lejeri cu inserții din denim și dungi laterale",
    "description": "Pantaloni lungi cu o croială foarte lejeră de tip baggy fit, ce îmbină un material sport de culoare verde cu inserții laterale din denim albastru spălat.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 189.9,
    "salePrice": 129.9,
    "color": "Verde",
    "type": "Baggy fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 1,
      "40": 1,
      "42": 1
    },
    "image": "/products/DEPOMODA/00023/depomoda-engros-00023-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "001",
    "brand": "DEPOMODA",
    "title": "Pantaloni scurți din denim evazați cu talie înaltă",
    "description": "Pantaloni scurți tip fustă-pantalon confecționați din denim albastru, cu o croială foarte evazată și lejeră (flared fit).",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 54.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Flared fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 1,
      "38": 1,
      "40": 1,
      "42": 1
    },
    "image": "/products/DEPOMODA/001/depomoda-engros-001-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "00GRJ",
    "brand": "DEPOMODA",
    "title": "Blugi lejeri din denim bleumarin cu dungi sportive laterale",
    "description": "Blugi lungi cu o croială foarte lejeră de tip baggy fit, confecționați din denim albastru închis (bleumarin) cu un ușor efect spălat.",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 198.9,
    "salePrice": 98.9,
    "color": "Albastru inchis",
    "type": "Baggy fit",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2
    },
    "image": "/products/DEPOMODA/00GRJ/depomoda-engros-00-1_MAIN.jpeg",
    "extraImages": [
      "/products/DEPOMODA/00GRJ/depomoda-engros-00-2.jpeg"
    ]
  },
  {
    "id": "1114",
    "brand": "DEPOMODA",
    "title": "Pantaloni scurți de blugi Marlix cu margini franjurate",
    "description": "O pereche de pantaloni scurți din denim într-o nuanță de albastru deschis cu efect prespălat, având o croială cu talie înaltă și margini inferioare franjurate, ideali pentru un look casual, tineresc și relaxat de vară.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 45.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Pantaloni scurți",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 2,
      "42": 1
    },
    "image": "/products/DEPOMODA/1114/depomoda-engros-1114-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "1123",
    "brand": "DEPOMODA",
    "title": "Pantaloni scurți de blugi Marlix cu rupturi și franjuri",
    "description": "O pereche de pantaloni scurți din denim albastru clasic, cu un design modern ce include rupturi proeminente pe partea din față, talie medie spre înaltă și margini inferioare franjurate, ideali pentru o ținută casual și îndrăzneață în sezonul cald.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 45.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Pantaloni scurți",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/DEPOMODA/1123/depomoda-engros-1123-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "1835",
    "brand": "DEPOMODA",
    "title": "Fustă de blugi Happy Pink cu nasturi și rupturi",
    "description": "O fustă scurtă din denim negru cu efect prespălat, caracterizată printr-o închidere frontală elegantă cu nasturi la vedere, talie înaltă, zgârieturi decorative și margini inferioare nefinisate cu franjuri, perfectă pentru un stil casual-urban plin de atitudine.",
    "sizes": "S - XL",
    "sizeList": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "unitPrice": 64.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Fustă",
    "plusSize": false,
    "stock": {
      "S": 1,
      "M": 2,
      "L": 2,
      "XL": 1
    },
    "image": "/products/DEPOMODA/1835/depomoda-engros-1835-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "5271",
    "brand": "DEPOMODA",
    "title": "Fustă lungă de blugi Happy Pink cu șliț frontal",
    "description": "O fustă midi sau lungă din denim albastru clasic, prevăzută cu talie înaltă, buzunare funcționale și un șliț adânc în partea din față ce oferă libertate de mișcare, fiind o piesă versatilă și modernă pentru ținute casual zilnice.",
    "sizes": "S - XL",
    "sizeList": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "unitPrice": 78.8,
    "salePrice": null,
    "color": "Albastru",
    "type": "Fustă",
    "plusSize": false,
    "stock": {
      "S": 1,
      "M": 2,
      "L": 1,
      "XL": 1
    },
    "image": "/products/DEPOMODA/5271/depomoda-engros-5271-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "5306",
    "brand": "DEPOMODA",
    "title": "Fustă lungă de blugi cu margini franjurate",
    "description": "O fustă midi sau lungă din denim într-o nuanță deschisă de albastru, croită cu talie înaltă, buzunare clasice și o tăietură asimetrică la bază decorată cu franjuri bogate, ideală pentru un look casual, relaxat și în tendințe.",
    "sizes": "S - XL",
    "sizeList": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "unitPrice": 78.8,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Fustă",
    "plusSize": false,
    "stock": {
      "S": 1,
      "M": 2,
      "L": 2,
      "XL": 1
    },
    "image": "/products/DEPOMODA/5306/depomoda-engros-5306-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "5553",
    "brand": "DEPOMODA",
    "title": "Pantaloni eleganți roșii cu dungă",
    "description": "O pereche de pantaloni eleganți de culoare roșu aprins, cu o croială clasică și dungă călcată pe lungime, ideali pentru ținute office, formale sau smart-casual sofisticate.",
    "sizes": "xs - xl",
    "sizeList": [
      "xs",
      "s",
      "m",
      "l",
      "xl"
    ],
    "unitPrice": 64.5,
    "salePrice": null,
    "color": "Roșu",
    "type": "Pantaloni eleganți",
    "plusSize": false,
    "stock": {
      "xs": 1,
      "s": 1,
      "m": 1,
      "l": 1,
      "xl": 1
    },
    "image": "/products/DEPOMODA/5553/depomoda-engros-5553-1_MAIN.jpeg",
    "extraImages": [
      "/products/DEPOMODA/5553/depomoda-engros-5553-2.jpeg",
      "/products/DEPOMODA/5553/depomoda-engros-5553-3.jpeg",
      "/products/DEPOMODA/5553/depomoda-engros-5553-4.jpeg",
      "/products/DEPOMODA/5553/depomoda-engros-5553-5.jpeg"
    ]
  },
  {
    "id": "7430",
    "brand": "DEPOMODA",
    "title": "Fustă-pantalon de blugi Eva cu aplicații strălucitoare",
    "description": "O fustă-pantalon modernă din denim albastru, cu un design petrecut asimetric în partea din față și închidere cu nasturi dubli, decorată pe întreaga suprafață cu aplicații strălucitoare tip strasuri, perfectă pentru un look casual-chic plin de personalitate.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 89.9,
    "salePrice": 68.5,
    "color": "Albastru",
    "type": "Fustă-pantalon",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 1,
      "40": 1,
      "42": 1
    },
    "image": "/products/DEPOMODA/7430/depomoda-engros-7430-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "4593",
    "brand": "EVA",
    "title": "Blugi Eva cu croială wide leg și buzunare aplicate",
    "description": "O pereche de blugi din denim într-o nuanță de albastru deschis prespălat, cu o croială modernă de tip wide leg și talie înaltă, remarcați prin cele două buzunare mari aplicate pe partea din față, ideali pentru un look casual confortabil și chic.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 198.9,
    "salePrice": 135.9,
    "color": "Albastru deschis",
    "type": "Wide leg",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 4,
      "42": 2
    },
    "image": "/products/EVA/4593/eva-engros-4593-2_MAIN.jpeg",
    "extraImages": [
      "/products/EVA/4593/eva-engros-4593-1.jpeg"
    ]
  },
  {
    "id": "8732",
    "brand": "EVA",
    "title": "Blugi Eva cu croială mom fit și mici rupturi la bază",
    "description": "O pereche de blugi clasici din denim albastru, cu o croială de tip mom fit și talie înaltă, având discrete zgârieturi decorative pe lungime și mici rupturi stilizate la tivul inferior, ideali pentru un look casual, retro și confortabil în fiecare zi.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 129.9,
    "salePrice": 79.9,
    "color": "Albastru",
    "type": "Mom fit",
    "plusSize": false,
    "stock": {
      "34": 3,
      "36": 6,
      "38": 3,
      "40": 3,
      "42": 3
    },
    "image": "/products/EVA/8732/eva-engros-8732-2_MAIN.jpeg",
    "extraImages": [
      "/products/EVA/8732/eva-engros-8732-1.jpeg"
    ]
  },
  {
    "id": "2851",
    "brand": "FAF",
    "title": "Blugi FAF cu croială mom fit și rupturi în genunchi",
    "description": "O pereche de blugi din denim albastru clasic, cu o croială confortabilă de tip mom fit și talie înaltă, evidențiați prin rupturi proeminente cu fire albe în zona genunchilor, ideali pentru un outfit casual, relaxat și plin de stil.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 129.9,
    "salePrice": 79.9,
    "color": "Albastru",
    "type": "Mom fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/FAF/2851/faf-engros-2851-1_MAIN.jpeg",
    "extraImages": [
      "/products/FAF/2851/faf-engros-2851-2.jpeg"
    ]
  },
  {
    "id": "3098",
    "brand": "FAF",
    "title": "Fustă lungă de blugi FAF cu buzunare cargo și șliț",
    "description": "O fustă lungă din denim într-o nuanță foarte deschisă de albastru, prevăzută cu talie înaltă, un șliț frontal adânc și buzunare laterale voluminoase de tip cargo, ideală pentru un look urban modern și plin de stil.",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 145.9,
    "salePrice": 85.9,
    "color": "Albastru deschis",
    "type": "Fustă cargo",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1
    },
    "image": "/products/FAF/3098/faf-engros-3098-1_MAIN.png",
    "extraImages": []
  },
  {
    "id": "3116",
    "brand": "FAF",
    "title": "Fustă lungă de blugi FAF cu șliț frontal",
    "description": "O fustă maxi din denim de culoare albă, cu o croială dreaptă și talie înaltă, prevăzută cu un șliț adânc pe mijloc în partea din față ce adaugă o notă senzuală și modernă, ideală pentru ținute lejere și chic de vară.",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 145.9,
    "salePrice": 85.9,
    "color": "Alb",
    "type": "Fustă",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2
    },
    "image": "/products/FAF/3116/faf-engros-3116-1_MAIN.png",
    "extraImages": []
  },
  {
    "id": "3117",
    "brand": "FAF",
    "title": "Fustă lungă de blugi FAF cu șliț frontal adânc",
    "description": "O fustă lungă din denim într-o nuanță de albastru foarte deschis, croită cu talie înaltă, detalii asimetrice în zona beteliei și un șliț frontal adânc care evidențiază piciorul, completată de un tiv nefinisat la bază pentru un aer modern și casual-chic.",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 145.9,
    "salePrice": 85.9,
    "color": "Albastru deschis",
    "type": "Fustă",
    "plusSize": false,
    "stock": {
      "34": 3,
      "36": 6,
      "38": 6,
      "40": 3
    },
    "image": "/products/FAF/3117/faf-engros-3117-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "3311",
    "brand": "FAF",
    "title": "Blugi FAF cu croială wide leg și rupturi proeminente",
    "description": "O pereche de blugi din denim într-o nuanță de albastru deschis cu efect prespălat, ce se remarcă printr-o croială modernă de tip wide leg, talie înaltă și rupturi mari, franjurate în zona coapselor și a genunchilor, ideali pentru un stil streetwear plin de personalitate.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 125.9,
    "salePrice": 98.9,
    "color": "Albastru deschis",
    "type": "Wide leg",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/FAF/3311/faf-engros-3311-1_MAIN.jpeg",
    "extraImages": [
      "/products/FAF/3311/faf-engros-3311-2.jpeg",
      "/products/FAF/3311/faf-engros-3311-3.jpeg"
    ]
  },
  {
    "id": "3411",
    "brand": "FAF",
    "title": "Blugi FAF cu croială mom fit și mici rupturi la tiv",
    "description": "O pereche de blugi confortabili din denim într-o nuanță deschisă de albastru prespălat, având o croială clasică de tip mom fit cu talie înaltă, decorați cu discrete zgârieturi pe lungime și mici detalii franjurate la tivul inferior, perfecți pentru un stil casual de zi cu zi.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 149.9,
    "salePrice": 98.9,
    "color": "Albastru deschis",
    "type": "Mom fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/FAF/3411/faf-engros-3411-2_MAIN.jpeg",
    "extraImages": [
      "/products/FAF/3411/faf-engros-3411-1.jpeg",
      "/products/FAF/3411/faf-engros-3411-3.jpeg"
    ]
  },
  {
    "id": "3502",
    "brand": "FAF",
    "title": "Blugi FAF cu croială mom fit clasică",
    "description": "O pereche de blugi clasici din denim într-o nuanță deschisă de albastru prespălat, cu o croială de tip mom fit și talie înaltă, ideali pentru a crea ținute casual simple, confortabile și versatile de zi cu zi.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 129.9,
    "salePrice": 89.5,
    "color": "Albastru deschis",
    "type": "Mom fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/FAF/3502/faf-engros-3502-1_MAIN.jpeg",
    "extraImages": [
      "/products/FAF/3502/faf-engros-3502-2.jpeg",
      "/products/FAF/3502/faf-engros-3502-3.jpeg"
    ]
  },
  {
    "id": "3043",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink cu aplicații strălucitoare la gleznă",
    "description": "O pereche de blugi strâmți din denim albastru, cu o croială de tip skinny fit și talie medie spre înaltă, remarcați prin detaliile decorative glam cu franjuri strălucitori din strasuri la nivelul gleznelor, ideali pentru un look casual-chic plin de efect.",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 79.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 4,
      "28": 4,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/HAPPY PINK/3043/happy-pink-engros-3043-3_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/3043/happy-pink-engros-3043-1.jpeg",
      "/products/HAPPY PINK/3043/happy-pink-engros-3043-2.jpeg"
    ]
  },
  {
    "id": "3075",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink cu discrete zgârieturi decorative",
    "description": "O pereche de blugi mulatți din denim albastru, cu o croială de tip skinny fit și talie înaltă, prevăzuți cu ușoare efecte prespălate și discrete zgârieturi decorative pe lungime și la tiv, ideali pentru un look casual zilnic, confortabil și versatil.",
    "sizes": "31 - 38",
    "sizeList": [
      "31",
      "32",
      "33",
      "34",
      "36",
      "38"
    ],
    "unitPrice": 98.9,
    "salePrice": 65.9,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "31": 4,
      "32": 4,
      "33": 4,
      "34": 8,
      "36": 4,
      "38": 4
    },
    "image": "/products/HAPPY PINK/3075/happy-pink-engros-3075-1_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/3075/happy-pink-engros-3075-2.jpeg"
    ]
  },
  {
    "id": "3079",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink clasici",
    "description": "O pereche de blugi mulatți din denim albastru închis, cu o croială simplă de tip skinny fit și talie înaltă, ideali pentru a asigura o siluetă definită și un confort sporit în ținutele casual de zi cu zi.",
    "sizes": "31 - 38",
    "sizeList": [
      "31",
      "32",
      "33",
      "34",
      "36",
      "38"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "31": 2,
      "32": 2,
      "33": 2,
      "34": 4,
      "36": 2,
      "38": 2
    },
    "image": "/products/HAPPY PINK/3079/happy-pink-engros-3079-2_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/3079/happy-pink-engros-3079-1.jpeg",
      "/products/HAPPY PINK/3079/happy-pink-engros-3079-3.jpeg"
    ]
  },
  {
    "id": "3089",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink cu crăpătură fină pe picior",
    "description": "O pereche de blugi strâmți din denim albastru, cu o croială skinny fit și talie înaltă, ce se remarcă printr-o mică tăietură decorativă orizontală deasupra genunchiului, perfecți pentru un look casual, modern și plin de stil.",
    "sizes": "31 - 38",
    "sizeList": [
      "31",
      "32",
      "33",
      "34",
      "36",
      "38"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "31": 2,
      "32": 2,
      "33": 2,
      "34": 4,
      "36": 2,
      "38": 2
    },
    "image": "/products/HAPPY PINK/3089/happy-pink-engros-3089-1_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/3089/happy-pink-engros-3089-2.jpeg"
    ]
  },
  {
    "id": "4048",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink închiși cu aspect prespălat",
    "description": "O pereche de blugi strâmți din denim albastru închis, cu o croială skinny fit și talie medie spre înaltă, ce prezintă efecte prespălate în zona coapselor și mici zgârieturi decorative cu tentă grunge, perfecți pentru ținute casual moderne",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 65.5,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 3,
      "27": 6,
      "28": 6,
      "29": 3,
      "30": 3,
      "31": 3
    },
    "image": "/products/HAPPY PINK/4048/happy-pink-engros-4048-2_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/4048/happy-pink-engros-4048-1.jpeg"
    ]
  },
  {
    "id": "4074",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink cu efect prespălat și zgârieturi fine",
    "description": "O pereche de blugi strâmți din denim albastru, cu o croială de tip skinny fit și talie înaltă, scoși în evidență prin efecte pronunțate de spălare în zona coapselor și a genunchilor, completați cu discrete zgârieturi decorative pentru un plus de stil în ținutele zilnice casual",
    "sizes": "28 - 34",
    "sizeList": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "28": 3,
      "29": 3,
      "30": 3,
      "31": 3,
      "32": 6,
      "33": 3,
      "34": 3
    },
    "image": "/products/HAPPY PINK/4074/happy-pink-engros-4074-2_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/4074/happy-pink-engros-4074-1.jpeg"
    ]
  },
  {
    "id": "4110",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink închiși cu spălare discretă",
    "description": "O pereche de blugi strâmți din denim albastru închis, cu o croială clasică de tip skinny fit și talie înaltă, caracterizați printr-un aspect simplu și curat, cu o ușoară decolorare centrală pe coapse ce adaugă profunzime ținutelor casual de zi",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 65.5,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 3,
      "27": 9,
      "28": 6,
      "29": 3,
      "30": 3,
      "31": 3
    },
    "image": "/products/HAPPY PINK/4110/happy-pink-engros-4110-2_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/4110/happy-pink-engros-4110-1.jpeg",
      "/products/HAPPY PINK/4110/happy-pink-engros-4110-3.jpeg"
    ]
  },
  {
    "id": "4163",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink clasici",
    "description": "O piesă de bază în garderoba feminină, acești blugi mizează pe un design simplu și curat, oferind o nuanță intensă de albastru denim și o talie înaltă care flatează silueta, ideali pentru a fi combinați cu sneakerși sau botine în zilele pline",
    "sizes": "31 - 38",
    "sizeList": [
      "31",
      "32",
      "33",
      "34",
      "36",
      "38"
    ],
    "unitPrice": 65.6,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "31": 1,
      "32": 2,
      "33": 2,
      "34": 1,
      "36": 1,
      "38": 1
    },
    "image": "/products/HAPPY PINK/4163/happy-pink-engros-4163-2_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/4163/happy-pink-engros-4163-1.jpeg"
    ]
  },
  {
    "id": "4265",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink negri cu aplicații metalice chic la tiv",
    "description": "Ieși în evidență cu acești blugi negri opaci ce aduc un aer glam garderobei tale datorită detaliilor strălucitoare cu lanțuri și strasuri de la glezne. Materialul elastic se mulează perfect pe corp, devenind piesa de rezistență pentru o ieșire în oraș sau un eveniment relaxat",
    "sizes": "28 - 34",
    "sizeList": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "unitPrice": 98.9,
    "salePrice": 68.9,
    "color": "Negru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "28": 1,
      "29": 1,
      "30": 1,
      "31": 1,
      "32": 2,
      "33": 1,
      "34": 1
    },
    "image": "/products/HAPPY PINK/4265/happy-pink-engros-4265-1_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/4265/happy-pink-engros-4265-2.jpeg",
      "/products/HAPPY PINK/4265/happy-pink-engros-4265-3.jpeg"
    ]
  },
  {
    "id": "4288",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink negri simpli",
    "description": "O pereche versatilă de pantaloni din denim într-un negru profund și uniform, ideali pentru iubitoarele stilului minimalist. Talia înaltă oferă o susținere excelentă, în timp ce textura elastică garantează libertate deplină de mișcare pe parcursul întregii zile",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 65.6,
    "salePrice": null,
    "color": "Negru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 3,
      "27": 6,
      "28": 6,
      "29": 3,
      "30": 3,
      "31": 3
    },
    "image": "/products/HAPPY PINK/4288/happy-pink-engros-4288-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "4289",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink cu efect de spălare acidă",
    "description": "Adaugă o notă rebelă outfiturilor tale cu acești pantaloni din denim negru-gri cu aspect ușor uzat și cusături proeminente. Croiala mulată îmbracă frumos piciorul, transformându-i într-o alegere excelentă pentru un stil urban-casual cu jachete din piele sau hanorace lejere",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Negru spălăcit",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 4,
      "28": 4,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/HAPPY PINK/4289/happy-pink-engros-4289-2_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/4289/happy-pink-engros-4289-1.jpeg"
    ]
  },
  {
    "id": "5223",
    "brand": "HAPPY PINK",
    "title": "Blugi evazați Happy Pink cu dungă verticală și șliț frontal",
    "description": "Inspiră o atmosferă retro-chic cu această pereche de pantaloni evazați dintr-un denim într-o nuanță luminoasă de albastru. Cusătura proeminentă de pe centrul piciorului alungește optic silueta, în timp ce crăpăturile subtile de la bază oferă o deschidere spectaculoasă peste încălțăminte",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 129.9,
    "salePrice": 89.9,
    "color": "Albastru deschis",
    "type": "Flared / Evazați",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 4,
      "28": 4,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/HAPPY PINK/5223/happy-pink-engros-5223-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "5224",
    "brand": "HAPPY PINK",
    "title": "Blugi evazați Happy Pink cu cusătură centrală și șliț",
    "description": "Adaugă o notă de originalitate garderobei tale cu acești pantaloni evazați realizați din denim moale într-o nuanță deschisă de bleu. Linia verticală proeminentă ce traversează piciorul creează un efect vizual de alungire, în timp ce crăpăturile stilate de la terminanții cracului pun minunat în valoare pantofii tăi preferați",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 149.9,
    "salePrice": 98.9,
    "color": "Albastru deschis",
    "type": "Flared / Evazați",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 4,
      "28": 4,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/HAPPY PINK/5224/happy-pink-engros-5224-1_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/5224/happy-pink-engros-5224-2.jpeg",
      "/products/HAPPY PINK/5224/happy-pink-engros-5224-3.jpeg",
      "/products/HAPPY PINK/5224/happy-pink-engros-5224-4.jpeg"
    ]
  },
  {
    "id": "5622",
    "brand": "HAPPY PINK",
    "title": "Blugi skinny Happy Pink negri intens",
    "description": "Redefinește-ți ținutele de zi cu zi cu o piesă clasică și extrem de versatilă, realizată dintr-un denim negru profund care nu se demodează niciodată. Croiala ce urmărește fidel linia corpului și talia înaltă îți oferă un confort desăvârșit, fiind baza perfectă pentru orice stil, de la cel office la cel de weekend",
    "sizes": "34 - 44",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44"
    ],
    "unitPrice": 65.5,
    "salePrice": null,
    "color": "Negru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1,
      "44": 1
    },
    "image": "/products/HAPPY PINK/5622/happy-pink-engros-5622-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "5689",
    "brand": "HAPPY PINK",
    "title": "Blugi mom fit Happy Pink cu ruptură discretă",
    "description": "Bucură-te de o croială lejeră și plină de personalitate cu acești pantaloni inspirați din moda anilor '90, realizați dintr-un denim deschis cu aspect prespălat. Talia înaltă îți subliniază frumos talia, în timp ce mica tăietură franjurată de pe picior adaugă exact doza potrivită de relaxare urbană look-urilor tale zilnice",
    "sizes": "34 - 44",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Mom fit",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2,
      "42": 2,
      "44": 2
    },
    "image": "/products/HAPPY PINK/5689/happy-pink-engros-5689-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "5711",
    "brand": "HAPPY PINK",
    "title": "Blugi wide leg Happy Pink cu imprimeu leopard",
    "description": "Fă o declarație puternică de stil cu acești pantaloni spectaculoși, îmbrăcați în totalitate într-un imprimeu leopard îndrăzneț. Croiala relaxed cu picioare largi și talie înaltă combină perfect confortul absolut cu estetica modernă, fiind ideali pentru a transforma un tricou simplu alb într-un outfit de revistă",
    "sizes": "34 - 44",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42",
      "44"
    ],
    "unitPrice": 145.9,
    "salePrice": 95.9,
    "color": "Animal print",
    "type": "Wide leg",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2,
      "42": 2,
      "44": 2
    },
    "image": "/products/HAPPY PINK/5711/happy-pink-engros-5711-1_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/5711/happy-pink-engros-5711-2.jpeg"
    ]
  },
  {
    "id": "5833",
    "brand": "HAPPY PINK",
    "title": "Blugi evazați Happy Pink dintr-un denim intens",
    "description": "O reinterpretare chic a stilului retro, acești pantaloni cuceresc prin nuanța lor profundă de albastru marin și croiala evazată de la genunchi în jos. Talia înaltă structurează elegant silueta, fiind opțiunea ideală pentru momentele în care vrei să combini un vibe clasic cu un confort desăvârșit",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 85.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Flared / Evazați",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 4,
      "28": 4,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/HAPPY PINK/5833/happy-pink-engros-5833-1_MAIN.jpeg",
    "extraImages": [
      "/products/HAPPY PINK/5833/happy-pink-engros-5833-2.jpeg"
    ]
  },
  {
    "id": "501",
    "brand": "HEPYEK",
    "title": "Blugi skinny cu tăieturi la genunchi",
    "description": "Adaugă un plus de atitudine stilului tău cu acești pantaloni dintr-un denim negru intens, scoși din anonimat prin șlițurile transversale din zona genunchilor. Materialul elastic urmărește perfect liniile corpului pentru o siluetă structurată, fiind piesa ideală pentru a crea outfituri urbane cu un aer ușor rebel",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 65.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 12,
      "27": 12,
      "28": 12,
      "29": 12,
      "30": 12,
      "31": 12
    },
    "image": "/products/HEPYEK/501/hepyek-engros-501-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "501Y",
    "brand": "HEPYEK",
    "title": "Blugi evazați negri simpli",
    "description": "Mizează pe o eleganță minimalistă cu acești pantaloni evazați dintr-un denim negru curat și profund. Talia înaltă îți evidențiază frumos silueta, în timp ce croiala fluidă ce se lărgește discret de sub genunchi oferă o alură sofisticată și o versatilitate maximă pentru orice moment al zilei",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Flared / Evazați",
    "plusSize": false,
    "stock": {
      "26": 1,
      "27": 2,
      "28": 1,
      "29": 1,
      "30": 1,
      "31": 1
    },
    "image": "/products/HEPYEK/5012/hepyek-engros-501-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "574",
    "brand": "HEPYEK",
    "title": "Blugi evazați Hepyek negri",
    "description": "Adaugă o piesă clasică și plină de stil în garderoba ta cu acești pantaloni din denim negru intens. Croiala evazată pune frumos în valoare linia picioarelor, în timp ce talia înaltă oferă o susținere optimă și confort pe parcursul întregii zile, fiind ideali pentru ținute casual-chic cu pantofi cu toc sau botine",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Flared / Evazați",
    "plusSize": false,
    "stock": {
      "26": 1,
      "27": 1,
      "28": 1,
      "29": 1,
      "30": 1,
      "31": 1
    },
    "image": "/products/HEPYEK/574/hepyek-engros-574-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "994",
    "brand": "HEPYEK",
    "title": "Blugi evazați Hepyek din denim clasic",
    "description": "O alegere inspirată pentru un look atemporal, acești pantaloni se remarcă prin nuanța intensă de albastru denim și croiala subtil evazată la bază. Talia înaltă conturează frumos linia corpului, transformându-i într-o bază perfectă pentru cămăși lejere, tricouri minimaliste sau jachete cambrate",
    "sizes": "28 - 34",
    "sizeList": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Flared / Evazați",
    "plusSize": false,
    "stock": {
      "28": 3,
      "29": 6,
      "30": 3,
      "31": 3,
      "32": 3,
      "33": 3,
      "34": 3
    },
    "image": "/products/HEPYEK/994/hepyek-engros-994-1_MAIN.jpeg",
    "extraImages": [
      "/products/HEPYEK/994/hepyek-engros-994-2.jpeg"
    ]
  },
  {
    "id": "1022",
    "brand": "KAROL",
    "title": "Blugi skinny Karol cu rupturi discrete și tiv franjurat",
    "description": "Adaugă un plus de dinamism garderobei tale cu acești blugi din denim albastru clasic, evidențiați prin zgârieturi fine și detalii uzate. Croiala strânsă pe picior pune frumos în valoare silueta, în timp ce terminarea asimetrică și intens franjurată de la bază oferă o notă modernă și relaxată, perfectă pentru combinații casual cu teniși sau botine",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 89.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/KAROL/1022/karol-engros-102-2_MAIN.jpeg",
    "extraImages": [
      "/products/KAROL/1022/karol-engros-102-1.jpeg",
      "/products/KAROL/1022/karol-engros-102-3.jpeg"
    ]
  },
  {
    "id": "198",
    "brand": "KAROL",
    "title": "Blugi skinny Karol gri prespălați",
    "description": "Completează-ți colecția de haine esențiale cu o pereche de pantaloni realizați dintr-un denim gri cu un finisaj prespălat de efect. Croiala skinny urmărește armonios linia piciorului, în timp ce talia înaltă structurează frumos silueta, transformându-i într-o bază extrem de versatilă și modernă pentru orice tip de ținută urbană",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 79.8,
    "salePrice": null,
    "color": "Gri",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2,
      "42": 2
    },
    "image": "/products/KAROL/198/karol-engros-198-1_MAIN.jpeg",
    "extraImages": [
      "/products/KAROL/198/karol-engros-198-2.jpeg",
      "/products/KAROL/198/karol-engros-198-3.jpeg"
    ]
  },
  {
    "id": "490",
    "brand": "KAROL",
    "title": "Blugi skinny Karol gri cu talie înaltă dublă",
    "description": "Adaugă o notă distinctivă stilului tău zilnic cu acești pantaloni realizați din denim gri cu efect acid-wash pronunțat. Piesa iese în evidență prin cordonul lat cu închidere dublă ce accentuează frumos talia, oferind în același timp o susținere excelentă și o croială skinny confortabilă ce flatează orice siluetă",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 79.8,
    "salePrice": null,
    "color": "Gri",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/KAROL/490/karol-engros-490-3_MAIN.jpeg",
    "extraImages": [
      "/products/KAROL/490/karol-engros-490-1.jpeg",
      "/products/KAROL/490/karol-engros-490-2.jpeg"
    ]
  },
  {
    "id": "574",
    "brand": "KAROL",
    "title": "Blugi drepti Karol cu aplicații strălucitoare",
    "description": "Adaugă o notă de glamour ținutelor tale zilnice cu acești pantaloni din denim albastru clasic, decorați cu aplicații din strasuri și mărgele sub buzunarele frontale. Croiala dreaptă oferă o linie curată și atemporală piciorului, în timp ce talia medie spre înaltă îți asigură confortul ideal pentru întreaga zi, fiind piesa perfectă pentru a face tranziția de la un look de zi la unul de seară",
    "sizes": "36 - 42",
    "sizeList": [
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 129.9,
    "salePrice": 98.9,
    "color": "Albastru",
    "type": "Straight fit",
    "plusSize": false,
    "stock": {
      "36": 2,
      "38": 4,
      "40": 4,
      "42": 2
    },
    "image": "/products/KAROL/574/karol-engros-574-1_MAIN.jpeg",
    "extraImages": [
      "/products/KAROL/574/karol-engros-574-2.jpeg"
    ]
  },
  {
    "id": "005",
    "brand": "Kentachvi",
    "title": "Blugi drepti Kentachvi plus size cu rupturi discrete",
    "description": "Adaugă un plus de originalitate ținutelor tale casual cu acești pantaloni plus size din denim albastru intens, puși în valoare prin mici detalii distruse și zgârieturi fine. Croiala dreaptă flatează silueta într-un mod natural, oferind libertate de mișcare, în timp ce talia înaltă promite o fixare confortabilă și sigură pe tot parcursul zilei",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Straight fit",
    "plusSize": true,
    "stock": {
      "42": 3,
      "44": 3,
      "46": 3,
      "48": 3,
      "50": 3,
      "52": 3
    },
    "image": "/products/Kentachvi/005/kentachvi-engros-005-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "006",
    "brand": "Kentachvi",
    "title": "Blugi skinny Kentachvi plus size cu ruptură pe picior",
    "description": "Ieși în evidență cu acești pantaloni plus size din denim albastru vibrant, personalizați prin detalii zgâriate și o ruptură distinctă în zona coapsei. Croiala skinny și materialul elastic se mulează confortabil pe corp pentru o siluetă bine definită, în timp ce talia înaltă oferă suportul perfect pentru a te simți încrezătoare în orice outfit casual-urban",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": true,
    "stock": {
      "42": 5,
      "44": 5,
      "46": 5,
      "48": 5,
      "50": 5,
      "52": 5
    },
    "image": "/products/Kentachvi/006/kentachvi-engros-006-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "0071",
    "brand": "Kentachvi",
    "title": "Blugi skinny Kentachvi plus size cu stropi de vopsea",
    "description": "Exprimă-ți personalitatea cu acești pantaloni plus size din denim gri prespălat, decorați cu un model artistic din stropi de vopsea albă și roz. Croiala skinny pune frumos în valoare silueta datorită materialului flexibil, în timp ce talia înaltă oferă confort maxim și o susținere excelentă pentru un look urban modern și plin de originalitate",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 139.9,
    "salePrice": 98.9,
    "color": "Gri",
    "type": "Skinny fit",
    "plusSize": true,
    "stock": {
      "42": 1,
      "44": 1,
      "46": 1,
      "48": 1,
      "50": 1,
      "52": 1
    },
    "image": "/products/Kentachvi/0071/kentachvi-engros-007-1_MAIN.jpeg",
    "extraImages": [
      "/products/Kentachvi/0071/kentachvi-engros-007-2.jpeg"
    ]
  },
  {
    "id": "0072",
    "brand": "Kentachvi",
    "title": "Blugi skinny Kentachvi plus size cu stropi de vopsea",
    "description": "Adaugă o notă artistică și plină de viață garderobei tale cu acești pantaloni plus size din denim albastru intens, evidențiați prin stropi decorativi de vopsea albă și fucsia. Croiala skinny pune frumos în valoare formele datorită materialului elastic și confortabil, în timp ce talia înaltă garantează o fixare optimă și o susținere ideală pentru o ținută casual modernă și îndrăzneață",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "42": 2,
      "44": 2,
      "46": 2,
      "48": 2,
      "50": 2,
      "52": 2
    },
    "image": "/products/Kentachvi/0072/kentachvi-engros-007-2_MAIN.jpeg",
    "extraImages": [
      "/products/Kentachvi/0072/kentachvi-engros-007-1.jpeg"
    ]
  },
  {
    "id": "009",
    "brand": "Kentachvi",
    "title": "Blugi skinny Kentachvi plus size cu zgârieturi decorative",
    "description": "Completează-ți ținutele lejere cu acești pantaloni plus size din denim albastru clasic, evidențiați prin zgârieturi fine și mici zone cu aspect uzat pe picioare. Croiala skinny și materialul elastic se adaptează excelent formelor tale pentru o siluetă definită, în timp ce talia înaltă oferă o susținere optimă și confort pe tot parcursul zilei",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "42": 9,
      "44": 9,
      "46": 9,
      "48": 9,
      "50": 9,
      "52": 9
    },
    "image": "/products/Kentachvi/009/kentachvi-engros-009-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "01",
    "brand": "Kentachvi",
    "title": "Blugi drepti Kentachvi plus size dintr-un denim clasic",
    "description": "Bucură-te de o potrivire excelentă și un confort de lungă durată cu acești pantaloni plus size realizați dintr-un denim albastru cu aspect ușor prespălat. Croiala clasică dreaptă oferă o linie curată și armonioasă piciorului, în timp ce talia înaltă asigură o susținere optimă, transformându-i într-o piesă de bază ideală pentru garderoba ta de zi cu zi",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Straight fit",
    "plusSize": true,
    "stock": {
      "42": 9,
      "44": 9,
      "46": 9,
      "48": 9,
      "50": 9,
      "52": 9
    },
    "image": "/products/Kentachvi/01/kentachvi-engros-01-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "03",
    "brand": "Kentachvi",
    "title": "Blugi drepti Kentachvi plus size cu aspect uzat",
    "description": "Adaugă o notă relaxată stilului tău de zi cu zi cu acești pantaloni plus size din denim albastru închis, finisați cu degradeuri subtile și mici rupturi decorative pe picioare. Croiala dreaptă oferă o linie clasică și o așezare lejeră, în timp ce talia înaltă îți asigură o susținere optimă și confort deplin pe parcursul întregii zile",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Straight fit",
    "plusSize": false,
    "stock": {
      "42": 1,
      "44": 1,
      "46": 1,
      "48": 1,
      "50": 1,
      "52": 1
    },
    "image": "/products/Kentachvi/03/kentachvi-engros-03-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "204",
    "brand": "Kentachvi",
    "title": "Blugi skinny Kentachvi plus size cu rupturi și zgârieturi",
    "description": "Optează pentru un look îndrăzneț și modern cu acești pantaloni plus size realizați din denim albastru închis intens. Piesa se remarcă prin rupturile evidente texturate și seria de zgârieturi decorative de pe picioare, în timp ce croiala skinny și talia înaltă îți pun în valoare formele într-un mod armonios, asigurând confortul ideal pentru întreaga zi",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "42": 5,
      "44": 5,
      "46": 5,
      "48": 5,
      "50": 5,
      "52": 5
    },
    "image": "/products/Kentachvi/204/kentachvi-engros-204-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "400",
    "brand": "LOVE ME",
    "title": "Blugi skinny Love Me din denim clasic",
    "description": "Optează pentru eleganță și simplitate în fiecare zi cu acești pantaloni confecționați dintr-un denim albastru curat, fără rupturi sau inserții suplimentare. Croiala skinny conturează fin silueta, oferind o alungire vizuală a picioarelor, în timp ce talia înaltă promite o susținere optimă și confort excelent la purtare",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 79.9,
    "salePrice": 59.9,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "34": 14,
      "36": 14,
      "38": 7,
      "40": 7
    },
    "image": "/products/LOVE ME/400/love-me-engros-400-3_MAIN.jpeg",
    "extraImages": [
      "/products/LOVE ME/400/love-me-engros-400-1.jpeg",
      "/products/LOVE ME/400/love-me-engros-400-2.jpeg"
    ]
  },
  {
    "id": "800",
    "brand": "LOVE ME",
    "title": "Blugi drepti Love Me din denim negru",
    "description": "Adaugă o piesă esențială și atemporală în garderoba ta cu acești pantaloni dintr-un denim negru intens și uniform. Croiala dreaptă oferă o linie curată ce avantajează silueta, oferind un confort desăvârșit, în timp ce talia înaltă structurează frumos formele, transformându-i în baza perfectă pentru ținute casual elegante sau minimaliste",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 69.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Straight fit",
    "plusSize": false,
    "stock": {
      "34": 10,
      "36": 10,
      "38": 5,
      "40": 5
    },
    "image": "/products/LOVE ME/800/love-me-engros-800-2_MAIN.jpeg",
    "extraImages": [
      "/products/LOVE ME/800/love-me-engros-800-1.jpeg"
    ]
  },
  {
    "id": "156",
    "brand": "MIELE",
    "title": "Blugi wide leg Miele cu dungi laterale albe",
    "description": "O pereche de blugi din denim albastru cu croială wide leg și talie înaltă, decorați cu dungi duble albe pe laterale, îmbinând stilul sportiv cu cel casual într-un look modern și îndrăzneț.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 189.9,
    "salePrice": 129.9,
    "color": "Albastru",
    "type": "Wide leg",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 2,
      "42": 1
    },
    "image": "/products/MIELE/156/miele-engros-156-2_MAIN.jpeg",
    "extraImages": [
      "/products/MIELE/156/miele-engros-156-1.jpeg",
      "/products/MIELE/156/miele-engros-156-3.jpeg"
    ]
  },
  {
    "id": "269",
    "brand": "MIELE",
    "title": "Blugi slim fit Miele negri cu talie înaltă",
    "description": "O pereche de blugi din denim negru cu croială slim fit și talie înaltă, cu un design curat și minimalist, perfecți pentru un look casual sau semi-formal versatil și elegant.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 79.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Slim fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 2,
      "42": 1
    },
    "image": "/products/MIELE/269/miele-engros-269-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "284",
    "brand": "MIELE",
    "title": "Blugi mom fit Miele albastru închis cu talie înaltă",
    "description": "O pereche de blugi din denim albastru închis cu croială mom fit și talie înaltă, cu efect ușor decolorat la nivelul coapselor, perfecți pentru un look casual chic și confortabil de zi cu zi.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 79.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Mom fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 2,
      "42": 1
    },
    "image": "/products/MIELE/284/miele-engros-284-2_MAIN.jpeg",
    "extraImages": [
      "/products/MIELE/284/miele-engros-284-1.jpeg"
    ]
  },
  {
    "id": "562",
    "brand": "MIELE",
    "title": "Blugi wide leg Miele cu model de strasuri",
    "description": "O pereche de blugi din denim albastru cu croială wide leg și talie înaltă, decorați cu un model deosebit de strasuri aplicate în formă de flăcări pe toată suprafața, perfecti pentru un look feminin, statement și plin de personalitate.",
    "sizes": "34 - 38",
    "sizeList": [
      "34",
      "36",
      "38"
    ],
    "unitPrice": 149.9,
    "salePrice": 99.9,
    "color": "Albastru",
    "type": "Wide leg",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2
    },
    "image": "/products/MIELE/562/miele-engros-562-2_MAIN.jpeg",
    "extraImages": [
      "/products/MIELE/562/miele-engros-562-1.jpeg",
      "/products/MIELE/562/miele-engros-562-3.jpeg",
      "/products/MIELE/562/miele-engros-562-4.png"
    ]
  },
  {
    "id": "566",
    "brand": "MIELE",
    "title": "Blugi flare fit Miele albastru deschis cu talie înaltă",
    "description": "O pereche de blugi din denim albastru deschis cu croială flare fit și talie înaltă, cu un design curat și minimalist, evazați elegant de la genunchi în jos, perfecți pentru un look retro-chic feminin și rafinat.",
    "sizes": "36 - 46",
    "sizeList": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "unitPrice": 89.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Flare fit",
    "plusSize": false,
    "stock": {
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1,
      "44": 1,
      "46": 1
    },
    "image": "/products/MIELE/566/miele-engros-566-4_MAIN.png",
    "extraImages": [
      "/products/MIELE/566/miele-engros-566-1.jpeg",
      "/products/MIELE/566/miele-engros-566-2.jpeg",
      "/products/MIELE/566/miele-engros-566-3.jpeg"
    ]
  },
  {
    "id": "572",
    "brand": "MIELE",
    "title": "Blugi wide leg Miele gri cu model de strasuri",
    "description": "O pereche de blugi din denim gri antracit cu croială wide leg și talie înaltă, decorați cu un model elaborat de strasuri aplicate în formă de flăcări ondulate pe toată suprafața, perfecți pentru un look îndrăzneț, feminin și plin de personalitate.",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 149.9,
    "salePrice": 99.9,
    "color": "Gri antracit",
    "type": "Wide leg",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1
    },
    "image": "/products/MIELE/572/miele-engros-572-1_MAIN.jpg",
    "extraImages": [
      "/products/MIELE/572/miele-engros-572-2.jpeg",
      "/products/MIELE/572/miele-engros-572-3.jpeg"
    ]
  },
  {
    "id": "609",
    "brand": "MIELE",
    "title": "Blugi flare fit Miele negri cu talie înaltă",
    "description": "O pereche de blugi din denim negru cu croială flare fit și talie înaltă, cu un design curat și minimalist, evazați pronunțat de la genunchi în jos, perfecți pentru un look elegant, feminin și versatil.",
    "sizes": "36 - 46",
    "sizeList": [
      "36",
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "unitPrice": 79.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Flare fit",
    "plusSize": false,
    "stock": {
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1,
      "44": 1,
      "46": 1
    },
    "image": "/products/MIELE/609/miele-engros-609-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "614",
    "brand": "MIELE",
    "title": "Blugi slim fit Miele albastru cu talie înaltă",
    "description": "O pereche de blugi din denim albastru cu croială slim fit și talie înaltă, cu un aspect curat și clasic, ușor decolorați la nivelul coapselor, perfecți pentru un look casual elegant și feminin de zi cu zi.",
    "sizes": "40 - 50",
    "sizeList": [
      "40",
      "42",
      "44",
      "46",
      "48",
      "50"
    ],
    "unitPrice": 89.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Slim fit",
    "plusSize": true,
    "stock": {
      "40": 1,
      "42": 1,
      "44": 1,
      "46": 1,
      "48": 1,
      "50": 1
    },
    "image": "/products/MIELE/614/miele-engros-614-2_MAIN.jpeg",
    "extraImages": [
      "/products/MIELE/614/miele-engros-614-1.jpeg",
      "/products/MIELE/614/miele-engros-614-3.jpeg"
    ]
  },
  {
    "id": "615",
    "brand": "MIELE",
    "title": "Blugi mom fit Miele albastru cu talie înaltă",
    "description": "O pereche de blugi din denim albastru cu croială mom fit și talie înaltă, cu efect ușor decolorat pe coapse și un design relaxat și confortabil, perfecți pentru un look casual chic și feminin de zi cu zi.",
    "sizes": "40 - 50",
    "sizeList": [
      "40",
      "42",
      "44",
      "46",
      "48",
      "50"
    ],
    "unitPrice": 89.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Mom fit",
    "plusSize": true,
    "stock": {
      "40": 2,
      "42": 2,
      "44": 2,
      "46": 2,
      "48": 2,
      "50": 2
    },
    "image": "/products/MIELE/615/miele-engros-615-2_MAIN.jpeg",
    "extraImages": [
      "/products/MIELE/615/miele-engros-615-1.jpeg"
    ]
  },
  {
    "id": "640",
    "brand": "MIELE",
    "title": "Pantaloni scurți din denim Miele Woman cu închidere asimetrică",
    "description": "O pereche de pantaloni scurți din denim albastru deschis cu talie înaltă și un detaliu distinctive de închidere asimetrică în față cu două nasturi, îmbinând eleganța cu stilul casual într-un look feminin și modern de vară.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 58.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Pantaloni scurți",
    "plusSize": false,
    "stock": {
      "34": 3,
      "36": 6,
      "38": 6,
      "40": 3,
      "42": 3
    },
    "image": "/products/MIELE/640/miele-engros-640-3_MAIN.png",
    "extraImages": [
      "/products/MIELE/640/miele-engros-640-1.jpeg",
      "/products/MIELE/640/miele-engros-640-2.jpeg"
    ]
  },
  {
    "id": "641",
    "brand": "MIELE",
    "title": "Fustă-pantalon din denim Miele Woman cu închidere asimetrică",
    "description": "O fustă-pantalon din denim albastru deschis cu talie înaltă și închidere asimetrică în față cu două nasturi, combinând aspectul unei fuste cu confortul unui pantalon scurt, perfectă pentru un look feminin, modern și casual de vară.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 58.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Fustă-pantalon",
    "plusSize": false,
    "stock": {
      "34": 3,
      "36": 6,
      "38": 6,
      "40": 3,
      "42": 3
    },
    "image": "/products/MIELE/641/miele-engros-641-3_MAIN.png",
    "extraImages": [
      "/products/MIELE/641/miele-engros-641-1.jpeg",
      "/products/MIELE/641/miele-engros-641-2.jpeg"
    ]
  },
  {
    "id": "642",
    "brand": "MIELE",
    "title": "Fustă-pantalon din denim Miele Woman albastru cu închidere asimetrică",
    "description": "O fustă-pantalon din denim albastru cu talie înaltă și închidere asimetrică în față cu două nasturi decorativi, combinând aspectul elegant al unei fuste cu confortul unui pantalon scurt, perfectă pentru un look feminin și casual de vară.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 58.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Fustă-pantalon",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2,
      "42": 2
    },
    "image": "/products/MIELE/642/miele-engros-642-3_MAIN.jpeg",
    "extraImages": [
      "/products/MIELE/642/miele-engros-642-1.jpeg",
      "/products/MIELE/642/miele-engros-642-2.jpeg"
    ]
  },
  {
    "id": "643",
    "brand": "MIELE",
    "title": "Fustă-pantalon din denim Miele Woman gri cu închidere asimetrică",
    "description": "O fustă-pantalon din denim gri spălat cu talie înaltă și închidere asimetrică în față cu doi nasturi decorativi, combinând aspectul elegant al unei fuste cu confortul unui pantalon scurt, perfectă pentru un look feminin, modern și casual de vară.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 58.9,
    "salePrice": null,
    "color": "Gri",
    "type": "Fustă-pantalon",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2,
      "42": 2
    },
    "image": "/products/MIELE/643/miele-engros-643-3_MAIN.png",
    "extraImages": [
      "/products/MIELE/643/miele-engros-643-1.jpeg",
      "/products/MIELE/643/miele-engros-643-2.jpeg"
    ]
  },
  {
    "id": "644",
    "brand": "MIELE",
    "title": "Fustă-pantalon din denim Miele Woman negru cu închidere asimetrică",
    "description": "O fustă-pantalon din denim negru spălat cu talie înaltă și închidere asimetrică în față cu doi nasturi decorativi, combinând aspectul elegant al unei fuste cu confortul unui pantalon scurt, perfectă pentru un look feminin, versatil și modern de vară.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 58.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Fustă-pantalon",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/MIELE/644/miele-engros-644-2_MAIN.png",
    "extraImages": [
      "/products/MIELE/644/miele-engros-644-1.jpeg"
    ]
  },
  {
    "id": "1069",
    "brand": "NYC",
    "title": "Blugi slim fit NYC albastru închis cu talie înaltă",
    "description": "O pereche de blugi din denim albastru închis cu croială slim fit și talie înaltă, cu efect ușor decolorat pe coapse și un design curat și clasic, perfecți pentru un look casual elegant și versatil de zi cu zi.",
    "sizes": "30 - 36",
    "sizeList": [
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Slim fit",
    "plusSize": false,
    "stock": {
      "30": 1,
      "31": 2,
      "32": 1,
      "33": 1,
      "34": 1,
      "35": 1,
      "36": 1
    },
    "image": "/products/NYC/1069/nyc-engros-1069-1_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/1069/nyc-engros-1069-2.jpeg"
    ]
  },
  {
    "id": "1070",
    "brand": "NYC",
    "title": "Blugi skinny fit NYC albastru cu talie înaltă",
    "description": "O pereche de blugi din denim albastru cu croială skinny fit și talie înaltă, cu efect ușor decolorat pe coapse și un design curat și clasic, perfecți pentru un look casual elegant și feminin de zi cu zi.",
    "sizes": "30 - 36",
    "sizeList": [
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "30": 3,
      "31": 6,
      "32": 3,
      "33": 3,
      "34": 3,
      "35": 3,
      "36": 3
    },
    "image": "/products/NYC/1070/nyc-engros-1070-2_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/1070/nyc-engros-1070-1.jpeg"
    ]
  },
  {
    "id": "1074",
    "brand": "NYC",
    "title": "Blugi skinny fit NYC albastru închis cu talie înaltă",
    "description": "O pereche de blugi din denim albastru închis cu croială skinny fit și talie înaltă, cu un design curat și minimalist fără efect decolorat, mulați pe corp și extrem de versatili, perfecți pentru un look casual sau semi-formal de zi cu zi.",
    "sizes": "30 - 36",
    "sizeList": [
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "30": 3,
      "31": 6,
      "32": 3,
      "33": 3,
      "34": 3,
      "35": 3,
      "36": 3
    },
    "image": "/products/NYC/1074/nyc-engros-1074-2_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/1074/nyc-engros-1074-1.jpeg"
    ]
  },
  {
    "id": "1075",
    "brand": "NYC",
    "title": "Blugi skinny fit NYC albastru navy cu talie înaltă",
    "description": "O pereche de blugi din denim albastru navy intens cu croială skinny fit și talie înaltă, cu un design curat și minimalist, mulați pe corp și extrem de versatili, perfecți pentru un look casual sau semi-formal elegant de zi cu zi.",
    "sizes": "30 - 36",
    "sizeList": [
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru denim",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "30": 3,
      "31": 6,
      "32": 3,
      "33": 3,
      "34": 3,
      "35": 3,
      "36": 3
    },
    "image": "/products/NYC/1075/nyc-engros-1075-2_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/1075/nyc-engros-1075-1.jpeg"
    ]
  },
  {
    "id": "1101",
    "brand": "NYC",
    "title": "Blugi straight fit NYC albastru închis cu talie înaltă",
    "description": "O pereche de blugi din denim albastru închis cu croială straight fit și talie înaltă, cu efect decolorat pe coapse și un design curat și clasic, perfecți pentru un look casual elegant și versatil de zi cu zi.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Straight fit",
    "plusSize": false,
    "stock": {
      "34": 4,
      "36": 4,
      "38": 4,
      "40": 2,
      "42": 2
    },
    "image": "/products/NYC/1101/nyc-engros-1101-2_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/1101/nyc-engros-1101-1.jpeg"
    ]
  },
  {
    "id": "1318",
    "brand": "NYC",
    "title": "Blugi mom fit NYC albastru cu talie înaltă",
    "description": "O pereche de blugi din denim albastru cu croială mom fit și talie înaltă, cu efect ușor spălat și un design curat și clasic cu 5 buzunare, perfecți pentru un look casual chic și feminin de zi cu zi.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Mom fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/NYC/1318/nyc-engros-1318-1_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/1318/nyc-engros-1318-2.jpeg",
      "/products/NYC/1318/nyc-engros-1318-3.jpeg"
    ]
  },
  {
    "id": "1327",
    "brand": "NYC",
    "title": "Blugi flare fit NYC albastru închis cu talie înaltă",
    "description": "O pereche de blugi din denim albastru închis cu croială flare fit și talie înaltă, cu un design curat și minimalist, evazați pronunțat de la genunchi în jos, perfecți pentru un look retro-chic feminin și elegant.",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Flare fit",
    "plusSize": false,
    "stock": {
      "26": 1,
      "27": 1,
      "28": 1,
      "29": 1,
      "30": 1,
      "31": 1
    },
    "image": "/products/NYC/1327/nyc-engros-1327-1_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/1327/nyc-engros-1327-2.jpeg",
      "/products/NYC/1327/nyc-engros-1327-3.jpeg"
    ]
  },
  {
    "id": "2000",
    "brand": "NYC",
    "title": "Blugi slim fit NYC albastru cu efect decolorat și abraziuni",
    "description": "O pereche de blugi din denim albastru cu croială slim fit și talie medie, cu efect decolorat pe coapse și mici abraziuni subtile, perfecți pentru un look casual modern și relaxat de zi cu zi.",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Slim fit",
    "plusSize": true,
    "stock": {
      "42": 6,
      "44": 6,
      "46": 12,
      "48": 6,
      "50": 6,
      "52": 6
    },
    "image": "/products/NYC/2000/nyc-engros-2000-2_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/2000/nyc-engros-2000-1.jpeg"
    ]
  },
  {
    "id": "4001",
    "brand": "NYC",
    "title": "Blugi skinny fit NYC albastru cu rupturi și talie înaltă",
    "description": "O pereche de blugi din denim albastru cu croială skinny fit și talie înaltă, cu rupturi și efect decolorat pe coapse, tiv brut la gleznă, perfecți pentru un look casual trendy și modern în stil distressed.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 59.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/NYC/4001/nyc-engros-4001-1_MAIN.jpeg",
    "extraImages": [
      "/products/NYC/4001/nyc-engros-4001-2.jpeg"
    ]
  },
  {
    "id": "10011",
    "brand": "Noventa",
    "title": "Blugi skinny fit Plus Size Noventa albastru cu nasturi decorativi la gleznă",
    "description": "O pereche de blugi Plus Size din denim albastru cu croială skinny fit și talie înaltă, cu detalii distinctive de nasturi decorativi pe lateralele gleznelor, perfecți pentru un look casual feminin și modern de zi cu zi.",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": true,
    "stock": {
      "42": 10,
      "44": 10,
      "46": 10,
      "48": 10,
      "50": 10,
      "52": 10
    },
    "image": "/products/Noventa/10011/noventa-engros-10011-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "10012",
    "brand": "Noventa",
    "title": "Blugi skinny fit Plus Size Noventa albastru deschis cu nasturi decorativi la gleznă",
    "description": "O pereche de blugi Plus Size din denim albastru deschis cu efect acid-wash, croială skinny fit și talie înaltă, cu detalii distinctive de nasturi decorativi pe lateralele gleznelor, perfecți pentru un look casual feminin și modern de zi cu zi.",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Skinny fit",
    "plusSize": true,
    "stock": {
      "42": 9,
      "44": 9,
      "46": 9,
      "48": 9,
      "50": 9,
      "52": 9
    },
    "image": "/products/Noventa/10012/noventa-engros-10012-3_MAIN.jpeg",
    "extraImages": [
      "/products/Noventa/10012/noventa-engros-10012-1.jpeg",
      "/products/Noventa/10012/noventa-engros-10012-2.jpeg"
    ]
  },
  {
    "id": "102",
    "brand": "Noventa",
    "title": "Blugi skinny fit Noventa albastru cu fermoare la gleznă",
    "description": "O pereche de blugi din denim albastru cu croială skinny fit și talie medie, cu detalii distinctive de fermoare decorative la gleznă și mici abraziuni subtile, perfecți pentru un look casual modern și feminin.",
    "sizes": "44 - 54",
    "sizeList": [
      "44",
      "46",
      "48",
      "50",
      "52",
      "54"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": true,
    "stock": {
      "44": 6,
      "46": 6,
      "48": 6,
      "50": 6,
      "52": 6,
      "54": 6
    },
    "image": "/products/Noventa/102/noventa-engros-102-1_MAIN.jpeg",
    "extraImages": [
      "/products/Noventa/102/noventa-engros-102-2.png"
    ]
  },
  {
    "id": "104",
    "brand": "Noventa",
    "title": "Blugi flare fit Plus Size Noventa albastru cu talie medie",
    "description": "O pereche de blugi Plus Size din denim albastru cu croială flare fit și talie medie, evazați elegant de la genunchi în jos, cu un design curat și minimalist, perfecți pentru un look feminin, confortabil și modern.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Flare fit",
    "plusSize": true,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 2,
      "40": 2,
      "42": 2
    },
    "image": "/products/Noventa/104/noventa-engros-104-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "2",
    "brand": "Noventa",
    "title": "Blugi plus size Noventa cu croiala skinny",
    "description": "O pereche de blugi plus size din denim albastru inchis, cu croiala skinny fit, efect usor prespalat si detalii discrete uzate, ideali pentru un look casual modern si confortabil.",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru inchis",
    "type": "Skinny fit",
    "plusSize": true,
    "stock": {
      "42": 3,
      "44": 3,
      "46": 3,
      "48": 3,
      "50": 3,
      "52": 3
    },
    "image": "/products/Noventa/2/noventa-engros-2-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "208",
    "brand": "Noventa",
    "title": "Blugi mom fit Plus Size Noventa albastru deschis cu talie înaltă",
    "description": "O pereche de blugi Plus Size din denim albastru deschis cu croială mom fit și talie înaltă, cu un design curat și minimalist, perfecți pentru un look casual confortabil și feminin de zi cu zi.",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Mom fit",
    "plusSize": true,
    "stock": {
      "42": 2,
      "44": 2,
      "46": 2,
      "48": 2,
      "50": 2,
      "52": 2
    },
    "image": "/products/Noventa/208/noventa-engros-208-2_MAIN.jpeg",
    "extraImages": [
      "/products/Noventa/208/noventa-engros-208-1.jpeg"
    ]
  },
  {
    "id": "2081",
    "brand": "Noventa",
    "title": "Blugi mom fit Plus Size Noventa albastru cu efect decolorat",
    "description": "O pereche de blugi Plus Size din denim albastru cu croială mom fit și talie înaltă, cu efect decolorat pe coapse și mici abraziuni subtile, perfecți pentru un look casual confortabil și feminin de zi cu zi.",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 40,
    "salePrice": 98.9,
    "color": "Albastru",
    "type": "Mom fit",
    "plusSize": true,
    "stock": {
      "42": 4,
      "44": 4,
      "46": 4,
      "48": 4,
      "50": 4,
      "52": 4
    },
    "image": "/products/Noventa/2081/noventa-engros-2081-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "2082",
    "brand": "Noventa",
    "title": "Blugi skinny fit Plus Size Noventa negri cu talie înaltă",
    "description": "O pereche de blugi Plus Size din denim negru cu croială skinny fit și talie înaltă, cu un design curat și minimalist, mulați pe corp și extrem de versatili, perfecți pentru un look casual sau semi-formal elegant de zi cu zi.",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Skinny fit",
    "plusSize": true,
    "stock": {
      "42": 1,
      "44": 1,
      "46": 1,
      "48": 1,
      "50": 1,
      "52": 1
    },
    "image": "/products/Noventa/2082/noventa-engros-2082-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "3",
    "brand": "Noventa",
    "title": "Blugi plus size Noventa cu aspect prespalat",
    "description": "O pereche de blugi plus size din denim albastru cu efect prespalat si detalii discrete uzate, realizati intr-o croiala skinny fit ce ofera confort si un aspect modern, potriviti pentru tinute casual de zi cu zi.",
    "sizes": "42 - 52",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50",
      "52"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Albastru mediu",
    "type": "Skinny fit",
    "plusSize": true,
    "stock": {
      "42": 7,
      "44": 7,
      "46": 7,
      "48": 7,
      "50": 7,
      "52": 7
    },
    "image": "/products/Noventa/3/noventa-engros-3-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "303",
    "brand": "Noventa",
    "title": "Blugi baggy fit Plus Size Noventa negri cu talie înaltă",
    "description": "O pereche de blugi Plus Size din denim negru cu croială baggy fit și talie înaltă, cu un design voluminos și relaxat, cusături contrastante și panouri structurate, perfecți pentru un look casual și confortabil în stil streetwear.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 98.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Baggy fit",
    "plusSize": true,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 1,
      "40": 1,
      "42": 1
    },
    "image": "/products/Noventa/303/noventa-engros-303-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "20452",
    "brand": "ONDI",
    "title": "Blugi skinny Ondi cu rupturi în genunchi",
    "description": "Adaugă o notă rebelă și modernă garderobei tale casual cu acești pantaloni dintr-un denim albastru deschis luminos. Piesa iese în evidență prin rupturile pronunțate din zonă genunchilor și detalii uzate discrete, oferind un aer tineresc, în timp ce croiala skinny elastică și talia înaltă garantează o așezare impecabilă și un confort excelent la fiecare mișcare",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 68.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 2,
      "28": 2,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/ONDI/20452/ondi-engros-20452-1_MAIN.jpeg",
    "extraImages": [
      "/products/ONDI/20452/ondi-engros-20452-2.jpeg"
    ]
  },
  {
    "id": "3001",
    "brand": "ONDI",
    "title": "Blugi skinny Ondi cu rupturi în genunchi",
    "description": "Adaugă o notă rebelă și modernă garderobei tale casual cu acești pantaloni dintr-un denim albastru deschis luminos. Piesa iese în evidență prin rupturile pronunțate din zonă genunchilor și detalii uzate discrete, oferind un aer tineresc, în timp ce croiala skinny elastică și talia înaltă garantează o așezare impecabilă și un confort excelent la fiecare mișcare",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 78.8,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 1,
      "27": 1,
      "28": 1,
      "29": 1,
      "30": 1,
      "31": 1
    },
    "image": "/products/ONDI/3001/ondi-engros-3001-1_MAIN.jpeg",
    "extraImages": [
      "/products/ONDI/3001/ondi-engros-3001-2.jpeg"
    ]
  },
  {
    "id": "1006",
    "brand": "Powermix",
    "title": "Blugi skinny Powermix cu zgârieturi fine",
    "description": "Pantaloni realizați din denim albastru închis cu ușoare nuanțe prespălate, prezentați în imaginea powermix-engros-1006-1_MAIN.jpeg. Modelul dispune de o croială skinny mulată, talie înaltă și mici detalii uzate sub formă de zgârieturi fine pe picioare, având o structură elastică și buzunare clasice.",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 55.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 4,
      "28": 6,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/Powermix/1006/powermix-engros-1006-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "1044",
    "brand": "Powermix",
    "title": "Blugi skinny Powermix cu mici rupturi decorative",
    "description": "Pantaloni confecționați din denim albastru închis intens, evidențiați în imaginea powermix-engros-1044-1_MAIN.jpeg. Modelul are o croială skinny, talie înaltă și buzunare clasice, fiind prevăzut cu zgârieturi fine și mici rupturi decorative pe picioare dintr-un material flexibil și elastic.",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 55.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 1,
      "27": 1,
      "28": 1,
      "29": 1,
      "30": 1,
      "31": 1
    },
    "image": "/products/Powermix/1044/powermix-engros-1044-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "1071",
    "brand": "Powermix",
    "title": "Blugi drepti Powermix cu zgârieturi fine",
    "description": "Pantaloni confecționați din denim albastru cu un aspect ușor prespălat în zona coapselor, evidențiați în imaginea powermix-engros-1071-2.jpeg. Piesa prezintă o croială dreaptă, talie înaltă, buzunare clasice și este decorată cu zgârieturi fine și discrete pe picioare, fiind realizată dintr-un material flexibil.",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 55.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Straight fit",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 2,
      "28": 2,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/Powermix/1071/powermix-engros-1071-2_MAIN.jpeg",
    "extraImages": [
      "/products/Powermix/1071/powermix-engros-1071-1.jpeg",
      "/products/Powermix/1071/powermix-engros-1071-3.jpeg"
    ]
  },
  {
    "id": "543",
    "brand": "Powermix",
    "title": "Blugi skinny Powermix cu rupturi texturate",
    "description": "Pantaloni realizați din denim albastru închis intens, prevăzuți cu două rupturi peticite și texturate pe picioare. Modelul are o croială skinny mulată, talie înaltă și buzunare clasice frontale și posterioare, fiind confecționați dintr-un material elastic ce oferă flexibilitate.",
    "sizes": "30 - 36",
    "sizeList": [
      "30",
      "31",
      "32",
      "33",
      "34",
      "36"
    ],
    "unitPrice": 55.9,
    "salePrice": null,
    "color": "Albastru închis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "30": 2,
      "31": 2,
      "32": 2,
      "33": 2,
      "34": 2,
      "36": 2
    },
    "image": "/products/Powermix/543/powermix-engros-543-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "544",
    "brand": "Powermix",
    "title": "Blugi drepti Powermix cu zgârieturi discrete",
    "description": "Pantaloni confecționați din denim albastru cu un aspect ușor prespălat, decorați cu zgârieturi fine și discrete pe picioare. Modelul dispune de o croială dreaptă clasică, talie înaltă, închidere cu nasture și fermoar, fiind realizat dintr-un material stabil ce urmărește linia piciorului.",
    "sizes": "30 - 36",
    "sizeList": [
      "30",
      "31",
      "32",
      "33",
      "34",
      "36"
    ],
    "unitPrice": 55.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Straight fit",
    "plusSize": false,
    "stock": {
      "30": 3,
      "31": 3,
      "32": 3,
      "33": 3,
      "34": 3,
      "36": 3
    },
    "image": "/products/Powermix/544/powermix-engros-544-1_MAIN.jpeg",
    "extraImages": []
  },
  {
    "id": "6001",
    "brand": "Powermix",
    "title": "Blugi skinny Powermix cu strasuri și rupturi",
    "description": "Pantaloni confecționați din denim albastru deschis prespălat, prezentați în imaginea powermix-engros-6001-1_MAIN.jpeg. Modelul se remarcă printr-o bandă lată decorată cu strasuri strălucitoare în zona taliei înalte, având o croială skinny, rupturi decorative texturate pe picioare și mici detalii uzate la tiv.",
    "sizes": "26 - 31",
    "sizeList": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "unitPrice": 55.9,
    "salePrice": null,
    "color": "Albastru deschis",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "26": 2,
      "27": 4,
      "28": 4,
      "29": 2,
      "30": 2,
      "31": 2
    },
    "image": "/products/Powermix/6001/powermix-engros-6001-1_MAIN.jpeg",
    "extraImages": [
      "/products/Powermix/6001/powermix-engros-6001-2.jpeg"
    ]
  },
  {
    "id": "1000",
    "brand": "Rock Jeans",
    "title": "Blugi skinny Rock Jeans cu rupturi și tiv nefinisat",
    "description": "Pantaloni confecționați din denim albastru cu un aspect ușor prespălat. Modelul prezintă o croială skinny, talie înaltă și buzunare clasice, fiind decorat cu rupturi texturate pe picioare, zgârieturi fine și finisaj de tiv nefinisat cu franjuri discrete la bază.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 119.9,
    "salePrice": 89.9,
    "color": "Albastru",
    "type": "Skinny fit",
    "plusSize": false,
    "stock": {
      "34": 5,
      "36": 10,
      "38": 5,
      "40": 5,
      "42": 5
    },
    "image": "/products/Rock Jeans/1000/rock-jeans-engros-1000-1_MAIN.jpeg",
    "extraImages": [
      "/products/Rock Jeans/1000/rock-jeans-engros-1000-2.jpeg"
    ]
  },
  {
    "id": "835",
    "brand": "TWN",
    "title": "Blugi drepti Twin Blue din denim clasic",
    "description": "Pantaloni confecționați din denim albastru închis cu un aspect uniform. Modelul dispune de o croială dreaptă clasică, talie înaltă cu găici pentru curea, închidere cu nasture și fermoar, precum și buzunare frontale și posterioare standard, fără rupturi sau alte detalii decorative.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 129.9,
    "salePrice": 99.9,
    "color": "Albastru închis",
    "type": "Straight fit",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2,
      "42": 2
    },
    "image": "/products/TWN/835/twn-engros-835-2_MAIN.jpeg",
    "extraImages": [
      "/products/TWN/835/twn-engros-835-1.jpeg"
    ]
  },
  {
    "id": "879",
    "brand": "TWN",
    "title": "Blugi drepti Twin Blue din denim clasic",
    "description": "Pantaloni confecționați din denim albastru închis cu un aspect uniform. Modelul dispune de o croială dreaptă clasică, talie înaltă cu găici pentru curea, închidere cu nasture și fermoar, precum și buzunare frontale și posterioare standard, fără rupturi sau alte detalii decorative.",
    "sizes": "34 - 42",
    "sizeList": [
      "34",
      "36",
      "38",
      "40",
      "42"
    ],
    "unitPrice": 129.9,
    "salePrice": 99.9,
    "color": "Albastru închis",
    "type": "Straight fit",
    "plusSize": false,
    "stock": {
      "34": 1,
      "36": 2,
      "38": 2,
      "40": 1,
      "42": 1
    },
    "image": "/products/TWN/879/twn-engros-879-1_MAIN.jpeg",
    "extraImages": [
      "/products/TWN/879/twn-engros-879-2.jpeg"
    ]
  },
  {
    "id": "00026",
    "brand": "The Bark",
    "title": "Blugi drepti The Bark cu broderie inimă",
    "description": "Pantaloni confecționați din denim albastru clasic.Modelul dispune de o croială dreaptă, talie înaltă și buzunare clasice, fiind decorat cu o mică broderie roșie în formă de inimă pe buzunarul frontal din stânga, fără alte rupturi sau detalii uzate.",
    "sizes": "42 - 50",
    "sizeList": [
      "42",
      "44",
      "46",
      "48",
      "50"
    ],
    "unitPrice": 99.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Straight fit",
    "plusSize": true,
    "stock": {
      "42": 4,
      "44": 4,
      "46": 4,
      "48": 4,
      "50": 4
    },
    "image": "/products/The Bark/00026/the-bark-engros-00026-2_MAIN.jpeg",
    "extraImages": [
      "/products/The Bark/00026/the-bark-engros-00026-1.jpeg",
      "/products/The Bark/00026/the-bark-engros-00026-3.jpeg"
    ]
  },
  {
    "id": "420",
    "brand": "The Bark",
    "title": "Fustă midi din denim The Bark cu șliț frontal",
    "description": "Fustă midi confecționată din denim albastru clasic.  Modelul dispune de talie înaltă cu găici pentru curea, închidere frontală cu nasture și fermoar, buzunare laterale discrete și un șliț adânc pe mijlocul feței ce asigură libertate în mișcare.",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 64.9,
    "salePrice": null,
    "color": "Albastru",
    "type": "Fustă denim midi",
    "plusSize": false,
    "stock": {
      "34": 2,
      "36": 4,
      "38": 4,
      "40": 2
    },
    "image": "/products/The Bark/420/the-bark-engros-420-1_MAIN.png",
    "extraImages": []
  },
  {
    "id": "425",
    "brand": "The Bark",
    "title": "Fustă midi din denim The Bark cu șliț frontal",
    "description": "Fustă midi confecționată din denim negru intens. Modelul dispune de talie înaltă cu găici pentru curea, închidere frontală cu nasture și fermoar, buzunare laterale discrete și un șliț adânc pe mijlocul feței ce asigură libertate în mișcare.",
    "sizes": "34 - 40",
    "sizeList": [
      "34",
      "36",
      "38",
      "40"
    ],
    "unitPrice": 64.9,
    "salePrice": null,
    "color": "Negru",
    "type": "Fustă denim midi",
    "plusSize": false,
    "stock": {
      "34": 3,
      "36": 6,
      "38": 6,
      "40": 3
    },
    "image": "/products/The Bark/425/the-bark-engros-425-1_MAIN.png",
    "extraImages": []
  }
];
