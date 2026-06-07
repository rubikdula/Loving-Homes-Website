import { Link } from 'react-router-dom'
import PackageCard from '../components/PackageCard'

const packages = [
  {
    name: 'Premium',
    description: 'Our most exclusive offering — four daily activities, private grass area, and daily photo updates.',
    ctaLabel: 'View Package',
    ctaTo: '/packages',
  },
  {
    name: 'Classic',
    description: 'Three daily activities, access to the indoor play barn, zen zone, and a grooming session.',
    ctaLabel: 'View Package',
    ctaTo: '/packages',
  },
  {
    name: 'Day',
    description: 'A full day experience — two walks, outdoor play area, agility track, and sand digging pit.',
    ctaLabel: 'View Package',
    ctaTo: '/packages',
  },
  {
    name: 'Custom',
    description: 'Bespoke arrangements for longer stays or dogs with additional requirements.',
    ctaLabel: 'Contact Us',
    ctaTo: '/contact',
  },
]

const facilities = [
  {
    title: 'Grooming & Spa',
    description: 'Professional grooming and spa treatments by expert therapists.',
  },
  {
    title: 'Rooms & Suites',
    description: 'Private rooms with underfloor heating, cooling, and television.',
  },
  {
    title: 'Chauffeur Service',
    description: 'Complimentary collect and return for every guest.',
  },
  {
    title: 'Veterinary Care',
    description: 'On-call veterinary services available around the clock.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#131313] to-[#1a1500]"
          aria-hidden="true"
        />
        {/* Subtle gold glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,175,55,0.07),transparent)]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-container mx-auto px-5 md:px-10 lg:px-[80px] text-center pt-20">
          <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-8">
            Hong Kong's Premier Luxury Dog Hotel
          </p>
          <h1
            id="hero-heading"
            className="font-serif font-bold text-[clamp(40px,8vw,64px)] leading-[1.1] tracking-[-0.02em] text-on-surface mb-8 max-w-4xl mx-auto"
          >
            Where Every Guest<br className="hidden sm:block" /> is Royalty.
          </h1>
          <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant max-w-xl mx-auto mb-12">
            An uncompromising standard of care, comfort, and luxury for your most beloved companion.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-primary text-on-primary text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans hover:brightness-110 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Enquire Now
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary opacity-60" />
        </div>
      </section>

      {/* BRAND INTRODUCTION */}
      <section
        className="py-[80px] md:py-[120px] px-5 md:px-10 lg:px-[80px]"
        aria-labelledby="brand-heading"
      >
        <div className="max-w-container mx-auto text-center max-w-3xl mx-auto">
          <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-6">
            About Us
          </p>
          <h2
            id="brand-heading"
            className="font-serif font-medium text-[clamp(28px,4vw,32px)] leading-[40px] text-on-surface mb-6"
          >
            The Canine Ritz of Hong Kong
          </h2>
          <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant">
            Loving Homes is Hong Kong's premier luxury dog hotel — a sanctuary where the highest standards of hospitality meet genuine devotion to animal wellbeing. We believe your dog deserves the very best: attentive care, architectural comfort, and an experience as distinguished as your own.
          </p>
        </div>
      </section>

      {/* SERVICE PACKAGES */}
      <section
        className="py-[80px] md:py-[120px] px-5 md:px-10 lg:px-[80px] bg-surface-container-low"
        aria-labelledby="packages-heading"
      >
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-4">
              Our Offering
            </p>
            <h2
              id="packages-heading"
              className="font-serif font-medium text-[clamp(28px,4vw,32px)] leading-[40px] text-on-surface"
            >
              Service Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES HIGHLIGHTS */}
      <section
        className="py-[80px] md:py-[120px] px-5 md:px-10 lg:px-[80px]"
        aria-labelledby="facilities-heading"
      >
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-4">
              The Property
            </p>
            <h2
              id="facilities-heading"
              className="font-serif font-medium text-[clamp(28px,4vw,32px)] leading-[40px] text-on-surface"
            >
              World-Class Facilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f) => (
              <article
                key={f.title}
                className="group"
              >
                <div
                  className="aspect-[4/3] bg-surface-bright border border-[rgba(212,175,55,0.3)] mb-5"
                  aria-hidden="true"
                />
                <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-2">
                  {f.title}
                </p>
                <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                  {f.description}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/facilities"
              className="inline-block px-8 py-3 border border-primary text-primary text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans rounded hover:bg-[rgba(242,202,80,0.08)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              View All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section
        className="py-[80px] md:py-[120px] px-5 md:px-10 lg:px-[80px] bg-surface-container-low"
        aria-labelledby="testimonial-heading"
      >
        <div className="max-w-container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span
              className="block font-serif text-[80px] leading-none text-primary opacity-60 mb-4 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote aria-labelledby="testimonial-heading">
              <p
                id="testimonial-heading"
                className="font-serif text-[clamp(20px,3vw,28px)] leading-[1.4] font-medium text-on-surface mb-8 italic"
              >
                Leaving our dog at Loving Homes feels like leaving him at a five-star hotel. The level of attention, the daily updates, the beautiful environment — it is truly unparalleled in Hong Kong.
              </p>
              <footer>
                <cite className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary not-italic">
                  — Dr. Helena Chan, Repulse Bay
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}
