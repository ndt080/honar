import { useFetchMenuListQuery } from '@entities/menu';
import { cn } from '@shared/utils';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  open?: boolean;
}

function Navbar({ open = false }: NavbarProps) {
  const { data } = useFetchMenuListQuery('');

  return (
    data && (
      <ul
        className={cn(
          'fixed right-0 left-0 top-[60px] invisible opacity-0 transition-all scale-0',
          'block list-none w-full leading-[1] flex-wrap justify-center items-center gap-1',
          'md:relative md:top-auto md:flex md:visible md:opacity-100 md:scale-100',
          open && 'visible opacity-100 bg-background p-2.5 scale-100',
        )}
      >
        {data.items.map((item) => (
          <li key={item.id}>
            <Link
              className={cn(
                'group inline-flex h-9 w-max items-center rounded-md px-4 py-2',
                'text-base font-normal w-full justify-start md:w-fit md:justify-center',
                'transition-colors hover:bg-accent hover:text-accent-foreground',
              )}
              to={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}

const MemoizedNavbar = memo(Navbar);

export default MemoizedNavbar;