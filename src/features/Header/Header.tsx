import { Navbar, NavbarButton, NavbarSkeleton, RoutePath } from '@processes/navigation';
import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toHome = () => navigate(RoutePath.Home);

  return (
    <header className="relative flex items-center justify-between min-h-[60px] py-1.5">
      <img src="/images/logo.png" className="h-[60px] cursor-pointer" alt="logo" onClick={toHome} />

      <div className="flex items-center justify-between md:justify-center gap-3 w-full h-full flex-grow">
        <div className="flex items-center justify-center w-full h-fit">
          <Suspense fallback={<NavbarSkeleton />}>
            <Navbar open={open} onClose={() => setOpen(false)} />
          </Suspense>
        </div>

        <NavbarButton className="md:hidden" open={open} onClick={() => setOpen(!open)} />
      </div>
    </header>
  );
}

export default Header;