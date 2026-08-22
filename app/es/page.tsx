import { BalyvoSpotlight } from '../_components/balyvo-spotlight'
import { PortfolioPage } from '../_components/portfolio-page'
import { getPortfolioMetadata } from '../portfolio-metadata'

export const metadata = getPortfolioMetadata('es')

export default function SpanishPortfolioPage() {
  return (
    <>
      <BalyvoSpotlight locale="es" />
      <PortfolioPage locale="es" />
    </>
  )
}
