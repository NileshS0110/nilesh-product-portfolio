import CaseStudyLayout, { CaseSection } from '@/components/CaseStudyLayout';
import FlowDiagram from '@/components/FlowDiagram';
import MetricCard from '@/components/MetricCard';
import Tag from '@/components/Tag';

const SYSTEM_FLOW = [
  { label: 'User' },
  { label: 'Intent / Routing' },
  { label: 'Multi-Agent Orchestration' },
  { label: 'RAG' },
  { label: 'Knowledge / Pricing / Web Search' },
  { label: 'Response' },
];

const HIGHLIGHTS = ['GPT-4', 'RAG', 'Vector Embeddings', 'Multi-Agent Orchestration', 'Domain Guardrails'];

const PM_STORY = [
  'Problem',
  'Product Requirements',
  'Architecture / Technical Collaboration',
  'Experience Design',
  'Evaluation',
  'Launch',
  'Business Outcome',
];

export default function GupshupCaseStudy() {
  return (
    <CaseStudyLayout
      title="Building a Healthcare Agentic AI Product"
      subtitle="A multi-agent conversational AI for healthcare document Q&A, pricing retrieval and compliant responses."
      tags={['AI Product', 'Healthcare', 'B2B', 'RAG', 'Agentic AI']}
    >
      {/* System Architecture */}
      <CaseSection eyebrow="System Architecture" title="How the agentic AI works">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={SYSTEM_FLOW} direction="vertical" />

          <div className="mt-8 pt-6 border-t border-ink-800/60">
            <span className="eyebrow block mb-3">Key Technologies</span>
            <div className="flex flex-wrap gap-2">
              {HIGHLIGHTS.map((h) => (
                <Tag key={h} variant="brand">{h}</Tag>
              ))}
            </div>
          </div>
        </div>
      </CaseSection>

      {/* Metrics */}
      <CaseSection eyebrow="Metrics" title="Product outcomes">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard value="92%" label="Retrieval precision" variant="large" />
          <MetricCard value="<4s" label="Latency" variant="large" />
          <MetricCard value="95%" label="Adoption uplift" variant="large" />
          <MetricCard value="20%" label="CSAT improvement" variant="large" />
        </div>
      </CaseSection>

      {/* PM Story */}
      <CaseSection eyebrow="Product Management Story" title="From problem to business outcome">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={PM_STORY.map((s) => ({ label: s }))} direction="horizontal" />
        </div>
      </CaseSection>

      {/* Gupshup Growth */}
      <CaseSection eyebrow="Gupshup Growth" title="Growth experimentation">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="card-surface p-6 lg:p-8 flex flex-col gap-4">
            <span className="eyebrow">WhatsApp Payment Conversion</span>
            <p className="text-sm text-ink-400 leading-relaxed">
              A/B tested payment options and used data-driven insights to optimize the experience.
            </p>
            <div className="pt-4 border-t border-ink-800/60">
              <span className="text-3xl font-semibold text-accent-400">40%</span>
              <span className="text-sm text-ink-400 block mt-1">Increase in payment conversion</span>
            </div>
          </div>

          <div className="card-surface p-6 lg:p-8 flex flex-col gap-4">
            <span className="eyebrow">Click-to-WhatsApp GTM</span>
            <p className="text-sm text-ink-400 leading-relaxed">
              Drove qualified leads through click-to-WhatsApp campaigns with optimized cost efficiency.
            </p>
            <div className="pt-4 border-t border-ink-800/60">
              <span className="text-3xl font-semibold text-accent-400">30%</span>
              <span className="text-sm text-ink-400 block mt-1">Reduction in cost per qualified lead</span>
            </div>
          </div>
        </div>
      </CaseSection>
    </CaseStudyLayout>
  );
}
