import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nassusinfo.netlify.app',
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
