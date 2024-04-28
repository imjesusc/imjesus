import { cn } from '@/utilities/cn'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const Mdx = ({ className, children }) => {
  return (
    <Markdown rehypePlugins={[rehypeRaw]} className={cn(className)}>
      {children}
    </Markdown>
  )
}
