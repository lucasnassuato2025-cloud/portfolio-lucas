import Link from 'next/link'
import { localeConfig, type Locale } from '../portfolio-content'

export function LanguageSwitcher({
  locale,
  ariaLabel,
  compact = false,
}: {
  locale: Locale
  ariaLabel: string
  compact?: boolean
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className="inline-flex items-center rounded-full border border-white/10 bg-black/20 p-1"
    >
      {(Object.keys(localeConfig) as Locale[]).map((item) => {
        const active = item === locale
        const config = localeConfig[item]

        return (
          <Link
            key={item}
            href={config.home}
            hrefLang={config.htmlLang}
            aria-current={active ? 'page' : undefined}
            title={config.longLabel}
            className={`rounded-full font-bold transition ${
              compact ? 'px-2.5 py-1.5 text-[11px]' : 'px-3 py-1.5 text-xs'
            } ${
              active
                ? 'bg-white text-black shadow-sm'
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            {config.label}
          </Link>
        )
      })}
    </nav>
  )
}
