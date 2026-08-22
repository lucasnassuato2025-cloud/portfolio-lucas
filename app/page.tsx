import { BalyvoSpotlight } from './_components/balyvo-spotlight'
import { PortfolioPage } from './_components/portfolio-page'
import { getPortfolioMetadata } from './portfolio-metadata'

export const metadata = getPortfolioMetadata('pt')

export default function HomePage() {
  return (
    <>
      <BalyvoSpotlight locale="pt" />
      <PortfolioPage locale="pt" />
    </>
  )
}
