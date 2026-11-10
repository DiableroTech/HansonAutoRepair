export type SitePhoto = {
  src: string
  alt: string
  /** CSS object-position for cover crops (hero, features). */
  objectPosition?: string
}

/** Swap paths here when you replace or reorder photos. Hero slideshow looks best at ~1400px+ wide. */
export const logo = {
  src: '/HansonAutoLogo.png',
  alt: "Hanson's Auto Repair logo",
} as const

export const logoHorizontal = {
  src: '/hanson-logo-horizontal.png',
  alt: "Hanson's Auto Repair — The Place That Cares",
} as const

export const photos = {
  homeHero: {
    src: '/car-in-bay.jpg',
    alt: 'Vehicles on lifts in a bright auto repair shop bay',
    objectPosition: '55% 42%',
  },
  homeHeroBrakeFluid: {
    src: '/refilling-brake-fluid.jpg',
    alt: 'Technician refilling brake fluid during brake service',
    objectPosition: '50% 38%',
  },
  homeHeroBrakes: {
    src: '/replacing-brakes.jpg',
    alt: 'Brake components being replaced on a vehicle',
    objectPosition: '52% 40%',
  },
  homeStory: {
    src: '/Car-engine-replacement.jpeg',
    alt: 'Technician working under the hood on engine components',
  },
  aboutBand: {
    src: '/replacing-brake-fluid.jpg',
    alt: 'Brake service being performed on a vehicle wheel assembly',
  },
  aboutStory: {
    src: '/car-in-bay.jpg',
    alt: 'Shop bay with vehicles being serviced',
  },
  servicesBand: {
    src: '/car-transmission.jpg',
    alt: 'Transmission removed for repair on a lift in the shop',
  },
  contactBand: {
    src: '/battery-fix.jpg',
    alt: 'Technician servicing a car battery in the engine bay',
  },
} as const satisfies Record<string, SitePhoto>

export const homeHeroSlides = [
  photos.homeHero,
  photos.homeHeroBrakeFluid,
  photos.homeHeroBrakes,
] as const satisfies readonly SitePhoto[]

/** Home hero auto-advance interval (ms). */
export const homeHeroSlideMs = 6500
