import type { Metadata } from 'next'
import { localeConfig, portfolioContent, siteUrl, type Locale } from './portfolio-content'

const languageAlternates = {
  'pt-BR': `${siteUrl}/`,
  en: `${siteUrl}/en`,
  es: `${siteUrl}/es`,
}

export function getPortfolioMetadata(locale: Locale): Metadata {
  const copy = portfolioContent[locale]
  const config = localeConfig[locale]
  const canonical = `${siteUrl}${config.home === '/' ? '/' : config.home}`

  return {
    title: { absolute: copy.meta.title },
    description: copy.meta.description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: canonical,
      siteName: 'Lucas Nassuato — Full Stack Developer',
      type: 'website',
      locale: config.htmlLang.replace('-', '_'),
      images: [
        {
          url: '/lucas-premium.png',
          width: 1448,
          height: 1086,
          alt: copy.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.meta.title,
      description: copy.meta.description,
      images: ['/lucas-premium.png'],
    },
  }
}

export function getEducationMetadata(locale: Locale): Metadata {
  const copy = portfolioContent[locale]
  const config = localeConfig[locale]
  const canonical = `${siteUrl}${config.education}`
  const title = `${copy.educationPage.title} | Lucas Nassuato`

  return {
    title: { absolute: title },
    description: copy.educationPage.intro,
    alternates: {
      canonical,
      languages: {
        'pt-BR': `${siteUrl}${localeConfig.pt.education}`,
        en: `${siteUrl}${localeConfig.en.education}`,
        es: `${siteUrl}${localeConfig.es.education}`,
      },
    },
    openGraph: {
      title,
      description: copy.educationPage.intro,
      url: canonical,
      type: 'website',
      siteName: 'Lucas Nassuato — Full Stack Developer',
      locale: config.htmlLang.replace('-', '_'),
    },
  }
}
