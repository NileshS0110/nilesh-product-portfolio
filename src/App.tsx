import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Home from '@/sections/Home';
import CimetCaseStudy from '@/pages/CimetCaseStudy';
import GupshupCaseStudy from '@/pages/GupshupCaseStudy';
import SprinklrCaseStudy from '@/pages/SprinklrCaseStudy';
import { useHashRoute } from '@/hooks/useHashRoute';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  const route = useHashRoute();

  useScrollReveal();

  // Re-run reveal observer after route change
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal:not(.is-visible)');
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      els.forEach((el) => io.observe(el));
    }, 50);
    return () => clearTimeout(timer);
  });

  let content: React.ReactNode;
  if (route.name === 'case' && route.slug === 'cimet') {
    content = <CimetCaseStudy />;
  } else if (route.name === 'case' && route.slug === 'gupshup') {
    content = <GupshupCaseStudy />;
  } else if (route.name === 'case' && route.slug === 'sprinklr') {
    content = <SprinklrCaseStudy />;
  } else {
    content = <Home />;
  }

  return (
    <div className="min-h-screen bg-ink-950">
      <Nav />
      <main>{content}</main>
      <Footer />
    </div>
  );
}

export default App;
