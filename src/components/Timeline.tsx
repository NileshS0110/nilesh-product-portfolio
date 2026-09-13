import { cn } from '@/lib/utils';

type TimelineItem = {
  title: string;
  subtitle?: string;
  date?: string;
  items?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export default function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-800" />
      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <div key={i} className="relative pl-8 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-brand-500 bg-ink-950" />
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h4 className="text-base font-semibold text-white">{item.title}</h4>
                {item.date && <span className="text-xs text-ink-500 font-mono">{item.date}</span>}
              </div>
              {item.subtitle && <p className="text-sm text-ink-400">{item.subtitle}</p>}
              {item.items && (
                <ul className="flex flex-col gap-1 mt-1">
                  {item.items.map((it, j) => (
                    <li key={j} className="text-sm text-ink-400 flex items-start gap-2">
                      <span className="text-ink-600 mt-1.5 text-[6px]">●</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
