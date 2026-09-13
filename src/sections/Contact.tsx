import { Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/8 rounded-full blur-[120px]" />

      <div className="container-px max-w-[1400px] mx-auto relative">
        <div className="card-surface p-10 lg:p-16 text-center flex flex-col items-center gap-8 reveal">
          <span className="eyebrow">Contact</span>

          <h2 className="text-display-lg font-semibold text-gradient max-w-3xl">
            Building something interesting?
          </h2>

          <p className="text-lg text-ink-400 max-w-xl">
            Open to Product Management, Senior Product Management and AI Product opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/nilesh-singh0110"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="mailto:singhnileshvns@gmail.com" className="btn-secondary">
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
  href="/Nilesh_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary"
>
  <Download className="w-4 h-4" />
  Download Resume
</a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
