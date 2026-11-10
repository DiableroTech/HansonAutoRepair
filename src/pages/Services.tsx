import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { PageTitleBand } from '../components/MediaPlaceholder'
import Reveal from '../components/Reveal'
import {
  headlightSpecial,
  serviceGroups,
  servicesIntro,
  site,
} from '../content/site'
import { photos } from '../content/photos'

function stripeBackground(index: number) {
  return index % 2 === 0 ? 'about-blue-panel' : 'bg-card'
}

type ServiceRowProps = {
  index: number
  id?: string
  title: string
  note?: string
  children: ReactNode
}

function ServiceRow({ index, id, title, note, children }: ServiceRowProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-14 sm:py-16 ${stripeBackground(index)}`}
    >
      <Reveal className="mx-auto max-w-6xl px-4">
        <h2 className="heading-display text-2xl leading-tight sm:text-3xl">{title}</h2>
        {note ? <p className="mt-3 text-base text-mute">{note}</p> : null}
        {children}
      </Reveal>
    </section>
  )
}

export default function Services() {
  let rowIndex = 0

  return (
    <>
      <PageTitleBand title="Services" image={photos.servicesBand} />

      <section className="bg-card py-14 sm:py-16">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:max-w-4xl">
          <p className="text-base leading-relaxed text-mute sm:text-lg">{servicesIntro}</p>
          <Link to="/contact" className="btn-primary mt-8">
            Contact us
          </Link>
        </Reveal>
      </section>

      {serviceGroups.map((group) => {
        const index = rowIndex++
        return (
          <ServiceRow key={group.title} index={index} id={group.id} title={group.title} note={group.note}>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2 text-base text-mute">
                  <span className="text-blue" aria-hidden>
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </ServiceRow>
        )
      })}

      <ServiceRow index={rowIndex++} title="Headlight restoration">
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute">{headlightSpecial}</p>
      </ServiceRow>

      <ServiceRow index={rowIndex++} title="Parts">
        <p className="mt-4 text-base leading-relaxed text-mute">
          We source parts from suppliers we have trusted for years.{' '}
          <Link to="/suppliers" className="font-semibold text-blue hover:underline">
            View all suppliers
          </Link>
          .
        </p>
      </ServiceRow>

      <section className={`py-14 sm:py-16 ${stripeBackground(rowIndex)}`}>
        <Reveal className="mx-auto max-w-3xl px-4 text-center lg:text-left">
          <h2 className="heading-display text-2xl leading-tight sm:text-3xl">Ready to book?</h2>
          <p className="mt-4 text-base text-mute sm:text-lg">
            Call{' '}
            <a href={site.phoneTel} className="font-semibold text-blue hover:underline">
              {site.phone}
            </a>{' '}
            or send a request through our contact form.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href={site.phoneTel} className="btn-primary">
              Call {site.phone}
            </a>
            <Link to="/contact" className="btn-outline">
              Book a visit
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
