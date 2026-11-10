import { Link } from 'react-router-dom'
import { FeaturePhoto, PageTitleBand } from '../components/MediaPlaceholder'
import Reveal from '../components/Reveal'
import { aboutPage, aboutStory, site } from '../content/site'
import { photos } from '../content/photos'

export default function About() {
  return (
    <>
      <PageTitleBand title="About" image={photos.aboutBand} />

      <section className="bg-card py-14 sm:py-20">
        <Reveal className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="heading-display text-3xl leading-tight sm:text-4xl">
            {aboutPage.introHeading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mute sm:text-lg">
            {aboutStory.paragraphs[0]}
          </p>
          <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
            {site.tagline} is more than a motto—it is how we treat every vehicle and every customer
            who walks through the door.
          </p>
          <Link to="/contact" className="btn-primary mt-10">
            Contact us
          </Link>
        </Reveal>
      </section>

      <section className="about-blue-panel py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="heading-display text-2xl leading-tight sm:text-3xl">
              {aboutPage.featureHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
              {aboutPage.featureLead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-mute">{aboutStory.paragraphs[1]}</p>
          </Reveal>
          <Reveal>
            <FeaturePhoto
              src={photos.aboutStory.src}
              alt={photos.aboutStory.alt}
              className="min-h-56 shadow-sm lg:min-h-[320px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-14 sm:py-20">
        <Reveal className="mx-auto max-w-3xl px-4 text-center lg:max-w-4xl lg:text-left">
          <h2 className="heading-display text-2xl leading-tight sm:text-3xl">
            {aboutPage.clientsHeading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
            {site.name} follows a code of ethics built on courtesy and clear communication. The
            shop uses your service history to suggest preventive maintenance at sensible intervals,
            and shares seasonal coupons when they apply.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
            The team stays involved in local industry events and keeps investing in equipment so
            work is done right the first time.
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
