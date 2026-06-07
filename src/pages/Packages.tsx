import { Link } from 'react-router-dom'

interface PackageItem {
  label: string
}

interface PackageSectionProps {
  name: string
  items: PackageItem[]
  ctaLabel: string
  imageLeft: boolean
  imageUrl: string
  imageAlt: string
}

function PackageSection({ name, items, ctaLabel, imageLeft, imageUrl, imageAlt }: PackageSectionProps) {
  const image = (
    <div className="lg:w-[40%] w-full overflow-hidden rounded">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full aspect-[4/3] object-cover"
        loading="lazy"
      />
    </div>
  )

  const content = (
    <div className="lg:w-[60%] flex flex-col justify-center py-4 lg:py-0 lg:px-16">
      <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-4">
        Package
      </p>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-semibold leading-[1.15] text-on-surface mb-8">
        {name}
      </h2>
      <ul className="flex flex-col gap-4 mb-10" role="list">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-4">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
      <div>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 border border-primary text-primary text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans rounded hover:bg-[rgba(242,202,80,0.08)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  )

  return (
    <section
      className="py-[80px] md:py-[100px] px-5 md:px-10 lg:px-[80px] border-b border-outline-variant"
      aria-labelledby={`pkg-${name.toLowerCase()}-heading`}
    >
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center">
          {imageLeft ? (
            <>
              {image}
              {content}
            </>
          ) : (
            <>
              {content}
              {image}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

const packagesData = [
  {
    name: 'Premium',
    items: [
      { label: 'Four walks or activities per day' },
      { label: 'Private grass area' },
      { label: 'Daily updates and photos' },
      { label: 'Treats as agreed with owner' },
    ],
    ctaLabel: 'Enquire About Premium',
    imageLeft: true,
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A golden retriever sitting regally in a beautifully lit environment',
  },
  {
    name: 'Classic',
    items: [
      { label: 'Three walks or activities per day' },
      { label: 'Indoor play barn' },
      { label: 'Zen zone' },
      { label: 'Grooming session' },
    ],
    ctaLabel: 'Enquire About Classic',
    imageLeft: false,
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A well-groomed golden retriever portrait in soft natural light',
  },
  {
    name: 'Day',
    items: [
      { label: 'Two walks per day' },
      { label: 'External play area' },
      { label: 'Agility track' },
      { label: 'Sand digging pit' },
    ],
    ctaLabel: 'Enquire About Day',
    imageLeft: true,
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A happy dog enjoying an outdoor activity on a sunny day',
  },
]

export default function Packages() {
  return (
    <>
      {/* Page heading */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-10 lg:px-[80px] text-center border-b border-outline-variant">
        <div className="max-w-container mx-auto">
          <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-4">
            Our Offering
          </p>
          <h1 className="font-serif text-[clamp(36px,6vw,56px)] font-semibold leading-[1.1] tracking-[-0.01em] text-on-surface mb-6">
            Our Packages
          </h1>
          <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant max-w-xl mx-auto">
            Each package is designed to provide an exceptional experience tailored to your dog's lifestyle and personality.
          </p>
        </div>
      </div>

      {/* Package sections */}
      {packagesData.map((pkg) => (
        <PackageSection key={pkg.name} {...pkg} />
      ))}

      {/* Custom — distinct centred section */}
      <section
        className="py-[80px] md:py-[120px] px-5 md:px-10 lg:px-[80px] bg-surface-container-low"
        aria-labelledby="pkg-custom-heading"
      >
        <div className="max-w-container mx-auto text-center max-w-2xl mx-auto">
          <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-4">
            Bespoke
          </p>
          <h2
            id="pkg-custom-heading"
            className="font-serif text-[clamp(32px,5vw,48px)] font-semibold leading-[1.15] text-on-surface mb-6"
          >
            Custom Packages
          </h2>
          <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant mb-12">
            For longer stays or dogs with additional requirements, we create a bespoke experience tailored to your dog's needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-primary text-on-primary text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans hover:brightness-110 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            Contact Us to Arrange
          </Link>
        </div>
      </section>
    </>
  )
}
