import SectionHeading from '@/components/SectionHeading';
import { ChevronRight } from 'lucide-react';

const FLOW = [
  'Customer Problem',
  'Business Objective',
  'Product Strategy',
  'Prioritization',
  'Execution',
  'Measurement',
  'Iteration',
];

const EXAMPLES = [
  {
    company: 'CIMET',
    flow: ['Simplify insurance comparison and purchase', 'Product journey', 'Funnel optimization', 'Conversion'],
  },
  {
    company: 'Gupshup',
    flow: ['Simplify complex healthcare information', 'Agentic AI + RAG', 'Evaluation', 'Adoption and CSAT'],
  },
  {
    company: 'Sprinklr',
    flow: ['Improve enterprise agent productivity', 'AI Agent Assist', 'Better intent/relevance/context', 'Lower AHT'],
  },
];

export default function ProductThinking() {
  return (
    <section className="section-pad relative">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Product Thinking"
          title="How I think about products"
          description="A repeatable framework for turning customer problems into measurable outcomes — applied across every product I build."
        />

        {/* Flow chain */}
        <div className="mt-14 reveal">
          <div className="card-surface p-6 lg:p-8 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              {FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="text-sm font-medium text-ink-200 whitespace-nowrap">
                    {step}
                  </span>
                  {i < FLOW.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-ink-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {EXAMPLES.map((ex, i) => (
            <div
              key={ex.company}
              className="card-surface card-hover p-6 flex flex-col gap-4 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-sm font-semibold text-white tracking-wide">{ex.company}</span>
              <div className="flex flex-col gap-2">
                {ex.flow.map((step, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-ink-600 w-5">{String(j + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-ink-300">{step}</span>
                    {j < ex.flow.length - 1 && (
                      <div className="flex-1 h-px bg-ink-800/60 ml-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
