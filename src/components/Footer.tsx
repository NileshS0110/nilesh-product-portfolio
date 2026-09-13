import { Linkedin, Mail, FileText } from 'lucide-react';
import { navigate } from '@/hooks/useHashRoute';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/60 bg-ink-950">
      <div className="container-px max-w-[1400px] mx-auto py-16">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <div className="flex flex-col gap-4 max-w-md">
            <button onClick={() => navigate('')} className="flex items-center gap-2.5 w-fit">
              <span className="w-9 h-9 rounded-lg bg-white text-ink-950 flex items-center justify-center text-base font-bold">
                N
              </span>
              <span className="text-lg font-medium text-white">Nilesh Singh</span>
            </button>
            <p className="text-sm text-ink-400 leading-relaxed">
              Product Manager | Product Strategy & Growth | 0-to-1 | B2B & B2C | AI & SaaS
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="eyebrow">Connect</span>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/nilesh-singh0110"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:singhnileshvns@gmail.com" className="link-underline text-sm">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800/40 flex flex-col sm:flex-row justify-between gap-4">
          <span className="text-xs text-ink-600">
            © {new Date().getFullYear()} Nilesh Singh. All rights reserved.
          </span>
          <span className="text-xs text-ink-600">
            Built with React, TypeScript & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
