import { mapsEmbedUrl, mapsSearchUrl, site } from '../content/site'

type ShopMapProps = {
  compact?: boolean
  darkFooter?: boolean
}

export default function ShopMap({ compact = false, darkFooter = false }: ShopMapProps) {
  const height = compact ? 'h-56' : 'h-72'
  const linkClass = darkFooter
    ? 'text-white/90 hover:text-white'
    : 'text-blue hover:underline'

  return (
    <div className={compact ? 'space-y-3' : 'space-y-4'}>
      {!compact ? (
        <h2 className="text-xl font-semibold text-navy">Find us</h2>
      ) : null}
      <div
        className={`overflow-hidden ${darkFooter ? 'border border-white/20' : 'border border-line'} ${height} w-full bg-card`}
      >
        <iframe
          title={`Map of ${site.name}`}
          src={mapsEmbedUrl()}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={mapsSearchUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block text-sm font-semibold ${linkClass}`}
      >
        Open in Google Maps
      </a>
    </div>
  )
}
