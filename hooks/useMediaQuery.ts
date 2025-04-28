// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Garante que o código só rode no browser (para SSR)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Verifica o estado inicial
    setMatches(mediaQuery.matches);

    // Escuta por mudanças
    // addListener/removeListener são deprecated, use addEventListener/removeEventListener
    mediaQuery.addEventListener('change', handler);

    // Limpeza
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]); // Re-executa o efeito se a query mudar (improvável neste caso)

  return matches;
}

export default useMediaQuery;