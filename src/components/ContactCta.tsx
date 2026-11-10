import { Link } from 'react-router-dom'
import { site } from '../content/site'

type ContactCtaProps = {
  heading?: string
}

export default function ContactCta({ heading = 'Ready to book?' }: ContactCtaProps) {
  return (
    <section className="bg-paper py-14">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-navy">{heading}</h2>
        <p className="mx-auto mt-3 max-w-lg text-mute">
          Call{' '}
          <a href={site.phoneTel} className="font-semibold text-blue hover:underline">
            {site.phone}
          </a>{' '}
          or use the contact form to request an appointment.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={site.phoneTel} className="btn-primary">
            Call {site.phone}
          </a>
          <Link to="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
