import './globals.css'
import type { Metadata } from 'next'

const siteUrl = 'https://nassusinfo.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lucas Nassuato | Sites, Apps e Sistemas Web',
    template: '%s | Lucas Nassuato',
  },
  description:
    'Desenvolvimento de sites profissionais, landing pages, aplicativos e sistemas web para empresas, pequenos negócios e marcas que querem vender melhor no digital.',
  applicationName: 'Portfolio Lucas Nassuato',
  authors: [{ name: 'Lucas Nassuato da Silva', url: siteUrl }],
  creator: 'Lucas Nassuato da Silva',
  publisher: 'Lucas Nassuato da Silva',
  keywords: [
    'Lucas Nassuato',
    'desenvolvedor web',
    'criação de sites',
    'aplicativos mobile',
    'sistemas web',
    'portfólio premium',
    'landing pages',
    'sites para empresas',
    'desenvolvedor em Santos',
    'Play Store',
    'App Store',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Lucas Nassuato | Sites, Apps e Sistemas Web',
    description:
      'Portfólio de desenvolvimento web, apps, sistemas e landing pages com visual premium, performance e foco comercial.',
    url: siteUrl,
    siteName: 'Lucas Nassuato',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/lucas-premium.png',
        width: 1448,
        height: 1086,
        alt: 'Lucas Nassuato',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Nassuato | Sites, Apps e Sistemas Web',
    description:
      'Sites, apps, sistemas e landing pages com visual premium e foco em resultado.',
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
