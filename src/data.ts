export type Language = "en" | "uk" | "es";

type Localized = Record<Language, string>;

export type Workplace = {
  name: string;
  city: string;
  owner: "Daniel" | "Yuliia";
  role: string;
  menuFocus: string;
  work: string[];
};

export type Dish = {
  title: Localized;
  category: Localized;
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
  recommended?: boolean;
};

export type GrowthContent = {
  proof: Array<{ value: string; label: string }>;
  problem: { label: string; title: string; copy: string };
  audiences: { label: string; title: string; items: Array<{ title: string; copy: string }> };
  deliverables: { label: string; title: string; items: string[] };
  riskAudit: { label: string; title: string; items: string[] };
  portfolioFilters: { all: string };
  packagesCta: string;
  recommendedLabel: string;
  contactBrief: { title: string; items: string[] };
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
    nav: { experience: "Experience", portfolio: "Portfolio", menus: "Menus", contact: "Contact" },
    cta: {
      portfolio: "See menu examples",
      book: "Book a 20-minute menu profit review",
      menu: "Build a menu like this",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "Launch a profitable, repeatable kitchen menu in Marbella",
      copy: "We design menus your team can prep, cost, plate and repeat under real service pressure: cafes, restaurants, catering and private villas across Costa del Sol.",
      imageLabel: "Premium restaurant dishes and kitchen work",
      imageAlt: "Chef plating a premium restaurant dish",
      cardOneLabel: "Menu systems",
      cardOneText: "Costing, prep, portions, launch",
      cardTwoText: "Costa del Sol hospitality",
    },
    about: {
      label: "About us",
      title: "Real kitchen work, management discipline and menu thinking.",
      copy: "We are not selling generic menu templates. We build menus around the actual kitchen, team, equipment, service rhythm and business model.",
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
      label: "30-dish portfolio",
      title: "A cinematic food rail for menu direction and service style.",
      copy: "Temporary premium visuals for v1. Replace with real Y&D dishes before public launch for stronger proof.",
      carouselLabel: "Dish portfolio carousel",
    },
    menus: {
      label: "Ready menu examples",
      title: "Menu structures we can build around your real kitchen.",
      copy: "These are authored sample menus that show direction, format and logic. They are not copied client menus or confidential technical documents.",
    },
    process: {
      label: "Process",
      title: "From concept to stable kitchen service.",
      copy: "The goal is not just beautiful dishes. It is a menu your team can prep, cost, plate and repeat.",
    },
    packages: {
      label: "Packages",
      title: "Clear starting points for different launch stages.",
      copy: "Every package is adapted after we understand your concept, equipment, staff level and target guest.",
    },
    confidentiality: {
      title: "We show menu structure, dish direction and public references.",
      copy: "Client recipes, tech cards, costing and internal production documents remain confidential. A strong menu is created for your equipment, suppliers, team, margin, season and guests.",
    },
    contact: { title: "Tell us what you want to launch." },
  },
  uk: {
    nav: { experience: "Досвід", portfolio: "Портфоліо", menus: "Меню", contact: "Контакти" },
    cta: {
      portfolio: "Дивитись приклади меню",
      book: "Записатись на 20-хв. аудит меню",
      menu: "Зібрати таке меню",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "Запустіть прибуткове меню, яке команда може повторювати",
      copy: "Ми створюємо меню, яке команда може готувати, рахувати, видавати і повторювати під реальним навантаженням: кафе, ресторани, кейтеринг і приватні вілли на Costa del Sol.",
      imageLabel: "Преміальні ресторанні страви та робота кухні",
      imageAlt: "Шеф оформлює преміальну ресторанну страву",
      cardOneLabel: "Системи меню",
      cardOneText: "Собівартість, заготовки, порції, запуск",
      cardTwoText: "Hospitality на Costa del Sol",
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
      label: "30 страв",
      title: "Карусель страв для напрямку меню та стилю подачі.",
      copy: "У v1 використані тимчасові premium-візуали. Перед публічним просуванням краще замінити їх на реальні страви Y&D.",
      carouselLabel: "Карусель портфоліо страв",
    },
    menus: {
      label: "Приклади готових меню",
      title: "Структури меню, які можна зібрати під вашу кухню.",
      copy: "Це авторські приклади меню, які показують напрям, формат і логіку. Це не копії клієнтських меню і не закриті технічні документи.",
    },
    process: {
      label: "Процес",
      title: "Від концепції до стабільної роботи кухні.",
      copy: "Ціль не тільки в красивих стравах. Меню має бути таким, щоб команда могла його готувати, рахувати, видавати і повторювати.",
    },
    packages: {
      label: "Пакети",
      title: "Зрозумілі стартові формати для різних етапів запуску.",
      copy: "Кожен пакет адаптується після аналізу концепції, обладнання, рівня команди та цільового гостя.",
    },
    confidentiality: {
      title: "Ми показуємо структуру меню, напрям страв і публічні приклади.",
      copy: "Рецепти клієнтів, техкарти, собівартість і внутрішні виробничі документи залишаються конфіденційними. Сильне меню створюється під ваше обладнання, постачальників, команду, маржу, сезон і гостей.",
    },
    contact: { title: "Розкажіть, що ви хочете запустити." },
  },
  es: {
    nav: { experience: "Experiencia", portfolio: "Portfolio", menus: "Menús", contact: "Contacto" },
    cta: {
      portfolio: "Ver ejemplos de menú",
      book: "Reservar revisión de menú de 20 min",
      menu: "Crear un menú así",
      whatsapp: "WhatsApp",
    },
    hero: {
      title: "Lanza un menú rentable y repetible en Marbella",
      copy: "Diseñamos menús que tu equipo puede preparar, costear, emplatar y repetir bajo presión real de servicio: cafeterías, restaurantes, catering y villas privadas en Costa del Sol.",
      imageLabel: "Platos premium de restaurante y trabajo de cocina",
      imageAlt: "Chef emplatando un plato premium de restaurante",
      cardOneLabel: "Sistemas de menú",
      cardOneText: "Costes, preparación, porciones, lanzamiento",
      cardTwoText: "Hospitality en Costa del Sol",
    },
    about: {
      label: "Sobre nosotros",
      title: "Trabajo real de cocina, disciplina operativa y pensamiento de menú.",
      copy: "No vendemos plantillas genéricas. Construimos menús alrededor de la cocina real, el equipo, la maquinaria, el ritmo de servicio y el modelo de negocio.",
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
      label: "Portfolio de 30 platos",
      title: "Una galería gastronómica para dirección de menú y estilo de servicio.",
      copy: "Visuales premium temporales para v1. Antes de promoción pública conviene sustituirlos por platos reales de Y&D.",
      carouselLabel: "Carrusel de portfolio gastronómico",
    },
    menus: {
      label: "Ejemplos de menús listos",
      title: "Estructuras de menú que podemos construir para tu cocina real.",
      copy: "Son ejemplos de autor que muestran dirección, formato y lógica. No son copias de menús de clientes ni documentos técnicos confidenciales.",
    },
    process: {
      label: "Proceso",
      title: "De concepto a servicio de cocina estable.",
      copy: "El objetivo no son solo platos bonitos. El menú debe poder prepararse, costearse, emplatarse y repetirse por el equipo.",
    },
    packages: {
      label: "Paquetes",
      title: "Puntos de partida claros para distintas fases de lanzamiento.",
      copy: "Cada paquete se adapta después de entender concepto, equipamiento, nivel del equipo y cliente objetivo.",
    },
    confidentiality: {
      title: "Mostramos estructura de menú, dirección de platos y referencias públicas.",
      copy: "Recetas de clientes, fichas técnicas, costes y documentos internos de producción permanecen confidenciales. Un menú fuerte se crea para tu equipamiento, proveedores, equipo, margen, temporada y clientes.",
    },
    contact: { title: "Cuéntanos qué quieres lanzar." },
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
};

export const localizedGrowthContent: Record<Language, GrowthContent> = {
  en: {
    proof: [
      { value: "10+ years", label: "professional kitchen experience" },
      { value: "Menu + cost", label: "structure, prep and margin logic" },
      { value: "Marbella", label: "restaurants, catering and villa hospitality" },
    ],
    problem: {
      label: "Operational risk",
      title: "Most menu launches fail in operations, not in ideas.",
      copy: "A menu can look strong on paper and still fail when the kitchen cannot prep it, price it, plate it or repeat it under seasonal pressure. We design for the service reality first.",
    },
    audiences: {
      label: "Who this is for",
      title: "Built for owners who need control before service starts.",
      items: [
        { title: "Restaurants & cafes", copy: "Menu relaunch, new concepts, brunch, hot section and service-ready dishes." },
        { title: "Catering & events", copy: "Portions, transport, prep lists, plating standards and predictable delivery flow." },
        { title: "Villa hospitality", copy: "Premium private menus for families, retreats, concierge teams and seasonal guests." },
        { title: "Small kitchens", copy: "Lean menus for limited equipment, storage and staff without losing quality." },
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
      title: "For a faster answer, send us:",
      items: ["Concept", "Kitchen size", "City", "Opening or relaunch date"],
    },
  },
  uk: {
    proof: [
      { value: "10+ років", label: "досвіду професійної кухні" },
      { value: "Меню + цифри", label: "структура, заготовки і маржа" },
      { value: "Marbella", label: "ресторани, кейтеринг і villa hospitality" },
    ],
    problem: {
      label: "Операційний ризик",
      title: "Більшість запусків меню ламається не в ідеях, а в операціях.",
      copy: "Меню може виглядати сильним на папері, але провалитися, якщо кухня не може його готувати, рахувати, видавати і повторювати під сезонним навантаженням. Ми спочатку проєктуємо під реальний сервіс.",
    },
    audiences: {
      label: "Для кого",
      title: "Для власників, яким потрібен контроль до старту сервісу.",
      items: [
        { title: "Ресторани та кафе", copy: "Перезапуск меню, нові концепції, бранч, гарячий цех і страви, готові до сервісу." },
        { title: "Кейтеринг і події", copy: "Порції, транспорт, prep-листи, стандарти подачі та прогнозована доставка." },
        { title: "Villa hospitality", copy: "Преміальні приватні меню для сімей, retreats, concierge-команд і сезонних гостей." },
        { title: "Малі кухні", copy: "Лаконічні меню для обмеженого обладнання, складу і команди без втрати якості." },
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
      title: "Для швидшої відповіді надішліть:",
      items: ["Концепцію", "Розмір кухні", "Місто", "Дату відкриття або перезапуску"],
    },
  },
  es: {
    proof: [
      { value: "10+ años", label: "experiencia en cocinas profesionales" },
      { value: "Menú + coste", label: "estructura, prep y lógica de margen" },
      { value: "Marbella", label: "restaurantes, catering y villa hospitality" },
    ],
    problem: {
      label: "Riesgo operativo",
      title: "La mayoría de lanzamientos de menú fallan en operaciones, no en ideas.",
      copy: "Un menú puede verse fuerte en papel y fallar si la cocina no puede prepararlo, costearlo, emplatarlo o repetirlo bajo presión de temporada. Diseñamos primero para la realidad del servicio.",
    },
    audiences: {
      label: "Para quién",
      title: "Para propietarios que necesitan control antes de abrir servicio.",
      items: [
        { title: "Restaurantes y cafeterías", copy: "Relaunch de menú, nuevos conceptos, brunch, caliente y platos listos para servicio." },
        { title: "Catering y eventos", copy: "Porciones, transporte, prep lists, estándares de emplatado y flujo previsible." },
        { title: "Villa hospitality", copy: "Menús privados premium para familias, retreats, concierge teams y temporada." },
        { title: "Cocinas pequeñas", copy: "Menús lean para equipamiento, almacén y personal limitados sin perder calidad." },
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
      title: "Para responder más rápido, envíanos:",
      items: ["Concepto", "Tamaño de cocina", "Ciudad", "Fecha de apertura o relaunch"],
    },
  },
};

const dish = (en: string, uk: string, es: string, category: Localized, photoId: string): Dish => ({
  title: { en, uk, es },
  category,
  image: image(photoId),
});

const categories = {
  breakfast: { en: "Breakfasts", uk: "Сніданки", es: "Desayunos" },
  healthy: { en: "Healthy meals", uk: "Healthy-страви", es: "Comida saludable" },
  salads: { en: "Salads", uk: "Салати", es: "Ensaladas" },
  grill: { en: "Grill", uk: "Гриль", es: "Parrilla" },
  hot: { en: "Hot dishes", uk: "Гарячі страви", es: "Platos calientes" },
  seafood: { en: "Seafood", uk: "Морепродукти", es: "Mariscos" },
  catering: { en: "Catering trays", uk: "Кейтеринг", es: "Bandejas de catering" },
  desserts: { en: "Desserts", uk: "Десерти", es: "Postres" },
  prep: { en: "Sauces/prep", uk: "Соуси/заготовки", es: "Salsas/prep" },
  drinks: { en: "Drinks", uk: "Напої", es: "Bebidas" },
} satisfies Record<string, Localized>;

export const dishGallery: Dish[] = [
  dish("Mediterranean breakfast plate", "Середземноморський сніданок", "Desayuno mediterráneo", categories.breakfast, "photo-1533089860892-a7c6f0a88666"),
  dish("Soft egg brunch toast", "Бранч-тост з м'яким яйцем", "Tostada brunch con huevo", categories.breakfast, "photo-1525351484163-7529414344d8"),
  dish("Pancakes with berries", "Панкейки з ягодами", "Pancakes con frutos rojos", categories.breakfast, "photo-1528207776546-365bb710ee93"),
  dish("Granola and yogurt bowl", "Гранола з йогуртом", "Bowl de granola y yogur", categories.healthy, "photo-1511690743698-d9d85f2fbf38"),
  dish("Balanced chicken lunch box", "Збалансований chicken lunch box", "Lunch box equilibrado de pollo", categories.healthy, "photo-1546069901-ba9599a7e63c"),
  dish("Salmon fitness bowl", "Фітнес-боул з лососем", "Fitness bowl de salmón", categories.healthy, "photo-1512621776951-a57141f2eefd"),
  dish("Greek salad service", "Грецький салат для сервісу", "Servicio de ensalada griega", categories.salads, "photo-1540420773420-3366772f4999"),
  dish("Burrata tomato plate", "Бурата з томатами", "Burrata con tomate", categories.salads, "photo-1551183053-bf91a1d81141"),
  dish("Citrus seafood salad", "Цитрусовий салат з морепродуктами", "Ensalada cítrica de mariscos", categories.salads, "photo-1604908176997-125f25cc6f3d"),
  dish("Grilled beef skewer", "Яловичий шашлик на грилі", "Brocheta de ternera a la parrilla", categories.grill, "photo-1555939594-58d7cb561ad1"),
  dish("Charcoal chicken grill", "Курка на вугіллі", "Pollo a la brasa", categories.grill, "photo-1598515214211-89d3c73ae83b"),
  dish("Steak with herb butter", "Стейк з трав'яним маслом", "Steak con mantequilla de hierbas", categories.grill, "photo-1558030006-450675393462"),
  dish("Seared fish fillet", "Філе риби на сковороді", "Filete de pescado sellado", categories.hot, "photo-1467003909585-2f8a72700288"),
  dish("Cream pasta station", "Паста з кремовим соусом", "Pasta cremosa de servicio", categories.hot, "photo-1551183053-bf91a1d81141"),
  dish("Risotto service plate", "Ризото для сервісу", "Risotto de servicio", categories.hot, "photo-1476124369491-e7addf5db371"),
  dish("Shrimp with garlic butter", "Креветки з часниковим маслом", "Gambas con mantequilla de ajo", categories.seafood, "photo-1565680018434-b513d5e5fd47"),
  dish("Seafood sharing plate", "Тарілка морепродуктів", "Plato de mariscos para compartir", categories.seafood, "photo-1534080564583-6be75777b70a"),
  dish("Tuna starter", "Закуска з тунцем", "Entrante de atún", categories.seafood, "photo-1604908176997-125f25cc6f3d"),
  dish("Catering antipasti tray", "Кейтеринг-плато antipasti", "Bandeja de antipasti", categories.catering, "photo-1543352634-a1c51d9f1fa7"),
  dish("Event dessert board", "Десертна дошка для заходу", "Tabla de postres para evento", categories.catering, "photo-1488477181946-6428a0291777"),
  dish("Private buffet setup", "Приватний buffet setup", "Montaje de buffet privado", categories.catering, "photo-1555244162-803834f70033"),
  dish("Chocolate dessert", "Шоколадний десерт", "Postre de chocolate", categories.desserts, "photo-1488477304112-4944851de03d"),
  dish("Berry tart portion", "Порційний ягідний тарт", "Porción de tarta de frutos rojos", categories.desserts, "photo-1464305795204-6f5bbfc7fb81"),
  dish("Cream cake service", "Кремовий торт для сервісу", "Servicio de tarta cremosa", categories.desserts, "photo-1551024506-0bccd828d307"),
  dish("Prep sauces mise en place", "Mise en place соусів", "Mise en place de salsas", categories.prep, "photo-1556911220-bff31c812dba"),
  dish("Kitchen herb prep", "Підготовка зелені", "Preparación de hierbas", categories.prep, "photo-1506368249639-73a05d6f6488"),
  dish("Batch prep station", "Станція batch prep", "Estación de preparación por lotes", categories.prep, "photo-1556909114-f6e7ad7d3136"),
  dish("Citrus iced drink", "Цитрусовий cold drink", "Bebida fría cítrica", categories.drinks, "photo-1544145945-f90425340c7e"),
  dish("Restaurant coffee service", "Ресторанна подача кави", "Servicio de café", categories.drinks, "photo-1495474472287-4d71bcdd2085"),
  dish("Fresh bar garnish", "Свіжий bar garnish", "Garnish fresco de bar", categories.drinks, "photo-1513558161293-cdaf765ed2fd"),
];

export const localizedMenuExamples: Record<Language, MenuExample[]> = {
  en: [
    { title: "Cafe Brunch Menu", subtitle: "Compact daytime menu for a cafe with fast prep and strong visual dishes.", format: "Breakfast / brunch / coffee pairing", items: ["Turkish eggs, garlic yogurt, chili butter", "Smoked salmon toast, cucumber, herbs", "Pancakes, berries, vanilla cream", "Chicken Caesar croissant", "Burrata tomato salad", "Cold brew tonic"] },
    { title: "Healthy / Fit Food Menu", subtitle: "Portion-aware meals for delivery, take away or weekly nutrition plans.", format: "Balanced bowls / protein meals / clean sauces", items: ["Chicken quinoa bowl, avocado, citrus dressing", "Salmon rice box, greens, sesame sauce", "Turkey meatballs, buckwheat, vegetables", "Greek yogurt breakfast jar", "Protein pancakes, berry compote", "Low-calorie herb sauce set"] },
    { title: "Catering Event Menu", subtitle: "Designed for batch prep, transport, clean plating and predictable portions.", format: "Private events / villa dinners / business catering", items: ["Antipasti grazing board", "Mini bruschetta selection", "Grilled chicken skewers", "Beef sliders, house sauce", "Seafood salad cups", "Dessert miniatures tray"] },
    { title: "Small Kitchen Launch Menu", subtitle: "A restrained launch menu for limited equipment, storage and staff.", format: "Low waste / cross-used prep / simple service flow", items: ["Soup of the day", "Chicken schnitzel plate", "Pasta with seasonal sauce", "Chef salad with grilled protein", "House dessert", "Signature sauce base for 4 dishes"] },
    { title: "Grill & Hot Section Menu", subtitle: "Hot dishes built around timing, mise en place and consistent output.", format: "Grill / hot section / service pressure", items: ["Marinated chicken shashlyk", "Beef kebab plate", "Grilled vegetables, herb oil", "Garlic butter prawns", "Crispy potatoes, aioli", "House pickles and sauce set"] },
  ],
  uk: [
    { title: "Меню кафе / бранч", subtitle: "Компактне денне меню для кафе зі швидкими заготовками та візуально сильними стравами.", format: "Сніданки / бранч / кава", items: ["Турецькі яйця, часниковий йогурт, chili butter", "Тост з копченим лососем, огірком і зеленню", "Панкейки, ягоди, ванільний крем", "Круасан Chicken Caesar", "Салат бурата-томати", "Cold brew tonic"] },
    { title: "Healthy / Fit Food меню", subtitle: "Порційні страви для доставки, take away або тижневих nutrition-планів.", format: "Balanced bowls / protein meals / clean sauces", items: ["Chicken quinoa bowl, авокадо, citrus dressing", "Salmon rice box, зелень, sesame sauce", "Turkey meatballs, гречка, овочі", "Грецький йогурт breakfast jar", "Protein pancakes, ягідний компот", "Набір low-calorie herb sauces"] },
    { title: "Кейтеринг-меню для події", subtitle: "Під batch prep, транспорт, чисту подачу та прогнозовані порції.", format: "Private events / villa dinners / business catering", items: ["Antipasti grazing board", "Mini bruschetta selection", "Курячі skewers на грилі", "Beef sliders, house sauce", "Seafood salad cups", "Dessert miniatures tray"] },
    { title: "Меню запуску маленької кухні", subtitle: "Стримане меню для обмеженого обладнання, складу та команди.", format: "Low waste / спільні заготовки / простий сервіс", items: ["Суп дня", "Chicken schnitzel plate", "Паста з сезонним соусом", "Chef salad з grilled protein", "House dessert", "Signature sauce base для 4 страв"] },
    { title: "Grill & Hot Section меню", subtitle: "Гарячі страви, побудовані навколо таймінгу, mise en place і стабільної видачі.", format: "Гриль / гарячий цех / сервіс під навантаженням", items: ["Маринований chicken shashlyk", "Beef kebab plate", "Овочі на грилі, herb oil", "Креветки з garlic butter", "Crispy potatoes, aioli", "House pickles and sauce set"] },
  ],
  es: [
    { title: "Menú Cafe Brunch", subtitle: "Menú compacto de día para cafetería, con preparación rápida y platos visuales.", format: "Desayuno / brunch / café", items: ["Huevos turcos, yogur de ajo, mantequilla chili", "Tostada de salmón ahumado, pepino y hierbas", "Pancakes, frutos rojos, crema de vainilla", "Croissant Chicken Caesar", "Ensalada de burrata y tomate", "Cold brew tonic"] },
    { title: "Menú Healthy / Fit Food", subtitle: "Comidas porcionadas para delivery, take away o planes semanales.", format: "Balanced bowls / proteínas / clean sauces", items: ["Chicken quinoa bowl, aguacate, citrus dressing", "Salmon rice box, verdes, salsa de sésamo", "Albóndigas de pavo, trigo sarraceno, verduras", "Greek yogurt breakfast jar", "Protein pancakes, compota de frutos rojos", "Set de salsas herbales low-calorie"] },
    { title: "Menú Catering Event", subtitle: "Diseñado para batch prep, transporte, emplatado limpio y porciones previsibles.", format: "Eventos privados / cenas en villa / business catering", items: ["Antipasti grazing board", "Mini bruschetta selection", "Brochetas de pollo a la parrilla", "Beef sliders, house sauce", "Seafood salad cups", "Miniaturas de postre"] },
    { title: "Menú Small Kitchen Launch", subtitle: "Menú contenido para equipamiento, almacén y personal limitados.", format: "Low waste / prep compartida / servicio simple", items: ["Sopa del día", "Chicken schnitzel plate", "Pasta con salsa de temporada", "Chef salad con grilled protein", "House dessert", "Base de salsa signature para 4 platos"] },
    { title: "Menú Grill & Hot Section", subtitle: "Platos calientes construidos alrededor de timing, mise en place y salida constante.", format: "Parrilla / caliente / presión de servicio", items: ["Chicken shashlyk marinado", "Beef kebab plate", "Verduras a la parrilla, herb oil", "Gambas con garlic butter", "Crispy potatoes, aioli", "House pickles and sauce set"] },
  ],
};

export const localizedPackages: Record<Language, Package[]> = {
  en: [
    { name: "Menu Profit Audit", price: "Quote after review", summary: "A focused diagnostic for owners who need to see where menu margin, waste or service speed is leaking.", includes: ["Menu review", "Food-cost risk map", "Quick-win recommendations", "WhatsApp follow-up notes"] },
    { name: "Menu Engineering Sprint", price: "Quote after kitchen review", summary: "A practical menu system for restaurants or cafes that need structure, costing logic and repeatable dishes.", includes: ["Menu architecture", "Costing sheet direction", "Recipe-card direction", "Upsell and dietary logic"] },
    { name: "Kitchen Launch System", price: "Quote after kitchen review", summary: "Menu, prep flow, service rhythm and team training for launches or serious relaunches.", includes: ["Opening menu", "Prep and service flow", "Staff training notes", "Launch correction checklist"], recommended: true },
    { name: "Villa & Catering Menu System", price: "Quote after brief", summary: "Premium private menus and production logic for villa managers, events, retreats and catering.", includes: ["Breakfast/lunch/dinner templates", "Dietary variants", "Shopping and prep system", "Event flow"] },
  ],
  uk: [
    { name: "Menu Profit Audit", price: "Оцінка після review", summary: "Сфокусована діагностика для власників, яким потрібно побачити втрати маржі, waste або швидкості сервісу.", includes: ["Review меню", "Карта ризиків food cost", "Швидкі рекомендації", "Нотатки після WhatsApp-розмови"] },
    { name: "Menu Engineering Sprint", price: "Оцінка після огляду кухні", summary: "Практична система меню для ресторанів або кафе: структура, логіка собівартості та повторювані страви.", includes: ["Архітектура меню", "Напрям costing sheet", "Напрям recipe cards", "Upsell і dietary logic"] },
    { name: "Kitchen Launch System", price: "Оцінка після огляду кухні", summary: "Меню, потік заготовок, ритм сервісу і навчання команди для запуску або серйозного relaunch.", includes: ["Opening menu", "Потік prep і сервісу", "Нотатки для навчання", "Checklist корекцій запуску"], recommended: true },
    { name: "Villa & Catering Menu System", price: "Оцінка після brief", summary: "Преміальні приватні меню та логіка виробництва для villa managers, подій, retreats і catering.", includes: ["Шаблони breakfast/lunch/dinner", "Dietary variants", "Shopping and prep system", "Event flow"] },
  ],
  es: [
    { name: "Menu Profit Audit", price: "Presupuesto tras revisión", summary: "Diagnóstico enfocado para propietarios que necesitan ver fugas de margen, waste o velocidad de servicio.", includes: ["Review del menú", "Mapa de riesgo de food cost", "Recomendaciones rápidas", "Notas de seguimiento por WhatsApp"] },
    { name: "Menu Engineering Sprint", price: "Presupuesto tras revisar cocina", summary: "Sistema práctico de menú para restaurantes o cafeterías que necesitan estructura, costes y platos repetibles.", includes: ["Arquitectura de menú", "Dirección de costing sheet", "Dirección de recipe cards", "Lógica de upsell y dietary"] },
    { name: "Kitchen Launch System", price: "Presupuesto tras revisar cocina", summary: "Menú, flujo de prep, ritmo de servicio y formación para aperturas o relaunch serio.", includes: ["Opening menu", "Flujo de prep y servicio", "Notas de formación", "Checklist de corrección de lanzamiento"], recommended: true },
    { name: "Villa & Catering Menu System", price: "Presupuesto tras brief", summary: "Menús privados premium y lógica de producción para villa managers, eventos, retreats y catering.", includes: ["Plantillas breakfast/lunch/dinner", "Dietary variants", "Sistema de compra y prep", "Event flow"] },
  ],
};

export const localizedProcessSteps: Record<Language, string[]> = {
  en: ["Concept and guest profile", "Kitchen, equipment and staff audit", "Menu architecture and position count", "Dish development and testing", "Tech cards, portions and costing logic", "Prep systems and service flow", "Team training and launch correction"],
  uk: ["Концепція та профіль гостя", "Аудит кухні, обладнання і команди", "Архітектура меню та кількість позицій", "Розробка і тестування страв", "Техкарти, порції та логіка собівартості", "Системи заготовок і сервісу", "Навчання команди та корекція запуску"],
  es: ["Concepto y perfil del cliente", "Auditoría de cocina, equipo y personal", "Arquitectura de menú y número de posiciones", "Desarrollo y prueba de platos", "Fichas técnicas, porciones y lógica de costes", "Sistemas de prep y flujo de servicio", "Formación del equipo y ajustes de lanzamiento"],
};
