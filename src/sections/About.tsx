import SectionHeading from '@/components/SectionHeading';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EDUCATION = {
  institution: 'Indian Institute of Technology (BHU), Varanasi',
  degree: 'Bachelor of Technology',
  cgpa: '8.46',
  years: '2014 – 2018',
};

const CERTIFICATIONS = [
  { title: 'Product Management Certification', org: 'PM School' },
  { title: 'Elements of AI', org: 'University of Helsinki' },
  { title: 'Prompt Engineering for Everyone', org: 'IBM' },
  { title: 'Generative AI Fundamentals', org: 'Databricks' },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="About"
          title="The intersection of customer, technology & business"
        />

        <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* About text */}
          <div className="flex flex-col gap-6 reveal">
            <div className="card-surface p-8 lg:p-10">
              <p className="text-lg lg:text-xl text-ink-200 leading-relaxed">
                I am a product manager who enjoys working at the intersection of customer problems, technology and business outcomes.
              </p>
              <p className="mt-4 text-base text-ink-400 leading-relaxed">
                Over the last 8+ years, I have worked across InsurTech, Healthcare, Enterprise SaaS and Customer Experience — building products, improving customer journeys and using data and AI to drive measurable outcomes.
              </p>
            </div>

            {/* Education */}
            <div className="card-surface p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="w-5 h-5 text-brand-400" strokeWidth={1.5} />
                <span className="eyebrow">Education</span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-semibold text-white">{EDUCATION.institution}</h4>
                <p className="text-sm text-ink-400">{EDUCATION.degree}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-ink-300">
                    <span className="text-ink-500">CGPA:</span> <span className="font-medium text-white">{EDUCATION.cgpa}</span>
                  </span>
                  <span className="text-sm text-ink-500 font-mono">{EDUCATION.years}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-4 reveal reveal-delay-1">
            <div className="flex items-center gap-3 mb-1">
              <Award className="w-5 h-5 text-accent-400" strokeWidth={1.5} />
              <span className="eyebrow">Certifications</span>
            </div>
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={cert.title}
                className="card-surface card-hover p-5 flex items-center gap-4 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-lg border border-ink-800 group-hover:border-accent-500/30 flex items-center justify-center transition-colors">
                  <BookOpen className="w-4 h-4 text-ink-500 group-hover:text-accent-400 transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-white">{cert.title}</span>
                  <span className="text-xs text-ink-500">{cert.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
