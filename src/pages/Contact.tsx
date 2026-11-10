import AppointmentForm from '../components/AppointmentForm'
import { PageTitleBand } from '../components/MediaPlaceholder'
import Reveal from '../components/Reveal'
import ShopMap from '../components/ShopMap'
import { LogoLockup } from '../components/SiteLogo'
import { site } from '../content/site'
import { photos } from '../content/photos'

export default function Contact() {
  return (
    <>
      <PageTitleBand title="Contact" image={photos.contactBand} />
      <section className="bg-card py-14">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <LogoLockup className="mb-8 h-24 w-auto max-w-[200px] sm:h-28" />
            <h2 className="text-xl font-semibold text-navy">Visit or call</h2>
            <ul className="mt-6 space-y-4 text-sm text-mute">
              <li>
                <span className="block font-semibold text-ink">Phone</span>
                <a href={site.phoneTel} className="text-blue hover:underline">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-ink">Email</span>
                <a href={`mailto:${site.email}`} className="text-blue hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-ink">Address</span>
                {site.address}
              </li>
              <li>
                <span className="block font-semibold text-ink">Hours</span>
                <ul className="mt-1 space-y-1">
                  {site.hoursDetail.map((row) => (
                    <li key={row.days}>
                      {row.days}: {row.time}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <span className="block font-semibold text-ink">Payment</span>
                {site.payments.join(', ')}
              </li>
            </ul>
          </Reveal>
          <Reveal>
            <ShopMap />
          </Reveal>
        </div>
      </section>
      <section className="border-t border-line bg-paper py-14">
        <Reveal className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight text-navy">
            Schedule your appointment
          </h2>
          <p className="mt-2 max-w-2xl text-mute">
            Fill out the form below and we will follow up to confirm. For urgent questions, call the
            shop directly.
          </p>
          <div className="mt-8 max-w-2xl">
            <AppointmentForm />
          </div>
        </Reveal>
      </section>
    </>
  )
}
