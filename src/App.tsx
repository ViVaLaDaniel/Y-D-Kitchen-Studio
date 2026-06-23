import { dishGallery, menuExamples, processSteps, servicePackages, workplaces } from "./data";

const whatsappNumber = "34642370671";
const whatsappMessage = encodeURIComponent("Hello Y&D Kitchen Studio, I would like to discuss a menu or kitchen launch project.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="section-title">
      <span>{label}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Y&D Kitchen Studio home">
        <span>Y&D</span>
        <strong>Kitchen Studio</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#experience">Experience</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#menus">Menus</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href={whatsappUrl}>
        Book a consultation
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <h1>Kitchen launch & bespoke menus for restaurants</h1>
        <p>
          Yulia and Daniel build practical menus, prep systems, costing logic and launch support for cafes,
          restaurants, catering and hospitality projects in Marbella and Costa del Sol.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#portfolio">
            View portfolio
          </a>
          <a className="button ghost" href={whatsappUrl}>
            Book a consultation
          </a>
        </div>
      </div>
      <div className="hero-visual reveal" aria-label="Premium restaurant dishes and kitchen work">
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=86"
          alt="Chef plating a premium restaurant dish"
        />
        <div className="floating-card service-card">
          <span>Menu systems</span>
          <strong>Costing, prep, portions, launch</strong>
        </div>
        <div className="floating-card location-card">
          <span>Marbella</span>
          <strong>Costa del Sol hospitality</strong>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="band about-section">
      <SectionTitle
        label="About us"
        title="Real kitchen work, management discipline and menu thinking."
        copy="We are not selling generic menu templates. We build menus around the actual kitchen, team, equipment, service rhythm and business model."
      />
      <div className="about-grid">
        <article className="profile-card reveal">
          <h3>Daniel Zamiatin</h3>
          <p>Chef-side experience across hot section, grill, production kitchens, catering and high-pressure service.</p>
          <ul>
            <li>10+ years in professional kitchens</li>
            <li>Menu execution, prep planning and service flow</li>
            <li>European, Eastern European, grill and catering formats</li>
          </ul>
        </article>
        <article className="profile-card reveal">
          <h3>Yuliia Horbach</h3>
          <p>Manager and process owner with food quality control, order operations, catering menu logic and documentation.</p>
          <ul>
            <li>Food quality and packaging standards</li>
            <li>Menu portions, recipes and process checks</li>
            <li>Owner-side control from order to delivery</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle
        label="Work & menu experience"
        title="Restaurants, production kitchens and catering operations."
        copy="Each project shaped how we think about realistic menus: dishes that sell, prep that works, portions that can be repeated and service that does not collapse under pressure."
      />
      <div className="experience-grid">
        {workplaces.map((place) => (
          <article className="experience-card reveal" key={`${place.owner}-${place.name}`}>
            <div className="card-topline">
              <span>{place.owner}</span>
              <small>{place.city}</small>
            </div>
            <h3>{place.name}</h3>
            <p className="role">{place.role}</p>
            <p>{place.menuFocus}</p>
            <ul>
              {place.work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function DishPortfolio() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <SectionTitle
        label="30-dish portfolio"
        title="A cinematic food rail for menu direction and service style."
        copy="Temporary premium visuals for v1. Replace with real Y&D dishes before public launch for stronger proof."
      />
      <div className="dish-rail" aria-label="Dish portfolio carousel">
        {dishGallery.map((dish, index) => (
          <article className="dish-card reveal" key={`${dish.title}-${index}`}>
            <img src={dish.image} alt={dish.title} loading={index < 6 ? "eager" : "lazy"} />
            <div>
              <span>{dish.category}</span>
              <h3>{dish.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MenuExamples() {
  return (
    <section className="band menu-section" id="menus">
      <SectionTitle
        label="Ready menu examples"
        title="Menu structures we can build around your real kitchen."
        copy="These are authored sample menus that show direction, format and logic. They are not copied client menus or confidential technical documents."
      />
      <div className="menu-grid">
        {menuExamples.map((menu) => (
          <article className="menu-panel reveal" key={menu.title}>
            <div className="menu-panel-header">
              <span>{menu.format}</span>
              <h3>{menu.title}</h3>
              <p>{menu.subtitle}</p>
            </div>
            <ul>
              {menu.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={whatsappUrl}>Build a menu like this</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section">
      <SectionTitle
        label="Process"
        title="From concept to stable kitchen service."
        copy="The goal is not just beautiful dishes. It is a menu your team can prep, cost, plate and repeat."
      />
      <div className="process-list">
        {processSteps.map((step, index) => (
          <div className="process-step reveal" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="section packages-section">
      <SectionTitle
        label="Packages"
        title="Clear starting points for different launch stages."
        copy="Every package is adapted after we understand your concept, equipment, staff level and target guest."
      />
      <div className="package-grid">
        {servicePackages.map((pack) => (
          <article className="package-card reveal" key={pack.name}>
            <span>{pack.price}</span>
            <h3>{pack.name}</h3>
            <p>{pack.summary}</p>
            <ul>
              {pack.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Confidentiality() {
  return (
    <section className="confidentiality">
      <div className="confidentiality-inner reveal">
        <h2>We show menu structure, dish direction and public references.</h2>
        <p>
          Client recipes, tech cards, costing and internal production documents remain confidential. A strong menu is
          created for your equipment, suppliers, team, margin, season and guests.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div>
        <span>Y&D Kitchen Studio</span>
        <h2>Tell us what you want to launch.</h2>
        <p>Marbella / San Pedro de Alcantara / Costa del Sol</p>
      </div>
      <div className="contact-links">
        <a href={whatsappUrl}>WhatsApp Daniel: +34 642 370 671</a>
        <a href="mailto:daniel.zamiatin@gmail.com">daniel.zamiatin@gmail.com</a>
        <a href="mailto:yuliia.horbach15@gmail.com">yuliia.horbach15@gmail.com</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <DishPortfolio />
        <MenuExamples />
        <Process />
        <Packages />
        <Confidentiality />
        <Contact />
      </main>
      <a className="floating-whatsapp" href={whatsappUrl} aria-label="Book a consultation on WhatsApp">
        WhatsApp
      </a>
    </>
  );
}
