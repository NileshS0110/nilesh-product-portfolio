import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Tag from './Tag';
import { navigate } from '@/hooks/useHashRoute';

type CaseStudyCardProps = {
  slug: string;
  index: string;
  title: string;
  tags: string[];
  description: string;
  metrics: { value: string; label: string }[];
  size?: 'large' | 'medium';
  className?: string;
};

export default function CaseStudyCard({
  slug,
  index,
  title,
  tags,
  description,
  metrics,
  size = 'medium',
  className,
}: CaseStudyCardProps) {
  const isLarge = size === 'large';

  return (
    <article
      onClick={() => navigate(`case/${slug}`)}
      className={cn(
        'card-surface card-hover group relative overflow-hidden cursor-pointer reveal',
        isLarge ? 'p-8 lg:p-12' : 'p-6 lg:p-8',
        className
      )}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <span className="text-xs font-mono text-ink-600">{index}</span>
          <ArrowUpRight className="w-5 h-5 text-ink-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300 ease-out-expo" />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t} variant={t.includes('0-to-1') ? 'brand' : 'default'}>
                {t}
              </Tag>
            ))}
          </div>
          <h3 className={cn('font-semibold text-white tracking-tight', isLarge ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl')}>
            {title}
          </h3>
          <p className={cn('text-ink-400 leading-relaxed', isLarge ? 'text-base lg:text-lg max-w-2xl' : 'text-sm')}>
            {description}
          </p>
        </div>

        <div className={cn('flex flex-wrap gap-6 pt-4 border-t border-ink-800/60')}>
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <span className={cn('font-semibold text-white tracking-tight', isLarge ? 'text-2xl' : 'text-xl')}>
                {m.value}
              </span>
              <span className="text-xs text-ink-500">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
