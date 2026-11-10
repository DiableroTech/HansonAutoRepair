import { trustPoints } from '../content/site'
import Reveal from './Reveal'

export default function CredentialList() {
  return (
    <section className="bg-navy py-14 text-white" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 id="trust-heading" className="text-2xl font-semibold tracking-tight">
            Why drivers trust us
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/90">
                <span className="mt-0.5 text-blue" aria-hidden>
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
