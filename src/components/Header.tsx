import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { LogoMark } from './SiteLogo'
import { navItems, site } from '../content/site'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link text-sm sm:text-sm ${isActive ? 'nav-link-active' : ''}`

const contactClass = ({ isActive }: { isActive: boolean }) =>
  `header-contact-link shrink-0 text-xs sm:text-sm ${isActive ? 'is-active' : ''}`

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-card">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:gap-4 sm:py-2.5">
        <NavLink
          to="/"
          aria-label={site.name}
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
        >
          <LogoMark />
          <span className="hidden truncate font-semibold leading-tight tracking-tight text-navy min-[520px]:inline min-[520px]:text-base min-[520px]:whitespace-normal lg:text-lg">
            {site.name}
          </span>
        </NavLink>

        <nav
          className="flex shrink-0 flex-wrap items-center justify-end gap-2 sm:gap-4 md:gap-5"
          aria-label="Main"
        >
          {navItems.map((item) =>
            item.to === '/contact' ? (
              <NavLink key={item.to} to={item.to} className={contactClass} aria-label="Contact">
                <IoChatbubbleEllipsesOutline
                  className="header-contact-messenger-icon sm:hidden"
                  aria-hidden
                />
                <span className="hidden sm:inline">{item.label}</span>
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
