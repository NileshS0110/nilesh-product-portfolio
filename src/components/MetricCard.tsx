import { cn } from '@/lib/utils';

type MetricCardProps = {
  value: string;
  label: string;
  description?: string;
  variant?: 'default' | 'large' | 'inline';
  className?: string;
};

export default function MetricCard({
  value,
  label,
  description,
  variant = 'default',
  className,
}: MetricCardProps) {
  if (variant === 'inline') {
    return (
      <div className={cn('flex flex-col gap-1', className)}>
        <span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{value}</span>
        <span className="text-sm text-ink-400">{label}</span>
        {description && <span className="text-xs text-ink-500">{description}</span>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'card-surface card-hover p-6 lg:p-8 flex flex-col gap-3 reveal',
        variant === 'large' && 'p-8 lg:p-10',
        className
      )}
    >
      <span
        className={cn(
          'font-semibold text-white tracking-tight',
          variant === 'large' ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl'
        )}
      >
        {value}
      </span>
      <span className="text-sm font-medium text-ink-200">{label}</span>
      {description && <span className="text-xs text-ink-500 leading-relaxed">{description}</span>}
    </div>
  );
}
