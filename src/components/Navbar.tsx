import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/packages', label: 'Packages' },
    { to: '/facilities', label: 'Facilities' },
    { to: '/contact', label: 'Contact' },
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans transition-colors duration-200 relative group ${
      isActive ? 'text-primary' : 'text-on-surface hover:text-primary'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'backdrop-blur-[20px] bg-[rgba(19,19,19,0.6)] border-b border-outline-variant'
          : 'backdrop-blur-[20px] bg-[rgba(19,19,19,0.6)]'
      }`}
    >
      <div className="max-w-container mx-auto px-5 md:px-10 lg:px-[80px]">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl font-semibold text-on-surface tracking-[-0.01em] focus-visible:outline-primary"
            aria-label="Loving Homes — Home"
          >
            Loving Homes
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 bg-primary text-on-primary text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans rounded hover:brightness-110 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-200 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="md:hidden border-t border-outline-variant pb-6 pt-4"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-2 py-3 text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans transition-colors duration-200 ${
                        isActive ? 'text-primary' : 'text-on-surface hover:text-primary'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  to="/contact"
                  className="block text-center px-6 py-3 bg-primary text-on-primary text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans rounded hover:brightness-110 transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
