import type { MetadataRoute } from 'next'
import { localeConfig, siteUrl } from './portfolio-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-13')

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': `${siteUrl}/`,
          en: `${siteUrl}${localeConfig.en.home}`,
          es: `${siteUrl}${localeConfig.es.home}`,
        },
      },
    },
    {
      url: `${siteUrl}${localeConfig.en.home}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}${localeConfig.es.home}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}${localeConfig.pt.education}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteUrl}${localeConfig.en.education}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}${localeConfig.es.education}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
