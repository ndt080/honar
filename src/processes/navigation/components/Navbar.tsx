import { useFetchMenuListQuery } from '@entities/menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@shared/ui/navigation-menu';
import { cn } from '@shared/utils';
import { useEffect, useState } from 'react';

import NavbarButton from './NavbarButton.tsx';

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const { data } = useFetchMenuListQuery('');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex items-center justify-between md:justify-center gap-3 w-full h-full flex-grow">
      {data && (
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            {data.items.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'text-base font-normal')}
                  href={item.path}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
      <NavbarButton className="md:hidden" open={open} onClick={() => setOpen(!open)} />
    </div>
  );
}

export default Navbar;