import { PortfolioPage } from './_components/portfolio-page'
import { getPortfolioMetadata } from './portfolio-metadata'

export const metadata = getPortfolioMetadata('pt')

export default function HomePage() {
  return <PortfolioPage locale="pt" />
}
