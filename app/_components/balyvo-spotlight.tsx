import type { Locale } from '../portfolio-content'

type BalyvoCopy = {
  eyebrow: string
  title: string
  description: string
  status: string
  impact: string
  languageLabel: string
}

const content: Record<Locale, BalyvoCopy> = {
  pt: {
    eyebrow: 'Novo projeto mobile',
    title: 'Balyvo — nutrição e acompanhamento direto no Android',
    description:
      'Produto próprio em desenvolvimento para controle de refeições, água, calorias, macronutrientes, evolução e rotina alimentar, com recursos inteligentes executados no próprio aparelho.',
    status: 'Produto próprio • Android nativo • Em evolução',
    impact:
      'Câmera com ML Kit on-device, experiência PT-BR/EN, estrutura Balyvo Pro com Google Play Billing, Gradle e CI/CD.',
    languageLabel: 'Linguagem principal',
  },
  en: {
    eyebrow: 'New mobile project',
    title: 'Balyvo — nutrition and progress tracking on Android',
    description:
      'An owned Android product in development for meals, water, calories, macros, progress and nutrition routines, with smart features running directly on the device.',
    status: 'Owned product • Native Android • Evolving',
    impact:
      'On-device camera analysis with ML Kit, PT-BR/EN experience, Balyvo Pro structure with Google Play Billing, Gradle and CI/CD.',
    languageLabel: 'Main language',
  },
  es: {
    eyebrow: 'Nuevo proyecto mobile',
    title: 'Balyvo — nutrición y seguimiento directamente en Android',
    description:
      'Producto propio en desarrollo para comidas, agua, calorías, macronutrientes, evolución y rutina nutricional, con recursos inteligentes ejecutados en el dispositivo.',
    status: 'Producto propio • Android nativo • En evolución',
    impact:
      'Cámara con ML Kit on-device, experiencia PT-BR/EN, estructura Balyvo Pro con Google Play Billing, Gradle y CI/CD.',
    languageLabel: 'Lenguaje principal',
  },
}

const chips = ['Java', 'Android nativo', 'ML Kit', 'Google Play Billing', 'Gradle', 'GitHub Actions']

export function BalyvoSpotlight({ locale }: { locale: Locale }) {
  const copy = content[locale]

  return (
    <section className="border-b border-white/[0.07] bg-[#07090d] text-white" aria-labelledby="balyvo-title">
      <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-400/15 bg-[linear-gradient(135deg,rgba(16,185,129,0.11),rgba(12,16,23,0.96)_48%,rgba(59,130,246,0.08))] p-5 shadow-2xl shadow-black/20 sm:p-6 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-300/70 via-blue-300/30 to-transparent" aria-hidden="true" />

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-100 sm:text-xs">
                {copy.eyebrow}
              </span>
              <span className="text-xs font-semibold text-zinc-500">{copy.status}</span>
            </div>

            <h2 id="balyvo-title" className="mt-4 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
              {copy.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">{copy.description}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">{copy.impact}</p>
          </div>

          <div className="mt-5 min-w-0 lg:mt-0 lg:max-w-[430px] lg:text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
              {copy.languageLabel}: <span className="text-emerald-200">Java</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2 lg:justify-end">
              {chips.map((chip) => (
                <span key={chip} className="rounded-lg border border-white/[0.09] bg-black/25 px-2.5 py-1.5 text-xs font-semibold text-zinc-300">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
