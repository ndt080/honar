import { useState } from 'react';

import NavbarButton from './NavbarButton.tsx';

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between gap-3 h-full flex-grow">
      <div>{}</div>
      <NavbarButton open={open} onClick={() => setOpen(!open)} />
    </nav>
  );
}

export default Navbar;