import { copyToClipboard } from '@/utilities/copy-to-clipboard'
import { useState } from 'react'

export function useCopy() {
  const [isCopy, setIsCopy] = useState(false)

  const handleCopy = (textToCopy) => (event) => {
    event.preventDefault()
    setIsCopy(true)
    copyToClipboard(textToCopy)
    setTimeout(() => {
      setIsCopy(false)
    }, 2000)
  }
  return { isCopy, handleCopy }
}
