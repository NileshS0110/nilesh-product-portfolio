import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';
import { navigate } from '@/hooks/useHashRoute';

const CREDIBILITY = [
  '8+ Years Experience',
  '0-to-1 Products',
  'B2B + B2C',
  'Enterprise SaaS',
  'AI/ML',
  'InsurTech + Healthcare',
];

const ECOSYSTEM = [
  { label: 'Customer Problem', desc: 'Discovery & research' },
  { label: 'Product', desc: 'Strategy & build' },
  { label: 'Data', desc: 'Analytics & insights' },
  { label: 'AI', desc: 'LLMs, RAG, agents' },
  { label: 'Business Outcome', desc: 'Growth & revenue' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-brand-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-accent-600/5 rounded-full blur-[100px]" />

      <div className="container-px max-w-[1400px] mx-auto w-full relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 reveal">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse-soft" />
                <span className="eyebrow">Available for new opportunities</span>
              </div>

              <h1 className="text-display-xl font-semibold text-gradient reveal reveal-delay-1">
                Nilesh Singh
              </h1>

              <div className="flex flex-col gap-2 reveal reveal-delay-2">
                <p className="text-lg lg:text-xl font-medium text-ink-200">
                  Product Manager | Product Strategy & Growth | 0-to-1 Products
                </p>
                <p className="text-base text-ink-400">B2B & B2C | AI & SaaS</p>
              </div>

              <p className="text-xl lg:text-2xl text-ink-300 leading-relaxed max-w-xl reveal reveal-delay-3 font-serif italic">
                "I build and scale digital products that turn complex customer problems into simple, measurable experiences."
              </p>
            </div>

            <div className="flex flex-wrap gap-2 reveal reveal-delay-4">
              {CREDIBILITY.map((c) => (
                <span key={c} className="tag">
                  {c}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 reveal reveal-delay-5">
              <button onClick={() => scrollTo('#work')} className="btn-primary group">
                View Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
  href="/Nilesh_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary"
>
  <Download className="w-4 h-4" />
  Download Resume
</a>
              
              <div className="flex items-center gap-1 ml-2">
                <a
                  href="https://www.linkedin.com/in/nilesh-singh0110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:singhnileshvns@gmail.com" className="btn-ghost" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: ecosystem visual */}
          <div className="hidden lg:flex flex-col gap-0 reveal reveal-delay-3">
            <div className="card-surface p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/8 rounded-full blur-2xl" />
              <div className="relative flex flex-col gap-0">
                <div className="flex items-center justify-between mb-6">
                  <span className="eyebrow">Product Ecosystem</span>
                  <span className="text-[10px] font-mono text-ink-600">v2.0</span>
                </div>

                <div className="flex flex-col gap-0">
                  {ECOSYSTEM.map((node, i) => (
                    <div key={node.label}>
                      <div
                        className="flex items-center gap-4 p-4 rounded-xl border border-ink-800/50 bg-ink-900/30 hover:border-ink-700 hover:bg-ink-900/60 transition-all duration-300 ease-out-expo group"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="text-xs font-mono text-ink-600 w-6">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex flex-col gap-0.5 flex-1">
                          <span className="text-sm font-medium text-white group-hover:text-brand-300 transition-colors">
                            {node.label}
                          </span>
                          <span className="text-xs text-ink-500">{node.desc}</span>
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            i === ECOSYSTEM.length - 1
                              ? 'bg-accent-400'
                              : 'bg-brand-500'
                          } opacity-60 group-hover:opacity-100 transition-opacity`}
                        />
                      </div>
                      {i < ECOSYSTEM.length - 1 && (
                        <div className="flex justify-center py-1">
                          <div className="w-px h-4 bg-gradient-to-b from-ink-700 to-ink-800" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-ink-800/50 flex items-center justify-between">
                  <span className="text-xs text-ink-500">End-to-end ownership</span>
                  <span className="text-xs text-ink-400 font-medium">Problem → Outcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
