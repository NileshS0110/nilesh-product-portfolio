import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown } from 'lucide-react';

type FlowStep = {
  label: string;
  sublabel?: string;
};

type FlowDiagramProps = {
  steps: FlowStep[];
  direction?: 'horizontal' | 'vertical';
  className?: string;
  variant?: 'default' | 'compact';
};

export default function FlowDiagram({
  steps,
  direction = 'horizontal',
  className,
  variant = 'default',
}: FlowDiagramProps) {
  const isHorizontal = direction === 'horizontal';

  return (
    <div
      className={cn(
        'flex flex-wrap items-stretch gap-2',
        isHorizontal ? 'flex-row' : 'flex-col',
        className
      )}
    >
      {steps.map((step, i) => (
        <div key={i} className={cn('flex items-center gap-2', isHorizontal ? 'flex-row' : 'flex-row w-full')}>
          <div
            className={cn(
              'card-surface flex flex-col justify-center text-center reveal',
              variant === 'compact' ? 'px-4 py-3' : 'px-5 py-4',
              isHorizontal ? 'min-w-[120px] flex-1' : 'w-full'
            )}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="text-[10px] font-mono text-ink-500 mb-1">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-sm font-medium text-white leading-tight">{step.label}</span>
            {step.sublabel && (
              <span className="text-xs text-ink-500 mt-1">{step.sublabel}</span>
            )}
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center text-ink-600 shrink-0">
              {isHorizontal ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
