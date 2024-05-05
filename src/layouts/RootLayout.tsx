import { Footer } from '@features/Footer';
import { Header } from '@features/Header';
import { ScrollToTop } from '@processes/navigation';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="w-full h-full layout">
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export { RootLayout as Component };
export default RootLayout;
