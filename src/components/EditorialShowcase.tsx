import { useState, type CSSProperties, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { homeServicesShowcase } from '../content/homeSections'
import { useReveal } from '../hooks/useReveal'

export default function EditorialShowcase() {
  const showcase = homeServicesShowcase
  const firstItem = showcase.items[0]
  const [activeId, setActiveId] = useState(firstItem?.id ?? '')
  const { revealTarget, shown } = useReveal<HTMLElement>()
  const imageOnLeft = showcase.imageSide === 'left'

  if (!firstItem) return null

  const activateFromPointer = (
    event: PointerEvent<HTMLAnchorElement>,
    itemId: string,
  ) => {
    if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
      setActiveId(itemId)
    }
  }

  const imageFrame = (
    <div
      className={`editorial-media ${imageOnLeft ? '' : 'editorial-media-from-right'} relative isolate min-h-72 overflow-hidden sm:min-h-[28rem] lg:min-h-[36rem]`}
    >
      {showcase.items.map((item, index) => {
        const active = item.id === activeId
        return (
          <img
            key={item.id}
            src={item.image.src}
            alt={active ? item.image.alt : ''}
            aria-hidden={active ? undefined : true}
            loading="lazy"
            decoding="async"
            className={`editorial-media-image absolute inset-0 h-full w-full object-cover ${
              active ? 'is-active' : ''
            }`}
            style={{
              objectPosition: item.image.objectPosition,
              zIndex: active ? showcase.items.length + 1 : index + 1,
            }}
          />
        )
      })}
      <span className="editorial-media-wash pointer-events-none absolute inset-0 z-20" aria-hidden="true" />
    </div>
  )

  const copyPanel = (
    <div className="editorial-copy flex min-h-full flex-col justify-center bg-card py-10 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
      <p className="editorial-eyebrow font-display text-[11px] font-semibold tracking-[0.2em] text-blue uppercase">
        {showcase.eyebrow}
      </p>
      <h2
        id={`${showcase.id}-showcase-title`}
        className="editorial-heading heading-display mt-4 max-w-[14ch] text-3xl leading-[1.08] sm:text-4xl lg:text-[2.7rem]"
      >
        {showcase.title}
      </h2>
      <p className="editorial-intro mt-5 max-w-[48ch] text-base leading-relaxed text-mute sm:text-lg">
        {showcase.intro}
      </p>

      <div className="editorial-links mt-7" aria-label={`${showcase.eyebrow} categories`}>
        {showcase.items.map((item, index) => {
          const active = item.id === activeId
          return (
            <Link
              key={item.id}
              to={item.to}
              onPointerEnter={(event) => activateFromPointer(event, item.id)}
              onFocus={() => setActiveId(item.id)}
              className={`editorial-link group relative grid min-h-24 grid-cols-[1fr_auto] items-center gap-x-4 py-4 ${
                active ? 'is-active' : ''
              }`}
              style={{ '--editorial-index': index } as CSSProperties}
            >
              <span className="min-w-0">
                <span className="editorial-link-title heading-display block text-lg sm:text-xl">
                  {item.title}
                </span>
                <span className="editorial-link-description mt-1.5 block max-w-[44ch] text-sm leading-relaxed text-mute">
                  {item.description}
                </span>
              </span>
              <span
                className="editorial-link-arrow shrink-0 text-lg font-bold text-blue"
                aria-hidden="true"
              >
                →
              </span>
              <span className="editorial-link-rule absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true">
                <span className="block h-full bg-blue" />
              </span>
            </Link>
          )
        })}
      </div>

      <Link
        to={showcase.cta.to}
        className="editorial-cta btn-outline mt-8 inline-flex w-fit items-center gap-2"
      >
        {showcase.cta.label}
        <span aria-hidden>→</span>
      </Link>
    </div>
  )

  return (
    <section
      ref={revealTarget}
      aria-labelledby={`${showcase.id}-showcase-title`}
      className={`editorial-showcase border-b border-line bg-card ${shown ? 'is-shown' : ''}`}
    >
      <div className="mx-auto grid max-w-6xl px-4 lg:grid-cols-12 lg:px-0">
        <div className={`order-1 lg:col-span-7 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          {imageFrame}
        </div>
        <div
          className={`order-2 lg:col-span-5 ${
            imageOnLeft
              ? 'lg:order-2 lg:border-l lg:border-line'
              : 'lg:order-1 lg:border-r lg:border-line'
          }`}
        >
          {copyPanel}
        </div>
      </div>
    </section>
  )
}
