import SectionHeading from '@/components/SectionHeading';
import CaseStudyCard from '@/components/CaseStudyCard';

export default function FeaturedWork() {
  return (
    <section id="work" className="section-pad relative">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Featured Work"
          title="Case studies in product, growth & AI"
          description="A selection of products I've owned — from 0-to-1 platform launches to AI-powered enterprise solutions."
        />

        <div className="mt-16 flex flex-col gap-6">
          <CaseStudyCard
            slug="cimet"
            index="01 / CIMET"
            title="Building Australia's Health Insurance Comparison & Purchase Platform"
            tags={['0-to-1', 'B2C', 'InsurTech', 'Product Strategy', 'Growth']}
            description="Owned the end-to-end 0-to-1 launch of CIMET's Health Insurance comparison and purchase platform for the Australian market, taking the product from market research and competitive benchmarking through product strategy, requirements, UX, engineering, analytics, GTM and production launch."
            metrics={[
              { value: '10+', label: 'Insurers benchmarked' },
              { value: '40+', label: 'Plans benchmarked' },
              { value: '8,000+', label: 'Leads in first 4 weeks' },
              { value: '~21%', label: 'Lead-to-gross-sale' },
            ]}
            size="large"
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <CaseStudyCard
              slug="gupshup"
              index="02 / Gupshup"
              title="Healthcare Agentic AI"
              tags={['AI Product', 'Healthcare', 'B2B', 'RAG', 'Agentic AI']}
              description="Built a Healthcare Agentic Chatbot leveraging GPT-4 with multi-agent orchestration for document Q&A, pricing retrieval and web search. Designed domain-specific guardrails and integrated RAG pipelines with embeddings."
              metrics={[
                { value: '92%', label: 'Retrieval precision' },
                { value: '<4s', label: 'Latency' },
                { value: '95%', label: 'Adoption uplift' },
                { value: '20%', label: 'CSAT improvement' },
              ]}
            />

            <CaseStudyCard
              slug="sprinklr"
              index="03 / Sprinklr"
              title="AI Agent Assist for Enterprise Customer Experience"
              tags={['B2B SaaS', 'Enterprise AI', 'Customer Experience']}
              description="Launched an agent-assist bot leveraging BERT-based intent detection, LightGBM relevance scoring and multi-turn context handling to improve agent productivity and enterprise adoption."
              metrics={[
                { value: '20%', label: 'Intent F1 improvement' },
                { value: '25%', label: 'AHT reduction' },
                { value: '2,000+', label: 'Agent hours saved/mo' },
              ]}
            />
          </div>

          <CaseStudyCard
            slug="sprinklr"
            index="04 / Sprinklr Growth"
            title="Enterprise Personalization & Product Growth"
            tags={['B2B SaaS', 'Enterprise', 'AI', 'Growth', 'Revenue']}
            description="Led product roadmap development and feature prioritization for prominent American and European brands, while driving AI-powered personalization and product-led upselling/cross-selling initiatives."
            metrics={[
              { value: '15%', label: 'NPS improvement' },
              { value: '$400K', label: 'Revenue growth' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
