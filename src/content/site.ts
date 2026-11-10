export const site = {
  name: "Hanson's Auto Repair",
  tagline: 'The Place That Cares',
  phone: '250-374-3240',
  phoneTel: 'tel:+12503743240',
  email: 'info@hansonsauto.com',
  address: '2B-962 Laval Crescent, Kamloops, BC V2C 5P5',
  founded: 'September 2001',
  owner: 'Henry Hanson',
  hoursSummary: 'Monday–Friday 8:00 AM–4:30 PM',
  hoursDetail: [
    { days: 'Monday – Friday', time: '8:00 AM – 4:30 PM' },
    { days: 'Saturday', time: 'Closed' },
    { days: 'Sunday', time: 'Closed' },
  ],
  payments: ['Visa', 'Mastercard', 'Interac'],
} as const

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Suppliers', to: '/suppliers' },
  { label: 'Contact', to: '/contact' },
] as const

export const hero = {
  headline: 'Auto repair in Kamloops since 2001.',
  subline:
    "Serving clients in Kamloops and the surrounding area since 2001, Hanson's Auto Repair offers professional, certified and knowledgeable maintenance and repair services on all makes and models.",
} as const

export const intro = {
  body: `${site.name} is a family-owned shop in Kamloops, founded in ${site.founded}. ${site.owner} and the team combine decades of hands-on experience with up-to-date equipment for domestic and foreign vehicles.`,
} as const

export const serviceCards = [
  {
    title: 'Repair & maintenance',
    description: 'Tune-ups, brakes, diagnostics, transmissions, and more.',
    to: '/services',
  },
  {
    title: 'Propane & CNG',
    description: 'Service, repair, installation, and certification.',
    to: '/services#propane',
  },
  {
    title: 'Book a visit',
    description: 'Request an appointment online or call the shop.',
    to: '/contact',
  },
] as const

export type ServiceGroup = {
  id?: string
  title: string
  items: readonly string[]
  note?: string
}

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Repair and maintenance',
    items: [
      'Tune-ups',
      'Brakes',
      'Computerized engine diagnostics',
      'Transmissions',
      'Air conditioning',
      'Maintenance',
      'Clutches',
      'Electrical',
    ],
  },
  {
    title: 'Tires and trailers',
    items: [
      'Seasonal tire changeover',
      'Tire balancing and repair',
      'Trailer hitch installation',
      'Hitch covers',
      'Trailer wiring harnesses and insulation',
    ],
  },
  {
    id: 'propane',
    title: 'Propane and CNG',
    items: [
      'Propane service, repair, installation, and certification',
      'CNG service, repair, installation, and certification',
      'Automotive propane conversion',
    ],
    note: 'Call for pricing and details on propane conversion.',
  },
]

export const headlightSpecial =
  'Headlight restoration: purchase two restorations and receive one free headlight alignment on our alignment equipment.'

export const suppliers = [
  'Dayco',
  'FRAM',
  'Raybestos',
  'Pennzoil',
  'Bosch',
  'Monroe',
  'BG',
  'MOOG',
  'Walker',
  'ACDelco',
  'Maxquip',
  'Prins',
  'Superior Propane',
  'National Energy Equipment',
] as const

export const trustPoints = [
  'Family-owned since 2001',
  'Red Seal certified technicians',
  'Domestic and foreign vehicles',
  'Preventive-maintenance reminders from past service dates and mileage',
  'Quality parts from trusted suppliers',
] as const

export const testimonial = {
  quote:
    'Prompt, knowledgeable service on my Porsche at a reasonable cost—and the vehicle stayed fixed.',
  author: 'Pat H.',
} as const

export const aboutStory = {
  title: 'Built on care and craft',
  paragraphs: [
    `${site.name} opened in ${site.founded} as a family-owned shop in Kamloops. ${site.owner} leads a team of Red Seal technicians, apprentices, and casual help, with equipment and training kept current as the shop has grown.`,
    'Customers come first: courtesy, a clear code of ethics, and work explained in plain language. The shop tracks past service dates and mileage so preventive maintenance stays on your radar, and seasonal coupons are offered when they make sense.',
  ],
} as const

export const aboutPage = {
  introHeading: 'Family-owned in Kamloops since 2001.',
  featureHeading: 'Built on care and craft',
  featureLead:
    'From the first visit, you get straight answers, fair pricing, and work done with quality parts and up-to-date equipment.',
  clientsHeading: 'Our clients are #1',
} as const

export const servicesIntro =
  'Complete service for all makes and models, using quality parts from suppliers we have worked with for years.'

export const formServiceOptions = serviceGroups.map((g) => g.title)

export function mapsSearchUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`
}

export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&z=15&output=embed`
}
