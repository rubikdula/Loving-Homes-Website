import { Link } from 'react-router-dom'

interface PackageCardProps {
  name: string
  description: string
  ctaLabel: string
  ctaTo: string
}

export default function PackageCard({ name, description, ctaLabel, ctaTo }: PackageCardProps) {
  return (
    <article className="bg-surface-container border border-surface-container-high rounded flex flex-col p-8 gap-6 hover:border-[rgba(212,175,55,0.3)] transition-colors duration-300">
      <div className="flex-1">
        <h3 className="font-serif text-2xl font-semibold text-on-surface mb-3">{name}</h3>
        <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">{description}</p>
      </div>
      <Link
        to={ctaTo}
        className="inline-block text-center px-6 py-3 border border-primary text-primary text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans rounded hover:bg-[rgba(242,202,80,0.08)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        {ctaLabel}
      </Link>
    </article>
  )
}
