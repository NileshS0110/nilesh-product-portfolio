import SectionHeading from '@/components/SectionHeading';

const CARDS = [
  {
    num: '01',
    title: '0-to-1 Product Development',
    items: ['Problem Discovery', 'Product Strategy', 'Requirements', 'Roadmapping', 'Build', 'Launch', 'Iteration'],
  },
  {
    num: '02',
    title: 'Growth & Product Analytics',
    items: ['Funnels', 'Experimentation', 'Conversion Optimization', 'Adoption', 'Retention', 'Monetization', 'Revenue'],
  },
  {
    num: '03',
    title: 'B2B & B2C Products',
    items: ['Consumer Products', 'Enterprise SaaS', 'Customer Experience', 'Platform Products', 'Stakeholder Management', 'GTM'],
  },
  {
    num: '04',
    title: 'AI-Powered Products',
    items: ['Generative AI', 'LLMs', 'RAG', 'Conversational AI', 'Agentic AI', 'Recommendation Systems', 'AI Evaluation'],
  },
];

export default function WhatIBuild() {
  return (
    <section className="section-pad relative">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="What I Build"
          title="Full-stack product ownership"
          description="From customer problem to business outcome — I own products across strategy, execution, analytics and growth."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, i) => (
            <div
              key={card.num}
              className="card-surface card-hover p-6 lg:p-7 flex flex-col gap-5 reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-mono font-medium text-ink-700 group-hover:text-brand-500 transition-colors duration-500">
                  {card.num}
                </span>
                <div className="w-8 h-8 rounded-lg border border-ink-800 group-hover:border-brand-500/40 group-hover:bg-brand-500/5 flex items-center justify-center transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-ink-600 group-hover:bg-brand-400 transition-colors" />
                </div>
              </div>

              <h3 className="text-base font-semibold text-white leading-snug">{card.title}</h3>

              <div className="flex flex-wrap gap-1.5">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] text-ink-400 border border-ink-800/60 rounded-md px-2 py-1 group-hover:border-ink-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
