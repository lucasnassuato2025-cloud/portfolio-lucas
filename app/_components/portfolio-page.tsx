import Image from 'next/image'
import Link from 'next/link'
import {
  externalLinks,
  localeConfig,
  portfolioContent,
  siteUrl,
  type Locale,
} from '../portfolio-content'
import { LanguageSwitcher } from './language-switcher'

const cardAccents = [
  'from-blue-400/20 via-blue-400/5',
  'from-emerald-400/20 via-emerald-400/5',
  'from-violet-400/20 via-violet-400/5',
  'from-rose-400/20 via-rose-400/5',
  'from-amber-400/20 via-amber-400/5',
  'from-cyan-400/20 via-cyan-400/5',
]

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ExternalIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M14 5h5v5M19 5l-8 8M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5M14 4l-4 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {intro ? (
        <p className="max-w-2xl text-base leading-7 text-zinc-400 lg:justify-self-end lg:text-lg lg:leading-8">
          {intro}
        </p>
      ) : null}
    </div>
  )
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = portfolioContent[locale]
  const localePath = localeConfig[locale]

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lucas Nassuato da Silva',
    jobTitle: 'Full Stack Developer',
    url: `${siteUrl}${localePath.home === '/' ? '/' : localePath.home}`,
    image: `${siteUrl}/lucas-premium.png`,
    sameAs: [externalLinks.github, externalLinks.instagram, externalLinks.nassusinfo],
    knowsAbout: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'SaaS', 'CRM', 'UI/UX', 'SEO', 'Web Development'],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lucas Nassuato — Full Stack Developer',
    url: siteUrl,
    inLanguage: localePath.htmlLang,
    author: {
      '@type': 'Person',
      name: 'Lucas Nassuato da Silva',
    },
  }

  return (
    <main lang={localePath.htmlLang} className="site-shell min-h-screen overflow-hidden text-white">
      <a href="#content" className="skip-link">
        {copy.accessibility.skip}
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <div className="site-grid" aria-hidden="true" />
      <div className="site-glow" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#07090d]/88 backdrop-blur-2xl">
        <div className="mx-auto hidden max-w-[1440px] items-center justify-between gap-8 px-8 py-4 lg:flex xl:px-12">
          <Link href={localePath.home} className="group flex min-w-0 items-center gap-3" aria-label="Lucas Nassuato">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.08] text-blue-200 transition group-hover:bg-blue-400/[0.14]">
              <CodeIcon />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold tracking-[-0.01em] text-white">Lucas Nassuato</span>
              <span className="block truncate text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">{copy.header.role}</span>
            </span>
          </Link>

          <nav className="flex items-center gap-7" aria-label={copy.accessibility.mainNav}>
            {copy.nav.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-zinc-400 transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} ariaLabel={copy.accessibility.language} />
            <a
              href={externalLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-blue-100"
            >
              {copy.header.contact}
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 lg:hidden">
          <Link href={localePath.home} className="flex min-w-0 items-center gap-2.5" aria-label="Lucas Nassuato">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.08] text-blue-200">
              <CodeIcon />
            </span>
            <span className="truncate text-sm font-bold">Lucas Nassuato</span>
          </Link>
          <LanguageSwitcher locale={locale} ariaLabel={copy.accessibility.language} compact />
        </div>
        <nav
          className="mx-auto flex max-w-3xl gap-1 overflow-x-auto border-t border-white/[0.05] px-3 py-2 lg:hidden"
          aria-label={copy.accessibility.mainNav}
        >
          {copy.nav.map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold text-zinc-400 transition hover:bg-white/5 hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </header>

      <div id="content">
        <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20 xl:px-12">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap gap-2">
              {copy.hero.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-blue-300/15 bg-blue-400/[0.07] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-blue-100 sm:text-xs">
                  {badge}
                </span>
              ))}
            </div>

            <p className="section-eyebrow mt-7">{copy.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-[2.65rem] font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.8rem] xl:text-[5.35rem]">
              {copy.hero.titleA}{' '}
              <span className="text-gradient">{copy.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              {copy.hero.body}
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a href="#work" className="primary-button">
                {copy.hero.primary}
                <ArrowIcon />
              </a>
              <a href={externalLinks.nassusinfo} target="_blank" rel="noreferrer" className="secondary-button">
                {copy.hero.secondary}
                <ExternalIcon />
              </a>
              <a href={externalLinks.github} target="_blank" rel="noreferrer" className="ghost-button">
                {copy.hero.github}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {copy.metrics.map(([value, label]) => (
                <div key={value} className="metric-card">
                  <p className="text-sm font-bold text-white sm:text-base">{value}</p>
                  <p className="mt-1.5 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-blue-500/10 blur-3xl" aria-hidden="true" />
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d1119] p-2.5 shadow-2xl shadow-black/35 sm:p-3">
                <div className="relative overflow-hidden rounded-[1.25rem] bg-[#0a0d12]">
                  <Image
                    src="/lucas-premium.png"
                    alt={copy.hero.imageAlt}
                    width={1448}
                    height={1086}
                    priority
                    sizes="(min-width: 1024px) 42vw, (min-width: 640px) 80vw, 94vw"
                    className="h-[410px] w-full object-cover object-[50%_33%] sm:h-[540px] lg:h-[650px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(4,6,10,0.12)_55%,rgba(4,6,10,0.96)_100%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-xs">{copy.hero.imageKicker}</p>
                    <p className="mt-2 max-w-lg text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl lg:text-3xl">{copy.hero.imageTitle}</p>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-300 sm:text-base">{copy.hero.imageBody}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.07] bg-white/[0.018]">
          <div className="mx-auto flex max-w-[1440px] gap-7 overflow-x-auto px-4 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 sm:px-6 sm:text-xs lg:flex-wrap lg:justify-center lg:px-8 xl:px-12">
            {copy.strip.map((item) => (
              <span key={item} className="shrink-0">{item}</span>
            ))}
          </div>
        </section>

        <section id="work" className="section-wrap scroll-mt-28">
          <SectionHeading eyebrow={copy.work.eyebrow} title={copy.work.title} intro={copy.work.intro} />
          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
            {copy.work.items.map((project, index) => (
              <article key={project.name} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1017]/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] sm:p-7">
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${cardAccents[index]} to-transparent`} aria-hidden="true" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-zinc-400 sm:text-xs">
                    {project.status}
                  </span>
                  <span className="text-xs font-semibold text-zinc-600">0{index + 1}</span>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">{project.category}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base">{project.description}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{project.impact}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-lg border border-white/[0.08] bg-black/20 px-2.5 py-1.5 text-xs font-medium text-zinc-400">{item}</span>
                  ))}
                </div>
                <a href={externalLinks.whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:text-blue-200">
                  {copy.work.action}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section-wrap scroll-mt-28 border-y border-white/[0.06] bg-white/[0.014]">
          <SectionHeading eyebrow={copy.services.eyebrow} title={copy.services.title} intro={copy.services.intro} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.services.items.map(([number, title, description, deliverables]) => (
              <article key={number} className="surface-card p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold tracking-[0.18em] text-blue-300">{number}</span>
                  <span className="h-px flex-1 bg-white/[0.07]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {deliverables.map((item) => (
                    <span key={item} className="rounded-lg bg-white/[0.035] px-2.5 py-1.5 text-xs font-semibold text-zinc-500">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section-wrap scroll-mt-28">
          <SectionHeading eyebrow={copy.stack.eyebrow} title={copy.stack.title} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {copy.stack.groups.map(([title, items]) => (
              <article key={title} className="surface-card p-5 sm:p-7">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-300">{title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2 text-sm font-medium text-zinc-400 transition hover:border-blue-300/20 hover:text-white">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap border-y border-white/[0.06] bg-white/[0.014]">
          <SectionHeading eyebrow={copy.process.eyebrow} title={copy.process.title} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {copy.process.items.map(([title, description], index) => (
              <article key={title} className="group rounded-2xl border border-white/[0.07] bg-[#0a0e14]/70 p-5 sm:p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.07] text-xs font-bold text-blue-200">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500 sm:leading-7">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section-wrap scroll-mt-28">
          <SectionHeading eyebrow={copy.journey.eyebrow} title={copy.journey.title} />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {copy.journey.items.map(([label, title, description], index) => (
              <article key={label} className="relative rounded-2xl border border-white/[0.08] bg-[#0c1017]/80 p-5 sm:p-7">
                <span className="absolute right-5 top-5 text-4xl font-black tracking-[-0.06em] text-white/[0.035] sm:text-5xl">0{index + 1}</span>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">{label}</p>
                <h3 className="mt-3 max-w-lg text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl">{title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">{description}</p>
              </article>
            ))}
          </div>

          <article className="mt-5 grid gap-6 overflow-hidden rounded-3xl border border-blue-300/15 bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(10,14,20,0.92)_48%,rgba(16,185,129,0.06))] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="section-eyebrow">{copy.education.eyebrow}</p>
              <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">{copy.education.title}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">{copy.education.body}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300">{copy.education.status}</p>
            </div>
            <Link href={localePath.education} className="secondary-button w-full lg:w-auto">
              {copy.education.action}
              <ArrowIcon />
            </Link>
          </article>
        </section>

        <section id="contact" className="scroll-mt-28 px-4 pb-28 pt-4 sm:px-6 sm:pb-28 lg:px-8 lg:pb-20 xl:px-12">
          <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-blue-300/15 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.23),transparent_35%),radial-gradient(circle_at_90%_70%,rgba(16,185,129,0.12),transparent_28%),#0b0f17] p-6 sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="section-eyebrow">{copy.contact.eyebrow}</p>
                <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{copy.contact.title}</h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">{copy.contact.body}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-zinc-500">{copy.contact.availability}</p>
              </div>
              <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:w-[360px] lg:grid-cols-1">
                <a href={externalLinks.whatsapp} target="_blank" rel="noreferrer" className="primary-button">
                  {copy.contact.whatsapp}
                  <ArrowIcon />
                </a>
                <a href={externalLinks.email} className="secondary-button">{copy.contact.email}</a>
                <a href={externalLinks.github} target="_blank" rel="noreferrer" className="ghost-button sm:col-span-2 lg:col-span-1">
                  {copy.contact.github}
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/[0.07] px-4 py-8 pb-28 sm:px-6 lg:px-8 lg:pb-8 xl:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-zinc-300">Lucas Nassuato da Silva</p>
            <p className="mt-1 text-xs">{copy.footer.tagline}</p>
          </div>
          <p className="text-xs">{copy.footer.rights}</p>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#0a0d12]/94 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl lg:hidden">
        <a href="#work" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm font-bold text-zinc-200">
          {copy.mobileDock.work}
        </a>
        <a href={externalLinks.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-black">
          {copy.mobileDock.contact}
          <ArrowIcon />
        </a>
      </div>
    </main>
  )
}
