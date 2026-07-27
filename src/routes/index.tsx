import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import logoAsset from "@/assets/food-lab-logo.png";
import {
  dict,
  menu,
  tx,
  type Allergen,
  type Lang,
  type MenuCategory,
  type MenuItem,
} from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
});

type FilterKey = "all" | MenuCategory | "vegan";

function Index() {
  const [lang, setLang] = useState<Lang>("sv");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? (window.localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "sv" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const T = (v: { sv: string; en: string }) => tx(v, lang);

  return (
    <div className="min-h-screen bg-noise text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-background/70 hairline-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset} alt="Food Lab" className="h-10 w-auto" width={40} height={40} />
            <span className="text-xs text-muted-foreground hidden sm:inline">by Tildas</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#menu" className="hover:text-foreground transition">
              {T(dict.nav.menu)}
            </a>
            <a href="#about" className="hover:text-foreground transition">
              {T(dict.nav.about)}
            </a>
            <a href="#reviews" className="hover:text-foreground transition">
              {T(dict.nav.reviews)}
            </a>
            <a href="#visit" className="hover:text-foreground transition">
              {T(dict.nav.visit)}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border p-0.5 text-xs">
              {(["sv", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-3 py-1 rounded-full uppercase tracking-wider transition ${
                    lang === l
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="https://easytable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              {T(dict.nav.book)}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl grid-cols-1 items-center px-6 py-16 md:grid-cols-12">
          <div className="md:col-span-8 lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {T(dict.hero.eyebrow)}
            </div>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
              {T(dict.hero.title)}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-balance">
              {T(dict.hero.body)}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://easytable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
              >
                {T(dict.hero.cta1)}
              </a>
              <a
                href="https://tildasfoodlab.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
              >
                {T(dict.hero.cta3)}
              </a>
              <a
                href="#menu"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition"
              >
                {T(dict.hero.cta2)}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex text-primary">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <span>{T(dict.hero.rating)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
              {T(dict.about.kicker)}
            </p>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-balance md:text-5xl">
              {T(dict.about.title)}
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg text-muted-foreground text-balance">{T(dict.about.body)}</p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {dict.about.stats.map((s) => (
                <div key={s.v}>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    {T(s.k)}
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* INTERIOR band */}
      <section className="relative">
        <div className="relative h-[60svh] overflow-hidden">
          <img
            src={interiorImg}
            alt=""
            loading="lazy"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-16">
              <p className="max-w-2xl font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
                {lang === "sv"
                  ? "Ett rum av varma lampor, låga toner och maten i centrum."
                  : "A room of warm lamps, low tones and food at the center."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU — Lab Journal */}
      <MenuLab lang={lang} T={T} />

      {/* REVIEWS */}
      <section id="reviews" className="relative bg-card py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            {T(dict.reviews.kicker)}
          </p>
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            {T(dict.reviews.title)}
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {dict.reviews.items.map((r) => (
              <figure key={r.author} className="rounded-2xl border border-border bg-background p-8">
                <div className="mb-4 flex text-primary" aria-label="5 out of 5">
                  {"★★★★★".split("").map((_, i) => (
                    <span key={i} aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-foreground/90 text-balance">
                  “{T(r.text)}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  — {r.author} · Google
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
              {T(dict.visit.kicker)}
            </p>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {T(dict.visit.title)}
            </h2>
            <p className="mt-6 text-muted-foreground">{T(dict.visit.options)}</p>
            <p className="mt-2 text-muted-foreground">{T(dict.visit.price)}</p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                  {T(dict.visit.address)}
                </h3>
                <p className="mt-2 font-display text-xl">Gustaf Dalénsgatan 6</p>
                <p className="text-muted-foreground">417 22 Göteborg</p>
                <a
                  href="https://maps.google.com/?q=Gustaf+Dalénsgatan+6+Göteborg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-primary underline underline-offset-4"
                >
                  {lang === "sv" ? "Vägbeskrivningar" : "Directions"} →
                </a>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                  {T(dict.visit.contact)}
                </h3>
                <p className="mt-2">
                  <a className="hover:text-primary" href="tel:+46315312132">
                    031-53 12 13
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a
                    className="hover:text-primary"
                    href="https://tildasfoodlab.se"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tildasfoodlab.se
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://easytable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
              >
                {T(dict.nav.book)}
              </a>
              <a
                href="https://tildasfoodlab.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
              >
                {T(dict.nav.order)}
              </a>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
                {T(dict.visit.hours)}
              </h3>
              <ul className="divide-y divide-border">
                {dict.visit.schedule.map((row) => {
                  const hoursStr = typeof row.h === "string" ? row.h : T(row.h);
                  const isClosed =
                    hoursStr.toLowerCase().includes("stäng") ||
                    hoursStr.toLowerCase().includes("closed");
                  return (
                    <li
                      key={typeof row.d === "string" ? row.d : row.d.sv}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="font-medium">{T(row.d)}</span>
                      <span className={isClosed ? "text-muted-foreground" : "text-foreground"}>
                        {hoursStr}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Food Lab by Tildas map"
                src="https://www.google.com/maps?q=Gustaf+Dalénsgatan+6+Göteborg&output=embed"
                className="h-72 w-full grayscale-[0.6]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset} alt="Food Lab" className="h-12 w-auto" width={48} height={48} />
              <span className="text-muted-foreground text-base">by Tildas</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">{T(dict.footer.tagline)}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Food Lab by Tildas. {T(dict.footer.rights)}
            </p>
            <p className="mt-1">{T(dict.footer.made)}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MenuLab — "Lab Journal" filterable specimen catalog                */
/* ------------------------------------------------------------------ */

const ALLERGEN_LABEL: Record<Allergen, { sv: string; en: string }> = {
  N: { sv: "Nötter", en: "Nuts" },
  E: { sv: "Ägg", en: "Egg" },
  M: { sv: "Mjölk", en: "Milk" },
  G: { sv: "Gluten", en: "Gluten" },
};

const ALLERGEN_LETTER: Record<Allergen, { sv: string; en: string }> = {
  N: { sv: "N", en: "N" },
  E: { sv: "Ä", en: "E" },
  M: { sv: "M", en: "M" },
  G: { sv: "G", en: "G" },
};

function AllergenTile({
  a,
  lang,
  size = "sm",
  active = false,
  onClick,
  className,
}: {
  a: Allergen;
  lang: Lang;
  size?: "sm" | "md" | "lg";
  active?: boolean;
  onClick?: (a: Allergen) => void;
  className?: string;
}) {
  const dim =
    size === "lg"
      ? "h-8 w-10 text-[13px]"
      : size === "md"
        ? "h-9 w-9 text-[13px]"
        : "h-6 w-6 text-[11px]";
  const base = `inline-flex ${dim} items-center justify-center rounded-[6px] border font-mono font-semibold transition`;
  const styles = active
    ? "border-foreground/40 bg-muted text-muted-foreground line-through"
    : "border-primary/30 bg-primary/5 text-primary hover:border-primary/60";
  if (onClick) {
    return (
      <button
        type="button"
        title={ALLERGEN_LABEL[a][lang]}
        aria-pressed={active}
        onClick={(e) => {
          e.stopPropagation();
          onClick(a);
        }}
        className={`${base} ${styles} cursor-pointer ${className || ""}`}
      >
        {ALLERGEN_LETTER[a][lang]}
      </button>
    );
  }
  return (
    <span title={ALLERGEN_LABEL[a][lang]} className={`${base} ${styles} ${className || ""}`}>
      {ALLERGEN_LETTER[a][lang]}
    </span>
  );
}

function MenuLab({ lang, T }: { lang: Lang; T: (v: { sv: string; en: string }) => string }) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [allergenFilter, setAllergenFilter] = useState<Allergen[]>([]);
  const [active, setActive] = useState<MenuItem | null>(null);

  const toggleAllergen = (a: Allergen) =>
    setAllergenFilter((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const filters: { key: FilterKey; label: { sv: string; en: string } }[] = [
    { key: "all", label: dict.menu.filters.all },
    { key: "medium", label: dict.menu.filters.medium },
    { key: "large", label: dict.menu.filters.large },
    { key: "sides", label: dict.menu.filters.sides },
    { key: "vegan", label: dict.menu.filters.vegan },
  ];

  const matchesAllergen = (m: MenuItem) => allergenFilter.every((a) => !m.allergens.includes(a));

  const items = useMemo(() => {
    let list = menu;
    if (filter === "vegan") list = list.filter((m) => m.vegan);
    else if (filter !== "all") list = list.filter((m) => m.category === filter);
    return list.filter(matchesAllergen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, allergenFilter]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const renderGrid = (list: MenuItem[]) => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((item) => (
        <DishCard
          key={item.code}
          item={item}
          lang={lang}
          onOpen={setActive}
          T={T}
          allergenFilter={allergenFilter}
          onToggleAllergen={toggleAllergen}
        />
      ))}
    </div>
  );

  const groups: { key: string; label: { sv: string; en: string }; list: MenuItem[] }[] =
    filter === "all"
      ? [
          {
            key: "large",
            label: dict.menu.filters.large,
            list: items.filter((m) => m.category === "large"),
          },
          {
            key: "medium",
            label: dict.menu.filters.medium,
            list: items.filter((m) => m.category === "medium"),
          },
          {
            key: "sides",
            label: dict.menu.filters.sides,
            list: items.filter((m) => m.category === "sides"),
          },
          { key: "vegan", label: dict.menu.filters.vegan, list: items.filter((m) => m.vegan) },
        ]
      : [];

  return (
    <section id="menu" className="relative py-28">
      {/* subtle grid paper backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              {T(dict.menu.kicker)}
            </p>
            <h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">
              {T(dict.menu.title)}
            </h2>
            <p className="mt-5 text-muted-foreground">{T(dict.menu.body)}</p>
          </div>
          <a
            href="https://tildasfoodlab.se"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap text-sm text-muted-foreground underline underline-offset-8 hover:text-foreground transition md:inline-flex"
          >
            {T(dict.menu.fullMenu)} →
          </a>
        </div>

        {/* Filters + Legend */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
          {/* Category filters */}
          <div className="border-b border-border/60 p-4 md:flex md:items-center md:gap-4">
            <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:mb-0 md:shrink-0">
              {lang === "sv" ? "Visa" : "Show"}
            </span>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {filters.map((f) => {
                const activeF = filter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide transition md:text-sm ${
                      activeF
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border/70 text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    {T(f.label)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Allergen filters */}
          <div className="p-4 md:flex md:items-center md:justify-between md:gap-4">
            <div className="md:flex md:items-center md:gap-4">
              <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:mb-0 md:shrink-0">
                {T(dict.menu.legend.hide)}
              </span>
              <div className="flex flex-wrap gap-2">
                {(["N", "E", "M", "G"] as Allergen[]).map((a) => {
                  const on = allergenFilter.includes(a);
                  return (
                    <button
                      key={a}
                      type="button"
                      onClick={() => toggleAllergen(a)}
                      className={`group inline-flex items-center justify-center gap-2 rounded-full px-2.5 py-2 transition ${
                        on ? "bg-muted text-foreground" : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <AllergenTile
                        a={a}
                        lang={lang}
                        active={on}
                        size="lg"
                        className={
                          on
                            ? ""
                            : "group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_12px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
                        }
                      />
                      <span
                        className={`text-xs font-medium transition ${on ? "" : "group-hover:text-primary group-hover:drop-shadow-[0_0_6px_color-mix(in_oklab,var(--primary)_60%,transparent)]"}`}
                      >
                        {ALLERGEN_LABEL[a][lang]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            {allergenFilter.length > 0 && (
              <button
                type="button"
                onClick={() => setAllergenFilter([])}
                className="mt-3 w-full rounded-full border border-border/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground md:mt-0 md:w-auto"
              >
                {lang === "sv" ? "Rensa" : "Clear"}
              </button>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <p className="py-24 text-center text-muted-foreground">{T(dict.menu.labels.empty)}</p>
        ) : filter === "all" ? (
          <div className="space-y-16">
            {groups.map((g) =>
              g.list.length === 0 ? null : (
                <div key={g.key}>
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                      {T(g.label)}
                    </h3>
                    <span className="h-px flex-1 bg-border" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {g.list.length.toString().padStart(2, "0")}
                    </span>
                  </div>
                  {renderGrid(g.list)}
                </div>
              ),
            )}
          </div>
        ) : (
          renderGrid(items)
        )}

        <p className="mt-10 text-center text-xs uppercase tracking-widest text-muted-foreground">
          {T(dict.menu.legend.ask)}{" "}
          <a href="#menu" className="text-primary hover:underline">
            {" "}
            {T(dict.menu.legend.menu)}
          </a>
        </p>
      </div>

      {/* Detail sheet */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 backdrop-blur-md md:items-center"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-t-3xl border border-border bg-card max-md:animate-slide-up md:animate-scale-in md:rounded-3xl"
          >
            {active.image && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
            )}
            <div className="p-8">
              <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                <span>
                  {T(dict.menu.labels.code)} {active.code}
                </span>
                <span className="text-border">·</span>
                <span>{T(dict.menu.filters[active.category])}</span>
                {active.vegan && (
                  <>
                    <span className="text-border">·</span>
                    <span>Vegan</span>
                  </>
                )}
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl tracking-tight md:text-4xl">{active.name}</h3>
                <span className="whitespace-nowrap font-mono text-primary">{active.price}</span>
              </div>
              {active.origin && (
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {T(active.origin)}
                </p>
              )}
              <p className="mt-5 text-muted-foreground">{T(active.desc)}</p>

              {active.allergens.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {T(dict.menu.labels.ingredients)}:
                  </span>
                  {active.allergens.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <AllergenTile a={a} lang={lang} size="md" />
                      {ALLERGEN_LABEL[a][lang]}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-border px-5 py-2 text-sm hover:bg-secondary"
                >
                  {T(dict.menu.labels.close)}
                </button>
                <a
                  href="https://easytable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  {T(dict.nav.book)}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function DishCard({
  item,
  lang,
  onOpen,
  T,
  allergenFilter = [],
  onToggleAllergen,
}: {
  item: MenuItem;
  lang: Lang;
  onOpen: (i: MenuItem) => void;
  T: (v: { sv: string; en: string }) => string;
  allergenFilter?: Allergen[];
  onToggleAllergen?: (a: Allergen) => void;
}) {
  return (
    <button
      onClick={() => onOpen(item)}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 text-left transition hover:border-primary/60 hover:bg-card"
    >
      {item.image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        </div>
      )}

      <div className="flex flex-col p-5">
        {/* corner code */}
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {T(dict.menu.labels.code)} <span className="text-primary">{item.code}</span>
          </span>
          <div className="flex items-center gap-1">
            {item.vegan && (
              <span className="rounded-full border border-primary/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                V
              </span>
            )}
            {item.allergens.map((a) => (
              <AllergenTile
                key={a}
                a={a}
                lang={lang}
                active={allergenFilter.includes(a)}
                onClick={onToggleAllergen}
              />
            ))}
          </div>
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-tight tracking-tight md:text-2xl">
            {item.name}
          </h3>
          <span className="whitespace-nowrap font-mono text-sm text-primary">{item.price}</span>
        </div>
        {item.origin && (
          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {T(item.origin)}
          </p>
        )}
        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{T(item.desc)}</p>

        <div className="mt-auto pt-5">
          <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-muted-foreground transition group-hover:text-primary">
            {T(dict.menu.labels.viewNote)}
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </div>

      {/* hairline accent on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </button>
  );
}
