import { useCopy } from '@/hooks/useCopy'
import { cn } from '@/utilities/cn'
import { CheckIcon } from '@radix-ui/react-icons'
import ExternalLink from '../ui/external-link'
import { Mdx } from '../ui/mdx'

const meData = {
  name: 'Jesús Cerdán',
  role: 'Desarrollador Front-end',
  aboutMe: `Hola, mi nombre es Jesús, soy desarrollador <a target="_blank" href="https://github.com/imjesusc">Front-end</a> . Especializado en el desarrollo de interfaces de aplicaciones web centradas en el usuario, combinando el minimalismo con funcionalidad.`,
  email: 'imjesus.ds@gmail.com',
  socials: [
    {
      name: ' Currículum',
      url: '/jesus-cerdan-resume.pdf'
    },
    {
      name: 'Github',
      url: 'https://github.com/imjesusc'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/imjesus/'
    }
  ]
}

export default function Me() {
  const { isCopy, handleCopy } = useCopy()

  return (
    <section className="flex flex-col gap-4">
      <header data-animate className="mb-4">
        <h1 className="font-geist text-base font-medium" data-animate>
          {meData.name}
        </h1>
        <h2 className="text-sm text-muted-foreground" data-animate>
          {meData.role}
        </h2>
      </header>

      <div style={{ '--stagger': '1' }} data-animate>
        <Mdx className="max-w-[60ch] text-pretty  text-base leading-7 text-foreground">{meData.aboutMe}</Mdx>
      </div>

      <footer data-animate style={{ '--stagger': '2' }}>
        <ul className="flex flex-wrap gap-4">
          {meData.socials.map((social) => (
            <li key={social.name}>
              <ExternalLink title={`Ir al ${social.name} de ${meData.name}`} href={social.url}>
                {social.name}
              </ExternalLink>
            </li>
          ))}

          <li>
            <button
              className={cn(
                'relative underline decoration-muted-foreground/50 decoration-1 ',
                'underline-offset-[3px] hover:text-muted-foreground'
              )}
              onClick={handleCopy(meData.email)}
            >
              {meData.email}
              {isCopy && (
                <span className="absolute -top-4 right-4 flex items-center text-sm text-white">
                  <CheckIcon className="h-4 w-4" />
                  Copied
                </span>
              )}
            </button>
          </li>
        </ul>
      </footer>
    </section>
  )
}
