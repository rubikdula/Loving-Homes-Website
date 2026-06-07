import FacilityCard from '../components/FacilityCard'

const facilities = [
  {
    title: 'Grooming Parlour & Spa',
    description: 'Professional grooming and spa treatments by certified specialists in a calm, private environment.',
  },
  {
    title: 'Rooms & Suites',
    description: 'Private rooms with underfloor heating, cooling, and television for every guest.',
  },
  {
    title: 'Chauffeur Service',
    description: 'Complimentary collect and return service for every guest, throughout Hong Kong.',
  },
  {
    title: 'Secure Outdoor Paddocks',
    description: 'Safe, fully enclosed outdoor spaces for unrestricted exercise and exploration.',
  },
  {
    title: '24-Hour Veterinary Care',
    description: 'On-call veterinary services available around the clock for complete peace of mind.',
  },
  {
    title: 'Pet Watch',
    description: 'Continuous monitoring throughout every stay by our dedicated care team.',
  },
  {
    title: 'Woodland Walks',
    description: 'Guided walks through private woodland trails, offering enrichment and natural exploration.',
  },
  {
    title: 'Private Grass Areas',
    description: 'Exclusive grass areas reserved per guest, ensuring privacy and personal space.',
  },
  {
    title: 'Indoor Play Barn',
    description: 'A dedicated indoor play and activity space for year-round entertainment.',
  },
]

export default function Facilities() {
  return (
    <>
      {/* Page heading */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-10 lg:px-[80px] text-center border-b border-outline-variant">
        <div className="max-w-container mx-auto">
          <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-4">
            The Property
          </p>
          <h1 className="font-serif text-[clamp(36px,6vw,56px)] font-semibold leading-[1.1] tracking-[-0.01em] text-on-surface mb-6">
            Our Facilities
          </h1>
          <p className="font-sans text-[18px] leading-[28px] text-on-surface-variant max-w-xl mx-auto">
            Every detail of Loving Homes has been considered to provide an environment of unrivalled comfort, stimulation, and safety.
          </p>
        </div>
      </div>

      {/* Facilities grid */}
      <section
        className="py-[80px] md:py-[120px] px-5 md:px-10 lg:px-[80px]"
        aria-label="Facilities list"
      >
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <FacilityCard
                key={facility.title}
                title={facility.title}
                description={facility.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
