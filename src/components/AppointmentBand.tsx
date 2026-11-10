import { Link } from 'react-router-dom'
import { site } from '../content/site'
import Reveal from './Reveal'

export default function AppointmentBand() {
  return (
    <section className="border-y border-line bg-card py-14">
      <Reveal className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-navy">
          Schedule your visit
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-mute">
          Call the shop at{' '}
          <a href={site.phoneTel} className="font-semibold text-blue hover:underline">
            {site.phone}
          </a>{' '}
          or send a request through our contact form.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={site.phoneTel} className="btn-primary">
            Call now
          </a>
          <Link to="/contact" className="btn-outline">
            Contact form
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
