import { cn } from '@/utilities/cn'

export const ExternalLink = ({ href, className, children, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'gap-2 text-sm underline decoration-muted-foreground/50 decoration-1',
        'underline-offset-[3px] transition-colors hover:decoration-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
