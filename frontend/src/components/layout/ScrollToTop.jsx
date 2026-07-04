import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../../context/LenisContext.jsx';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenisRef = useLenis();

  useEffect(() => {
    if (hash) {
      // Wait a tick for the target route's content to mount before measuring position.
      const id = hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (!el) return false;
        if (lenisRef?.current) lenisRef.current.scrollTo(el, { offset: -80 });
        else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      };
      if (!scrollToHash()) {
        const timeout = setTimeout(scrollToHash, 80);
        return () => clearTimeout(timeout);
      }
      return undefined;
    }

    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    return undefined;
  }, [pathname, hash, lenisRef]);

  return null;
}

