export type Workplace = {
  name: string;
  city: string;
  owner: "Daniel" | "Yuliia";
  role: string;
  menuFocus: string;
  work: string[];
};

export type Dish = {
  title: string;
  category: string;
  image: string;
};

export type MenuExample = {
  title: string;
  subtitle: string;
  format: string;
  items: string[];
};

export type Package = {
  name: string;
  price: string;
  summary: string;
  includes: string[];
};

const image = (id: string, crop = "entropy") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=82&crop=${crop}`;

export const workplaces: Workplace[] = [
  {
    name: "Mafia",
    city: "Poland",
    owner: "Daniel",
    role: "Chef / kitchen operations",
    menuFocus: "European dishes, hot section, service rhythm",
    work: ["Line production under pressure", "Station prep and mise en place", "Quality and plating consistency"],
  },
  {
    name: "Shashlyk YAN",
    city: "Poland",
    owner: "Daniel",
    role: "Chef / grill and hot section",
    menuFocus: "Grill, meat, sauces, banquets",
    work: ["Grill workflow", "Marinades and portion logic", "Batch prep for busy service"],
  },
  {
    name: "Dolce-Vita",
    city: "Poland",
    owner: "Daniel",
    role: "Chef",
    menuFocus: "Cafe and restaurant classics",
    work: ["Daily production", "Menu execution", "Prep planning"],
  },
  {
    name: "Domowe Obiady",
    city: "Poland",
    owner: "Daniel",
    role: "Chef / production kitchen",
    menuFocus: "Lunch menus, comfort food, high-volume prep",
    work: ["Daily menu rotation", "Cost-aware portions", "Fast service organization"],
  },
  {
    name: "Mama-Wilda",
    city: "Poland",
    owner: "Daniel",
    role: "Chef",
    menuFocus: "Homestyle restaurant menu",
    work: ["Hot dishes", "Prep systems", "Service flow"],
  },
  {
    name: "Meridians",
    city: "Poland",
    owner: "Daniel",
    role: "Chef / catering kitchen",
    menuFocus: "Events, catering trays, production scale",
    work: ["Event prep", "Banquet portions", "Kitchen coordination"],
  },
  {
    name: "Kebab-Lavica",
    city: "Poland",
    owner: "Daniel",
    role: "Kitchen production",
    menuFocus: "Fast casual, sauces, prep, service speed",
    work: ["Prep station setup", "Sauce and garnish flow", "Fast output under load"],
  },
  {
    name: "Fit Food",
    city: "Poland",
    owner: "Yuliia",
    role: "Manager / food quality and menu process",
    menuFocus: "Healthy meals, balanced portions, order operations",
    work: ["Menu portions and meal logic", "Quality control", "Order and packaging process"],
  },
  {
    name: "Domowe Obiady",
    city: "Poland",
    owner: "Yuliia",
    role: "Manager / operations",
    menuFocus: "Daily lunch operations and customer-facing flow",
    work: ["Order coordination", "Service standards", "Kitchen communication"],
  },
  {
    name: "Meridians",
    city: "Poland",
    owner: "Yuliia",
    role: "Manager / catering and process owner",
    menuFocus: "Catering menus, portions, tech cards, production control",
    work: ["Menu planning", "Portion and recipe documentation", "Full process control from order to delivery"],
  },
];

export const dishGallery: Dish[] = [
  { title: "Mediterranean breakfast plate", category: "Breakfasts", image: image("photo-1533089860892-a7c6f0a88666") },
  { title: "Soft egg brunch toast", category: "Breakfasts", image: image("photo-1525351484163-7529414344d8") },
  { title: "Pancakes with berries", category: "Breakfasts", image: image("photo-1528207776546-365bb710ee93") },
  { title: "Granola and yogurt bowl", category: "Healthy meals", image: image("photo-1511690743698-d9d85f2fbf38") },
  { title: "Balanced chicken lunch box", category: "Healthy meals", image: image("photo-1546069901-ba9599a7e63c") },
  { title: "Salmon fitness bowl", category: "Healthy meals", image: image("photo-1512621776951-a57141f2eefd") },
  { title: "Greek salad service", category: "Salads", image: image("photo-1540420773420-3366772f4999") },
  { title: "Burrata tomato plate", category: "Salads", image: image("photo-1551183053-bf91a1d81141") },
  { title: "Citrus seafood salad", category: "Salads", image: image("photo-1604908176997-125f25cc6f3d") },
  { title: "Grilled beef skewer", category: "Grill", image: image("photo-1555939594-58d7cb561ad1") },
  { title: "Charcoal chicken grill", category: "Grill", image: image("photo-1598515214211-89d3c73ae83b") },
  { title: "Steak with herb butter", category: "Grill", image: image("photo-1558030006-450675393462") },
  { title: "Seared fish fillet", category: "Hot dishes", image: image("photo-1467003909585-2f8a72700288") },
  { title: "Cream pasta station", category: "Hot dishes", image: image("photo-1551183053-bf91a1d81141") },
  { title: "Risotto service plate", category: "Hot dishes", image: image("photo-1476124369491-e7addf5db371") },
  { title: "Shrimp with garlic butter", category: "Seafood", image: image("photo-1565680018434-b513d5e5fd47") },
  { title: "Seafood sharing plate", category: "Seafood", image: image("photo-1534080564583-6be75777b70a") },
  { title: "Tuna starter", category: "Seafood", image: image("photo-1604908176997-125f25cc6f3d") },
  { title: "Catering antipasti tray", category: "Catering trays", image: image("photo-1543352634-a1c51d9f1fa7") },
  { title: "Event dessert board", category: "Catering trays", image: image("photo-1488477181946-6428a0291777") },
  { title: "Private buffet setup", category: "Catering trays", image: image("photo-1555244162-803834f70033") },
  { title: "Chocolate dessert", category: "Desserts", image: image("photo-1488477304112-4944851de03d") },
  { title: "Berry tart portion", category: "Desserts", image: image("photo-1464305795204-6f5bbfc7fb81") },
  { title: "Cream cake service", category: "Desserts", image: image("photo-1551024506-0bccd828d307") },
  { title: "Prep sauces mise en place", category: "Sauces/prep", image: image("photo-1556911220-bff31c812dba") },
  { title: "Kitchen herb prep", category: "Sauces/prep", image: image("photo-1506368249639-73a05d6f6488") },
  { title: "Batch prep station", category: "Sauces/prep", image: image("photo-1556909114-f6e7ad7d3136") },
  { title: "Citrus iced drink", category: "Drinks", image: image("photo-1544145945-f90425340c7e") },
  { title: "Restaurant coffee service", category: "Drinks", image: image("photo-1495474472287-4d71bcdd2085") },
  { title: "Fresh bar garnish", category: "Drinks", image: image("photo-1513558161293-cdaf765ed2fd") },
];

export const menuExamples: MenuExample[] = [
  {
    title: "Cafe Brunch Menu",
    subtitle: "Compact daytime menu for a cafe with fast prep and strong visual dishes.",
    format: "Breakfast / brunch / coffee pairing",
    items: [
      "Turkish eggs, garlic yogurt, chili butter",
      "Smoked salmon toast, cucumber, herbs",
      "Pancakes, berries, vanilla cream",
      "Chicken Caesar croissant",
      "Burrata tomato salad",
      "Cold brew tonic",
    ],
  },
  {
    title: "Healthy / Fit Food Menu",
    subtitle: "Portion-aware meals for delivery, take away or weekly nutrition plans.",
    format: "Balanced bowls / protein meals / clean sauces",
    items: [
      "Chicken quinoa bowl, avocado, citrus dressing",
      "Salmon rice box, greens, sesame sauce",
      "Turkey meatballs, buckwheat, vegetables",
      "Greek yogurt breakfast jar",
      "Protein pancakes, berry compote",
      "Low-calorie herb sauce set",
    ],
  },
  {
    title: "Catering Event Menu",
    subtitle: "Designed for batch prep, transport, clean plating and predictable portions.",
    format: "Private events / villa dinners / business catering",
    items: [
      "Antipasti grazing board",
      "Mini bruschetta selection",
      "Grilled chicken skewers",
      "Beef sliders, house sauce",
      "Seafood salad cups",
      "Dessert miniatures tray",
    ],
  },
  {
    title: "Small Kitchen Launch Menu",
    subtitle: "A restrained launch menu for limited equipment, storage and staff.",
    format: "Low waste / cross-used prep / simple service flow",
    items: [
      "Soup of the day",
      "Chicken schnitzel plate",
      "Pasta with seasonal sauce",
      "Chef salad with grilled protein",
      "House dessert",
      "Signature sauce base for 4 dishes",
    ],
  },
  {
    title: "Grill & Hot Section Menu",
    subtitle: "Hot dishes built around timing, mise en place and consistent output.",
    format: "Grill / hot section / service pressure",
    items: [
      "Marinated chicken shashlyk",
      "Beef kebab plate",
      "Grilled vegetables, herb oil",
      "Garlic butter prawns",
      "Crispy potatoes, aioli",
      "House pickles and sauce set",
    ],
  },
];

export const servicePackages: Package[] = [
  {
    name: "Consultation",
    price: "from 300 EUR",
    summary: "For owners who need a clear view of the kitchen, menu and launch risks.",
    includes: ["Kitchen audit", "Concept direction", "Menu structure notes", "Up to 2 hours"],
  },
  {
    name: "Signature Menu",
    price: "from / by quote",
    summary: "A focused menu set with dish logic, costing direction and prep thinking.",
    includes: ["Up to 10 positions", "Menu structure", "Tech card direction", "Prep plan"],
  },
  {
    name: "Kitchen Launch",
    price: "from / by quote",
    summary: "Menu plus operating rhythm for a cafe, restaurant or compact kitchen.",
    includes: ["Up to 15 positions", "Costing logic", "Prep systems", "Team training"],
  },
  {
    name: "Full Culinary Concept",
    price: "by quote",
    summary: "Complete food direction and launch support for a serious hospitality project.",
    includes: ["Up to 25 positions", "Testing", "Kitchen setup", "Launch corrections"],
  },
];

export const processSteps = [
  "Concept and guest profile",
  "Kitchen, equipment and staff audit",
  "Menu architecture and position count",
  "Dish development and testing",
  "Tech cards, portions and costing logic",
  "Prep systems and service flow",
  "Team training and launch correction",
];
