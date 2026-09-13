import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { navigate, useHashRoute } from '@/hooks/useHashRoute';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Impact', href: '#impact' },
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const route = useHashRoute();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHome = () => {
    if (route.name !== 'home') {
      navigate('');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLink = (href: string) => {
    setOpen(false);
    if (route.name !== 'home') {
      navigate('');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo',
        scrolled ? 'bg-ink-950/80 backdrop-blur-xl border-b border-ink-800/60' : 'bg-transparent'
      )}
    >
      <nav className="container-px max-w-[1400px] mx-auto flex items-center justify-between h-16">
        <button onClick={goHome} className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-white text-ink-950 flex items-center justify-center text-sm font-bold transition-transform group-hover:scale-105">
            N
          </span>
          <span className="text-sm font-medium text-white hidden sm:block">Nilesh Singh</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="px-3 py-2 text-sm text-ink-400 hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => handleLink('#contact')} className="hidden md:inline-flex btn-primary text-xs px-4 py-2">
            Get in touch
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink-300 hover:text-white"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-xl border-b border-ink-800/60">
          <div className="container-px py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className="px-3 py-3 text-left text-sm text-ink-300 hover:text-white border-b border-ink-800/40"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
