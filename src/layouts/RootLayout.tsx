import { Footer } from '@features/Footer';
import { Header } from '@features/Header';
import { ScrollArea } from '@shared/ui/lib/scroll-area.tsx';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <ScrollArea className="relative w-full h-full flex justify-center items-start layout">
      <Header />
      <Outlet />
      <Footer />
    </ScrollArea>
  );
}

export { RootLayout as Component };
export default RootLayout;
