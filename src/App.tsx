import { type FormEvent, useMemo, useState } from "react";
import teamHeroImage from "./assets/yd-hospitality-advisory-team.png";
import {
  localizedContent,
  localizedGrowthContent,
  localizedPackages,
  localizedProcessSteps,
  localizedWorkExamples,
  localizedWorkplaces,
  type Language,
} from "./data";

const whatsappNumber = "34642370671";
const buildWhatsAppUrl = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const languages: Array<{ code: Language; label: string }> = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UA" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
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
  const growth = localizedGrowthContent[lang];
  const whatsappUrl = buildWhatsAppUrl(growth.contactBrief.whatsappIntro);

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
  const growth = localizedGrowthContent[lang];
  const whatsappUrl = buildWhatsAppUrl(growth.contactBrief.whatsappIntro);

  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <h1>{content.hero.title}</h1>
        <p>{content.hero.copy}</p>
        <div className="hero-actions">
          <a className="button primary" href={whatsappUrl}>
            {content.cta.book}
          </a>
          <a className="button ghost" href="#portfolio">
            {content.cta.portfolio}
          </a>
        </div>
      </div>
      <div className="hero-visual reveal" aria-label={content.hero.imageLabel}>
        <img
          src={teamHeroImage}
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

function ProofStrip({ lang }: { lang: Language }) {
  const growth = localizedGrowthContent[lang];

  return (
    <section className="proof-strip" aria-label="Y&D proof points">
      {growth.proof.map((item) => (
        <div className="proof-item reveal" key={item.value}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}

function OperatingAuthority({ lang }: { lang: Language }) {
  const growth = localizedGrowthContent[lang];
  const whatsappUrl = buildWhatsAppUrl(growth.contactBrief.whatsappIntro);

  return (
    <section className="section authority-section">
      <div className="problem-panel reveal">
        <span>{growth.problem.label}</span>
        <h2>{growth.problem.title}</h2>
        <p>{growth.problem.copy}</p>
      </div>
      <div className="authority-grid">
        <article className="authority-card reveal">
          <SectionTitle label={growth.audiences.label} title={growth.audiences.title} />
          <div className="audience-list">
            {growth.audiences.items.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a className="micro-cta" href={whatsappUrl}>{item.cta}</a>
              </div>
            ))}
          </div>
        </article>
        <article className="authority-card reveal">
          <SectionTitle label={growth.deliverables.label} title={growth.deliverables.title} />
          <ul className="deliverable-list">
            {growth.deliverables.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="risk-panel reveal">
        <div>
          <span>{growth.riskAudit.label}</span>
          <h2>{growth.riskAudit.title}</h2>
        </div>
        <ul>
          {growth.riskAudit.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AdvisoryTeam({ lang }: { lang: Language }) {
  const growth = localizedGrowthContent[lang];

  return (
    <section className="band advisory-section">
      <div className="advisory-layout">
        <div className="advisory-copy reveal">
          <span>{growth.advisor.label}</span>
          <h2>{growth.advisor.title}</h2>
          <p>{growth.advisor.copy}</p>
          <p className="advisory-note">{growth.advisor.note}</p>
        </div>
        <div className="advisor-stats">
          {growth.advisor.stats.map((stat) => (
            <div className="advisor-stat reveal" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TurnkeySystem({ lang }: { lang: Language }) {
  const growth = localizedGrowthContent[lang];

  return (
    <section className="section turnkey-section">
      <SectionTitle label={growth.turnkey.label} title={growth.turnkey.title} copy={growth.turnkey.copy} />
      <div className="turnkey-grid">
        {growth.turnkey.items.map((item, index) => (
          <article className="turnkey-card reveal" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function InternationalOwners({ lang }: { lang: Language }) {
  const growth = localizedGrowthContent[lang];

  return (
    <section className="band market-section">
      <SectionTitle label={growth.foreignOwners.label} title={growth.foreignOwners.title} copy={growth.foreignOwners.copy} />
      <div className="market-grid">
        {growth.foreignOwners.markets.map((market) => (
          <article className="market-card reveal" key={market.market}>
            <h3>{market.market}</h3>
            <p>{market.copy}</p>
          </article>
        ))}
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

function OurWork({ lang }: { lang: Language }) {
  const content = localizedContent[lang];
  const workExamples = localizedWorkExamples[lang];

  return (
    <section className="section portfolio-section" id="portfolio">
      <SectionTitle label={content.portfolio.label} title={content.portfolio.title} copy={content.portfolio.copy} />
      <div className="dish-rail" aria-label={content.portfolio.carouselLabel}>
        {workExamples.map((work, index) => (
          <article className="dish-card work-card reveal" key={`${work.title}-${work.location}`}>
            <img src={work.image} alt={`${work.title}, ${work.location}`} loading={index === 0 ? "eager" : "lazy"} />
            <div>
              <span>{work.tag}</span>
              <h3>{work.title}</h3>
              <p>{work.location} - {work.result}</p>
            </div>
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
          <div className="process-step reveal" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Packages({ lang }: { lang: Language }) {
  const content = localizedContent[lang];
  const growth = localizedGrowthContent[lang];
  const packages = localizedPackages[lang];
  const whatsappUrl = buildWhatsAppUrl(growth.contactBrief.whatsappIntro);

  return (
    <section className="section packages-section" id="menus">
      <SectionTitle label={content.packages.label} title={content.packages.title} copy={content.packages.copy} />
      <div className="package-grid">
        {packages.map((pack) => (
          <article className={pack.recommended ? "package-card recommended reveal" : "package-card reveal"} key={pack.name}>
            {pack.recommended ? <b className="recommended-label">{growth.recommendedLabel}</b> : null}
            <span>{pack.scope}</span>
            <h3>{pack.name}</h3>
            <div className="price-row">
              <s>{pack.oldPrice}</s>
              <strong>{pack.foundingPrice}</strong>
            </div>
            <p className="offer-note">{pack.offer}</p>
            <p>{pack.summary}</p>
            <ul>
              {pack.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="package-link" href={whatsappUrl}>
              {pack.cta}
            </a>
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
  const growth = localizedGrowthContent[lang];
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [projectType, setProjectType] = useState(growth.contactBrief.options[0]);
  const selectedProjectType = growth.contactBrief.options.includes(projectType)
    ? projectType
    : growth.contactBrief.options[0];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      growth.contactBrief.whatsappIntro,
      `${growth.contactBrief.whatsappName}: ${name || "-"}`,
      `${growth.contactBrief.whatsappContact}: ${contact || "-"}`,
      `${growth.contactBrief.whatsappProjectType}: ${selectedProjectType}`,
    ].join("\n");
    window.location.href = buildWhatsAppUrl(message);
  };

  return (
    <footer className="contact-section" id="contact">
      <div>
        <span>Y&D Kitchen Studio</span>
        <h2>{content.contact.title}</h2>
        <p>Marbella / San Pedro de Alcantara / Costa del Sol</p>
      </div>
      <div className="contact-links">
        <form className="brief-card contact-form" onSubmit={handleSubmit}>
          <strong>{growth.contactBrief.title}</strong>
          <p>{growth.contactBrief.copy}</p>
          <label>
            {growth.contactBrief.nameLabel}
            <input value={name} onChange={(event) => setName(event.target.value)} name="name" autoComplete="name" />
          </label>
          <label>
            {growth.contactBrief.contactLabel}
            <input value={contact} onChange={(event) => setContact(event.target.value)} name="contact" autoComplete="email" />
          </label>
          <label>
            {growth.contactBrief.typeLabel}
            <select value={selectedProjectType} onChange={(event) => setProjectType(event.target.value)} name="projectType">
              {growth.contactBrief.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button type="submit">{growth.contactBrief.submit}</button>
        </form>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const floatingLabel = useMemo(() => localizedContent[lang].cta.whatsapp, [lang]);
  const floatingWhatsappUrl = useMemo(
    () => buildWhatsAppUrl(localizedGrowthContent[lang].contactBrief.whatsappIntro),
    [lang],
  );

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <ProofStrip lang={lang} />
        <OperatingAuthority lang={lang} />
        <AdvisoryTeam lang={lang} />
        <About lang={lang} />
        <TurnkeySystem lang={lang} />
        <InternationalOwners lang={lang} />
        <Experience lang={lang} />
        <OurWork lang={lang} />
        <Process lang={lang} />
        <Packages lang={lang} />
        <Confidentiality lang={lang} />
        <Contact lang={lang} />
      </main>
      <a className="floating-whatsapp" href={floatingWhatsappUrl} aria-label={floatingLabel}>
        {floatingLabel}
      </a>
    </>
  );
}
