import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import AppointmentBand from '../components/AppointmentBand'
import EditorialShowcase from '../components/EditorialShowcase'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ServiceCards from '../components/ServiceCards'
import TestimonialSection from '../components/TestimonialSection'
import { homeAccordionItems } from '../content/homeSections'
import { intro } from '../content/site'

export default function Home() {
  return (
    <>
      <PageHero />
      <section className="bg-card py-14">
        <Reveal className="mx-auto max-w-6xl px-4">
          <p className="max-w-3xl text-lg leading-relaxed text-mute">{intro.body}</p>
          <Link to="/about" className="mt-4 inline-block text-sm font-semibold text-blue hover:underline">
            About the shop →
          </Link>
        </Reveal>
      </section>
      <ServiceCards />
      <EditorialShowcase />
      <section className="bg-paper py-14 sm:py-16" aria-labelledby="home-services-detail">
        <Reveal className="mx-auto max-w-6xl px-4 pb-8 sm:px-0">
          <h2 id="home-services-detail" className="heading-display px-4 text-2xl sm:px-8 sm:text-3xl">
            Services in detail
          </h2>
          <p className="mt-3 max-w-2xl px-4 text-mute sm:px-8">
            Expand a category to read more, or visit the full services page for the complete list.
          </p>
        </Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-0">
          <Accordion items={homeAccordionItems} />
          <p className="mt-8 px-4 text-sm text-mute sm:px-8">
            Need the full list including parts suppliers?{' '}
            <Link to="/suppliers" className="font-semibold text-blue hover:underline">
              View all suppliers
            </Link>
          </p>
        </div>
      </section>
      <TestimonialSection />
      <AppointmentBand />
    </>
  )
}
