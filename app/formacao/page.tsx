import { EducationPage } from '../_components/education-page'
import { getEducationMetadata } from '../portfolio-metadata'

export const metadata = getEducationMetadata('pt')

export default function FormacaoPage() {
  return <EducationPage locale="pt" />
}
