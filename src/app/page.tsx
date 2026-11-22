"use client";

import { useState } from "react";
import { getDict, type Dict } from "@/lib/dict";
import { locales, localeLabels, type Locale } from "@/lib/i18n";
import { workItems, categoryMeta, type WorkCategory } from "@/lib/work";
import { socialLinks } from "@/lib/social";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = getDict(locale);

  return (
    <div className="flex flex-col min-h-full bg-background text-foreground">
      <Nav locale={locale} setLocale={setLocale} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Work t={t} locale={locale} />
      <Process t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-gradient-to-br from-accent to-accent-2 glow">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-40">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={i % 2 === 0 ? "bg-black/40" : "bg-white/10"}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-white text-sm">
          P
        </div>
      </div>
      <div className="leading-tight">
        <div className="font-bold tracking-tight text-lg">PixForge</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Studios
        </div>
      </div>
    </div>
  );
}

function Nav({
  locale,
  setLocale,
  t,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
}) {
  const links = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "work", label: t.nav.work },
    { id: "process", label: t.nav.process },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch locale={locale} setLocale={setLocale} />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function LangSwitch({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  return (
    <div className="flex items-center rounded-lg border border-border overflow-hidden">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-3 py-1.5 text-xs font-mono transition-colors ${
            locale === l
              ? "bg-accent text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}

function Hero({ t }: { t: Dict }) {
  return (
    <section id="top" className="pixel-grid relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-mono text-accent mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              {t.hero.title1}
              <br />
              <span className="text-gradient">{t.hero.title2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-medium text-white hover:bg-accent/80 glow transition-colors"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 font-medium text-foreground hover:border-accent hover:bg-card transition-colors"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-bold font-mono text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero visual — a real dubbing reel, image-led */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border glow aspect-[9/16] max-w-[360px] mx-auto">
              <video
                src="/work/dubbing/00-多语种演示合集片.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/90 bg-black/40 px-2.5 py-1 rounded">
                  13 Languages
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted max-w-xl">{subtitle}</p>}
    </div>
  );
}

function About({ t }: { t: Dict }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title={t.about.title} />
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4 text-lg text-muted leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
        <ul className="border-l border-border pl-8 space-y-6">
          {t.about.points.map((p, i) => (
            <li key={p} className="relative">
              <span className="absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent font-mono text-xs">
                {i + 1}
              </span>
              <span className="text-foreground text-base leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services({ t }: { t: Dict }) {
  return (
    <section id="services" className="bg-card/40 border-y border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle title={t.services.title} subtitle={t.services.subtitle} />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {t.services.items.map((s, i) => (
            <div
              key={s.title}
              className="group border-t border-border py-8 flex gap-8"
            >
              <div className="font-mono text-2xl font-bold text-accent/40 shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 border border-accent/30 px-2.5 py-1 text-xs font-mono text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work({ t, locale }: { t: Dict; locale: Locale }) {
  const [cat, setCat] = useState<WorkCategory | "all">("all");
  const cats: (WorkCategory | "all")[] = ["all", "product-ads", "dubbing", "short-clips", "ai-video"];
  const items = cat === "all" ? workItems : workItems.filter((w) => w.category === cat);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle title={t.work.title} subtitle={t.work.subtitle} />
      {/* category filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {cats.map((c) => {
          const label = c === "all" ? (locale === "zh" ? "全部" : "All") : categoryMeta[c][locale];
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                cat === c
                  ? "bg-accent text-white"
                  : "border border-border text-muted hover:text-foreground hover:border-accent/50"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      {/* grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((w) => (
          <div
            key={w.slug}
            className="card-hover group overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-background card-media">
              {w.media.type === "video" ? (
                <video
                  src={w.media.src}
                  poster={w.media.poster}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={w.media.src}
                  alt={w.title[locale]}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
            <div className="p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {categoryMeta[w.category][locale]}
              </div>
              <h3 className="mt-1.5 font-bold leading-snug">{w.title[locale]}</h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">
                {w.desc[locale]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process({ t }: { t: Dict }) {
  return (
    <section id="process" className="bg-card/40 border-y border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle title={t.process.title} />
        <div className="grid md:grid-cols-4 gap-6">
          {t.process.steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="font-mono text-4xl font-bold text-accent/30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {socialLinks.map((s) => (
        <a
          key={s.id}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          title={s.name}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted hover:text-foreground hover:border-accent hover:bg-card transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d={s.icon} />
          </svg>
        </a>
      ))}
    </div>
  );
}

function Contact({ t }: { t: Dict }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:hello@pixforgestudios.com"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-medium text-white hover:bg-accent/80 glow transition-colors"
          >
            {t.contact.cta}
          </a>
          <a
            href="https://www.fiverr.com/kunwang821"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 font-medium text-foreground hover:border-accent hover:bg-card transition-colors"
          >
            {t.contact.fiverr}
          </a>
        </div>
        <SocialIcons className="justify-center" />
      </div>
    </section>
  );
}

function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-xs text-muted/80">{t.footer.findUs}</span>
          <SocialIcons />
        </div>
        <p className="text-sm text-muted">
          © 2026 PixForge Studios. {t.footer.rights}
        </p>
      </div>
      <div className="border-t border-border/30 py-3 text-center">
        <p className="font-mono text-xs text-muted/70">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
