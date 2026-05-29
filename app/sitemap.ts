import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-lucas.vercel.app',
      lastModified: new Date('2026-05-29'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
