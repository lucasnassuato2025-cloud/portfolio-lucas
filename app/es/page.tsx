import { PortfolioPage } from '../_components/portfolio-page'
import { getPortfolioMetadata } from '../portfolio-metadata'

export const metadata = getPortfolioMetadata('es')

export default function SpanishPortfolioPage() {
  return <PortfolioPage locale="es" />
}
