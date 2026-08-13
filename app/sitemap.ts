import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-lucas.vercel.app',
      lastModified: new Date('2026-08-12'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://portfolio-lucas.vercel.app/formacao',
      lastModified: new Date('2026-08-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
