import { EducationPage } from '../../_components/education-page'
import { getEducationMetadata } from '../../portfolio-metadata'

export const metadata = getEducationMetadata('es')

export default function SpanishEducationPage() {
  return <EducationPage locale="es" />
}
