import type { AccordionItem } from '../components/Accordion'

export type EditorialShowcaseItem = {
  id: string
  title: string
  description: string
  to: string
  image: {
    src: string
    alt: string
    objectPosition?: string
  }
}

export const homeServicesShowcase = {
  id: 'shop-services',
  eyebrow: 'Shop services',
  title: 'Auto care built around your vehicle',
  intro:
    'Maintenance, repairs, and specialty work from a family-owned Kamloops shop—Red Seal technicians, quality parts, and straight answers.',
  cta: {
    label: 'View all services',
    to: '/services',
  },
  imageSide: 'left' as const,
  items: [
    {
      id: 'repair',
      title: 'Repair & maintenance',
      description: 'Tune-ups, brakes, diagnostics, transmissions, A/C, and electrical.',
      to: '/services',
      image: {
        src: '/Car-engine-replacement.jpeg',
        alt: 'Technician working under the hood on engine components',
        objectPosition: 'center 40%',
      },
    },
    {
      id: 'tires',
      title: 'Tires & trailers',
      description: 'Seasonal changeovers, balancing, hitch installation, and wiring.',
      to: '/services',
      image: {
        src: '/car-in-bay.jpg',
        alt: 'Vehicles on lifts in the shop bay',
        objectPosition: 'center center',
      },
    },
    {
      id: 'propane',
      title: 'Propane & CNG',
      description: 'Service, repair, installation, certification, and conversion.',
      to: '/services#propane',
      image: {
        src: '/car-transmission.jpg',
        alt: 'Major drivetrain service in the shop',
        objectPosition: 'center 35%',
      },
    },
    {
      id: 'electrical',
      title: 'Electrical & batteries',
      description: 'Starting, charging, and electrical diagnostics when something fails.',
      to: '/services',
      image: {
        src: '/battery-fix.jpg',
        alt: 'Technician servicing a car battery',
        objectPosition: 'center center',
      },
    },
  ] satisfies readonly EditorialShowcaseItem[],
}

export const homeAccordionItems: AccordionItem[] = [
  {
    title: 'Repair & maintenance',
    summary: 'Tune-ups · Brakes · Diagnostics · Transmissions',
    sections: [
      {
        heading: 'Everyday service and major repairs',
        body: [
          'Red Seal technicians handle tune-ups, brakes, computerized engine diagnostics, transmissions, air conditioning, maintenance, clutches, and electrical work on domestic and foreign vehicles.',
          'Equipment and training stay current so diagnoses are accurate and repairs last.',
        ],
      },
    ],
  },
  {
    title: 'Tires & trailers',
    summary: 'Changeovers · Balancing · Hitches · Wiring',
    sections: [
      {
        heading: 'Tires and towing setup',
        body: [
          'Seasonal tire changeover, balancing and repair, trailer hitch installation, hitch covers, and trailer wiring harnesses and insulation.',
        ],
      },
    ],
  },
  {
    title: 'Propane & CNG',
    summary: 'Service · Installation · Certification · Conversion',
    sections: [
      {
        heading: 'Alternative fuel systems',
        body: [
          'Propane and CNG service, repair, installation, and certification, plus automotive propane conversion. Call the shop for pricing and details on conversion work.',
        ],
      },
    ],
  },
  {
    title: 'Specialty services',
    summary: 'Headlight restoration · Preventive reminders',
    sections: [
      {
        heading: 'Headlight restoration',
        body: [
          'Purchase two headlight restorations and receive one free headlight alignment on our alignment equipment.',
        ],
      },
      {
        heading: 'Staying ahead of problems',
        body: [
          'We use your service history to suggest preventive maintenance at sensible intervals, and offer seasonal coupons when they apply.',
        ],
      },
    ],
  },
]
