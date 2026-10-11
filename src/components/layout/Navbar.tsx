import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Events', path: '/events' },
  { label: 'Opportunities', path: '/opportunities' },
  { label: 'Startups', path: '/startups' },
  { label: 'About', path: '/about' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#081018]/8 bg-[#F6FAF8]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main navbar */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2.5"
            aria-label="INCOMATE home"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7838F0] text-sm font-extrabold text-white">
              I
            </span>

            <span className="text-xl font-extrabold tracking-[-0.04em] text-[#081018]">
              INCOMATE
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-6 lg:flex xl:gap-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#7838F0]'
                      : 'text-[#081018]/70 hover:text-[#7838F0]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
            <Link
              to="/login"
              className="px-3 py-2 text-sm font-semibold text-[#081018] transition-colors hover:text-[#7838F0]"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="group inline-flex items-center gap-2 rounded-full bg-[#7838F0] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
            >
              Get Started

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile / tablet menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#081018] transition-colors hover:bg-[#E9E6FF] lg:hidden"
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile / tablet navigation */}
        {isMenuOpen && (
          <div className="border-t border-[#081018]/8 py-4 lg:hidden">
            <nav
              className="flex flex-col"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#E9E6FF] text-[#7838F0]'
                        : 'text-[#081018]/75 hover:bg-[#E9E6FF]/60 hover:text-[#7838F0]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile / tablet actions */}
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-[#081018]/8 pt-4">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-xl border border-[#081018]/10 px-4 py-3 text-sm font-semibold text-[#081018] transition-colors hover:border-[#7838F0]/30 hover:text-[#7838F0]"
                >
                  Log in
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-xl bg-[#7838F0] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar