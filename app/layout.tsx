import './globals.css'
import type { Metadata } from 'next'

const siteUrl = 'https://portfolio-lucas.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lucas Nassuato | Dev Fullstack, Web Design e UI/UX',
    template: '%s | Lucas Nassuato',
  },
  description:
    'Portfólio de Lucas Nassuato da Silva: desenvolvimento fullstack, web design, UI/UX, sites modernos, landing pages, sistemas web e performance digital.',
  applicationName: 'Portfolio Lucas Nassuato',
  authors: [{ name: 'Lucas Nassuato da Silva', url: siteUrl }],
  creator: 'Lucas Nassuato da Silva',
  publisher: 'Lucas Nassuato da Silva',
  keywords: [
    'Lucas Nassuato',
    'Lucas Nassuato da Silva',
    'desenvolvedor fullstack',
    'web design',
    'UI UX',
    'performance digital',
    'criação de sites',
    'landing pages',
    'sistemas web',
    'portfólio desenvolvedor',
    'desenvolvedor web Brasil',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Lucas Nassuato | Dev Fullstack, Web Design e UI/UX',
    description:
      'Portfólio de desenvolvimento web, interfaces premium, sites modernos e sistemas com foco em performance digital.',
    url: siteUrl,
    siteName: 'Lucas Nassuato',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/lucas-premium.png',
        width: 1448,
        height: 1086,
        alt: 'Lucas Nassuato da Silva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Nassuato | Dev Fullstack, Web Design e UI/UX',
    description:
      'Sites modernos, UI/UX, sistemas web e performance digital com visual premium.',
    images: ['/lucas-premium.png'],
  },
  robots: {
    index: true,
    follow: true,
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
