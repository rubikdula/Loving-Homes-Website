import FacilityCard from '../components/FacilityCard'

const facilities = [
  {
    title: 'Grooming Parlour & Spa',
    description: 'Professional grooming and spa treatments by certified specialists in a calm, private environment.',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A dog receiving a professional grooming treatment',
  },
  {
    title: 'Rooms & Suites',
    description: 'Private rooms with underfloor heating, cooling, and television for every guest.',
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A beautifully appointed luxury suite with warm lighting',
  },
  {
    title: 'Chauffeur Service',
    description: 'Complimentary collect and return service for every guest, throughout Hong Kong.',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A sleek black luxury chauffeur vehicle',
  },
  {
    title: 'Secure Outdoor Paddocks',
    description: 'Safe, fully enclosed outdoor spaces for unrestricted exercise and exploration.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A lush green outdoor paddock surrounded by manicured hedging',
  },
  {
    title: '24-Hour Veterinary Care',
    description: 'On-call veterinary services available around the clock for complete peace of mind.',
    imageUrl: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A veterinarian gently examining a dog',
  },
  {
    title: 'Pet Watch',
    description: 'Continuous monitoring throughout every stay by our dedicated care team.',
    imageUrl: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A contented dog resting peacefully',
  },
  {
    title: 'Woodland Walks',
    description: 'Guided walks through private woodland trails, offering enrichment and natural exploration.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A sunlit path winding through a private woodland',
  },
  {
    title: 'Private Grass Areas',
    description: 'Exclusive grass areas reserved per guest, ensuring privacy and personal space.',
    imageUrl: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'An expansive private grass lawn bathed in morning light',
  },
  {
    title: 'Indoor Play Barn',
    description: 'A dedicated indoor play and activity space for year-round entertainment.',
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A dog playing energetically indoors',
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
                imageUrl={facility.imageUrl}
                imageAlt={facility.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
