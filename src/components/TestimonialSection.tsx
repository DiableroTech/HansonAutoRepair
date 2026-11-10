import { useLayoutEffect, useRef, useState } from 'react'
import {
  getTestimonialSummary,
  testimonials,
  type Testimonial,
} from '../content/testimonials'
import { useReveal } from '../hooks/useReveal'

function initials(attribution: string) {
  const parts = attribution.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return ''
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return `${first}${last}`.toUpperCase()
}

const AVATAR_COLORS = [
  '#256892',
  '#3a94c4',
  '#2a7aab',
  '#1c2430',
  '#059669',
  '#0d9488',
  '#64748b',
  '#7c3aed',
] as const

function avatarColorForId(id: string): string {
  let index = 0
  for (let i = 0; i < id.length; i += 1) {
    index = (index + id.charCodeAt(i) * (i + 3)) % AVATAR_COLORS.length
  }
  return AVATAR_COLORS[index] ?? AVATAR_COLORS[0]
}

function Stars({ rating, tone }: { rating: number; tone: 'card' | 'summary' }) {
  const filled = Math.round(rating)
  const size = tone === 'summary' ? 'text-lg' : 'text-[0.9rem]'

  return (
    <span className={`inline-flex gap-0.5 text-[#d4a017] ${size}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < filled ? '' : 'opacity-35'}>
          ★
        </span>
      ))}
    </span>
  )
}

function Quote({
  id,
  quote,
  expanded,
  onToggle,
}: {
  id: string
  quote: string
  expanded: boolean
  onToggle: (id: string) => void
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [overflows, setOverflows] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const measure = () => {
      const width = el.clientWidth
      if (width === 0) return
      const style = getComputedStyle(el)
      const probe = document.createElement('p')
      probe.textContent = quote
      probe.style.position = 'fixed'
      probe.style.left = '0'
      probe.style.top = '0'
      probe.style.visibility = 'hidden'
      probe.style.pointerEvents = 'none'
      probe.style.width = `${width}px`
      probe.style.font = style.font
      probe.style.lineHeight = style.lineHeight
      probe.style.letterSpacing = style.letterSpacing
      el.parentElement?.appendChild(probe)
      const full = probe.getBoundingClientRect().height
      probe.remove()
      const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.625
      setOverflows(full > lineHeight * 4 + 1)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [quote])

  return (
    <div className="mt-3">
      <p
        ref={ref}
        className={`text-[0.9375rem] leading-snug text-ink sm:text-base sm:leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}
      >
        {quote}
      </p>
      {overflows ? (
        <button
          type="button"
          className="mt-2 font-display text-[11px] font-bold tracking-[0.14em] text-blue uppercase"
          aria-expanded={expanded}
          onClick={() => onToggle(id)}
        >
          {expanded ? 'Less' : 'More'}
        </button>
      ) : null}
    </div>
  )
}

function TestimonialCard({
  item,
  expanded,
  onToggle,
}: {
  item: Testimonial
  expanded: boolean
  onToggle: (id: string) => void
}) {
  return (
    <article className="testimonial-card-surface flex h-full flex-col bg-paper p-4">
      <div className="flex items-center gap-2">
        <span className="font-display text-lg font-bold text-ink" aria-hidden="true">
          {item.rating}
        </span>
        <span className="sr-only">Rated {item.rating} out of 5</span>
        <Stars rating={item.rating} tone="card" />
        {item.date ? (
          <time className="ml-auto shrink-0 text-sm font-medium text-mute">{item.date}</time>
        ) : null}
      </div>
      <Quote id={item.id} quote={item.quote} expanded={expanded} onToggle={onToggle} />
      <div className="mt-auto flex items-center gap-3 pt-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold text-white"
          style={{ backgroundColor: avatarColorForId(item.id) }}
          aria-hidden="true"
        >
          {initials(item.attribution)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-ink">{item.attribution}</span>
          {item.detail ? <span className="mt-0.5 block text-sm text-mute">{item.detail}</span> : null}
        </span>
      </div>
    </article>
  )
}

export default function TestimonialSection() {
  const summary = getTestimonialSummary(testimonials)
  const { revealTarget, shown } = useReveal<HTMLElement>(0.85)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (summary.count === 0) return null

  const countLabel = summary.hasPlaceholder ? 'notes' : 'reviews'

  const toggleQuote = (id: string) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <section
      aria-labelledby="home-testimonials-title"
      className={`testimonial-section py-11 sm:py-14${shown ? ' is-shown' : ''}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <header ref={revealTarget}>
          <div className="testimonial-header-top flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <h2
              id="home-testimonials-title"
              className="heading-display on-dark hero-text-shadow min-w-0 text-2xl text-balance sm:text-4xl"
            >
              Testimonials
            </h2>
            <div className="flex shrink-0 flex-col items-end">
              <div className="flex items-center gap-2.5">
                <p className="font-display text-3xl leading-none font-extrabold text-white sm:text-4xl">
                  <span aria-hidden="true">{summary.average.toFixed(1)}</span>
                  <span className="sr-only">Rated {summary.average.toFixed(1)} out of 5</span>
                </p>
                <Stars rating={summary.average} tone="summary" />
              </div>
              <p className="mt-1 text-sm text-white/75">
                {summary.count} {countLabel}
              </p>
            </div>
          </div>
          <p className="testimonial-intro mx-auto mt-3 max-w-[40rem] text-center text-base leading-relaxed text-balance text-white/80 sm:mx-0 sm:max-w-none sm:text-left sm:text-lg">
            After serving Kamloops drivers for more than two decades, we hear back about the work.
            Here is what customers say about the shop.
          </p>
        </header>

        <ul className="testimonial-grid mt-6 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <li key={item.id} className="flex min-h-0">
              <TestimonialCard
                item={item}
                expanded={expandedId === item.id}
                onToggle={toggleQuote}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
