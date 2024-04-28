import ExternalLink from '../ui/external-link'

const connectData = {
  email: 'imjesus.ds@gmail.com',
  socials: [
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

export const Connect = () => {
  return (
    <main className="flex flex-col gap-4" data-animate style={{ '--stagger': '6' }}>
      <header>
        <h2 className="text-base text-muted-foreground">Contactos</h2>
      </header>

      <ul className="grid gap-3">
        {connectData.socials.map((social) => (
          <li key={social.name}>
            <p className="flex items-center gap-1">
              <span>{social.name}:</span>
              <ExternalLink title={`Ir al ${social.name} de  Jesús Cerdán`} href={social.url}>
                {social.name === 'LinkedIn' ? 'Conectar' : social.url}
              </ExternalLink>
            </p>
          </li>
        ))}

        <li>
          <p className="flex items-center gap-3">
            <span>Email:</span>
            <ExternalLink href={`mailto:${connectData.email}`}>{connectData.email}</ExternalLink>
          </p>
        </li>
      </ul>
    </main>
  )
}
