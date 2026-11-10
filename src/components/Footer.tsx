import { Link } from 'react-router-dom'
import { navItems, site } from '../content/site'
import ShopMap from './ShopMap'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-white/80 italic">{site.tagline}</p>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <a href={site.phoneTel} className="font-semibold text-white hover:underline">
                {site.phone}
              </a>
            </li>
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="text-white/90 hover:underline">
                {site.email}
              </a>
            </li>
            {site.hoursDetail.map((row) => (
              <li key={row.days}>
                <span className="text-white/70">{row.days}:</span> {row.time}
              </li>
            ))}
          </ul>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm" aria-label="Footer">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-white/80 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <ShopMap compact darkFooter />
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
