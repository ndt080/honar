import { Skeleton } from '@shared/ui/lib/skeleton.tsx';

function BlockHeaderSkeleton() {
  return (
    <div className="flex justify-between items-end gap-5 w-full h-[36px]">
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-[200px] h-full" />
    </div>
  );
}

export default BlockHeaderSkeleton;