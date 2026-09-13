import SectionHeading from '@/components/SectionHeading';
import Timeline from '@/components/Timeline';

const EXPERIENCE = [
  {
    title: 'CIMET',
    subtitle: 'Product Manager',
    date: 'May 2025 – Present',
    items: [
      'Owned 0-to-1 launch of health insurance comparison & purchase platform',
      'Generated 8,000+ unique leads in first 4 weeks with ~21% lead-to-gross-sale conversion',
    ],
  },
  {
    title: 'Gupshup',
    subtitle: 'Product Manager, Growth',
    date: 'May 2024 – Mar 2025',
    items: [
      'Built Healthcare Agentic AI with 92% retrieval precision and 95% adoption uplift',
      'Drove 40% increase in WhatsApp payment conversion through A/B testing',
    ],
  },
  {
    title: 'Sprinklr',
    subtitle: 'Product Manager, Product Success',
    date: 'Mar 2021 – May 2024',
    items: [
      'Launched AI Agent Assist reducing AHT by 25% and saving 2,000+ agent hours/month',
      'Drove $400K revenue growth through AI personalization for enterprise brands',
    ],
  },
  {
    title: 'Geberit',
    subtitle: 'Assistant Manager, Analytics',
    date: 'Aug 2018 – Mar 2021',
    items: [
      'Built analytics capabilities to support product and business decisions',
      'Developed data-driven insights across product performance and customer behavior',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          description="8+ years building products across InsurTech, Healthcare, Enterprise SaaS and Customer Experience."
        />

        <div className="mt-16 max-w-2xl">
          <Timeline items={EXPERIENCE} />
        </div>
      </div>
    </section>
  );
}
