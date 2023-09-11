import { Navbar } from '@processes/navigation';

function Header() {
  return (
    <header className="flex items-center justify-between h-[60px] py-1.5">
      <img src="/images/logo.png" className="h-full" alt="logo" />
      <Navbar />
    </header>
  );
}

export default Header;