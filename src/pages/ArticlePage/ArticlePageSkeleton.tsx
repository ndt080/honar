import { Skeleton } from '@shared/ui/lib/skeleton.tsx';
import { cn } from '@shared/utils';

const SKELETON_ITEMS = Array.from({ length: 5 }, (_, i) => i);

function ArticlePageSkeleton() {
  return (
    <article className="bg-white w-full h-full pt-2.5 text-black flex flex-col items-center gap-10">
      <Skeleton
        className={cn(
          'w-full min-h-[500px] !bg-cover !bg-article rounded-2xl',
          'flex flex-col justify-end p-10',
        )}
      >
        <div className="flex flex-col gap-2.5 w-full h-fit text-black lg:max-w-[75%] xl:max-w-[50%]">
          <Skeleton className="h-[20px] w-[30%]" />
          <Skeleton className="h-[40px] w-[50%]" />
          <Skeleton className="h-[30px] w-[100%]" />
        </div>
      </Skeleton>

      <main className="w-full md:max-w-[85%]">
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
    </article>
  );
}

export default ArticlePageSkeleton;