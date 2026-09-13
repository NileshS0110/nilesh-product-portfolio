import CaseStudyLayout, { CaseSection } from '@/components/CaseStudyLayout';
import FlowDiagram from '@/components/FlowDiagram';
import MetricCard from '@/components/MetricCard';
import Tag from '@/components/Tag';
import { Target, Users, Search, BarChart3, Zap } from 'lucide-react';

const ROLES = [
  '0-to-1 Product Ownership',
  'Product Strategy',
  'Customer Journey',
  'Product Requirements',
  'Roadmap',
  'Cross-functional Execution',
  'Product Analytics',
  'Growth & Conversion',
];

const DISCOVERY = [
  { label: '10+', sublabel: 'Australian insurers' },
  { label: '40+', sublabel: 'Health insurance plans' },
];

const JOURNEY = [
  { label: 'DISCOVER' },
  { label: 'COMPARE' },
  { label: 'GET QUOTE' },
  { label: 'APPLY' },
  { label: 'PURCHASE' },
];

const OWNERSHIP = [
  'Market Research',
  'Competitive Analysis',
  'Product Strategy',
  'Requirements',
  'UX',
  'Engineering',
  'Analytics',
  'GTM',
  'Production Launch',
];

const CROSS_FUNCTIONAL = ['Design', 'Engineering', 'Data', 'Marketing', 'Operations', 'Compliance'];

const AI_FLOW = [
  { label: 'Upload Existing Policy' },
  { label: 'Extract Policy Details' },
  { label: 'Understand Coverage' },
  { label: 'Identify Needs' },
  { label: 'Recommend Plans' },
  { label: 'Compare' },
  { label: 'Purchase' },
];

const OPTIMIZATION_FUNNEL = [
  'Landing Page',
  'Plan Comparison',
  'Quote Generation',
  'Application',
  'Purchase',
];

export default function CimetCaseStudy() {
  return (
    <CaseStudyLayout
      title="Building Australia's Health Insurance Comparison & Purchase Journey"
      subtitle="Taking customers from discovery and comparison to quote and purchase in one digital journey."
      tags={['0-to-1', 'B2C', 'InsurTech', 'Product Strategy', 'Growth']}
    >
      {/* Challenge */}
      <CaseSection eyebrow="The Challenge" title="Simplifying a complex purchase journey">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-base lg:text-lg text-ink-300 leading-relaxed">
            CIMET needed to build a digital health insurance comparison and purchase experience for the
            Australian market — simplifying the customer journey from discovery through purchase. The
            product required competitive benchmarking across insurers, a clear comparison logic, and a
            seamless path from quote to application to purchase.
          </p>
        </div>
      </CaseSection>

      {/* My Role */}
      <CaseSection eyebrow="My Role" title="End-to-end product ownership">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ROLES.map((role, i) => (
            <div
              key={role}
              className="card-surface p-4 flex items-center gap-3 reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
              <span className="text-sm text-ink-200">{role}</span>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* Discovery */}
      <CaseSection eyebrow="Discovery" title="Competitive benchmarking & market research">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {DISCOVERY.map((d) => (
            <MetricCard
              key={d.label}
              value={d.label}
              label={d.sublabel}
              variant="large"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {['Competitive benchmarking', 'Market research', 'Comparison logic', 'Customer journey definition'].map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </CaseSection>

      {/* Product Journey */}
      <CaseSection eyebrow="Product Journey" title="From discovery to purchase">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={JOURNEY} direction="horizontal" />
          <p className="mt-6 text-sm text-ink-400 leading-relaxed">
            I owned the product experience across the entire acquisition-to-purchase funnel — from
            initial discovery through plan comparison, quote generation, application and final purchase.
          </p>
        </div>
      </CaseSection>

      {/* End-to-End Ownership */}
      <CaseSection eyebrow="End-to-End Ownership" title="Cross-functional execution">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={OWNERSHIP.map((o, i) => ({ label: o, sublabel: String(i + 1).padStart(2, '0') }))} direction="horizontal" />
          <div className="mt-8 pt-6 border-t border-ink-800/60">
            <span className="eyebrow block mb-3">Cross-functional teams</span>
            <div className="flex flex-wrap gap-2">
              {CROSS_FUNCTIONAL.map((team) => (
                <Tag key={team} variant="brand">{team}</Tag>
              ))}
            </div>
          </div>
        </div>
      </CaseSection>

      {/* Early Growth */}
      <CaseSection eyebrow="Early Growth" title="Launch results">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <MetricCard value="8,000+" label="Unique leads" description="First 4 weeks post-launch" variant="large" />
          <MetricCard value="~21%" label="Lead-to-gross-sale conversion" variant="large" />
          <MetricCard value="~1,680" label="Approx. gross sales implied" description="8,000 × 21% — derived from reported figures, not independently verified" variant="large" />
        </div>
      </CaseSection>

      {/* Funnel */}
      <CaseSection eyebrow="Funnel" title="Acquisition to purchase">
        <div className="card-surface p-6 lg:p-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-4 rounded-xl border border-ink-800/50 bg-ink-900/30">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-ink-600">01</span>
                <span className="text-sm font-medium text-white">Visits</span>
              </div>
              <span className="text-sm text-ink-500 italic">[Verified visits data to be added]</span>
            </div>
            <div className="flex justify-center text-ink-600">↓</div>
            <div className="flex items-center justify-between p-4 rounded-xl border border-brand-500/30 bg-brand-500/5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-brand-400">02</span>
                <span className="text-sm font-medium text-white">Leads</span>
              </div>
              <span className="text-lg font-semibold text-white">8,000+</span>
            </div>
            <div className="flex justify-center text-ink-600">↓</div>
            <div className="flex items-center justify-between p-4 rounded-xl border border-accent-500/30 bg-accent-500/5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-accent-400">03</span>
                <span className="text-sm font-medium text-white">Gross Sales</span>
              </div>
              <span className="text-sm text-accent-300">~21% conversion from leads</span>
            </div>
          </div>
        </div>
      </CaseSection>

      {/* Product Optimization */}
      <CaseSection eyebrow="Product Optimization" title="Funnel drop-off analysis">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-sm text-ink-400 leading-relaxed mb-6">
            Owned optimization of the end-to-end acquisition-to-purchase funnel, identifying conversion
            drop-offs across each stage and translating insights into product and UX improvements.
          </p>
          <FlowDiagram steps={OPTIMIZATION_FUNNEL.map((o) => ({ label: o }))} direction="horizontal" />
        </div>
      </CaseSection>

      {/* CIMET AI Roadmap */}
      <CaseSection eyebrow="CIMET AI Roadmap" title="AI-powered policy recommendation flow">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={AI_FLOW} direction="horizontal" />

          <div className="mt-8 pt-6 border-t border-ink-800/60">
            <span className="eyebrow block mb-4">Achieved Metrics</span>
            <div className="grid sm:grid-cols-2 gap-4">
              <MetricCard value="95%+" label="Field-level extraction accuracy" />
              <MetricCard value="<10s" label="Personalized recommendation generation" />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-ink-800/60">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-warn-400" />
              <span className="eyebrow text-warn-400">Targets — not yet achieved</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="card-surface p-4 border-warn-500/20">
                <span className="text-lg font-semibold text-warn-400">25%</span>
                <span className="text-sm text-ink-400 block mt-1">Reduction in quote-comparison time — Target</span>
              </div>
              <div className="card-surface p-4 border-warn-500/20">
                <span className="text-lg font-semibold text-warn-400">10–15%</span>
                <span className="text-sm text-ink-400 block mt-1">Improvement in quote-to-purchase conversion — Target</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-ink-800/60">
            <span className="eyebrow block mb-4">Future Roadmap</span>
            <div className="flex flex-wrap gap-2">
              <Tag variant="accent">Conversational AI</Tag>
              <Tag variant="accent">Voice Agents</Tag>
            </div>
          </div>
        </div>
      </CaseSection>
    </CaseStudyLayout>
  );
}
