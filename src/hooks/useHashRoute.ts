import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'case'; slug: 'cimet' | 'gupshup' | 'sprinklr' };

export function parseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, '');
  if (h === 'case/cimet') return { name: 'case', slug: 'cimet' };
  if (h === 'case/gupshup') return { name: 'case', slug: 'gupshup' };
  if (h === 'case/sprinklr') return { name: 'case', slug: 'sprinklr' };
  return { name: 'home' };
}

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? parseHash() : { name: 'home' }
  );

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return route;
}

export function navigate(path: string) {
  window.location.hash = path;
}
