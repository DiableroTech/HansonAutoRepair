import { logo } from '../content/photos'
import { site } from '../content/site'

type LogoMarkProps = {
  className?: string
}

/** Icon + wordmark in the header; parent link supplies the accessible name. */
export function LogoMark({ className = 'h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20' }: LogoMarkProps) {
  return <img src={logo.src} alt="" className={`shrink-0 object-contain ${className}`} decoding="async" />
}

type LogoLockupProps = {
  className?: string
}

/** Full logo for About, Contact, and similar sections. */
export function LogoLockup({ className = 'h-28 w-auto max-w-[240px] sm:h-32' }: LogoLockupProps) {
  return (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`object-contain ${className}`}
      loading="lazy"
      decoding="async"
    />
  )
}

export function LogoStrip() {
  return (
    <div className="flex flex-col items-center text-center">
      <LogoLockup />
      <p className="mt-4 text-sm italic text-mute">{site.tagline}</p>
    </div>
  )
}
