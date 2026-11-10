import { NavLink } from 'react-router-dom'
import { LogoMark } from './SiteLogo'
import { navItems, site } from '../content/site'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link text-sm ${isActive ? 'nav-link-active' : ''}`

const contactClass = ({ isActive }: { isActive: boolean }) =>
  `btn-outline shrink-0 px-3 py-2 text-xs sm:text-sm ${isActive ? '!border-blue-deep !bg-blue-deep !text-white' : ''}`

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-card">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:gap-4 sm:py-2.5">
        <NavLink
          to="/"
          className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3"
        >
          <LogoMark />
          <span className="text-base font-semibold leading-tight tracking-tight text-navy sm:text-lg">
            {site.name}
          </span>
        </NavLink>

        <nav className="flex flex-wrap items-center justify-end gap-3 sm:gap-5" aria-label="Main">
          {navItems.map((item) =>
            item.to === '/contact' ? (
              <NavLink key={item.to} to={item.to} className={contactClass}>
                {item.label}
              </NavLink>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
