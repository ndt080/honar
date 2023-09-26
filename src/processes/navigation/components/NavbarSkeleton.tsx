import { Skeleton } from '@shared/ui/lib/skeleton';

const SKELETON_ITEMS = Array.from({ length: 5 }, (_, i) => i + 1);

function NavbarSkeleton() {
  return (
    <div className="flex items-center justify-between md:justify-center gap-3 w-full h-full flex-grow">
      {SKELETON_ITEMS.map((item) => (
        <Skeleton key={item} className="h-[26px] w-full max-w-[140px]" />
      ))}
    </div>
  );
}

export default NavbarSkeleton;