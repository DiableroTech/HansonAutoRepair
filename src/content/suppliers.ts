export type SupplierPartner = {
  id: string
  name: string
  logoSrc: string
  /** Extra padding for wide logos */
  logoPadding?: string
}

export const supplierPartners: SupplierPartner[] = [
  { id: 'dayco', name: 'Dayco', logoSrc: '/suppliers/dayco.png' },
  { id: 'fram', name: 'FRAM', logoSrc: '/suppliers/fram.png' },
  { id: 'raybestos', name: 'Raybestos', logoSrc: '/suppliers/raybestos.png' },
  { id: 'pennzoil', name: 'Pennzoil', logoSrc: '/suppliers/pennzoil.png' },
  { id: 'bosch', name: 'Bosch', logoSrc: '/suppliers/bosch.png' },
  { id: 'monroe', name: 'Monroe', logoSrc: '/suppliers/monroe.png' },
  { id: 'bg', name: 'BG', logoSrc: '/suppliers/bg.png' },
  { id: 'moog', name: 'MOOG', logoSrc: '/suppliers/moog.png' },
  { id: 'walker', name: 'Walker', logoSrc: '/suppliers/walker.png' },
  { id: 'acdelco', name: 'ACDelco', logoSrc: '/suppliers/acdelco.png' },
  { id: 'maxquip', name: 'Maxquip', logoSrc: '/suppliers/maxquip.jpg', logoPadding: 'p-4' },
  {
    id: 'prins',
    name: 'Prins Autogassystemen',
    logoSrc: '/suppliers/prins.jpg',
    logoPadding: 'p-3',
  },
  {
    id: 'superior-propane',
    name: 'Superior Propane',
    logoSrc: '/suppliers/superior-propane.jpg',
    logoPadding: 'p-3',
  },
  {
    id: 'national-energy',
    name: 'National Energy Equipment Inc.',
    logoSrc: '/suppliers/national-energy.jpg',
    logoPadding: 'p-3',
  },
]

export function getSuppliersPageCopy(shopName: string) {
  return {
    title: 'Suppliers',
    heading: `${shopName}'s quality parts suppliers`,
    paragraphs: [
      `${shopName} maintains long-term relationships with a variety of professional suppliers, enabling them to work with our company efficiently and us to provide prompt service to our customers.`,
      'We are committed to working with our suppliers to provide you with quality parts and timely service. The brands below represent partners we rely on for everyday repairs and specialty work.',
    ],
  } as const
}
