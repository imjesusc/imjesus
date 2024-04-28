import { ProjectCard } from './project-card'

const projectsData = {
  projects: [
    {
      name: 'MySlug',
      description: `Construido con <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://reactjs.org/" target="_blank">React</a></code>, <a href="https://turso.tech/" target="_blank">Turso</a> y <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>. MySlug te ofrece una interfaz minimalista y rápida para acortar tus URL de manera sencilla y eficiente.
      `,
      link: 'https://my-slug.vercel.app/'
    },
    {
      name: 'JS Runner',
      description: `Web para mejorar tus habilidades en JavaScript resolviendo retos de código de forma interactiva. Construido con <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a> y <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.`,
      link: 'https://js-runner.vercel.app/'
    },
    {
      name: 'Spotify Clone',
      description: `Clone de Spotify, construido con <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>, <a href="https://docs.pmnd.rs/zustand/getting-started/introduction" target="_blank">Zustand</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind</a> y la <a href="https://console.cloud.google.com/marketplace/product/google/youtube.googleapis.com" target="_blank">API de YouTube</a>. Inspirado en
      <a target="_blank" href="https://spotify-astro-transitions.vercel.app/">Spotify Clone with Astro View Transitions</a>. `,
      link: 'https://spotify-clone-imjesusc.vercel.app/'
    }
  ]
}

export const Projects = () => {
  return (
    <main className="flex flex-col gap-4">
      <header>
        <h2 className="text-base text-muted-foreground">Proyectos</h2>
      </header>

      <div className="grid gap-4 tablet:grid-cols-3">
        {projectsData.projects.map((project) => (
          <ProjectCard
            key={project.name}
            projectLink={project.link}
            projectDescription={project.description}
            projectName={project.name}
          />
        ))}
      </div>
    </main>
  )
}
