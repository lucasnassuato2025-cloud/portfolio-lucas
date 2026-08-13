import './globals.css'
import type { Metadata } from 'next'

const siteUrl = 'https://portfolio-lucas.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lucas Nassuato | Desenvolvedor Full Stack | Next.js e React',
    template: '%s | Lucas Nassuato',
  },
  description:
    'Portfólio profissional de Lucas Nassuato da Silva, desenvolvedor Full Stack especializado em Next.js, React, TypeScript, sites profissionais, landing pages, sistemas web, UI/UX e performance digital.',
  applicationName: 'Portfólio Lucas Nassuato',
  authors: [{ name: 'Lucas Nassuato da Silva', url: siteUrl }],
  creator: 'Lucas Nassuato da Silva',
  publisher: 'Lucas Nassuato da Silva',
  category: 'technology',
  keywords: [
    'Lucas Nassuato',
    'Lucas Nassuato da Silva',
    'desenvolvedor full stack',
    'full stack developer',
    'desenvolvedor Next.js',
    'desenvolvedor React',
    'TypeScript',
    'JavaScript',
    'web design',
    'UI UX',
    'criação de sites profissionais',
    'landing pages',
    'sistemas web',
    'portfólio desenvolvedor',
    'desenvolvedor web Brasil',
    'desenvolvedor web São Paulo',
    'desenvolvedor web Guarujá',
    'Nassusinfo',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Lucas Nassuato | Desenvolvedor Full Stack',
    description:
      'Desenvolvimento de sites, landing pages e sistemas web com Next.js, React, TypeScript, UI/UX e foco em performance.',
    url: siteUrl,
    siteName: 'Portfólio Lucas Nassuato',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/lucas-premium.png',
        width: 1448,
        height: 1086,
        alt: 'Lucas Nassuato da Silva — Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Nassuato | Desenvolvedor Full Stack',
    description:
      'Next.js, React, TypeScript, sites profissionais, landing pages, sistemas web e UI/UX.',
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
