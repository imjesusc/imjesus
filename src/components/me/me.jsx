import { Tooltip } from '@nextui-org/tooltip'
import { ExternalLink } from '../ui/external-link'

const meData = {
  name: 'Jesús Cerdán',
  role: 'Desarrollador Frontend',
  aboutMe: `Hola, mi nombre es Jesús, soy desarrollador Front-end.\nEspecializado en el desarrollo de interfaces de aplicaciones web centradas en el usuario,\ncombinando el minimalismo con funcionalidad.`,
  socials: [
    {
      name: 'Frontend Developer',
      url: '#'
    },
    {
      name: 'Github',
      url: '#'
    },
    {
      name: 'LinkedIn',
      url: '#'
    },
    {
      name: 'Correo Electrónico',
      url: '#'
    }
  ]
}

export default function Me() {
  return (
    <section className="flex flex-col gap-4">
      <header>
        <h1 className="text-lg font-semibold ">{meData.name}</h1>
        <h2 className="text-sm text-muted-foreground">{meData.role}</h2>
      </header>

      <div>
        <p className="max-w-[60ch] text-pretty font-geist text-base">{meData.aboutMe}</p>
      </div>

      <footer>
        <ul className="flex gap-4">
          {meData.socials.map((social) => (
            <li key={social.name}>
              <Tooltip
                showArrow={true}
                classNames={{
                  base: [
                    // arrow color
                    'before:bg-neutral-400 '
                  ],
                  content: ['px-3 py-1.5 shadow-xl', 'text-sm bg-background border rounded-lg']
                }}
                content={`Ir a mi ${social.name === 'Frontend Developer' ? 'Curriculum' : social.name}`}
              >
                <ExternalLink href={social.url}>{social.name}</ExternalLink>
              </Tooltip>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  )
}
