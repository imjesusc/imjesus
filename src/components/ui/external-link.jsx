import { cn } from '@/utilities/cn'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { forwardRef } from 'react'

const ExternalLink = forwardRef(({ href, className, showArrow, children, ...props }, ref) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'flex cursor-pointer items-center gap-1 underline decoration-muted-foreground/50 decoration-1',
        'underline-offset-[3px] transition-colors hover:decoration-muted-foreground',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      {showArrow && <ArrowTopRightIcon className="h-4 w-4 text-muted-foreground/50" />}
    </a>
  )
})

ExternalLink.displayName = 'ExternalLink'

export default ExternalLink
