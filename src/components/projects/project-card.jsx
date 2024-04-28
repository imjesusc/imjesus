import ExternalLink from '../ui/external-link'
import { Mdx } from '../ui/mdx'

export const ProjectCard = ({ projectLink, projectDescription, projectName }) => {
  return (
    <article>
      <ExternalLink href={projectLink} showArrow>
        {projectName}
      </ExternalLink>
      <Mdx className="text-balance text-foreground/70">{projectDescription}</Mdx>
    </article>
  )
}
