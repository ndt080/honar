import { Skeleton } from '@shared/ui/lib/skeleton.tsx';
import { cn } from '@shared/utils';

interface HomeCardSkeletonProps {
  className?: string;
}

function PreviewCardSkeleton({ className }: HomeCardSkeletonProps) {
  return (
    <Skeleton
      className={cn('flex items-end w-full h-full overflow-hidden rounded-2xl shadow', className)}
    >
      <div className="flex flex-col gap-2.5 w-full h-fit text-black m-5 md:m-10">
        <Skeleton className="h-[60px] w-[50%]" />
        <Skeleton className="h-[40px] w-[100%]" />
      </div>
    </Skeleton>
  );
}

export default PreviewCardSkeleton;
