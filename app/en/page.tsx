import { PortfolioPage } from '../_components/portfolio-page'
import { getPortfolioMetadata } from '../portfolio-metadata'

export const metadata = getPortfolioMetadata('en')

export default function EnglishPortfolioPage() {
  return <PortfolioPage locale="en" />
}
