import { BalyvoSpotlight } from '../_components/balyvo-spotlight'
import { PortfolioPage } from '../_components/portfolio-page'
import { getPortfolioMetadata } from '../portfolio-metadata'

export const metadata = getPortfolioMetadata('en')

export default function EnglishPortfolioPage() {
  return (
    <>
      <BalyvoSpotlight locale="en" />
      <PortfolioPage locale="en" />
    </>
  )
}
