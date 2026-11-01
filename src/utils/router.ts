import { useState, useEffect, useCallback } from 'react';

export type AppRoute =
  | { type: 'home'; section?: string }
  | { type: 'project'; slug: string }
  | { type: '404' };

/**
 * Parse the current browser location into an AppRoute.
 * Handles both pathname (e.g. /work/project-01) and hash routes (e.g. #/work/project-01)
 * to ensure resilience across all static hosts and local dev environments.
 */
export function parseRoute(pathOrHash?: string): AppRoute {
  let target = pathOrHash;

  if (target === undefined) {
    target = typeof window !== 'undefined' ? window.location.pathname : '/';
  }

  // Check hash if running in browser and no explicit path passed
  if (pathOrHash === undefined && typeof window !== 'undefined' && window.location.hash.startsWith('#/')) {
    target = window.location.hash.slice(1);
  } else if (target.startsWith('#/')) {
    target = target.slice(1);
  }

  // Remove trailing slashes and clean up
  const clean = target.replace(/\/+$/, '') || '/';

  if (clean === '/' || clean === '') {
    return { type: 'home' };
  }

  // Match /work/:slug
  const workMatch = clean.match(/^\/work\/([a-zA-Z0-9_-]+)$/);
  if (workMatch) {
    return { type: 'project', slug: workMatch[1] };
  }

  // Check if it's an in-page section link like /#work or /#about
  if (clean.startsWith('#')) {
    return { type: 'home', section: clean.slice(1) };
  }

  return { type: '404' };
}

/**
 * Navigate to a specific path using pushState and notify subscribers.
 */
export function navigate(url: string) {
  if (url.startsWith('#')) {
    // In-page hash scroll
    window.location.hash = url;
    return;
  }

  // If going to home and on home, just scroll
  if (url === '/' && (window.location.pathname === '/' || window.location.pathname === '')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', url);
  window.dispatchEvent(new Event('app-route-change'));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/**
 * Hook to listen to router changes
 */
export function useAppRoute(): [AppRoute, (url: string) => void] {
  const [route, setRoute] = useState<AppRoute>(() => parseRoute());

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(parseRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('app-route-change', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('app-route-change', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleNavigate = useCallback((url: string) => {
    navigate(url);
  }, []);

  return [route, handleNavigate];
}
