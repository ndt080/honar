import { Footer } from '@features/Footer';
import { Header } from '@features/Header';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="w-screen h-full flex justify-center items-start">
      <div className="max-w-screen-xl w-full h-full grid grid-rows-[auto_1fr_auto] grid-cols-1">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export { RootLayout as Component };
export default RootLayout;
