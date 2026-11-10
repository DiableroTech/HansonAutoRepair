import { Link } from 'react-router-dom'
import { hero, site } from '../content/site'
import { homeHeroSlideMs, homeHeroSlides, logoHorizontal } from '../content/photos'
import { HeroSlideshow } from './MediaPlaceholder'

export default function PageHero() {
  return (
    <section className="relative flex min-h-[380px] items-center sm:min-h-[420px] lg:min-h-[440px]">
      <HeroSlideshow
        slides={homeHeroSlides}
        intervalMs={homeHeroSlideMs}
        overlayClassName="bg-navy/40"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:py-16">
        <img
          src={logoHorizontal.src}
          alt={logoHorizontal.alt}
          className="hero-enter hero-enter-1 h-10 w-auto max-w-[11rem] object-contain object-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:h-11 sm:max-w-[13rem] md:h-12 md:max-w-[15rem]"
          decoding="async"
          fetchPriority="high"
        />
        <h1 className="on-dark hero-text-shadow hero-enter hero-enter-2 mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          {hero.headline}
        </h1>
        <p className="hero-text-shadow hero-enter hero-enter-3 mt-4 max-w-2xl text-lg leading-relaxed text-white/95 sm:max-w-3xl">
          {hero.subline}
        </p>
        <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap gap-3">
          <a href={site.phoneTel} className="btn-primary">
            Call {site.phone}
          </a>
          <Link to="/contact" className="btn-ghost">
            Book a visit
          </Link>
        </div>
      </div>
    </section>
  )
}
