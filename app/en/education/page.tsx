import { EducationPage } from '../../_components/education-page'
import { getEducationMetadata } from '../../portfolio-metadata'

export const metadata = getEducationMetadata('en')

export default function EnglishEducationPage() {
  return <EducationPage locale="en" />
}
