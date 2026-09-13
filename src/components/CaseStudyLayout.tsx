import { ArrowLeft } from 'lucide-react';
import { navigate } from '@/hooks/useHashRoute';
import Tag from './Tag';

type CaseStudyLayoutProps = {
  title: string;
  subtitle: string;
  tags: string[];
  children: React.ReactNode;
};

export default function CaseStudyLayout({ title, subtitle, tags, children }: CaseStudyLayoutProps) {
  return (
    <article className="pt-24 pb-20">
      <div className="container-px max-w-[1100px] mx-auto">
        <button
          onClick={() => navigate('')}
          className="btn-ghost mb-12 reveal"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>

        <div className="flex flex-col gap-6 mb-16">
          <div className="flex flex-wrap gap-2 reveal">
            {tags.map((t) => (
              <Tag key={t} variant={t.includes('0-to-1') ? 'brand' : 'default'}>
                {t}
              </Tag>
            ))}
          </div>
          <h1 className="text-display-lg font-semibold text-gradient reveal reveal-delay-1 max-w-3xl">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-ink-400 leading-relaxed max-w-2xl reveal reveal-delay-2">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {children}
        </div>
      </div>
    </article>
  );
}

type CaseSectionProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function CaseSection({ eyebrow, title, children }: CaseSectionProps) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">{title}</h2>
      </div>
      <div className="reveal reveal-delay-1">{children}</div>
    </section>
  );
}
