import { Connect } from '@/components/connect/connect'
import Me from '@/components/me/me'
import { Projects } from '@/components/projects/projects'

export default function RootPage() {
  return (
    <div>
      <div className="blur" aria-hidden="true"></div>
      <div className="container flex flex-col gap-16 py-16 tablet:py-24">
        <Me />
        <Projects />
        <Connect />
      </div>
      <div className="blur" aria-hidden="true"></div>
    </div>
  )
}
