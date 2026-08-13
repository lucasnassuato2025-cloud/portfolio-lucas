import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nassus.com.br',
      lastModified: new Date('2026-08-13'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://nassus.com.br/formacao',
      lastModified: new Date('2026-08-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
