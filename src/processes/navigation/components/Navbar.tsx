import { useFetchMenuListQuery } from '@entities/menu';
import { NavbarSkeleton } from '@processes/navigation';
import { cn } from '@shared/utils';
import { memo, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useClickAway } from 'react-use';

interface NavbarProps {
  open?: boolean;
  onClose?: () => void;
}

function Navbar({ open = false, onClose }: NavbarProps) {
  const elRef = useRef<HTMLUListElement>(null);
  const { data, isLoading } = useFetchMenuListQuery('');

  useClickAway(elRef, () => onClose?.());

  return isLoading ? (
    <NavbarSkeleton />
  ) : data ? (
    <ul
      ref={elRef}
      className={cn(
        'fixed right-0 left-0 top-[60px] invisible opacity-0 transition-all scale-0',
        'block list-none w-full leading-[1] flex-wrap justify-center items-center gap-1',
        'md:relative md:top-auto md:flex md:visible md:opacity-100 md:scale-100 z-40',
        open && 'visible opacity-100 bg-background p-2.5 scale-100',
      )}
    >
      {data.map((item) => (
        <li key={item.id}>
          <HashLink
            className={cn(
              'group inline-flex h-9 w-max items-center rounded-md px-4 py-2',
              'text-base font-normal w-full justify-start md:w-fit md:justify-center',
              'transition-colors hover:bg-accent hover:text-accent-foreground',
            )}
            to={item.path}
            smooth
          >
            {item.title}
          </HashLink>
        </li>
      ))}
    </ul>
  ) : null;
}

const MemoizedNavbar = memo(Navbar);

export default MemoizedNavbar;