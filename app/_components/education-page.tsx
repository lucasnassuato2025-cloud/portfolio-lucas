import Link from 'next/link'
import { localeConfig, portfolioContent, type Locale } from '../portfolio-content'
import { LanguageSwitcher } from './language-switcher'

const directionHeadlines: Record<Locale, string> = {
  pt: 'Full Stack + fundamentos sólidos.',
  en: 'Full Stack + solid foundations.',
  es: 'Full Stack + fundamentos sólidos.',
}

const educationTags: Record<Locale, string[]> = {
  pt: ['Algoritmos', 'Front-end', 'Banco de dados', 'Design', 'Software'],
  en: ['Algorithms', 'Front-end', 'Database', 'Design', 'Software'],
  es: ['Algoritmos', 'Front-end', 'Base de datos', 'Diseño', 'Software'],
}

export function EducationPage({ locale }: { locale: Locale }) {
  const copy = portfolioContent[locale]
  const config = localeConfig[locale]
  const page = copy.educationPage

  return (
    <main lang={config.htmlLang} className="site-shell min-h-screen overflow-hidden px-4 py-6 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="site-grid" aria-hidden="true" />
      <div className="site-glow" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href={config.home} className="ghost-button">
            <span aria-hidden="true">←</span>
            {page.back}
          </Link>
          <LanguageSwitcher locale={locale} ariaLabel={copy.accessibility.language} context="education" />
        </div>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-blue-300/15 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.2),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(16,185,129,0.09),transparent_30%),#0b0f17] p-6 sm:p-10 lg:p-14">
          <p className="section-eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
          <p className="mt-5 text-lg font-semibold text-blue-100">{page.school}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">{page.intro}</p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              [page.statusLabel, page.status],
              [page.startLabel, page.start],
              [page.durationLabel, page.duration],
            ].map(([label, value]) => (
              <div key={label} className="surface-card p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">{label}</p>
                <p className="mt-2 text-xl font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-card p-6 sm:p-8">
            <p className="section-eyebrow">{page.subjectsTitle}</p>
            <div className="mt-6 grid gap-3">
              {page.subjects.map((subject, index) => (
                <div key={subject} className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-black/20 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/[0.07] text-xs font-bold text-blue-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-sm font-semibold leading-6 text-zinc-300 sm:text-base">{subject}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card p-6 sm:p-8">
            <p className="section-eyebrow">{page.directionTitle}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">{directionHeadlines[locale]}</h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">{page.directionBody}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {educationTags[locale].map((item) => (
                <span key={item} className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-semibold text-zinc-400">{item}</span>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
