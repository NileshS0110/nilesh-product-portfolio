import SectionHeading from '@/components/SectionHeading';
import { Search, Target, Code2, Rocket, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'DISCOVER',
    icon: Search,
    items: ['Customer problems', 'Market research', 'Competitive analysis', 'User research', 'Data'],
  },
  {
    num: '02',
    title: 'DEFINE',
    icon: Target,
    items: ['Product strategy', 'Product vision', 'Customer journeys', 'Requirements', 'Success metrics'],
  },
  {
    num: '03',
    title: 'BUILD',
    icon: Code2,
    items: ['PRDs', 'User stories', 'Acceptance criteria', 'Design', 'Engineering', 'Agile execution'],
  },
  {
    num: '04',
    title: 'LAUNCH',
    icon: Rocket,
    items: ['GTM', 'Analytics', 'Experimentation', 'Stakeholder alignment'],
  },
  {
    num: '05',
    title: 'SCALE',
    icon: TrendingUp,
    items: ['Adoption', 'Conversion', 'Retention', 'Monetization', 'AI / Automation'],
  },
];

export default function HowIWork() {
  return (
    <section id="approach" className="section-pad relative">
      <div className="absolute inset-0 bg-dots opacity-30 mask-fade-b" />
      <div className="container-px max-w-[1400px] mx-auto relative">
        <SectionHeading
          eyebrow="How I Work"
          title="A five-step product framework"
          description="The lifecycle I follow to take products from customer problem to measurable business outcome."
        />

        <div className="mt-16 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-700 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative flex flex-col gap-4 reveal"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-24 h-24 rounded-2xl card-surface flex items-center justify-center group hover:border-brand-500/40 transition-all duration-300 ease-out-expo">
                      <Icon className="w-8 h-8 text-ink-400 group-hover:text-brand-400 transition-colors" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-ink-600">{step.num}</span>
                      <span className="text-sm font-semibold text-white tracking-wider">{step.title}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 items-center text-center">
                    {step.items.map((item) => (
                      <span key={item} className="text-xs text-ink-400">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
