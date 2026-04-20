export type Factory = {
  num: string;
  name: string;
  small: string;
  cat: string;
  loc: string;
  stars: number;
  must?: boolean;
  stats: { label: string; value: string; gold?: boolean }[];
  points: string[];
};

export type Region = { label: string; factories: Factory[] };

export const regions: Region[] = [
  {
    label: "South — Ho Chi Minh City · May 31 – Jun 2",
    factories: [
      {
        num: "01",
        name: "An Cuong Wood",
        small: "Binh Duong",
        cat: "Interior Panels · SPC Flooring · Wall Panels · Doors",
        loc: "Binh Duong",
        stars: 5,
        stats: [
          { label: "Est. Revenue", value: "~$145M", gold: true },
          { label: "Factory", value: "240,000 m²" },
          { label: "Mkt Share", value: "50%+ Vietnam", gold: true },
          { label: "Investors", value: "Sumitomo · DEG · VinaCapital", gold: true },
          { label: "US Presence", value: "Rep office · exports live" },
        ],
        points: [
          "Vietnam's #1 interior materials company. Publicly listed, 50%+ domestic market share.",
          "Full ecosystem: panels, SPC/laminate flooring, wall panels, acoustic panels, doors — genuine one-stop shop.",
          "Backed by Sumitomo (Japan) + DEG (German dev bank). Already ships to USA, Australia, Japan, Canada.",
        ],
      },
      {
        num: "02",
        name: "BM Windows",
        small: "Binh Duong",
        cat: "Aluminum-Glass Facades · Curtain Walls · Unitized Panels",
        loc: "Binh Duong",
        stars: 5,
        stats: [
          { label: "Est. Revenue", value: "~$120M+", gold: true },
          { label: "Capacity", value: "2M m²/yr" },
          { label: "Factory", value: "LEED Silver (US GBC)", gold: true },
          { label: "Projects", value: "650+ in 8 countries" },
        ],
        points: [
          "Only aluminum-glass factory in Vietnam with LEED Silver from the US Green Building Council.",
          "Supplied Canada's tallest building (The One Toronto, 85F, Foster & Partners) — all ASTM-certified.",
          "Live US exports: Marriott Courtyard Hawaii. Currently executing 55 Pitt Street Sydney (6-star Green Star target).",
          "Asian Export Award 2024 — only Vietnamese facade exporter in Construction Materials category.",
        ],
      },
      {
        num: "03",
        name: "Phu Tai + Vina G7",
        small: "Binh Duong / Dong Nai",
        cat: "Kitchen Cabinets · Wood Furniture · Quartz Stone",
        loc: "Binh Duong / Dong Nai",
        stars: 5,
        must: true,
        stats: [
          { label: "Est. Revenue", value: "$100M+", gold: true },
          { label: "Listing", value: "HOSE (public)" },
          { label: "Factories", value: "4 total" },
          { label: "Export", value: "USA · Japan (primary)" },
        ],
        points: [
          "2 wood factories (Phu Tai + Vina G7 brands, kitchen cabinets + furniture) + 2 quartz factories — one group.",
          "Among Vietnam's largest publicly listed furniture exporters. Automated lines, strong OEM/ODM.",
          "Kitchen cabinets at scale for US residential — ideal for high-volume builders sourcing cabinet packages.",
        ],
      },
      {
        num: "04",
        name: "Dai Dung Corporation",
        small: "Long An",
        cat: "Prefab Steel Structures · Fabrication · EPC",
        loc: "Long An (~40 min)",
        stars: 5,
        must: true,
        stats: [
          { label: "Est. Revenue", value: "~$80–100M", gold: true },
          { label: "Experience", value: "~30 years" },
          { label: "Factory", value: "LEED Gold v4", gold: true },
        ],
        points: [
          "Full structural engineering firm: design, fabrication, erection, EPC. Not a commodity steel shop.",
          "LEED Gold v4 factory — among Vietnam's highest green manufacturing credentials.",
          "Portfolio: stadiums, airports, skyscrapers, offshore modules. Impressive for GC and developer audiences.",
        ],
      },
      {
        num: "05",
        name: "Tan Thanh Container",
        small: "HCMC",
        cat: "ISO Containers · Modified / Prefab Units",
        loc: "HCMC",
        stars: 3,
        stats: [
          { label: "Est. Revenue", value: "~$40–60M" },
          { label: "Position", value: "Vietnam's #1 container brand" },
        ],
        points: [
          "Vietnam's leading container manufacturer — ISO, modified, cold storage, and prefab units.",
          "Growing US interest in modular/container construction. This visit validates real-world economics.",
          "US export economics contingent on logistics cost and tariff environment — visit is exploratory.",
        ],
      },
      {
        num: "06",
        name: "AA Corporation",
        small: "HCMC / Long An",
        cat: "Luxury FF&E · Custom Furniture · Interior Fit-Out",
        loc: "HCMC / Long An",
        stars: 4,
        stats: [
          { label: "Est. Revenue", value: "~$100–120M", gold: true },
          { label: "Founded", value: "1989" },
          { label: "Export", value: "40+ countries", gold: true },
          { label: "US Subsidiary", value: "ACA Interiors, Portland OR", gold: true },
        ],
        points: [
          "35+ years. Vietnam's largest luxury interior fit-out manufacturer. First 5-star hotel in Vietnam (Sofitel Da Lat Palace, 1995).",
          "Exports to 40+ countries. Live US subsidiary in Portland, OR. Park Hyatt, Marriott, Ritz-Carlton portfolio.",
          "Best for hospitality developers and luxury residential — premium custom FF&E, not volume production.",
        ],
      },
    ],
  },
  {
    label: "North — Hanoi Hub · Jun 3 – Jun 6",
    factories: [
      {
        num: "07",
        name: "Eurowindow",
        small: "Hanoi",
        cat: "Aluminum + uPVC Windows/Doors · Curtain Walls · Timber Doors",
        loc: "Hanoi",
        stars: 4,
        must: true,
        stats: [
          { label: "Est. Revenue", value: "~$200M", gold: true },
          { label: "Factory", value: "~500,000 m²" },
          { label: "Export", value: "30+ countries" },
        ],
        points: [
          "Vietnam's #1 fenestration brand — supplies airports, luxury hotels, and major towers nationally.",
          "Widest product range: aluminum + uPVC windows/doors, curtain walls, timber doors, insulating glass, auto doors — entire building envelope from one factory.",
          "500K m² facility, 30+ export countries. Single-source for every door and window on a project.",
        ],
      },
      {
        num: "08",
        name: "Tonmat Group",
        small: "Bac Ninh",
        cat: "Insulated Roof + Wall Panels · Metal Roofing · Color-Coated Steel",
        loc: "Bac Ninh (~30 min)",
        stars: 5,
        must: true,
        stats: [
          { label: "Est. Revenue", value: "~$150M", gold: true },
          { label: "Vietnam", value: "#1 Sandwich Panel", gold: true },
          { label: "Global", value: "Top 20 Worldwide", gold: true },
          { label: "Steel JV", value: "Marubeni Itochu (Japan)", gold: true },
        ],
        points: [
          "#1 in Vietnam for insulated roof + wall panels. Top 20 globally. Founded 2003.",
          "Group: TONMATPAN (sandwich panels) + FUJITON (color-coated steel, JV with Marubeni Itochu Japan).",
          "Metal roofing with Japanese-quality backing — easy to spec for US project owners.",
        ],
      },
      {
        num: "09",
        name: "Amy Grupo",
        small: "Vinh Phuc",
        cat: "Tile · SPC/LVT Flooring · WPC Decking · Wall Panels",
        loc: "Vinh Phuc (~45 min)",
        stars: 5,
        must: true,
        stats: [
          { label: "Est. Revenue", value: "~$80–120M", gold: true },
          { label: "Founded", value: "2015" },
          { label: "Export", value: "USA · Mexico + others" },
        ],
        points: [
          "Most diverse stop: ceramic tiles, SPC/LVT flooring, WPC decking, wall panels — all under one roof.",
          "US and Mexico exports confirmed. Runs its own design awards program — not just a commodity factory.",
        ],
      },
      {
        num: "10",
        name: "An Phat Holdings",
        small: "AnPro + An Cuong Flooring · Hai Phong",
        cat: "SPC/LVT Flooring · PVC Wall Panels · Wall Cladding",
        loc: "Hai Phong",
        stars: 4,
        stats: [
          { label: "Parent Revenue", value: "$500M+ (AAH)", gold: true },
          { label: "Listing", value: "Public" },
          { label: "Key Feature", value: "100% Waterproof · Formaldehyde-Free", gold: true },
        ],
        points: [
          "Two brands, one factory: AnPro + An Cuong Flooring — SPC/LVT flooring, PVC wall panels, wall cladding.",
          "100% waterproof, formaldehyde-free — easy spec for US residential, multifamily, hospitality.",
          "Note: completely separate from An Cuong Wood (#01). Different parent, different product line entirely.",
        ],
      },
      {
        num: "11",
        name: "Tien Phong Plastic",
        small: "Hai Phong",
        cat: "PVC + HDPE Pipes · Pipe Fittings · Plumbing Systems",
        loc: "Hai Phong (w/ #10)",
        stars: 2,
        stats: [
          { label: "Revenue (TTM)", value: "~$260M", gold: true },
          { label: "Listed", value: "NTP (public)" },
          { label: "History", value: "50+ years" },
        ],
        points: [
          "Vietnam's #1 PVC/HDPE pipe manufacturer. 1,000+ product types. Combine with Hai Phong visit (#10).",
          "Best for land developers speccing underground utilities — plumbing, drainage, irrigation supply chain.",
        ],
      },
      {
        num: "12",
        name: "Hoa Phat Group",
        small: "Hanoi · Meeting Format",
        cat: "Construction Steel · Galvanized + Color-Coated Steel · Metal Roofing",
        loc: "Hanoi (briefing)",
        stars: 4,
        stats: [
          { label: "Revenue 2024", value: "~$5.6B", gold: true },
          { label: "Vietnam", value: "#1 Steel Producer", gold: true },
          { label: "Export", value: "40+ countries incl. USA" },
        ],
        points: [
          "Vietnam's #1 steel producer, Southeast Asia's largest — Top 30 globally. Exports to USA, Canada, Japan.",
          "Format: commercial briefing (not factory tour) — for volume steel and metal roofing sourcing conversations.",
        ],
      },
    ],
  },
];
