import { useMemo, useState } from "react";
import {
  dishGallery,
  localizedContent,
  localizedMenuExamples,
  localizedPackages,
  localizedProcessSteps,
  localizedWorkplaces,
  type Language,
} from "./data";

const whatsappNumber = "34642370671";
const whatsappMessage = encodeURIComponent("Hello Y&D Kitchen Studio, I would like to discuss a menu or kitchen launch project.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const languages: Array<{ code: Language; label: string }> = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UA" },
  { code: "es", label: "ES" },
];

function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="section-title">
      <span>{label}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Header({
  lang,
  setLang,
}: {
  lang: Language;
  setLang: (language: Language) => void;
}) {
  const content = localizedContent[lang];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Y&D Kitchen Studio home">
        <span>Y&D</span>
        <strong>Kitchen Studio</strong>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#experience">{content.nav.experience}</a>
        <a href="#portfolio">{content.nav.portfolio}</a>
        <a href="#menus">{content.nav.menus}</a>
        <a href="#contact">{content.nav.contact}</a>
      </nav>
      <div className="header-actions">
        <div className="language-switcher" aria-label="Language selector">
          {languages.map((language) => (
            <button
              aria-pressed={lang === language.code}
              className={lang === language.code ? "active" : ""}
              key={language.code}
              onClick={() => setLang(language.code)}
              type="button"
            >
              {language.label}
            </button>
          ))}
        </div>
        <a className="header-cta" href={whatsappUrl}>
          {content.cta.book}
        </a>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Language }) {
  const content = localizedContent[lang];

  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <h1>{content.hero.title}</h1>
        <p>{content.hero.copy}</p>
        <div className="hero-actions">
          <a className="button primary" href="#portfolio">
            {content.cta.portfolio}
          </a>
          <a className="button ghost" href={whatsappUrl}>
            {content.cta.book}
          </a>
        </div>
      </div>
      <div className="hero-visual reveal" aria-label={content.hero.imageLabel}>
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=86"
          alt={content.hero.imageAlt}
        />
        <div className="floating-card service-card">
          <span>{content.hero.cardOneLabel}</span>
          <strong>{content.hero.cardOneText}</strong>
        </div>
        <div className="floating-card location-card">
          <span>Marbella</span>
          <strong>{content.hero.cardTwoText}</strong>
        </div>
      </div>
    </section>
  );
}

function About({ lang }: { lang: Language }) {
  const content = localizedContent[lang];

  return (
    <section className="band about-section">
      <SectionTitle label={content.about.label} title={content.about.title} copy={content.about.copy} />
      <div className="about-grid">
        {content.about.profiles.map((profile) => (
          <article className="profile-card reveal" key={profile.name}>
            <h3>{profile.name}</h3>
            <p>{profile.copy}</p>
            <ul>
              {profile.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience({ lang }: { lang: Language }) {
  const content = localizedContent[lang];
  const workplaces = localizedWorkplaces[lang];

  return (
    <section className="section" id="experience">
      <SectionTitle label={content.experience.label} title={content.experience.title} copy={content.experience.copy} />
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

function DishPortfolio({ lang }: { lang: Language }) {
  const content = localizedContent[lang];

  return (
    <section className="section portfolio-section" id="portfolio">
      <SectionTitle label={content.portfolio.label} title={content.portfolio.title} copy={content.portfolio.copy} />
      <div className="dish-rail" aria-label={content.portfolio.carouselLabel}>
        {dishGallery.map((dish, index) => (
          <article className="dish-card reveal" key={`${dish.title.en}-${index}`}>
            <img src={dish.image} alt={dish.title[lang]} loading={index < 6 ? "eager" : "lazy"} />
            <div>
              <span>{dish.category[lang]}</span>
              <h3>{dish.title[lang]}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MenuExamples({ lang }: { lang: Language }) {
  const content = localizedContent[lang];
  const menus = localizedMenuExamples[lang];

  return (
    <section className="band menu-section" id="menus">
      <SectionTitle label={content.menus.label} title={content.menus.title} copy={content.menus.copy} />
      <div className="menu-grid">
        {menus.map((menu) => (
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
            <a href={whatsappUrl}>{content.cta.menu}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process({ lang }: { lang: Language }) {
  const content = localizedContent[lang];
  const steps = localizedProcessSteps[lang];

  return (
    <section className="section process-section">
      <SectionTitle label={content.process.label} title={content.process.title} copy={content.process.copy} />
      <div className="process-list">
        {steps.map((step, index) => (
          <div className="process-step reveal" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Packages({ lang }: { lang: Language }) {
  const content = localizedContent[lang];
  const packages = localizedPackages[lang];

  return (
    <section className="section packages-section">
      <SectionTitle label={content.packages.label} title={content.packages.title} copy={content.packages.copy} />
      <div className="package-grid">
        {packages.map((pack) => (
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

function Confidentiality({ lang }: { lang: Language }) {
  const content = localizedContent[lang];

  return (
    <section className="confidentiality">
      <div className="confidentiality-inner reveal">
        <h2>{content.confidentiality.title}</h2>
        <p>{content.confidentiality.copy}</p>
      </div>
    </section>
  );
}

function Contact({ lang }: { lang: Language }) {
  const content = localizedContent[lang];

  return (
    <footer className="contact-section" id="contact">
      <div>
        <span>Y&D Kitchen Studio</span>
        <h2>{content.contact.title}</h2>
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
  const [lang, setLang] = useState<Language>("en");
  const floatingLabel = useMemo(() => localizedContent[lang].cta.whatsapp, [lang]);

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <DishPortfolio lang={lang} />
        <MenuExamples lang={lang} />
        <Process lang={lang} />
        <Packages lang={lang} />
        <Confidentiality lang={lang} />
        <Contact lang={lang} />
      </main>
      <a className="floating-whatsapp" href={whatsappUrl} aria-label={floatingLabel}>
        {floatingLabel}
      </a>
    </>
  );
}
