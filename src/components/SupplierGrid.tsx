import { supplierPartners } from '../content/suppliers'

function SupplierTile({ name, logoSrc, logoPadding }: (typeof supplierPartners)[number]) {
  return (
    <article
      className="supplier-tile group relative isolate aspect-[5/4] min-h-[6.5rem] w-full overflow-hidden bg-card sm:min-h-[7.25rem]"
      aria-label={name}
    >
      <img
        src={logoSrc}
        alt=""
        loading="lazy"
        decoding="async"
        className={`supplier-tile-logo absolute inset-0 h-full w-full object-contain ${logoPadding ?? 'p-3 sm:p-4'}`}
      />
      <span className="supplier-tile-base-scrim pointer-events-none absolute inset-0" aria-hidden="true" />
      <span className="supplier-tile-hover-scrim pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col justify-end p-2 sm:p-3">
        <p className="supplier-tile-name font-display text-[11px] font-bold leading-tight tracking-tight text-white sm:text-xs">
          {name}
        </p>
      </div>
    </article>
  )
}

export default function SupplierGrid() {
  return (
    <ul className="supplier-grid">
      {supplierPartners.map((partner) => (
        <li key={partner.id} className="supplier-grid-cell">
          <SupplierTile {...partner} />
        </li>
      ))}
    </ul>
  )
}
