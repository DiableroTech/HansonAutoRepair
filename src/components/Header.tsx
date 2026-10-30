import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'font-medium text-neutral-900 underline underline-offset-4'
    : 'text-neutral-600 hover:text-neutral-900'

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 py-4">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">
          Hanson Auto Repair
        </NavLink>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
