import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container mx-auto px-5 md:px-10 lg:px-[80px] py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <p className="font-serif text-2xl font-semibold text-on-surface tracking-[-0.01em] mb-3">
              Loving Homes
            </p>
            <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
              Hong Kong's premier luxury dog hotel — where every guest is royalty.
            </p>
          </div>

          {/* Col 2 — Nav */}
          <nav aria-label="Footer navigation">
            <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-on-surface-variant mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {[
                { to: '/', label: 'Home' },
                { to: '/packages', label: 'Packages' },
                { to: '/facilities', label: 'Facilities' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-on-surface-variant mb-5">
              Contact
            </p>
            <address className="not-italic flex flex-col gap-3">
              <a
                href="tel:+85221234567"
                className="flex items-center gap-3 font-sans text-[14px] text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <PhoneIcon />
                +852 2123 4567
              </a>
              <a
                href="mailto:hello@lovinghomes.hk"
                className="flex items-center gap-3 font-sans text-[14px] text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <EmailIcon />
                hello@lovinghomes.hk
              </a>
              <span className="flex items-start gap-3 font-sans text-[14px] text-on-surface-variant">
                <LocationIcon />
                <span>8 Repulse Bay Road,<br />Repulse Bay, Hong Kong</span>
              </span>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant">
          <p className="font-sans text-[12px] text-on-surface-variant text-center tracking-[0.05em]">
            © 2025 Loving Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-primary shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-primary shrink-0 mt-0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-primary shrink-0 mt-0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
