export type Testimonial = {
  id: string
  placeholder: boolean
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
  attribution: string
  detail?: string
  date?: string
  source?: 'google'
  sourceUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'pat-h',
    placeholder: false,
    rating: 5,
    attribution: 'Pat H.',
    quote:
      'Prompt, knowledgeable service on my Porsche at a reasonable cost—and the vehicle stayed fixed.',
  },
  {
    id: 'sample-daily-driver',
    placeholder: true,
    rating: 5,
    attribution: 'Daily driver',
    date: 'March 2019',
    quote: 'Straight answers on what needed doing now versus what could wait. No pressure.',
  },
  {
    id: 'sample-fleet',
    placeholder: true,
    rating: 5,
    attribution: 'Fleet contact',
    date: 'October 2020',
    quote: 'Turnaround was predictable and the invoices matched what we talked about on the phone.',
  },
  {
    id: 'sample-transmission',
    placeholder: true,
    rating: 5,
    attribution: 'Transmission customer',
    date: 'February 2021',
    quote: 'They explained the repair in plain language and the truck came back when they said it would.',
  },
  {
    id: 'sample-brakes',
    placeholder: true,
    rating: 5,
    attribution: 'Brake service',
    date: 'August 2022',
    quote: 'Brakes feel right, and they showed me what they replaced without talking down to me.',
  },
  {
    id: 'sample-maintenance',
    placeholder: true,
    rating: 5,
    attribution: 'Maintenance regular',
    date: 'January 2023',
    quote: 'They remember past visits and flag maintenance before small issues turn into big ones.',
  },
  {
    id: 'sample-propane',
    placeholder: true,
    rating: 5,
    attribution: 'Propane conversion',
    date: 'May 2024',
    quote: 'Specialty work was handled in-house. Good communication throughout the job.',
  },
  {
    id: 'sample-family',
    placeholder: true,
    rating: 5,
    attribution: 'Family vehicle',
    date: 'November 2025',
    quote: 'Courteous front-of-shop experience and fair pricing on work our whole household relies on.',
  },
]

export function getTestimonialSummary(items: readonly Testimonial[]): {
  average: number
  count: number
  hasPlaceholder: boolean
} {
  const count = items.length
  if (count === 0) {
    return { average: 0, count: 0, hasPlaceholder: false }
  }

  const total = items.reduce((sum, item) => sum + item.rating, 0)
  return {
    average: Math.round((total * 10) / count) / 10,
    count,
    hasPlaceholder: items.some((item) => item.placeholder),
  }
}
