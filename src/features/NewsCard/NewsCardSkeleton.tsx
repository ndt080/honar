import { Skeleton } from '@shared/ui/lib/skeleton.tsx';

function NewsCardSkeleton() {
  return (
    <article className="w-full flex flex-col gap-1.5">
      <Skeleton className="aspect-[16/8] w-full" />

      <div className="flex flex-col gap-1">
        <Skeleton className="w-[100px] h-[10px]" />
        <Skeleton className="w-full h-[18px]" />
        <Skeleton className="w-full h-[12px]" />
      </div>
    </article>
  );
}

export default NewsCardSkeleton;
