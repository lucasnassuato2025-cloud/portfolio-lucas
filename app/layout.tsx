import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lucas Nassuato | Desenvolvedor Web, Apps e Sistemas',
  description:
    'Desenvolvedor especializado em criação de sites, aplicativos para Play Store e App Store, sistemas web, landing pages premium e soluções digitais modernas para empresas, startups e pequenos negócios.',
  keywords: [
    'Lucas Nassuato',
    'desenvolvedor web',
    'criação de sites',
    'aplicativos mobile',
    'sistemas web',
    'portfolio premium',
    'landing pages',
    'sites para empresas',
    'Play Store',
    'App Store'
  ],
  openGraph: {
    title: 'Lucas Nassuato | Desenvolvedor Web, Apps e Sistemas',
    description:
      'Criação de sites, apps, sistemas web e soluções digitais modernas.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
