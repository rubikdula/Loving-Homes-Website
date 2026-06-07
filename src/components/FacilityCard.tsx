interface FacilityCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  aspectClass?: string
}

export default function FacilityCard({
  title,
  description,
  imageUrl,
  imageAlt,
  aspectClass = 'aspect-[4/3]',
}: FacilityCardProps) {
  return (
    <article className="bg-surface-container border border-surface-container-high rounded overflow-hidden group hover:border-[rgba(212,175,55,0.3)] transition-colors duration-300">
      <div className={`${aspectClass} overflow-hidden`}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-3">
          {title}
        </p>
        <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
          {description}
        </p>
      </div>
    </article>
  )
}
