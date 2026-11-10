import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
}

export default function Reveal({ children, className = '' }: RevealProps) {
  const { revealTarget, shown } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={revealTarget}
      className={`reveal ${shown ? 'reveal-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
