import SectionHeading from '@/components/SectionHeading';

const CATEGORIES = [
  {
    title: 'Product Management',
    items: [
      'Product Strategy', 'Product Discovery', '0-to-1 Product Development', 'Product Lifecycle Management',
      'Roadmapping', 'Product Requirements', 'PRDs', 'User Stories', 'Backlog Management',
      'Agile / Scrum / Kanban', 'RICE / MoSCoW', 'Customer Journey Mapping', 'User Research',
      'Competitive Analysis', 'GTM', 'Product Launch', 'Stakeholder Management',
    ],
  },
  {
    title: 'Growth & Analytics',
    items: [
      'Growth Strategy', 'Funnel Optimization', 'Conversion Rate Optimization', 'A/B Testing',
      'Experimentation', 'Product-Led Growth', 'User Adoption', 'Retention', 'Engagement',
      'Monetization', 'Revenue Growth', 'KPI Definition', 'Product Analytics', 'Cohort Analysis',
      'Data-Driven Decision Making',
    ],
  },
  {
    title: 'AI & ML',
    items: [
      'Generative AI', 'LLMs', 'RAG', 'NLP', 'Conversational AI', 'Agentic AI',
      'Recommendation Systems', 'Intent Recognition', 'Vector Embeddings', 'AI Evaluation',
      'Prompt Engineering', 'API Integrations',
    ],
  },
  {
    title: 'Data & Tools',
    items: [
      'SQL', 'Python', 'Excel', 'Tableau', 'Power BI', 'Google Analytics', 'PostHog',
      'Apache Superset', 'Figma', 'Postman', 'Confluence', 'JIRA', 'Asana', 'ClickUp',
      'Salesforce', 'Dynamics 365',
    ],
  },
];

export default function Toolkit() {
  return (
    <section className="section-pad relative">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Product Toolkit"
          title="Skills & tools"
          description="The capabilities I bring across product management, growth, AI and data."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-4">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="card-surface p-6 lg:p-8 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono text-ink-600">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-sm font-semibold text-white tracking-wide">{cat.title}</h3>
                <div className="flex-1 h-px bg-ink-800/60" />
                <span className="text-xs text-ink-600">{cat.items.length}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] text-ink-400 border border-ink-800/60 rounded-md px-2 py-1 hover:border-ink-600 hover:text-ink-200 transition-colors"
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
