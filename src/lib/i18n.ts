export type Lang = "sv" | "en";

export const dict = {
  nav: {
    menu: { sv: "Meny", en: "Menu" },
    about: { sv: "Om oss", en: "About" },
    visit: { sv: "Besök", en: "Visit" },
    reviews: { sv: "Recensioner", en: "Reviews" },
    book: { sv: "Boka bord", en: "Book a table" },
    order: { sv: "Beställ online", en: "Order online" },
  },
  hero: {
    eyebrow: { sv: "Asian fusion · Hisingen, Göteborg", en: "Asian fusion · Hisingen, Gothenburg" },
    title: {
      sv: "Autentiska asiatiska smaker, omtolkade i Göteborg.",
      en: "Authentic Asian flavors, reimagined in Gothenburg.",
    },
    body: {
      sv: "En resa genom Kina, Japan, Korea, Thailand och Vietnam — serverad med svenska råvaror i en avslappnad och trendig miljö.",
      en: "A journey through China, Japan, Korea, Thailand and Vietnam — served with high-quality Swedish produce in a relaxed, trendy setting.",
    },
    cta1: { sv: "Boka ett bord", en: "Book a table" },
    cta2: { sv: "Se menyn", en: "View the menu" },
    cta3: { sv: "Takeaway", en: "Takeaway" },
    rating: { sv: "4,5 · 655 recensioner på Google", en: "4.5 · 655 reviews on Google" },
  },
  about: {
    kicker: { sv: "Om Food Lab", en: "About Food Lab" },
    title: {
      sv: "Ett labb för smaker — där tradition möter experiment.",
      en: "A lab for flavor — where tradition meets experiment.",
    },
    body: {
      sv: "Foodlab by Tildas är Hisingens nya destination för asiatisk fusion. Vi experimenterar med autentiska asiatiska smaker och ger dem en modern twist, med svenska råvaror i högkvalitet. Perfekt för den som älskar asiatisk mat men söker något nytt och oväntat.",
      en: "Food Lab by Tildas is Hisingen's new destination for Asian fusion. We experiment with authentic Asian flavors and give them a modern twist using high-quality Swedish produce. Perfect for anyone who loves Asian food but is looking for something new and unexpected.",
    },
    stats: [
      { k: { sv: "Google-betyg", en: "Google rating" }, v: "4.5" },
      { k: { sv: "Recensioner", en: "Reviews" }, v: "656" },
    ],
  },
  menu: {
    kicker: { sv: "Labbjournal", en: "Lab Journal" },
    title: { sv: "Menyn som experiment", en: "The menu as experiments" },
    body: {
      sv: "Varje rätt är ett dokumenterat experiment — filtrera efter kategori, allergener eller vegetariskt. Klicka på en rätt för att öppna dess anteckning.",
      en: "Every dish is a documented experiment — filter by category, allergens, or vegan. Tap any dish to open its lab note.",
    },
    fullMenu: { sv: "Hela menyn på tildasfoodlab.se", en: "Full menu at tildasfoodlab.se" },
    filters: {
      all: { sv: "Allt", en: "All" },
      medium: { sv: "Mellanrätter", en: "Medium" },
      large: { sv: "Större", en: "Bigger" },
      sides: { sv: "Sidorätter", en: "Sides" },
      vegan: { sv: "Vegan", en: "Vegan" },
    },
    legend: {
      hide: { sv: "Dölj", en: "Hide" },
      N: { sv: "Nötter", en: "Nuts" },
      E: { sv: "Ägg", en: "Egg" },
      M: { sv: "Mjölk", en: "Milk" },
      G: { sv: "Gluten", en: "Gluten" },
      ask: {
        sv: "Har du allergier — fråga personalen eller filtrera i",
        en: "If you have allergies, please ask the staff or filter the",
      },
      menu: {
        sv: "menyn",
        en: "menu",
      },
    },
    labels: {
      code: { sv: "Exp.", en: "Exp." },
      viewNote: { sv: "Öppna anteckning", en: "Open note" },
      close: { sv: "Stäng", en: "Close" },
      ingredients: { sv: "Komponenter", en: "Components" },
      empty: { sv: "Inga rätter matchar filtret.", en: "No dishes match the filter." },
    },
  },
  reviews: {
    kicker: { sv: "Röster", en: "Voices" },
    title: { sv: "Vad gästerna säger", en: "What guests say" },
    items: [
      {
        author: "Ellen",
        text: {
          sv: "Besökt Food Lab by Tildas flertalet gånger och aldrig blivit besviken. Allt på menyn är supergott! Mina favoriter är katsu sandwich och pork bao.",
          en: "I've visited Food Lab by Tildas many times and never been disappointed. Everything on the menu is amazing! My favorites are the katsu sandwich and pork bao.",
        },
      },
      {
        author: "M Alipour",
        text: {
          sv: "Ett otroligt mysigt hak som serverar goda mellanrätter och alkohol. Personalen är jordnära och trevliga och maten väldigt god.",
          en: "An incredibly cozy spot serving great small plates and drinks. The staff is down-to-earth and friendly and the food is delicious.",
        },
      },
      {
        author: "Robin Eriksson",
        text: {
          sv: "Tog brisket bun — väldigt gott, särskilt om man gillar koriander. Lätt kryddad, perfekt balans.",
          en: "I had the brisket bun — really good, especially if you like cilantro. Lightly spiced, perfect balance.",
        },
      },
    ],
  },
  visit: {
    kicker: { sv: "Besök oss", en: "Visit" },
    title: { sv: "Hitta hit", en: "Find us" },
    hours: { sv: "Öppettider", en: "Hours" },
    address: { sv: "Adress", en: "Address" },
    contact: { sv: "Kontakt", en: "Contact" },
    closed: { sv: "Stängt", en: "Closed" },
    schedule: [
      { d: { sv: "Måndag", en: "Monday" }, h: { sv: "Stängt", en: "Closed" } },
      { d: { sv: "Tisdag", en: "Tuesday" }, h: "16:00 – 22:00" },
      { d: { sv: "Onsdag", en: "Wednesday" }, h: "16:00 – 22:00" },
      { d: { sv: "Torsdag", en: "Thursday" }, h: "16:00 – 23:00" },
      { d: { sv: "Fredag", en: "Friday" }, h: "16:00 – 00:00" },
      { d: { sv: "Lördag", en: "Saturday" }, h: "14:00 – 00:00" },
      { d: { sv: "Söndag", en: "Sunday" }, h: { sv: "Stängt", en: "Closed" } },
    ],
    options: {
      sv: "Uteservering · Bra drinkar · Veganska alternativ",
      en: "Outdoor seating · Great drinks · Vegan options",
    },
    price: { sv: "200–300 kr per person", en: "SEK 200–300 per person" },
  },
  footer: {
    tagline: { sv: "Asian fusion — Hisingens sätt.", en: "Asian fusion — the Hisingen way." },
    rights: { sv: "Alla rättigheter förbehållna.", en: "All rights reserved." },
    made: { sv: "Med kärlek i Göteborg.", en: "Made with love in Gothenburg." },
  },
} as const;

export type Allergen = "N" | "E" | "M" | "G";
export type MenuCategory = "medium" | "large" | "sides";

export type MenuItem = {
  code: string;
  category: MenuCategory;
  name: string;
  price: string;
  origin?: { sv: string; en: string };
  desc: { sv: string; en: string };
  allergens: Allergen[];
  vegan?: boolean;
  image?: string;
};

// Real, editorial food photography (Unsplash CDN).
export const menu: MenuItem[] = [
  // ——— MEDIUM ———
  {
    code: "01",
    category: "medium",
    name: "Brisket Bun",
    price: "85 kr",
    origin: { sv: "Korea × Texas", en: "Korea × Texas" },
    desc: {
      sv: "Rökt oxbringa, ajvar, koriander, brynt lök & sojamajo.",
      en: "Smoked brisket, ajvar, cilantro, browned onion & soy mayo.",
    },
    allergens: ["G", "E"],
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "02",
    category: "medium",
    name: "Pork Bun",
    price: "74 kr",
    origin: { sv: "Kina · omtolkad", en: "China · reimagined" },
    desc: {
      sv: "Srirachamajo, picklad chili, rättika, kimchi, jordnötter & koriander.",
      en: "Sriracha mayo, pickled chili, radish, kimchi, peanuts & cilantro.",
    },
    allergens: ["N", "G", "E"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "03",
    category: "medium",
    name: "Tofu Bun",
    price: "74 kr",
    origin: { sv: "Vegan", en: "Vegan" },
    desc: {
      sv: "Srirachamajo, picklad chili, rättika, kimchi, jordnötter & koriander.",
      en: "Sriracha mayo, pickled chili, radish, kimchi, peanuts & cilantro.",
    },
    allergens: ["N", "G", "E"],
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "04",
    category: "medium",
    name: "Karaage Sandwich",
    price: "189 kr",
    origin: { sv: "Japan", en: "Japan" },
    desc: {
      sv: "Kycklinglår, brioche, riven kål, shichimi togarashi, gochujang, sesammajo & morot.",
      en: "Chicken thighs, brioche, shredded cabbage, shichimi togarashi, gochujang, sesame mayo & carrot.",
    },
    allergens: ["G", "M", "E"],
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "05",
    category: "medium",
    name: "Beijing Duck Tacos",
    price: "149 kr",
    origin: { sv: "Kina × Mexiko", en: "China × Mexico" },
    desc: {
      sv: "2 st. Hoisin-limesås, currymajo, pannkakor, gurka, purjolök & chili.",
      en: "2 pcs. Hoisin-lime sauce, curry mayo, pancakes, cucumber, leek & chili.",
    },
    allergens: ["G", "E"],
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "06",
    category: "medium",
    name: "Xinjiang Chicken Wings",
    price: "119 kr",
    origin: { sv: "Kina, västra", en: "Western China" },
    desc: {
      sv: "Majskyckling, sesam, nori, gräslök & ziran-krydda.",
      en: "Corn-fed chicken, sesame, nori, chives & ziran spice.",
    },
    allergens: [],
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "07",
    category: "medium",
    name: "Prawn Skewer",
    price: "169 kr",
    origin: { sv: "Sydöstasien", en: "Southeast Asia" },
    desc: {
      sv: "Tigerräkor, vitlök, chili, spiskummin, mango- & pomelosallad.",
      en: "Tiger prawns, garlic, chili, cumin, mango & pomelo salad.",
    },
    allergens: ["E", "G"],
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "08",
    category: "medium",
    name: "Steak Tartare",
    price: "169 kr",
    origin: { sv: "Korea × Sverige", en: "Korea × Sweden" },
    desc: {
      sv: "Gochujang, brynt lök, friterad kapris, sesammajo, dill & vårrullekrisp.",
      en: "Gochujang, browned onion, fried capers, sesame mayo, dill & spring roll crisps.",
    },
    allergens: ["G"],
    image: "https://images.unsplash.com/photo-1770210627300-d4fa9b75dbb7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "09",
    category: "medium",
    name: "Money Bags",
    price: "129 kr",
    origin: { sv: "Kina · dumplings", en: "China · dumplings" },
    desc: {
      sv: "2 st. Dumplings på biff, chili, hoisin, mexikansk koriander & chilimajo.",
      en: "2 pcs. Beef dumplings, chili, hoisin, Mexican coriander & chili mayo.",
    },
    allergens: ["G", "E"],
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "10",
    category: "medium",
    name: "Gyoza",
    price: "129 kr",
    origin: { sv: "Japan", en: "Japan" },
    desc: {
      sv: "3 st. Fläsk, räkor, vårlök, skogsöronsvamp, fond & svartvitlöksolja.",
      en: "3 pcs. Pork, prawns, spring onion, wood ear mushroom, stock & black garlic oil.",
    },
    allergens: ["G", "E"],
    image: "https://images.unsplash.com/photo-1541696490-8744a5dc0228?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "11",
    category: "medium",
    name: "Wonton",
    price: "114 kr",
    origin: { sv: "Vegan", en: "Vegan" },
    desc: {
      sv: "4 st. Marinerad tofu, vårlök, shiitake, chilibönor med chilivinägrett.",
      en: "4 pcs. Marinated tofu, spring onion, shiitake, chili beans with chili vinaigrette.",
    },
    allergens: ["G"],
    vegan: true,
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1400&q=80",
  },
  // ——— BIGGER ———
  {
    code: "12",
    category: "large",
    name: "Grain-fed Entrecôte 250g",
    price: "369 kr",
    origin: { sv: "Uruguay × Japan", en: "Uruguay × Japan" },
    desc: {
      sv: "Sotad pak choi, brynt misosmör, ponzu-bearnaise & chilipotatis.",
      en: "Charred pak choi, browned miso butter, ponzu béarnaise & chili potatoes.",
    },
    allergens: ["M", "E"],
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "13",
    category: "large",
    name: "Chow Mein",
    price: "198 kr",
    origin: { sv: "Vegan", en: "Vegan" },
    desc: {
      sv: "Risnudlar, ostronskivling, kungsmussling, shimeji, kinesisk gräslök, douban & soja.",
      en: "Rice noodles, oyster mushroom, king oyster, shimeji, Chinese chives, douban & soy.",
    },
    allergens: ["G"],
    vegan: true,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "14",
    category: "large",
    name: "Tippan Prawns",
    price: "224 kr",
    origin: { sv: "Sydöstasien", en: "Southeast Asia" },
    desc: {
      sv: "Sambalchilisås, säsongens primörer, serveras med ris.",
      en: "Sambal chili sauce, seasonal vegetables, served with rice.",
    },
    allergens: ["M"],
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "15",
    category: "large",
    name: "Tippan Chicken",
    price: "179 kr",
    origin: { sv: "Sydöstasien", en: "Southeast Asia" },
    desc: {
      sv: "Sambalchilisås, säsongens primörer, serveras med ris.",
      en: "Sambal chili sauce, seasonal vegetables, served with rice.",
    },
    allergens: ["M"],
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "16",
    category: "large",
    name: "Tippan Duck / Tofu",
    price: "224 kr",
    origin: { sv: "BBQ · vegan-vänlig", en: "BBQ · vegan-friendly" },
    desc: {
      sv: "BBQ-sås, säsongens primörer, serveras med ris. Tofu-variant är vegan.",
      en: "BBQ sauce, seasonal vegetables, served with rice. Tofu version is vegan.",
    },
    allergens: ["G"],
    vegan: true,
    image: "https://images.unsplash.com/photo-1749640566096-5d8098d452b4?auto=format&fit=crop&w=1400&q=80",
  },
  // ——— SIDES ———
  {
    code: "17",
    category: "sides",
    name: "Bang Bang",
    price: "55 kr",
    desc: {
      sv: "Gurka, gochugaru, vårlök, toppad med sesam-soja.",
      en: "Cucumber, gochugaru, spring onion, topped with sesame-soy.",
    },
    allergens: ["G"],
    vegan: true,
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "18",
    category: "sides",
    name: "Chili Potatis",
    price: "55 kr",
    desc: { sv: "Toppad med srirachamajo.", en: "Topped with sriracha mayo." },
    allergens: ["E"],
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "19",
    category: "sides",
    name: "Edamame",
    price: "55 kr",
    desc: { sv: "Ångade, havssalt.", en: "Steamed, sea salt." },
    allergens: [],
    vegan: true,
    image: "https://images.unsplash.com/photo-1730596140741-6cc4963ad816?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "20",
    category: "sides",
    name: "Kimchi",
    price: "45 kr",
    desc: { sv: "Husets fermenterade napakål.", en: "House-fermented napa cabbage." },
    allergens: [],
    vegan: true,
    image: "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "21",
    category: "sides",
    name: "Nori-ris",
    price: "45 kr",
    desc: { sv: "Ångat ris, rostad nori.", en: "Steamed rice, toasted nori." },
    allergens: [],
    vegan: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "22",
    category: "sides",
    name: "Räkchips",
    price: "45 kr",
    desc: { sv: "Krispiga räkchips.", en: "Crispy prawn crackers." },
    allergens: [],
    image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=1400&q=80",
  },
];

export function t<T extends { sv: string; en: string }>(v: T, lang: Lang): string {
  return v[lang];
}
export function tx(v: string | { sv: string; en: string }, lang: Lang): string {
  return typeof v === "string" ? v : v[lang];
}
