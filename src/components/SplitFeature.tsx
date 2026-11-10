import type { ReactNode } from 'react'
import { FeaturePhoto } from './MediaPlaceholder'
import Reveal from './Reveal'

type SplitFeatureProps = {
  title?: string
  imageSrc: string
  imageAlt: string
  imageSide?: 'left' | 'right'
  children: ReactNode
}

export default function SplitFeature({
  title,
  imageSrc,
  imageAlt,
  imageSide = 'left',
  children,
}: SplitFeatureProps) {
  const image = <FeaturePhoto src={imageSrc} alt={imageAlt} />
  const copy = (
    <div className="flex flex-col justify-center py-2">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-navy">{title}</h2>
      ) : null}
      <div className={`space-y-4 text-mute [&_p]:leading-relaxed ${title ? 'mt-4' : ''}`}>
        {children}
      </div>
    </div>
  )

  return (
    <section className="bg-card py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-stretch">
        <Reveal className={imageSide === 'right' ? 'lg:order-2' : ''}>{image}</Reveal>
        <Reveal className={imageSide === 'right' ? 'lg:order-1' : ''}>{copy}</Reveal>
      </div>
    </section>
  )
}
