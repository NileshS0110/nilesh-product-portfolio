import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 reveal',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-display-md font-semibold text-gradient max-w-3xl">{title}</h2>
      {description && (
        <p className={cn('text-base lg:text-lg text-ink-400 leading-relaxed max-w-2xl', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}
