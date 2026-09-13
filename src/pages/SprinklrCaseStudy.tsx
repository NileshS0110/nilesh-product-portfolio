import CaseStudyLayout, { CaseSection } from '@/components/CaseStudyLayout';
import FlowDiagram from '@/components/FlowDiagram';
import MetricCard from '@/components/MetricCard';
import Tag from '@/components/Tag';

const SYSTEM_FLOW = [
  { label: 'Customer Conversation' },
  { label: 'Intent Detection' },
  { label: 'Relevance Scoring' },
  { label: 'Multi-turn Context' },
  { label: 'Agent Recommendation' },
  { label: 'Resolution' },
];

const TECHNOLOGY = ['BERT', 'LightGBM', 'Intent Detection', 'Relevance Scoring', 'Multi-turn Context'];

const GROWTH_FLOW = [
  { label: 'Enterprise Clients' },
  { label: 'Product Roadmap' },
  { label: 'Feature Prioritization' },
  { label: 'AI Personalization' },
  { label: 'Upselling / Cross-selling' },
  { label: 'Revenue' },
];

const BRANDS = ['Apple', 'Lenovo', 'Walmart', "L'Oréal", 'Home Depot'];

export default function SprinklrCaseStudy() {
  return (
    <CaseStudyLayout
      title="AI Agent Assist for Enterprise Customer Experience"
      subtitle="Improving agent productivity with BERT-based intent detection, LightGBM relevance scoring and multi-turn context handling."
      tags={['B2B SaaS', 'Enterprise AI', 'Customer Experience']}
    >
      {/* System Architecture */}
      <CaseSection eyebrow="System Architecture" title="How AI Agent Assist works">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={SYSTEM_FLOW} direction="vertical" />

          <div className="mt-8 pt-6 border-t border-ink-800/60">
            <span className="eyebrow block mb-3">Technology</span>
            <div className="flex flex-wrap gap-2">
              {TECHNOLOGY.map((t) => (
                <Tag key={t} variant="brand">{t}</Tag>
              ))}
            </div>
          </div>
        </div>
      </CaseSection>

      {/* Metrics */}
      <CaseSection eyebrow="Metrics" title="Product outcomes">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <MetricCard value="20%" label="Intent F1 improvement" variant="large" />
          <MetricCard value="25%" label="AHT reduction" variant="large" />
          <MetricCard value="2,000+" label="Agent hours saved/month" variant="large" />
        </div>
      </CaseSection>

      {/* Positioning */}
      <CaseSection eyebrow="Positioning" title="Enterprise product focus">
        <div className="flex flex-wrap gap-2">
          {['Enterprise Product', 'B2B SaaS', 'AI', 'Customer Experience', 'Product Adoption'].map((item) => (
            <Tag key={item} variant="accent">{item}</Tag>
          ))}
        </div>
      </CaseSection>

      {/* Sprinklr Product Growth */}
      <CaseSection eyebrow="Sprinklr Product Growth" title="Enterprise personalization & revenue">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={GROWTH_FLOW} direction="horizontal" />

          <div className="mt-8 pt-6 border-t border-ink-800/60">
            <span className="eyebrow block mb-4">Brands worked with</span>
            <div className="flex flex-wrap gap-2">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="text-sm text-ink-300 border border-ink-800/60 rounded-lg px-4 py-2 font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <MetricCard value="15%" label="NPS improvement" variant="large" />
          <MetricCard value="$400K" label="Revenue growth" variant="large" />
        </div>
      </CaseSection>
    </CaseStudyLayout>
  );
}
