export type Language = "en" | "uk" | "es" | "fr" | "de";

type Localized = Record<Language, string>;

export type Workplace = {
  name: string;
  city: string;
  owner: "Daniel" | "Yuliia";
  role: string;
  menuFocus: string;
  work: string[];
};

export type Package = {
  name: string;
  scope: string;
  oldPrice: string;
  foundingPrice: string;
  offer: string;
  summary: string;
  includes: string[];
  cta: string;
  recommended?: boolean;
};

export type WorkExample = {
  title: string;
  location: string;
  result: string;
  image: string;
  tag: string;
};

export type ProcessStep = {
  title: string;
  copy: string;
};

export type GrowthContent = {
  proof: Array<{ value: string; label: string }>;
  problem: { label: string; title: string; copy: string };
  advisor: {
    label: string;
    title: string;
    copy: string;
    note: string;
    stats: Array<{ value: string; label: string }>;
  };
  turnkey: {
    label: string;
    title: string;
    copy: string;
    items: Array<{ title: string; copy: string }>;
  };
  foreignOwners: {
    label: string;
    title: string;
    copy: string;
    markets: Array<{ market: string; copy: string }>;
  };
  audiences: { label: string; title: string; items: Array<{ title: string; copy: string; cta: string }> };
  deliverables: { label: string; title: string; items: string[] };
  riskAudit: { label: string; title: string; items: string[] };
  portfolioFilters: { all: string };
  packagesCta: string;
  recommendedLabel: string;
  contactBrief: {
    title: string;
    copy: string;
    nameLabel: string;
    contactLabel: string;
    typeLabel: string;
    options: string[];
    submit: string;
  };
};

type PageContent = {
  nav: Record<"experience" | "portfolio" | "menus" | "contact", string>;
  cta: Record<"portfolio" | "book" | "menu" | "whatsapp", string>;
  hero: {
    title: string;
    copy: string;
    imageLabel: string;
    imageAlt: string;
    cardOneLabel: string;
    cardOneText: string;
    cardTwoText: string;
  };
  about: {
    label: string;
    title: string;
    copy: string;
    profiles: Array<{ name: string; copy: string; points: string[] }>;
  };
  experience: { label: string; title: string; copy: string };
  portfolio: { label: string; title: string; copy: string; carouselLabel: string };
  menus: { label: string; title: string; copy: string };
  process: { label: string; title: string; copy: string };
  packages: { label: string; title: string; copy: string };
  confidentiality: { title: string; copy: string };
  contact: { title: string };
};

const image = (id: string, crop = "entropy") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=82&crop=${crop}`;

export const localizedContent: Record<Language, PageContent> = {
  en: {
    nav: { experience: "Experience", portfolio: "Our Work", menus: "Pricing", contact: "Contact" },
    cta: {
      portfolio: "See recent launch examples",
      book: "Book a Free 30-Minute Kitchen Audit Call",
      menu: "Book a Free 30-Minute Kitchen Audit Call",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "We launch profitable kitchens for restaurants, cafes and private villas across Marbella & the Costa del Sol.",
      copy: "15+ years of hands-on restaurant operations. We design the menu, the kitchen flow and train your team, so you open on time, on budget, and profitable from week one.",
      imageLabel: "Premium hospitality advisory team planning a restaurant launch",
      imageAlt: "Hospitality consulting team planning a restaurant menu and kitchen launch",
      cardOneLabel: "Founding client pricing",
      cardOneText: "First 5 projects only",
      cardTwoText: "International owners in Spain",
    },
    about: {
      label: "About us",
      title: "Chef execution, management discipline and senior Spanish hospitality advice.",
      copy: "We are not selling generic menu templates. We build menus around the actual kitchen, team, equipment, service rhythm, local guest profile and business model.",
      profiles: [
        {
          name: "Daniel Zamiatin",
          copy: "Chef-side experience across hot section, grill, production kitchens, catering and high-pressure service.",
          points: ["10+ years in professional kitchens", "Menu execution, prep planning and service flow", "European, Eastern European, grill and catering formats"],
        },
        {
          name: "Yuliia Horbach",
          copy: "Manager and process owner with food quality control, order operations, catering menu logic and documentation.",
          points: ["Food quality and packaging standards", "Menu portions, recipes and process checks", "Owner-side control from order to delivery"],
        },
      ],
    },
    experience: {
      label: "Work & menu experience",
      title: "Restaurants, production kitchens and catering operations.",
      copy: "Each project shaped how we think about realistic menus: dishes that sell, prep that works, portions that can be repeated and service that does not collapse under pressure.",
    },
    portfolio: {
      label: "Our Work",
      title: "Recent launch and concept menu samples.",
      copy: "Visual proof should support the consulting offer, not make Y&D look like a restaurant. These samples show venue type, location and the operational result behind the food.",
      carouselLabel: "Recent launch examples",
    },
    menus: {
      label: "Ready menu examples",
      title: "Menu structures we can build around your real kitchen.",
      copy: "These are authored sample menus that show direction, format and logic. They are not copied client menus or confidential technical documents.",
    },
    process: {
      label: "Process",
      title: "A clear four-step launch system.",
      copy: "No vague consulting. Each step turns risk into a concrete operating decision.",
    },
    packages: {
      label: "Pricing",
      title: "Transparent EUR starting prices for serious projects.",
      copy: "Founding client pricing is limited to the first 5 projects. Large-scale launches stay custom because stations, covers, staffing and on-site support change the real scope.",
    },
    confidentiality: {
      title: "We show menu structure, dish direction and public references.",
      copy: "Client recipes, tech cards, costing and internal production documents remain confidential. A strong menu is created for your equipment, suppliers, team, margin, season and guests.",
    },
    contact: { title: "Book your free kitchen audit call." },
  },
  uk: {
    nav: { experience: "Досвід", portfolio: "Our Work", menus: "Ціни", contact: "Контакти" },
    cta: {
      portfolio: "Дивитись приклади запусків",
      book: "Book a Free 30-Minute Kitchen Audit Call",
      menu: "Book a Free 30-Minute Kitchen Audit Call",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "We launch profitable kitchens for restaurants, cafes and private villas across Marbella & the Costa del Sol.",
      copy: "15+ years of hands-on restaurant operations. We design the menu, the kitchen flow and train your team, so you open on time, on budget, and profitable from week one.",
      imageLabel: "Преміальні ресторанні страви та робота кухні",
      imageAlt: "Шеф оформлює преміальну ресторанну страву",
      cardOneLabel: "Founding client pricing",
      cardOneText: "First 5 projects only",
      cardTwoText: "International owners in Spain",
    },
    about: {
      label: "Про нас",
      title: "Реальна кухня, менеджмент і продумана логіка меню.",
      copy: "Ми не продаємо універсальні шаблони. Ми будуємо меню під реальну кухню, команду, обладнання, ритм видачі та бізнес-модель.",
      profiles: [
        {
          name: "Daniel Zamiatin",
          copy: "Досвід кухні: гарячий цех, гриль, виробничі кухні, кейтеринг і робота під навантаженням.",
          points: ["10+ років на професійних кухнях", "Виконання меню, планування заготовок і сервісу", "Європейські, східноєвропейські, гриль та catering-формати"],
        },
        {
          name: "Yuliia Horbach",
          copy: "Менеджер і власник процесів: контроль якості, замовлення, логіка кейтеринг-меню та документація.",
          points: ["Стандарти якості та пакування", "Порції, рецепти та перевірка процесів", "Контроль від замовлення до доставки"],
        },
      ],
    },
    experience: {
      label: "Досвід і меню",
      title: "Ресторани, виробничі кухні та кейтеринг.",
      copy: "Кожен проєкт сформував наш підхід до реальних меню: страви мають продаватися, заготовки мають працювати, порції мають повторюватися, а сервіс не має ламатися під навантаженням.",
    },
    portfolio: {
      label: "Our Work",
      title: "Приклади запусків і концепт-меню.",
      copy: "Візуали мають підтверджувати консалтинг, а не створювати враження ресторанного меню. Ці картки показують формат, локацію і операційний результат.",
      carouselLabel: "Приклади запусків",
    },
    menus: {
      label: "Приклади готових меню",
      title: "Структури меню, які можна зібрати під вашу кухню.",
      copy: "Це авторські приклади меню, які показують напрям, формат і логіку. Це не копії клієнтських меню і не закриті технічні документи.",
    },
    process: {
      label: "Процес",
      title: "Чітка система запуску у 4 кроки.",
      copy: "Без розмитого консалтингу: кожен крок перетворює ризик на конкретне операційне рішення.",
    },
    packages: {
      label: "Ціни",
      title: "Прозорі стартові ціни в EUR для серйозних проєктів.",
      copy: "Founding client pricing діє тільки для перших 5 проєктів. Великі запуски рахуються індивідуально через різний масштаб кухонь, команди і супроводу.",
    },
    confidentiality: {
      title: "Ми показуємо структуру меню, напрям страв і публічні приклади.",
      copy: "Рецепти клієнтів, техкарти, собівартість і внутрішні виробничі документи залишаються конфіденційними. Сильне меню створюється під ваше обладнання, постачальників, команду, маржу, сезон і гостей.",
    },
    contact: { title: "Book your free kitchen audit call." },
  },
  es: {
    nav: { experience: "Experiencia", portfolio: "Our Work", menus: "Precios", contact: "Contacto" },
    cta: {
      portfolio: "Ver ejemplos de lanzamientos",
      book: "Book a Free 30-Minute Kitchen Audit Call",
      menu: "Book a Free 30-Minute Kitchen Audit Call",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "We launch profitable kitchens for restaurants, cafes and private villas across Marbella & the Costa del Sol.",
      copy: "15+ years of hands-on restaurant operations. We design the menu, the kitchen flow and train your team, so you open on time, on budget, and profitable from week one.",
      imageLabel: "Equipo premium de asesoría hospitality planificando una apertura",
      imageAlt: "Equipo de consultoría hospitality planificando un menú y una apertura de cocina",
      cardOneLabel: "Founding client pricing",
      cardOneText: "First 5 projects only",
      cardTwoText: "International owners in Spain",
    },
    about: {
      label: "Sobre nosotros",
      title: "Ejecución de cocina, disciplina de gestión y asesoría hostelera española senior.",
      copy: "No vendemos plantillas genéricas. Construimos menús alrededor de la cocina real, el equipo, la maquinaria, el ritmo de servicio, el perfil del cliente local y el modelo de negocio.",
      profiles: [
        {
          name: "Daniel Zamiatin",
          copy: "Experiencia de cocina en partida caliente, parrilla, cocinas de producción, catering y servicio de alta presión.",
          points: ["10+ años en cocinas profesionales", "Ejecución de menú, mise en place y flujo de servicio", "Formatos europeos, de Europa del Este, parrilla y catering"],
        },
        {
          name: "Yuliia Horbach",
          copy: "Manager y responsable de procesos: control de calidad, pedidos, lógica de menús de catering y documentación.",
          points: ["Estándares de calidad y packaging", "Porciones, recetas y revisión de procesos", "Control operativo desde pedido hasta entrega"],
        },
      ],
    },
    experience: {
      label: "Experiencia y menús",
      title: "Restaurantes, cocinas de producción y catering.",
      copy: "Cada proyecto formó nuestra forma de crear menús realistas: platos que se venden, preparación que funciona, porciones repetibles y un servicio que no se rompe bajo presión.",
    },
    portfolio: {
      label: "Our Work",
      title: "Ejemplos de lanzamientos y concept menus.",
      copy: "Las fotos deben apoyar la prueba B2B, no parecer una carta de restaurante. Estas tarjetas muestran tipo de proyecto, ubicación y resultado operativo.",
      carouselLabel: "Ejemplos de lanzamientos",
    },
    menus: {
      label: "Ejemplos de menús listos",
      title: "Estructuras de menú que podemos construir para tu cocina real.",
      copy: "Son ejemplos de autor que muestran dirección, formato y lógica. No son copias de menús de clientes ni documentos técnicos confidenciales.",
    },
    process: {
      label: "Proceso",
      title: "Un sistema claro de lanzamiento en 4 pasos.",
      copy: "Sin consultoría vaga: cada paso convierte el riesgo en una decisión operativa concreta.",
    },
    packages: {
      label: "Precios",
      title: "Precios iniciales transparentes en EUR para proyectos serios.",
      copy: "Founding client pricing limitado a los primeros 5 proyectos. Los grandes lanzamientos se presupuestan a medida por estaciones, equipo y soporte en sitio.",
    },
    confidentiality: {
      title: "Mostramos estructura de menú, dirección de platos y referencias públicas.",
      copy: "Recetas de clientes, fichas técnicas, costes y documentos internos de producción permanecen confidenciales. Un menú fuerte se crea para tu equipamiento, proveedores, equipo, margen, temporada y clientes.",
    },
    contact: { title: "Book your free kitchen audit call." },
  },
  fr: {
    nav: { experience: "Experience", portfolio: "Our Work", menus: "Prix", contact: "Contact" },
    cta: {
      portfolio: "Voir les exemples de lancements",
      book: "Book a Free 30-Minute Kitchen Audit Call",
      menu: "Book a Free 30-Minute Kitchen Audit Call",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "We launch profitable kitchens for restaurants, cafes and private villas across Marbella & the Costa del Sol.",
      copy: "15+ years of hands-on restaurant operations. We design the menu, the kitchen flow and train your team, so you open on time, on budget, and profitable from week one.",
      imageLabel: "Equipe premium de conseil hospitality preparant un lancement restaurant",
      imageAlt: "Equipe de conseil hospitality planifiant un menu de restaurant et un lancement cuisine",
      cardOneLabel: "Founding client pricing",
      cardOneText: "First 5 projects only",
      cardTwoText: "International owners in Spain",
    },
    about: {
      label: "A propos",
      title: "Execution cuisine, discipline de gestion et conseil hospitality espagnol senior.",
      copy: "Nous ne vendons pas de modeles generiques. Nous construisons les menus autour de la vraie cuisine, de l'equipe, du materiel, du rythme de service, du client local et du modele economique.",
      profiles: [
        {
          name: "Daniel Zamiatin",
          copy: "Experience cote cuisine: chaud, grill, cuisines de production, catering et service sous pression.",
          points: ["10+ ans en cuisines professionnelles", "Execution menu, prep planning et flux de service", "Formats europeens, Europe de l'Est, grill et catering"],
        },
        {
          name: "Yuliia Horbach",
          copy: "Manager et responsable process: controle qualite, operations de commandes, logique de menus catering et documentation.",
          points: ["Standards qualite et packaging", "Portions, recettes et controles process", "Controle proprietaire de la commande a la livraison"],
        },
      ],
    },
    experience: {
      label: "Experience et menus",
      title: "Restaurants, cuisines de production et operations catering.",
      copy: "Chaque projet a construit notre facon de penser des menus realistes: des plats qui se vendent, une prep qui fonctionne, des portions repetables et un service qui ne casse pas sous pression.",
    },
    portfolio: {
      label: "Our Work",
      title: "Exemples de lancements et concept menus.",
      copy: "Les visuels doivent soutenir l'offre de conseil, pas donner l'impression d'un restaurant. Ces cartes montrent le type de projet, la localisation et le resultat operationnel.",
      carouselLabel: "Exemples de lancements",
    },
    menus: {
      label: "Exemples de menus prets",
      title: "Structures de menus que nous pouvons adapter a votre vraie cuisine.",
      copy: "Ces exemples montrent une direction, un format et une logique. Ce ne sont pas des copies de menus clients ni des documents techniques confidentiels.",
    },
    process: {
      label: "Processus",
      title: "Un systeme clair de lancement en 4 etapes.",
      copy: "Pas de conseil vague: chaque etape transforme un risque en decision operationnelle concrete.",
    },
    packages: {
      label: "Prix",
      title: "Prix de depart transparents en EUR pour projets serieux.",
      copy: "Founding client pricing limite aux 5 premiers projets. Les grands lancements restent sur devis selon stations, equipe et support sur site.",
    },
    confidentiality: {
      title: "Nous montrons la structure du menu, la direction des plats et des references publiques.",
      copy: "Les recettes clients, fiches techniques, couts et documents internes restent confidentiels. Un menu solide se cree pour votre materiel, vos fournisseurs, votre equipe, votre marge, votre saison et vos clients.",
    },
    contact: { title: "Book your free kitchen audit call." },
  },
  de: {
    nav: { experience: "Erfahrung", portfolio: "Our Work", menus: "Preise", contact: "Kontakt" },
    cta: {
      portfolio: "Launch-Beispiele ansehen",
      book: "Book a Free 30-Minute Kitchen Audit Call",
      menu: "Book a Free 30-Minute Kitchen Audit Call",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "We launch profitable kitchens for restaurants, cafes and private villas across Marbella & the Costa del Sol.",
      copy: "15+ years of hands-on restaurant operations. We design the menu, the kitchen flow and train your team, so you open on time, on budget, and profitable from week one.",
      imageLabel: "Premium Hospitality-Beratungsteam plant einen Restaurantlaunch",
      imageAlt: "Hospitality-Beratungsteam plant ein Restaurantmenu und einen Kuchenlaunch",
      cardOneLabel: "Founding client pricing",
      cardOneText: "First 5 projects only",
      cardTwoText: "International owners in Spain",
    },
    about: {
      label: "Uber uns",
      title: "Kuchenausfuhrung, Managementdisziplin und spanische Senior-Hospitality-Beratung.",
      copy: "Wir verkaufen keine generischen Menuvorlagen. Wir bauen Menus um die reale Kuche, das Team, die Ausstattung, den Servicerhythmus, das lokale Gastprofil und das Geschaftsmodell.",
      profiles: [
        {
          name: "Daniel Zamiatin",
          copy: "Kuchenerfahrung in Warmposten, Grill, Produktionskuchen, Catering und Service unter Druck.",
          points: ["10+ Jahre in professionellen Kuchen", "Menuausfuhrung, Prep Planning und Service Flow", "Europaische, osteuropaische, Grill- und Catering-Formate"],
        },
        {
          name: "Yuliia Horbach",
          copy: "Managerin und Prozessverantwortliche fur Qualitatskontrolle, Bestellablaufe, Catering-Menu-Logik und Dokumentation.",
          points: ["Qualitats- und Packaging-Standards", "Portionen, Rezepte und Prozesschecks", "Kontrolle vom Auftrag bis zur Lieferung"],
        },
      ],
    },
    experience: {
      label: "Erfahrung und Menus",
      title: "Restaurants, Produktionskuchen und Catering-Operations.",
      copy: "Jedes Projekt hat unseren Blick auf realistische Menus geformt: Gerichte, die sich verkaufen, Prep, der funktioniert, wiederholbare Portionen und Service, der unter Druck stabil bleibt.",
    },
    portfolio: {
      label: "Our Work",
      title: "Launch-Beispiele und Concept Menu Samples.",
      copy: "Bilder sollen das B2B-Angebot beweisen, nicht wie eine Restaurantkarte wirken. Diese Karten zeigen Projekttyp, Standort und operatives Ergebnis.",
      carouselLabel: "Launch-Beispiele",
    },
    menus: {
      label: "Fertige Menubeispiele",
      title: "Menustrukturen, die wir fur Ihre reale Kuche entwickeln konnen.",
      copy: "Diese Beispiele zeigen Richtung, Format und Logik. Es sind keine Kundenmenus und keine vertraulichen technischen Dokumente.",
    },
    process: {
      label: "Prozess",
      title: "Ein klarer Launch-Prozess in 4 Schritten.",
      copy: "Keine vage Beratung: jeder Schritt macht aus Risiko eine konkrete operative Entscheidung.",
    },
    packages: {
      label: "Preise",
      title: "Transparente EUR-Startpreise fur ernsthafte Projekte.",
      copy: "Founding client pricing gilt nur fur die ersten 5 Projekte. Grosse Launches bleiben individuell wegen Stationen, Team und Vor-Ort-Support.",
    },
    confidentiality: {
      title: "Wir zeigen Menustruktur, Gerichterichtung und offentliche Referenzen.",
      copy: "Kundenrezepte, technische Karten, Kalkulationen und interne Produktionsdokumente bleiben vertraulich. Ein starkes Menu entsteht fur Ihre Ausstattung, Lieferanten, Ihr Team, Ihre Marge, Saison und Gaste.",
    },
    contact: { title: "Book your free kitchen audit call." },
  },
};

export const localizedWorkplaces: Record<Language, Workplace[]> = {
  en: [
    { name: "Mafia", city: "Poland", owner: "Daniel", role: "Chef / kitchen operations", menuFocus: "European dishes, hot section, service rhythm", work: ["Line production under pressure", "Station prep and mise en place", "Quality and plating consistency"] },
    { name: "Shashlyk YAN", city: "Poland", owner: "Daniel", role: "Chef / grill and hot section", menuFocus: "Grill, meat, sauces, banquets", work: ["Grill workflow", "Marinades and portion logic", "Batch prep for busy service"] },
    { name: "Dolce-Vita", city: "Poland", owner: "Daniel", role: "Chef", menuFocus: "Cafe and restaurant classics", work: ["Daily production", "Menu execution", "Prep planning"] },
    { name: "Domowe Obiady", city: "Poland", owner: "Daniel", role: "Chef / production kitchen", menuFocus: "Lunch menus, comfort food, high-volume prep", work: ["Daily menu rotation", "Cost-aware portions", "Fast service organization"] },
    { name: "Mama-Wilda", city: "Poland", owner: "Daniel", role: "Chef", menuFocus: "Homestyle restaurant menu", work: ["Hot dishes", "Prep systems", "Service flow"] },
    { name: "Meridians", city: "Poland", owner: "Daniel", role: "Chef / catering kitchen", menuFocus: "Events, catering trays, production scale", work: ["Event prep", "Banquet portions", "Kitchen coordination"] },
    { name: "Kebab-Lavica", city: "Poland", owner: "Daniel", role: "Kitchen production", menuFocus: "Fast casual, sauces, prep, service speed", work: ["Prep station setup", "Sauce and garnish flow", "Fast output under load"] },
    { name: "Fit Food", city: "Poland", owner: "Yuliia", role: "Manager / food quality and menu process", menuFocus: "Healthy meals, balanced portions, order operations", work: ["Menu portions and meal logic", "Quality control", "Order and packaging process"] },
    { name: "Domowe Obiady", city: "Poland", owner: "Yuliia", role: "Manager / operations", menuFocus: "Daily lunch operations and customer-facing flow", work: ["Order coordination", "Service standards", "Kitchen communication"] },
    { name: "Meridians", city: "Poland", owner: "Yuliia", role: "Manager / catering and process owner", menuFocus: "Catering menus, portions, tech cards, production control", work: ["Menu planning", "Portion and recipe documentation", "Full process control from order to delivery"] },
  ],
  uk: [
    { name: "Mafia", city: "Польща", owner: "Daniel", role: "Шеф / кухонні операції", menuFocus: "Європейські страви, гарячий цех, ритм сервісу", work: ["Видача під навантаженням", "Підготовка станції та mise en place", "Стабільна якість і подача"] },
    { name: "Shashlyk YAN", city: "Польща", owner: "Daniel", role: "Шеф / гриль і гарячий цех", menuFocus: "Гриль, м'ясо, соуси, банкети", work: ["Логіка гриль-станції", "Маринади та порційність", "Заготовки для інтенсивного сервісу"] },
    { name: "Dolce-Vita", city: "Польща", owner: "Daniel", role: "Шеф", menuFocus: "Кафе та ресторанна класика", work: ["Щоденне виробництво", "Виконання меню", "Планування заготовок"] },
    { name: "Domowe Obiady", city: "Польща", owner: "Daniel", role: "Шеф / виробнича кухня", menuFocus: "Обіди, comfort food, великі обсяги", work: ["Щоденна ротація меню", "Порції з урахуванням собівартості", "Швидка організація видачі"] },
    { name: "Mama-Wilda", city: "Польща", owner: "Daniel", role: "Шеф", menuFocus: "Домашній ресторанний формат", work: ["Гарячі страви", "Системи заготовок", "Потік сервісу"] },
    { name: "Meridians", city: "Польща", owner: "Daniel", role: "Шеф / кейтеринг-кухня", menuFocus: "Події, catering trays, масштаб виробництва", work: ["Підготовка заходів", "Банкетні порції", "Координація кухні"] },
    { name: "Kebab-Lavica", city: "Польща", owner: "Daniel", role: "Кухонне виробництво", menuFocus: "Fast casual, соуси, заготовки, швидкість видачі", work: ["Налаштування prep-станції", "Потік соусів і гарнірів", "Швидка видача під навантаженням"] },
    { name: "Fit Food", city: "Польща", owner: "Yuliia", role: "Менеджер / якість їжі та процес меню", menuFocus: "Healthy meals, збалансовані порції, замовлення", work: ["Логіка порцій і меню", "Контроль якості", "Процес замовлень і пакування"] },
    { name: "Domowe Obiady", city: "Польща", owner: "Yuliia", role: "Менеджер / операції", menuFocus: "Щоденні обіди та клієнтський процес", work: ["Координація замовлень", "Стандарти сервісу", "Комунікація з кухнею"] },
    { name: "Meridians", city: "Польща", owner: "Yuliia", role: "Менеджер / власник catering-процесу", menuFocus: "Кейтеринг-меню, порції, техкарти, контроль виробництва", work: ["Планування меню", "Документація порцій і рецептів", "Повний контроль від замовлення до доставки"] },
  ],
  es: [
    { name: "Mafia", city: "Polonia", owner: "Daniel", role: "Chef / operaciones de cocina", menuFocus: "Platos europeos, partida caliente, ritmo de servicio", work: ["Producción bajo presión", "Preparación de estación y mise en place", "Consistencia de calidad y emplatado"] },
    { name: "Shashlyk YAN", city: "Polonia", owner: "Daniel", role: "Chef / parrilla y caliente", menuFocus: "Parrilla, carne, salsas, banquetes", work: ["Flujo de parrilla", "Marinados y lógica de porciones", "Preparación por lotes para servicio intenso"] },
    { name: "Dolce-Vita", city: "Polonia", owner: "Daniel", role: "Chef", menuFocus: "Clásicos de cafetería y restaurante", work: ["Producción diaria", "Ejecución de menú", "Planificación de mise en place"] },
    { name: "Domowe Obiady", city: "Polonia", owner: "Daniel", role: "Chef / cocina de producción", menuFocus: "Menús de almuerzo, comfort food, alto volumen", work: ["Rotación diaria de menú", "Porciones con control de coste", "Organización de servicio rápido"] },
    { name: "Mama-Wilda", city: "Polonia", owner: "Daniel", role: "Chef", menuFocus: "Formato casero de restaurante", work: ["Platos calientes", "Sistemas de preparación", "Flujo de servicio"] },
    { name: "Meridians", city: "Polonia", owner: "Daniel", role: "Chef / cocina de catering", menuFocus: "Eventos, bandejas de catering, escala de producción", work: ["Preparación de eventos", "Porciones de banquete", "Coordinación de cocina"] },
    { name: "Kebab-Lavica", city: "Polonia", owner: "Daniel", role: "Producción de cocina", menuFocus: "Fast casual, salsas, preparación, velocidad de servicio", work: ["Montaje de estación de prep", "Flujo de salsas y guarniciones", "Salida rápida bajo carga"] },
    { name: "Fit Food", city: "Polonia", owner: "Yuliia", role: "Manager / calidad y proceso de menú", menuFocus: "Comidas saludables, porciones equilibradas, pedidos", work: ["Lógica de porciones y menú", "Control de calidad", "Proceso de pedidos y packaging"] },
    { name: "Domowe Obiady", city: "Polonia", owner: "Yuliia", role: "Manager / operaciones", menuFocus: "Operación diaria de almuerzos y atención", work: ["Coordinación de pedidos", "Estándares de servicio", "Comunicación con cocina"] },
    { name: "Meridians", city: "Polonia", owner: "Yuliia", role: "Manager / responsable de catering", menuFocus: "Menús de catering, porciones, fichas técnicas, control de producción", work: ["Planificación de menú", "Documentación de porciones y recetas", "Control completo desde pedido hasta entrega"] },
  ],
  fr: [
    { name: "Mafia", city: "Pologne", owner: "Daniel", role: "Chef / operations cuisine", menuFocus: "Plats europeens, chaud, rythme de service", work: ["Production sous pression", "Preparation de poste et mise en place", "Regularite qualite et dressage"] },
    { name: "Shashlyk YAN", city: "Pologne", owner: "Daniel", role: "Chef / grill et chaud", menuFocus: "Grill, viande, sauces, banquets", work: ["Flux de grill", "Marinades et logique de portions", "Prep par lots pour service intense"] },
    { name: "Dolce-Vita", city: "Pologne", owner: "Daniel", role: "Chef", menuFocus: "Classiques cafe et restaurant", work: ["Production quotidienne", "Execution du menu", "Planification de la prep"] },
    { name: "Domowe Obiady", city: "Pologne", owner: "Daniel", role: "Chef / cuisine de production", menuFocus: "Menus dejeuner, comfort food, volume eleve", work: ["Rotation quotidienne de menu", "Portions controlees par le cout", "Organisation de service rapide"] },
    { name: "Mama-Wilda", city: "Pologne", owner: "Daniel", role: "Chef", menuFocus: "Format restaurant maison", work: ["Plats chauds", "Systemes de prep", "Flux de service"] },
    { name: "Meridians", city: "Pologne", owner: "Daniel", role: "Chef / cuisine catering", menuFocus: "Evenements, plateaux catering, production a l'echelle", work: ["Preparation d'evenements", "Portions banquet", "Coordination cuisine"] },
    { name: "Kebab-Lavica", city: "Pologne", owner: "Daniel", role: "Production cuisine", menuFocus: "Fast casual, sauces, prep, vitesse de service", work: ["Montage station prep", "Flux sauces et garnitures", "Sortie rapide sous charge"] },
    { name: "Fit Food", city: "Pologne", owner: "Yuliia", role: "Manager / qualite et process menu", menuFocus: "Repas healthy, portions equilibrees, operations de commandes", work: ["Logique de portions et menu", "Controle qualite", "Process commandes et packaging"] },
    { name: "Domowe Obiady", city: "Pologne", owner: "Yuliia", role: "Manager / operations", menuFocus: "Operations dejeuner et parcours client", work: ["Coordination des commandes", "Standards de service", "Communication cuisine"] },
    { name: "Meridians", city: "Pologne", owner: "Yuliia", role: "Manager / responsable catering", menuFocus: "Menus catering, portions, fiches techniques, controle production", work: ["Planification menu", "Documentation portions et recettes", "Controle complet de la commande a la livraison"] },
  ],
  de: [
    { name: "Mafia", city: "Polen", owner: "Daniel", role: "Chef / Kuchenoperations", menuFocus: "Europaische Gerichte, Warmposten, Servicerhythmus", work: ["Produktion unter Druck", "Stationsvorbereitung und Mise en place", "Konstante Qualitat und Anrichten"] },
    { name: "Shashlyk YAN", city: "Polen", owner: "Daniel", role: "Chef / Grill und Warmposten", menuFocus: "Grill, Fleisch, Saucen, Bankette", work: ["Grill-Workflow", "Marinaden und Portionslogik", "Batch Prep fur intensiven Service"] },
    { name: "Dolce-Vita", city: "Polen", owner: "Daniel", role: "Chef", menuFocus: "Cafe- und Restaurantklassiker", work: ["Tagliche Produktion", "Menuausfuhrung", "Prep-Planung"] },
    { name: "Domowe Obiady", city: "Polen", owner: "Daniel", role: "Chef / Produktionskuche", menuFocus: "Lunchmenus, Comfort Food, hohes Volumen", work: ["Tagliche Menuration", "Kostenbewusste Portionen", "Schnelle Serviceorganisation"] },
    { name: "Mama-Wilda", city: "Polen", owner: "Daniel", role: "Chef", menuFocus: "Hauslicher Restaurantstil", work: ["Warme Gerichte", "Prep-Systeme", "Service Flow"] },
    { name: "Meridians", city: "Polen", owner: "Daniel", role: "Chef / Cateringkuche", menuFocus: "Events, Cateringplatten, Produktionsskalierung", work: ["Event-Prep", "Bankettportionen", "Kuchenkoordination"] },
    { name: "Kebab-Lavica", city: "Polen", owner: "Daniel", role: "Kuchenproduktion", menuFocus: "Fast casual, Saucen, Prep, Servicegeschwindigkeit", work: ["Prep-Station Setup", "Saucen- und Garniturenflow", "Schnelle Ausgabe unter Last"] },
    { name: "Fit Food", city: "Polen", owner: "Yuliia", role: "Managerin / Qualitat und Menuprozess", menuFocus: "Healthy Meals, balancierte Portionen, Bestellablaufe", work: ["Portions- und Menulogik", "Qualitatskontrolle", "Bestell- und Packagingprozess"] },
    { name: "Domowe Obiady", city: "Polen", owner: "Yuliia", role: "Managerin / Operations", menuFocus: "Tagliche Lunch-Operations und Kundenablauf", work: ["Bestellkoordination", "Servicestandards", "Kuchenkommunikation"] },
    { name: "Meridians", city: "Polen", owner: "Yuliia", role: "Managerin / Cateringprozess", menuFocus: "Cateringmenus, Portionen, technische Karten, Produktionskontrolle", work: ["Menuplanung", "Portions- und Rezeptdokumentation", "Kontrolle vom Auftrag bis zur Lieferung"] },
  ],
};

export const localizedGrowthContent: Record<Language, GrowthContent> = {
  en: {
    proof: [
      { value: "10+ years", label: "professional kitchen experience" },
      { value: "50+ years", label: "Spanish hospitality advisory experience" },
      { value: "Menu + cost", label: "prep, margin, training and launch logic" },
      { value: "Costa del Sol", label: "restaurants, catering and villa hospitality" },
    ],
    problem: {
      label: "Operational risk",
      title: "Most menu launches fail in operations, not in ideas.",
      copy: "A menu can look strong on paper and still fail when the kitchen cannot prep it, price it, plate it or repeat it under seasonal pressure. We design for the service reality first.",
    },
    advisor: {
      label: "Senior Spanish advisor",
      title: "Local restaurant ownership experience, used carefully and honestly.",
      copy: "Y&D can work with a senior Spanish hospitality advisor who spent more than five decades around restaurant ownership and operations in Barcelona, Mallorca and Ibiza. Until public consent is confirmed, we present this as advisory depth rather than a named public biography.",
      note: "Generated team imagery on this site is illustrative brand photography. Real names, photos and restaurant lists will be published only after approval.",
      stats: [
        { value: "50+ years", label: "restaurant ownership and operating perspective" },
        { value: "Barcelona", label: "urban restaurant market experience" },
        { value: "Mallorca / Ibiza", label: "seasonal island hospitality context" },
      ],
    },
    turnkey: {
      label: "From idea to service",
      title: "A complete restaurant, cafe or villa hospitality launch system.",
      copy: "The work can start before the first dish is tested and continue through opening correction, so owners are not left with only a beautiful menu document.",
      items: [
        { title: "Concept and guest logic", copy: "Position the offer around guest demand, average check, service style and kitchen reality." },
        { title: "Menu engineering", copy: "Build dish categories, position count, cost logic, prep overlap, upsell and dietary coverage." },
        { title: "Kitchen operating system", copy: "Translate the menu into prep lists, portion standards, equipment rhythm and service flow." },
        { title: "Team launch support", copy: "Prepare training notes, opening corrections and a practical checklist for the first weeks of service." },
      ],
    },
    foreignOwners: {
      label: "International owners in Spain",
      title: "Built for owners who need Spanish-market hospitality support without losing control.",
      copy: "Spain attracts restaurant buyers, villa operators and hospitality investors from across Europe. The offer should speak directly to people opening or relaunching in Spain, not only to local chefs.",
      markets: [
        { market: "UK / Ireland", copy: "Clear launch documentation, margin control and villa/catering formats for English-speaking owners." },
        { market: "France / Belgium", copy: "French-Spanish hospitality perspective, premium guest expectations and service discipline." },
        { market: "Germany / Netherlands", copy: "Structured operating logic, cost transparency, checklists and reliable repeatable service." },
      ],
    },
    audiences: {
      label: "Who this is for",
      title: "Three high-value hospitality segments, three different operating risks.",
      items: [
        { title: "Restaurants & Cafes", copy: "For owners opening or relaunching a venue and needing menu, kitchen flow and team readiness before service starts.", cta: "Plan a venue launch" },
        { title: "Villas & Private Dining", copy: "For villa owners and private chefs serving international guests who expect premium service without restaurant infrastructure.", cta: "Design private dining" },
        { title: "Catering Teams", copy: "For event and catering businesses scaling operations, transport, prep lists and consistent portions.", cta: "Scale catering operations" },
      ],
    },
    deliverables: {
      label: "What you receive",
      title: "The materials that turn a menu into a working kitchen system.",
      items: ["Menu architecture", "Costing logic", "Prep and service flow", "Tech-card direction", "Portion standards", "Training notes", "Launch correction checklist"],
    },
    riskAudit: {
      label: "Menu profit audit",
      title: "Before creating dishes, we check what can break your margin or service.",
      items: ["Equipment limits", "Staff level", "Storage capacity", "Supplier availability", "Target guest", "Average check", "Service speed"],
    },
    portfolioFilters: { all: "All" },
    packagesCta: "Discuss this package",
    recommendedLabel: "Most requested",
    contactBrief: {
      title: "Start with a short brief.",
      copy: "Send the essentials and we will reply on WhatsApp with the next step.",
      nameLabel: "Name",
      contactLabel: "Email or WhatsApp",
      typeLabel: "What are you looking for?",
      options: ["Restaurant", "Villa", "Catering", "Other"],
      submit: "Send brief on WhatsApp",
    },
  },
  uk: {
    proof: [
      { value: "10+ років", label: "досвіду професійної кухні" },
      { value: "50+ років", label: "іспанського hospitality-досвіду в advisory" },
      { value: "Меню + цифри", label: "заготовки, маржа, навчання і запуск" },
      { value: "Costa del Sol", label: "ресторани, кейтеринг і villa hospitality" },
    ],
    problem: {
      label: "Операційний ризик",
      title: "Більшість запусків меню ламається не в ідеях, а в операціях.",
      copy: "Меню може виглядати сильним на папері, але провалитися, якщо кухня не може його готувати, рахувати, видавати і повторювати під сезонним навантаженням. Ми спочатку проєктуємо під реальний сервіс.",
    },
    advisor: {
      label: "Senior Spanish advisor",
      title: "Локальний досвід ресторанного власника, поданий чесно.",
      copy: "Y&D може працювати з досвідченим іспанським hospitality advisor, який понад п'ять десятиліть був пов'язаний з ресторанним бізнесом у Барселоні, на Майорці та Ібіці. До публічного погодження ми показуємо це як advisory depth, а не як відкриту біографію з іменем.",
      note: "Згенеровані командні візуали на сайті є бренд-ілюстрацією. Реальні імена, фото та список ресторанів публікуються тільки після згоди.",
      stats: [
        { value: "50+ років", label: "погляду власника та оператора ресторанів" },
        { value: "Barcelona", label: "досвід міського ресторанного ринку" },
        { value: "Mallorca / Ibiza", label: "контекст сезонного island hospitality" },
      ],
    },
    turnkey: {
      label: "Від ідеї до сервісу",
      title: "Повна система запуску ресторану, кафе або villa hospitality.",
      copy: "Робота може починатися ще до тесту першої страви і продовжуватися через корекцію відкриття, щоб власник не залишився лише з красивим документом меню.",
      items: [
        { title: "Концепція і логіка гостя", copy: "Позиціонування оферу під попит, середній чек, стиль сервісу і реальність кухні." },
        { title: "Menu engineering", copy: "Категорії, кількість позицій, собівартість, спільні заготовки, upsell і dietary logic." },
        { title: "Операційна система кухні", copy: "Переклад меню в prep-листи, стандарти порцій, ритм обладнання і потік сервісу." },
        { title: "Підтримка запуску команди", copy: "Нотатки для навчання, корекції відкриття і practical checklist на перші тижні." },
      ],
    },
    foreignOwners: {
      label: "International owners in Spain",
      title: "Для власників, яким потрібна підтримка іспанського ринку без втрати контролю.",
      copy: "Іспанія приваблює restaurant buyers, villa operators та hospitality investors з Європи. Офер має говорити не тільки до локальних шефів, а й до власників, які відкривають або перезапускають бізнес в Іспанії.",
      markets: [
        { market: "UK / Ireland", copy: "Документація запуску, контроль маржі та villa/catering формати для англомовних власників." },
        { market: "France / Belgium", copy: "Французько-іспанський hospitality-погляд, преміальні очікування гостей і дисципліна сервісу." },
        { market: "Germany / Netherlands", copy: "Структурна операційна логіка, прозорість витрат, checklists і стабільний повторюваний сервіс." },
      ],
    },
    audiences: {
      label: "Для кого",
      title: "Три сегменти з різними операційними ризиками.",
      items: [
        { title: "Restaurants & Cafes", copy: "Для власників, які відкривають або перезапускають заклад і потребують меню, kitchen flow та готової команди.", cta: "Plan a venue launch" },
        { title: "Villas & Private Dining", copy: "Для власників вілл і private chefs, які працюють з міжнародними гостями преміум-рівня.", cta: "Design private dining" },
        { title: "Catering Teams", copy: "Для event і catering команд, які масштабують prep, транспорт, порції та стабільну видачу.", cta: "Scale catering operations" },
      ],
    },
    deliverables: {
      label: "Що ви отримуєте",
      title: "Матеріали, які перетворюють меню на робочу систему кухні.",
      items: ["Архітектура меню", "Логіка собівартості", "Потік заготовок і сервісу", "Напрям техкарт", "Стандарти порцій", "Нотатки для навчання", "Checklist корекцій запуску"],
    },
    riskAudit: {
      label: "Аудит прибутковості меню",
      title: "Перед розробкою страв ми перевіряємо, що може зламати маржу або сервіс.",
      items: ["Обмеження обладнання", "Рівень команди", "Склад і зберігання", "Наявність постачальників", "Цільовий гість", "Середній чек", "Швидкість видачі"],
    },
    portfolioFilters: { all: "Усі" },
    packagesCta: "Обговорити пакет",
    recommendedLabel: "Найчастіше обирають",
    contactBrief: {
      title: "Почніть з короткого brief.",
      copy: "Надішліть основне, і ми відповімо у WhatsApp з наступним кроком.",
      nameLabel: "Ім'я",
      contactLabel: "Email або WhatsApp",
      typeLabel: "Що вам потрібно?",
      options: ["Restaurant", "Villa", "Catering", "Other"],
      submit: "Send brief on WhatsApp",
    },
  },
  es: {
    proof: [
      { value: "10+ años", label: "experiencia en cocinas profesionales" },
      { value: "50+ años", label: "experiencia española en hospitality advisory" },
      { value: "Menú + coste", label: "prep, margen, formación y lógica de apertura" },
      { value: "Costa del Sol", label: "restaurantes, catering y villa hospitality" },
    ],
    problem: {
      label: "Riesgo operativo",
      title: "La mayoría de lanzamientos de menú fallan en operaciones, no en ideas.",
      copy: "Un menú puede verse fuerte en papel y fallar si la cocina no puede prepararlo, costearlo, emplatarlo o repetirlo bajo presión de temporada. Diseñamos primero para la realidad del servicio.",
    },
    advisor: {
      label: "Senior Spanish advisor",
      title: "Experiencia local de propietario hostelero, presentada con cuidado.",
      copy: "Y&D puede trabajar con un asesor español senior de hospitality con más de cinco décadas alrededor de propiedad y operaciones de restaurantes en Barcelona, Mallorca e Ibiza. Hasta tener consentimiento público, lo presentamos como profundidad advisory, no como biografía pública con nombre.",
      note: "La imagen de equipo generada en esta web es una fotografía de marca ilustrativa. Nombres reales, fotos y lista de restaurantes se publicarán solo con aprobación.",
      stats: [
        { value: "50+ años", label: "perspectiva de propietario y operador hostelero" },
        { value: "Barcelona", label: "experiencia de mercado urbano" },
        { value: "Mallorca / Ibiza", label: "contexto de hospitality estacional" },
      ],
    },
    turnkey: {
      label: "De idea a servicio",
      title: "Sistema completo para lanzar restaurante, cafetería o villa hospitality.",
      copy: "El trabajo puede empezar antes de probar el primer plato y continuar durante la corrección de apertura, para que el propietario no se quede solo con un documento bonito de menú.",
      items: [
        { title: "Concepto y lógica del cliente", copy: "Posicionar la oferta según demanda, ticket medio, estilo de servicio y realidad de cocina." },
        { title: "Menu engineering", copy: "Categorías, número de posiciones, costes, prep compartida, upsell y cobertura dietary." },
        { title: "Sistema operativo de cocina", copy: "Convertir el menú en prep lists, estándares de porción, ritmo de maquinaria y flujo de servicio." },
        { title: "Soporte de lanzamiento", copy: "Notas de formación, correcciones de apertura y checklist práctico para las primeras semanas." },
      ],
    },
    foreignOwners: {
      label: "International owners in Spain",
      title: "Para propietarios que necesitan apoyo del mercado español sin perder control.",
      copy: "España atrae compradores de restaurantes, villa operators e inversores hospitality de toda Europa. La oferta debe hablar directamente a quienes abren o relanzan en España, no solo a chefs locales.",
      markets: [
        { market: "UK / Ireland", copy: "Documentación clara de apertura, control de margen y formatos villa/catering para propietarios angloparlantes." },
        { market: "France / Belgium", copy: "Perspectiva franco-española de hospitality, expectativas premium y disciplina de servicio." },
        { market: "Germany / Netherlands", copy: "Lógica operativa estructurada, transparencia de costes, checklists y servicio repetible." },
      ],
    },
    audiences: {
      label: "Para quién",
      title: "Tres segmentos premium con riesgos operativos distintos.",
      items: [
        { title: "Restaurants & Cafes", copy: "Para propietarios que abren o relanzan un local y necesitan menú, flujo de cocina y equipo listo antes del servicio.", cta: "Plan a venue launch" },
        { title: "Villas & Private Dining", copy: "Para villa owners y private chefs que atienden a huéspedes internacionales con expectativas premium.", cta: "Design private dining" },
        { title: "Catering Teams", copy: "Para equipos de eventos y catering que escalan operaciones, transporte, prep lists y porciones constantes.", cta: "Scale catering operations" },
      ],
    },
    deliverables: {
      label: "Qué recibes",
      title: "Materiales que convierten un menú en un sistema de cocina funcional.",
      items: ["Arquitectura de menú", "Lógica de costes", "Flujo de prep y servicio", "Dirección de fichas técnicas", "Estándares de porción", "Notas de formación", "Checklist de corrección de lanzamiento"],
    },
    riskAudit: {
      label: "Auditoría de rentabilidad del menú",
      title: "Antes de crear platos, revisamos qué puede romper tu margen o servicio.",
      items: ["Límites de equipamiento", "Nivel del equipo", "Capacidad de almacén", "Disponibilidad de proveedores", "Cliente objetivo", "Ticket medio", "Velocidad de servicio"],
    },
    portfolioFilters: { all: "Todo" },
    packagesCta: "Hablar de este paquete",
    recommendedLabel: "Más solicitado",
    contactBrief: {
      title: "Empieza con un brief corto.",
      copy: "Envía lo esencial y responderemos por WhatsApp con el siguiente paso.",
      nameLabel: "Nombre",
      contactLabel: "Email o WhatsApp",
      typeLabel: "Qué estás buscando?",
      options: ["Restaurant", "Villa", "Catering", "Other"],
      submit: "Send brief on WhatsApp",
    },
  },
  fr: {
    proof: [
      { value: "10+ ans", label: "experience en cuisines professionnelles" },
      { value: "50+ ans", label: "experience espagnole en hospitality advisory" },
      { value: "Menu + couts", label: "prep, marge, formation et logique de lancement" },
      { value: "Costa del Sol", label: "restaurants, catering et villa hospitality" },
    ],
    problem: {
      label: "Risque operationnel",
      title: "La plupart des lancements de menus echouent en operations, pas dans l'idee.",
      copy: "Un menu peut etre fort sur le papier et echouer si la cuisine ne peut pas le preparer, le chiffrer, le dresser ou le repeter sous pression saisonniere. Nous concevons d'abord pour la realite du service.",
    },
    advisor: {
      label: "Senior Spanish advisor",
      title: "Experience locale de proprietaire restaurateur, presentee avec prudence.",
      copy: "Y&D peut travailler avec un conseiller espagnol senior en hospitality, avec plus de cinq decennies autour de la propriete et des operations de restaurants a Barcelone, Majorque et Ibiza. Jusqu'a consentement public, nous le presentons comme une profondeur advisory, pas comme une biographie publique nommee.",
      note: "L'image d'equipe generee sur ce site est une photographie de marque illustrative. Les vrais noms, photos et listes de restaurants seront publies uniquement apres accord.",
      stats: [
        { value: "50+ ans", label: "perspective de proprietaire et operateur restaurant" },
        { value: "Barcelona", label: "experience du marche urbain" },
        { value: "Mallorca / Ibiza", label: "contexte hospitality saisonnier" },
      ],
    },
    turnkey: {
      label: "De l'idee au service",
      title: "Systeme complet pour lancer restaurant, cafe ou villa hospitality.",
      copy: "Le travail peut commencer avant le premier test plat et continuer pendant les corrections d'ouverture, afin que le proprietaire ne reste pas avec un simple beau document de menu.",
      items: [
        { title: "Concept et logique client", copy: "Positionner l'offre selon la demande, le ticket moyen, le style de service et la realite cuisine." },
        { title: "Menu engineering", copy: "Construire categories, nombre de positions, couts, prep partagee, upsell et couverture dietary." },
        { title: "Systeme operationnel cuisine", copy: "Transformer le menu en prep lists, standards de portions, rythme materiel et flux de service." },
        { title: "Support lancement equipe", copy: "Preparer notes de formation, corrections d'ouverture et checklist pratique pour les premieres semaines." },
      ],
    },
    foreignOwners: {
      label: "International owners in Spain",
      title: "Pour les proprietaires qui veulent le marche espagnol sans perdre le controle.",
      copy: "L'Espagne attire acheteurs de restaurants, villa operators et investisseurs hospitality de toute l'Europe. L'offre doit parler directement a ceux qui ouvrent ou relancent en Espagne, pas seulement aux chefs locaux.",
      markets: [
        { market: "UK / Ireland", copy: "Documentation claire de lancement, controle de marge et formats villa/catering pour proprietaires anglophones." },
        { market: "France / Belgium", copy: "Perspective franco-espagnole hospitality, attentes premium et discipline de service." },
        { market: "Germany / Netherlands", copy: "Logique operationnelle structuree, transparence des couts, checklists et service repetable." },
      ],
    },
    audiences: {
      label: "Pour qui",
      title: "Trois segments premium avec des risques operationnels differents.",
      items: [
        { title: "Restaurants & Cafes", copy: "Pour proprietaires qui ouvrent ou relancent un lieu et veulent menu, flux cuisine et equipe prete avant le service.", cta: "Plan a venue launch" },
        { title: "Villas & Private Dining", copy: "Pour proprietaires de villas et private chefs servant des invites internationaux premium.", cta: "Design private dining" },
        { title: "Catering Teams", copy: "Pour equipes evenementielles et catering qui scalent prep, transport, portions et regularite.", cta: "Scale catering operations" },
      ],
    },
    deliverables: {
      label: "Ce que vous recevez",
      title: "Les materiels qui transforment un menu en systeme cuisine fonctionnel.",
      items: ["Architecture menu", "Logique de couts", "Flux prep et service", "Direction fiches techniques", "Standards de portions", "Notes de formation", "Checklist correction lancement"],
    },
    riskAudit: {
      label: "Audit rentabilite menu",
      title: "Avant de creer des plats, nous verifions ce qui peut casser votre marge ou votre service.",
      items: ["Limites materiel", "Niveau equipe", "Capacite stockage", "Disponibilite fournisseurs", "Client cible", "Ticket moyen", "Vitesse de service"],
    },
    portfolioFilters: { all: "Tout" },
    packagesCta: "Discuter cette offre",
    recommendedLabel: "Le plus demande",
    contactBrief: {
      title: "Commencez par un brief court.",
      copy: "Envoyez l'essentiel et nous repondrons sur WhatsApp avec la prochaine etape.",
      nameLabel: "Nom",
      contactLabel: "Email ou WhatsApp",
      typeLabel: "Que recherchez-vous?",
      options: ["Restaurant", "Villa", "Catering", "Other"],
      submit: "Send brief on WhatsApp",
    },
  },
  de: {
    proof: [
      { value: "10+ Jahre", label: "Erfahrung in professionellen Kuchen" },
      { value: "50+ Jahre", label: "spanische Hospitality-Advisory-Erfahrung" },
      { value: "Menu + Kosten", label: "Prep, Marge, Training und Launch-Logik" },
      { value: "Costa del Sol", label: "Restaurants, Catering und Villa Hospitality" },
    ],
    problem: {
      label: "Operatives Risiko",
      title: "Die meisten Menulaunches scheitern an Operations, nicht an Ideen.",
      copy: "Ein Menu kann auf Papier stark wirken und trotzdem scheitern, wenn die Kuche es unter saisonalem Druck nicht vorbereiten, kalkulieren, anrichten oder wiederholen kann. Wir planen zuerst fur die Servicerealitat.",
    },
    advisor: {
      label: "Senior Spanish advisor",
      title: "Lokale Restaurant-Eigentumererfahrung, ehrlich und vorsichtig genutzt.",
      copy: "Y&D kann mit einem spanischen Senior-Hospitality-Advisor arbeiten, der mehr als funf Jahrzehnte rund um Restaurantbesitz und Operations in Barcelona, Mallorca und Ibiza verbracht hat. Bis zur offentlichen Zustimmung beschreiben wir das als Advisory-Tiefe, nicht als namentliche Biografie.",
      note: "Das generierte Teambild auf dieser Website ist illustrative Markenfotografie. Reale Namen, Fotos und Restaurantlisten werden nur nach Freigabe veroffentlicht.",
      stats: [
        { value: "50+ Jahre", label: "Perspektive aus Restaurantbesitz und Betrieb" },
        { value: "Barcelona", label: "Erfahrung im urbanen Restaurantmarkt" },
        { value: "Mallorca / Ibiza", label: "saisonaler Hospitality-Kontext" },
      ],
    },
    turnkey: {
      label: "Von Idee zu Service",
      title: "Komplettes System fur Restaurant-, Cafe- oder Villa-Hospitality-Launches.",
      copy: "Die Arbeit kann vor dem ersten Gerichtetest beginnen und durch die Opening-Korrektur weiterlaufen, damit Eigentumer nicht nur ein schones Menudokument erhalten.",
      items: [
        { title: "Konzept und Gastlogik", copy: "Angebot nach Nachfrage, Durchschnittsbon, Servicestil und Kuchenrealitat positionieren." },
        { title: "Menu Engineering", copy: "Kategorien, Positionsanzahl, Kostenlogik, geteilte Prep, Upsell und Dietary Coverage bauen." },
        { title: "Kuchenbetriebssystem", copy: "Menu in Prep-Listen, Portionsstandards, Equipment-Rhythmus und Service Flow ubersetzen." },
        { title: "Team Launch Support", copy: "Trainingsnotizen, Opening-Korrekturen und praktische Checkliste fur die ersten Wochen vorbereiten." },
      ],
    },
    foreignOwners: {
      label: "International owners in Spain",
      title: "Fur Eigentumer, die spanische Markthilfe brauchen, ohne Kontrolle zu verlieren.",
      copy: "Spanien zieht Restaurantkaufer, Villa Operators und Hospitality-Investoren aus ganz Europa an. Das Angebot muss direkt zu Menschen sprechen, die in Spanien eroffnen oder einen Relaunch planen, nicht nur zu lokalen Chefs.",
      markets: [
        { market: "UK / Ireland", copy: "Klare Launch-Dokumentation, Margenkontrolle und Villa/Catering-Formate fur englischsprachige Eigentumer." },
        { market: "France / Belgium", copy: "Franzosisch-spanische Hospitality-Perspektive, Premium-Gasterwartungen und Servicedisziplin." },
        { market: "Germany / Netherlands", copy: "Strukturierte Operationslogik, Kostentransparenz, Checklisten und wiederholbarer Service." },
      ],
    },
    audiences: {
      label: "Fur wen",
      title: "Drei Premium-Segmente mit unterschiedlichen operativen Risiken.",
      items: [
        { title: "Restaurants & Cafes", copy: "Fur Eigentumer, die einen Standort eroffnen oder erneuern und Menu, Kuchenflow und Team-Readiness brauchen.", cta: "Plan a venue launch" },
        { title: "Villas & Private Dining", copy: "Fur Villa Owners und Private Chefs mit internationalen Premium-Gasten.", cta: "Design private dining" },
        { title: "Catering Teams", copy: "Fur Event- und Catering-Teams, die Prep, Transport, Portionen und konstante Ausgabe skalieren.", cta: "Scale catering operations" },
      ],
    },
    deliverables: {
      label: "Was Sie erhalten",
      title: "Materialien, die ein Menu in ein funktionierendes Kuchensystem verwandeln.",
      items: ["Menuarchitektur", "Kostenlogik", "Prep- und Service Flow", "Richtung fur technische Karten", "Portionsstandards", "Trainingsnotizen", "Launch-Korrektur-Checklist"],
    },
    riskAudit: {
      label: "Menu Profit Audit",
      title: "Bevor wir Gerichte entwickeln, prufen wir, was Marge oder Service brechen kann.",
      items: ["Equipment-Grenzen", "Teamniveau", "Lagerkapazitat", "Lieferantenverfugbarkeit", "Zielgast", "Durchschnittsbon", "Servicegeschwindigkeit"],
    },
    portfolioFilters: { all: "Alle" },
    packagesCta: "Dieses Paket besprechen",
    recommendedLabel: "Am meisten gefragt",
    contactBrief: {
      title: "Starten Sie mit einem kurzen Brief.",
      copy: "Senden Sie das Wesentliche, und wir antworten auf WhatsApp mit dem nachsten Schritt.",
      nameLabel: "Name",
      contactLabel: "Email oder WhatsApp",
      typeLabel: "Wonach suchen Sie?",
      options: ["Restaurant", "Villa", "Catering", "Other"],
      submit: "Send brief on WhatsApp",
    },
  },
};

export const localizedWorkExamples: Record<Language, WorkExample[]> = {
  en: [
    { title: "Beachfront restaurant", location: "Marbella", result: "Concept menu sample - structured for food cost, prep overlap and fast service.", image: image("photo-1559339352-11d035aa65de"), tag: "Restaurant launch" },
    { title: "Private villa dining", location: "Costa del Sol", result: "Concept menu sample - breakfast, lunch and dinner logic for international villa guests.", image: image("photo-1551218808-94e220e084d2"), tag: "Villa hospitality" },
    { title: "Event catering operation", location: "Andalusia", result: "Concept menu sample - batch prep, transport, plating and portion control.", image: image("photo-1555244162-803834f70033"), tag: "Catering system" },
  ],
  uk: [
    { title: "Beachfront restaurant", location: "Marbella", result: "Concept menu sample - структура під food cost, спільні заготовки і швидкий сервіс.", image: image("photo-1559339352-11d035aa65de"), tag: "Restaurant launch" },
    { title: "Private villa dining", location: "Costa del Sol", result: "Concept menu sample - breakfast, lunch and dinner логіка для міжнародних гостей вілли.", image: image("photo-1551218808-94e220e084d2"), tag: "Villa hospitality" },
    { title: "Event catering operation", location: "Andalusia", result: "Concept menu sample - batch prep, транспорт, подача і контроль порцій.", image: image("photo-1555244162-803834f70033"), tag: "Catering system" },
  ],
  es: [
    { title: "Beachfront restaurant", location: "Marbella", result: "Concept menu sample - estructurado para food cost, prep compartida y servicio rápido.", image: image("photo-1559339352-11d035aa65de"), tag: "Restaurant launch" },
    { title: "Private villa dining", location: "Costa del Sol", result: "Concept menu sample - lógica breakfast, lunch and dinner para huéspedes internacionales.", image: image("photo-1551218808-94e220e084d2"), tag: "Villa hospitality" },
    { title: "Event catering operation", location: "Andalusia", result: "Concept menu sample - batch prep, transporte, emplatado y control de porciones.", image: image("photo-1555244162-803834f70033"), tag: "Catering system" },
  ],
  fr: [
    { title: "Beachfront restaurant", location: "Marbella", result: "Concept menu sample - structure pour food cost, prep partagee et service rapide.", image: image("photo-1559339352-11d035aa65de"), tag: "Restaurant launch" },
    { title: "Private villa dining", location: "Costa del Sol", result: "Concept menu sample - logique breakfast, lunch and dinner pour invites internationaux.", image: image("photo-1551218808-94e220e084d2"), tag: "Villa hospitality" },
    { title: "Event catering operation", location: "Andalusia", result: "Concept menu sample - batch prep, transport, dressage et controle portions.", image: image("photo-1555244162-803834f70033"), tag: "Catering system" },
  ],
  de: [
    { title: "Beachfront restaurant", location: "Marbella", result: "Concept menu sample - strukturiert fur Food Cost, geteilte Prep und schnellen Service.", image: image("photo-1559339352-11d035aa65de"), tag: "Restaurant launch" },
    { title: "Private villa dining", location: "Costa del Sol", result: "Concept menu sample - Breakfast, Lunch and Dinner Logik fur internationale Villengaste.", image: image("photo-1551218808-94e220e084d2"), tag: "Villa hospitality" },
    { title: "Event catering operation", location: "Andalusia", result: "Concept menu sample - Batch Prep, Transport, Anrichten und Portionskontrolle.", image: image("photo-1555244162-803834f70033"), tag: "Catering system" },
  ],
};

export const localizedPackages: Record<Language, Package[]> = {
  en: [
    { name: "Menu & Kitchen Audit", scope: "Any scale, focused problem", oldPrice: "from €1,800", foundingPrice: "from €1,500", offer: "Founding client pricing - first 5 projects only", summary: "A focused diagnostic for owners who need to see where menu margin, waste or service speed is leaking.", includes: ["Menu and kitchen flow review", "Food-cost and operational risk map", "Priority fixes for margin and service", "Clear next-step recommendation"], cta: "Get a Custom Quote" },
    { name: "Small Kitchen Launch", scope: "Up to 40-50 seats", oldPrice: "from €15,000", foundingPrice: "from €12,500", offer: "Founding client pricing - first 5 projects only", summary: "A practical launch system for compact restaurants, cafes and private dining operations.", includes: ["Menu architecture and dish direction", "Prep flow and station logic", "Basic team training notes", "Launch correction checklist"], cta: "Get a Custom Quote" },
    { name: "Full Kitchen Launch", scope: "50-120 seats", oldPrice: "from €35,000", foundingPrice: "from €29,000", offer: "Founding client pricing - first 5 projects only", summary: "A full pre-opening engagement for owners who need menu, kitchen systems and team readiness.", includes: ["Concept and menu engineering", "Kitchen flow and recipe-card direction", "Hiring/training support materials", "Soft-launch support plan"], cta: "Get a Custom Quote", recommended: true },
    { name: "Large-Scale Launch", scope: "120+ seats, including 250-300-seat projects", oldPrice: "from €60,000", foundingPrice: "starting from €52,000", offer: "Custom proposal after scope review", summary: "For large venues, multi-station kitchens, banquet or multi-concept projects where the real scope must be sized carefully.", includes: ["Multi-station kitchen operating map", "Extended menu and production logic", "Training system for larger teams", "Staged rollout and on-site support plan"], cta: "Request a Custom Proposal" },
  ],
  uk: [
    { name: "Menu & Kitchen Audit", scope: "Будь-який масштаб, точкова задача", oldPrice: "from €1,800", foundingPrice: "from €1,500", offer: "Founding client pricing - first 5 projects only", summary: "Діагностика для власників, яким потрібно знайти втрати маржі, waste або швидкості сервісу.", includes: ["Review меню і kitchen flow", "Карта food-cost та операційних ризиків", "Пріоритетні fixes для маржі і сервісу", "Чіткий next-step план"], cta: "Get a Custom Quote" },
    { name: "Small Kitchen Launch", scope: "До 40-50 місць", oldPrice: "from €15,000", foundingPrice: "from €12,500", offer: "Founding client pricing - first 5 projects only", summary: "Система запуску для компактних ресторанів, кафе і private dining.", includes: ["Архітектура меню і напрям страв", "Prep flow і логіка станцій", "Базові training notes для команди", "Checklist корекцій запуску"], cta: "Get a Custom Quote" },
    { name: "Full Kitchen Launch", scope: "50-120 місць", oldPrice: "from €35,000", foundingPrice: "from €29,000", offer: "Founding client pricing - first 5 projects only", summary: "Повний pre-opening для власників, яким потрібні меню, системи кухні і готовність команди.", includes: ["Concept and menu engineering", "Kitchen flow і напрям recipe cards", "Матеріали для hiring/training support", "Soft-launch support plan"], cta: "Get a Custom Quote", recommended: true },
    { name: "Large-Scale Launch", scope: "120+ місць, включно з 250-300", oldPrice: "from €60,000", foundingPrice: "starting from €52,000", offer: "Custom proposal after scope review", summary: "Для великих закладів, кількох цехів, банкетів або multi-concept проектів.", includes: ["Multi-station kitchen operating map", "Розширена логіка меню і production", "Training system для великих команд", "Staged rollout і on-site support plan"], cta: "Request a Custom Proposal" },
  ],
  es: [
    { name: "Menu & Kitchen Audit", scope: "Cualquier escala, problema puntual", oldPrice: "from €1,800", foundingPrice: "from €1,500", offer: "Founding client pricing - first 5 projects only", summary: "Diagnóstico para propietarios que necesitan encontrar fugas de margen, waste o velocidad de servicio.", includes: ["Review de menú y kitchen flow", "Mapa de riesgo food-cost y operativo", "Fixes prioritarios para margen y servicio", "Recomendación clara del siguiente paso"], cta: "Get a Custom Quote" },
    { name: "Small Kitchen Launch", scope: "Hasta 40-50 plazas", oldPrice: "from €15,000", foundingPrice: "from €12,500", offer: "Founding client pricing - first 5 projects only", summary: "Sistema de lanzamiento para restaurantes compactos, cafeterías y private dining.", includes: ["Arquitectura de menú y dirección de platos", "Prep flow y lógica de estaciones", "Notas básicas de formación", "Checklist de corrección de apertura"], cta: "Get a Custom Quote" },
    { name: "Full Kitchen Launch", scope: "50-120 plazas", oldPrice: "from €35,000", foundingPrice: "from €29,000", offer: "Founding client pricing - first 5 projects only", summary: "Pre-opening completo para propietarios que necesitan menú, sistemas de cocina y equipo listo.", includes: ["Concept and menu engineering", "Kitchen flow y dirección de recipe cards", "Materiales de hiring/training support", "Soft-launch support plan"], cta: "Get a Custom Quote", recommended: true },
    { name: "Large-Scale Launch", scope: "120+ plazas, incluidos proyectos de 250-300", oldPrice: "from €60,000", foundingPrice: "starting from €52,000", offer: "Custom proposal after scope review", summary: "Para locales grandes, cocinas multi-estación, banquetes o proyectos multi-concept.", includes: ["Multi-station kitchen operating map", "Lógica extendida de menú y producción", "Training system para equipos grandes", "Staged rollout y on-site support plan"], cta: "Request a Custom Proposal" },
  ],
  fr: [
    { name: "Menu & Kitchen Audit", scope: "Toute echelle, probleme cible", oldPrice: "from €1,800", foundingPrice: "from €1,500", offer: "Founding client pricing - first 5 projects only", summary: "Diagnostic pour proprietaires qui veulent identifier fuites de marge, waste ou vitesse de service.", includes: ["Review menu et kitchen flow", "Carte food-cost et risques operationnels", "Fixes prioritaires pour marge et service", "Recommandation claire next step"], cta: "Get a Custom Quote" },
    { name: "Small Kitchen Launch", scope: "Jusqu'a 40-50 couverts", oldPrice: "from €15,000", foundingPrice: "from €12,500", offer: "Founding client pricing - first 5 projects only", summary: "Systeme de lancement pour restaurants compacts, cafes et private dining.", includes: ["Architecture menu et direction plats", "Prep flow et logique stations", "Notes de formation de base", "Checklist correction lancement"], cta: "Get a Custom Quote" },
    { name: "Full Kitchen Launch", scope: "50-120 couverts", oldPrice: "from €35,000", foundingPrice: "from €29,000", offer: "Founding client pricing - first 5 projects only", summary: "Pre-opening complet pour proprietaires qui veulent menu, systemes cuisine et equipe prete.", includes: ["Concept and menu engineering", "Kitchen flow et direction recipe cards", "Materiels hiring/training support", "Soft-launch support plan"], cta: "Get a Custom Quote", recommended: true },
    { name: "Large-Scale Launch", scope: "120+ couverts, y compris 250-300", oldPrice: "from €60,000", foundingPrice: "starting from €52,000", offer: "Custom proposal after scope review", summary: "Pour grands lieux, cuisines multi-stations, banquet ou projets multi-concept.", includes: ["Multi-station kitchen operating map", "Logique menu et production etendue", "Training system pour grandes equipes", "Staged rollout et on-site support plan"], cta: "Request a Custom Proposal" },
  ],
  de: [
    { name: "Menu & Kitchen Audit", scope: "Jede Grosse, fokussiertes Problem", oldPrice: "from €1,800", foundingPrice: "from €1,500", offer: "Founding client pricing - first 5 projects only", summary: "Diagnose fur Eigentumer, die Margen-, Waste- oder Serviceverluste finden wollen.", includes: ["Menu- und Kitchen-Flow Review", "Food-Cost- und Operations-Risikokarte", "Priorisierte Fixes fur Marge und Service", "Klare Next-step Empfehlung"], cta: "Get a Custom Quote" },
    { name: "Small Kitchen Launch", scope: "Bis 40-50 Sitzplatze", oldPrice: "from €15,000", foundingPrice: "from €12,500", offer: "Founding client pricing - first 5 projects only", summary: "Launch-System fur kompakte Restaurants, Cafes und Private Dining.", includes: ["Menuarchitektur und Gerichterichtung", "Prep Flow und Stationslogik", "Basis-Trainingsnotizen", "Launch-Korrektur-Checklist"], cta: "Get a Custom Quote" },
    { name: "Full Kitchen Launch", scope: "50-120 Sitzplatze", oldPrice: "from €35,000", foundingPrice: "from €29,000", offer: "Founding client pricing - first 5 projects only", summary: "Vollstandiges Pre-opening fur Eigentumer, die Menu, Kuchensysteme und Team-Readiness brauchen.", includes: ["Concept and menu engineering", "Kitchen Flow und Recipe-card Richtung", "Hiring/training support materials", "Soft-launch support plan"], cta: "Get a Custom Quote", recommended: true },
    { name: "Large-Scale Launch", scope: "120+ Sitzplatze, inkl. 250-300", oldPrice: "from €60,000", foundingPrice: "starting from €52,000", offer: "Custom proposal after scope review", summary: "Fur grosse Venues, Multi-Station-Kuchen, Banquet oder Multi-Concept-Projekte.", includes: ["Multi-station kitchen operating map", "Erweiterte Menu- und Produktionslogik", "Training system fur grossere Teams", "Staged rollout und on-site support plan"], cta: "Request a Custom Proposal" },
  ],
};

export const localizedProcessSteps: Record<Language, ProcessStep[]> = {
  en: [
    { title: "Audit", copy: "We review your concept, kitchen limits, staffing and target guest before proposing any menu." },
    { title: "Concept & Menu", copy: "We design a focused menu that fits your positioning, covers, average check and production reality." },
    { title: "Kitchen Systems & Training", copy: "We turn the menu into prep flow, station logic, recipe-card direction and team training notes." },
    { title: "Launch Support", copy: "We support soft launch correction so the team opens with fewer surprises and clearer control." },
  ],
  uk: [
    { title: "Audit", copy: "Перевіряємо концепцію, обмеження кухні, команду і цільового гостя до будь-якого меню." },
    { title: "Concept & Menu", copy: "Створюємо сфокусоване меню під positioning, посадку, середній чек і виробничу реальність." },
    { title: "Kitchen Systems & Training", copy: "Перетворюємо меню у prep flow, логіку станцій, напрям recipe cards і training notes." },
    { title: "Launch Support", copy: "Підтримуємо soft launch correction, щоб команда відкривалась з меншими сюрпризами." },
  ],
  es: [
    { title: "Audit", copy: "Revisamos concepto, límites de cocina, equipo y cliente objetivo antes de proponer un menú." },
    { title: "Concept & Menu", copy: "Diseñamos un menú enfocado que encaja con posicionamiento, plazas, ticket medio y producción real." },
    { title: "Kitchen Systems & Training", copy: "Convertimos el menú en prep flow, lógica de estaciones, recipe-card direction y notas de formación." },
    { title: "Launch Support", copy: "Apoyamos la corrección del soft launch para abrir con menos sorpresas y más control." },
  ],
  fr: [
    { title: "Audit", copy: "Nous verifions concept, limites cuisine, equipe et client cible avant de proposer un menu." },
    { title: "Concept & Menu", copy: "Nous concevons un menu cible pour positionnement, couverts, ticket moyen et realite production." },
    { title: "Kitchen Systems & Training", copy: "Nous transformons le menu en prep flow, logique stations, recipe-card direction et notes formation." },
    { title: "Launch Support", copy: "Nous soutenons les corrections soft launch pour ouvrir avec moins de surprises et plus de controle." },
  ],
  de: [
    { title: "Audit", copy: "Wir prufen Konzept, Kuchengrenzen, Team und Zielgast, bevor wir ein Menu vorschlagen." },
    { title: "Concept & Menu", copy: "Wir entwickeln ein fokussiertes Menu fur Positionierung, Sitzplatze, Durchschnittsbon und Produktion." },
    { title: "Kitchen Systems & Training", copy: "Wir ubersetzen das Menu in Prep Flow, Stationslogik, Recipe-card Richtung und Training Notes." },
    { title: "Launch Support", copy: "Wir unterstutzen Soft-launch Korrektur, damit das Team mit weniger Uberraschungen startet." },
  ],
};
