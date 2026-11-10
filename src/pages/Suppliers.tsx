import { Link } from 'react-router-dom'
import { PageTitleBand } from '../components/MediaPlaceholder'
import Reveal from '../components/Reveal'
import SupplierGrid from '../components/SupplierGrid'
import { getSuppliersPageCopy } from '../content/suppliers'
import { photos } from '../content/photos'
import { site } from '../content/site'

export default function Suppliers() {
  const copy = getSuppliersPageCopy(site.name)

  return (
    <>
      <PageTitleBand title={copy.title} image={photos.servicesBand} />

      <section className="bg-card py-14 sm:py-16">
        <Reveal className="mx-auto max-w-3xl px-4">
          <h2 className="heading-display text-2xl leading-tight sm:text-3xl">{copy.heading}</h2>
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-4 text-base leading-relaxed text-mute">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </section>

      <section className="suppliers-grid-section py-10 sm:py-12" aria-label="Supplier partners">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SupplierGrid />
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-14 sm:py-16">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:text-left">
          <p className="text-base leading-relaxed text-mute sm:text-lg">
            For all your auto repair needs in Kamloops and the surrounding area, contact {site.name}{' '}
            today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a href={site.phoneTel} className="btn-primary">
              Call {site.phone}
            </a>
            <Link to="/contact" className="btn-outline">
              Contact us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
