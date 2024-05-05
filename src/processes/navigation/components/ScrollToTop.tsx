import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('root')?.scrollTo(0, 0);
  }, [pathname]);

  return <></>;
}

export { ScrollToTop };
