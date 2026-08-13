import './globals.css'
import type { Metadata, Viewport } from 'next'
import { LinkedInLink } from './_components/linkedin-link'
import { siteUrl } from './portfolio-content'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lucas Nassuato | Full Stack Developer',
    template: '%s | Lucas Nassuato',
  },
  description:
    'Portfólio profissional de Lucas Nassuato da Silva: Full Stack Developer, SaaS, CRM, Next.js, React, TypeScript, UI/UX, integrações, SEO e deploy.',
  applicationName: 'Lucas Nassuato — Portfolio',
  authors: [{ name: 'Lucas Nassuato da Silva', url: siteUrl }],
  creator: 'Lucas Nassuato da Silva',
  publisher: 'Lucas Nassuato da Silva',
  category: 'technology',
  keywords: [
    'Lucas Nassuato',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'SaaS',
    'CRM',
    'UI UX',
    'web development',
    'desenvolvedor web',
    'desarrollador web',
    'SEO',
    'Nassusinfo',
    'portfolio developer',
    'LinkedIn Lucas Nassuato',
  ],
  icons: {
    icon: '/icon.svg',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#07090d',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <LinkedInLink />
      </body>
    </html>
  )
}
