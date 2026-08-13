import './globals.css'
import type { Metadata } from 'next'

const siteUrl = 'https://portfolio-lucas.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lucas Nassuato | Full Stack Developer • SaaS, React e Next.js',
    template: '%s | Lucas Nassuato',
  },
  description:
    'Portfólio profissional de Lucas Nassuato da Silva: desenvolvimento Full Stack, SaaS, CRM, Next.js, React, TypeScript, Node.js, sistemas web, sites profissionais, UI/UX, SEO, integrações e deploy.',
  applicationName: 'Portfólio Lucas Nassuato',
  authors: [{ name: 'Lucas Nassuato da Silva', url: siteUrl }],
  creator: 'Lucas Nassuato da Silva',
  publisher: 'Lucas Nassuato da Silva',
  category: 'technology',
  classification: 'Desenvolvimento de software, aplicações web, SaaS e sistemas',
  keywords: [
    'Lucas Nassuato',
    'Lucas Nassuato da Silva',
    'Full Stack Developer',
    'desenvolvedor full stack',
    'desenvolvedor Next.js',
    'desenvolvedor React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'SaaS',
    'CRM',
    'sistemas web',
    'desenvolvimento de software',
    'UI UX',
    'web design',
    'landing pages',
    'criação de sites profissionais',
    'SEO técnico',
    'GitHub Actions',
    'Vercel',
    'PostgreSQL',
    'automação web',
    'integração de APIs',
    'Nassusinfo',
    'portfólio desenvolvedor',
    'desenvolvedor web Brasil',
    'freelancer desenvolvedor web',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Lucas Nassuato | Full Stack Developer',
    description:
      'Sites, SaaS, CRM, sistemas web, Next.js, React, TypeScript, UI/UX, integrações e deploy — do briefing à publicação.',
    url: siteUrl,
    siteName: 'Portfólio Lucas Nassuato',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/lucas-premium.png',
        width: 1448,
        height: 1086,
        alt: 'Lucas Nassuato da Silva — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Nassuato | Full Stack Developer',
    description:
      'SaaS, CRM, Next.js, React, TypeScript, sistemas web, UI/UX, integrações e deploy.',
    images: ['/lucas-premium.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
