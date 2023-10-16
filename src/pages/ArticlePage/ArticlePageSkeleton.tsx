import { PreviewCardSkeleton } from '@features/PreviewCard';
import { Skeleton } from '@shared/ui/lib/skeleton.tsx';

const SKELETON_ITEMS = Array.from({ length: 5 }, (_, i) => i);

function ArticlePageSkeleton() {
  return (
    <main className="bg-white h-full pt-2.5 flex flex-col gap-10">
      <PreviewCardSkeleton className="h-[220px] md:h-[320px] mt-2.5" />
      <div className="flex flex-col w-full gap-2.5">
        {SKELETON_ITEMS.map((item) => (
          <Skeleton key={item} className="w-full h-[20px]" />
        ))}

        <div className="w-full flex items-center justify-center p-5">
          <Skeleton className="w-[50%] h-[300px]" />
        </div>

        {SKELETON_ITEMS.map((item) => (
          <Skeleton key={item} className="w-full h-[20px]" />
        ))}
      </div>
    </main>
  );
}

export default ArticlePageSkeleton;