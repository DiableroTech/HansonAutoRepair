import { useEffect, useState } from 'react'
import type { SitePhoto as SitePhotoMeta } from '../content/photos'

type SitePhotoProps = {
  src: string
  alt: string
  className?: string
}

export function SitePhoto({ src, alt, className = '' }: SitePhotoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`block h-full w-full object-cover ${className}`.trim()}
      loading="lazy"
      decoding="async"
    />
  )
}

type MediaPlaceholderProps = {
  label: string
  className?: string
}

export default function MediaPlaceholder({ label, className = '' }: MediaPlaceholderProps) {
  return (
    <div
      className={`flex min-h-48 items-center justify-center border border-dashed border-line bg-card p-6 text-center text-sm text-mute ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span>
        Photo placeholder
        <br />
        <span className="text-xs">{label}</span>
      </span>
    </div>
  )
}

type HeroBackdropProps = {
  src: string
  alt: string
  priority?: boolean
  /** Default 45% navy wash on inner pages; home slideshow uses a lighter wash. */
  overlayClassName?: string
}

export function HeroBackdrop({
  src,
  alt,
  priority = false,
  overlayClassName = 'bg-navy/45',
}: HeroBackdropProps) {
  return (
    <div className="absolute inset-0 bg-navy">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />
    </div>
  )
}

type HeroSlideshowProps = {
  slides: readonly SitePhotoMeta[]
  intervalMs: number
  overlayClassName?: string
}

export function HeroSlideshow({
  slides,
  intervalMs,
  overlayClassName = 'bg-navy/40',
}: HeroSlideshowProps) {
  const [index, setIndex] = useState(0)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion || slides.length < 2) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs, reducedMotion, slides.length])

  if (slides.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      {slides.map((slide, i) => {
        const visible = i === index
        return (
          <img
            key={slide.src}
            src={slide.src}
            alt={visible ? slide.alt : ''}
            aria-hidden={visible ? undefined : true}
            className={`hero-slide-image absolute inset-0 h-full w-full object-cover ${
              visible ? 'is-active' : ''
            }`}
            style={{ objectPosition: slide.objectPosition ?? 'center center' }}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'auto'}
            sizes="100vw"
          />
        )
      })}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />
    </div>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return reduced
}

type PageTitleBandProps = {
  title: string
  image: SitePhotoProps
}

export function PageTitleBand({ title, image }: PageTitleBandProps) {
  return (
    <section className="relative flex min-h-[220px] items-end bg-navy sm:min-h-[260px]">
      <HeroBackdrop src={image.src} alt={image.alt} />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-24">
        <h1 className="page-title text-3xl tracking-tight sm:text-4xl">{title}</h1>
      </div>
    </section>
  )
}

export function FeaturePhoto({ src, alt, className = '' }: SitePhotoProps) {
  return (
    <div className={`min-h-56 overflow-hidden bg-navy lg:min-h-full ${className}`.trim()}>
      <SitePhoto src={src} alt={alt} className="min-h-56 lg:min-h-[320px]" />
    </div>
  )
}
