interface FacilityCardProps {
  title: string
  description: string
  aspectClass?: string
}

export default function FacilityCard({ title, description, aspectClass = 'aspect-[4/3]' }: FacilityCardProps) {
  return (
    <article className="bg-surface-container border border-surface-container-high rounded overflow-hidden group hover:border-[rgba(212,175,55,0.3)] transition-colors duration-300">
      <div
        className={`${aspectClass} bg-surface-bright border-b border-[rgba(212,175,55,0.3)]`}
        aria-hidden="true"
      />
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
