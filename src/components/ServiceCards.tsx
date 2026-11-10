import { Link } from 'react-router-dom'
import { serviceCards } from '../content/site'
import Reveal from './Reveal'

export default function ServiceCards() {
  return (
    <section className="bg-paper py-14" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 id="services-heading" className="text-2xl font-semibold tracking-tight text-navy">
            What we do
          </h2>
          <p className="mt-2 max-w-2xl text-mute">
            Maintenance, specialty fuel systems, and appointments—pick a starting point.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {serviceCards.map((card) => (
            <li key={card.title}>
              <Reveal>
                <Link
                  to={card.to}
                  className="service-card flex h-full flex-col border border-line bg-card p-6"
                >
                  <h3 className="text-lg font-semibold text-navy">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-mute">{card.description}</p>
                  <span className="mt-4 text-sm font-semibold text-blue">Learn more →</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
