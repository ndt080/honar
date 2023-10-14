import { BlockHeaderSkeleton } from '@features/BlockHeader';
import { NewsCardSkeleton } from '@features/NewsCard';
import { Separator } from '@shared/ui/lib/separator.tsx';

function NewsBlockSkeleton() {
  return (
    <div className="block w-full">
      <BlockHeaderSkeleton />
      <div className="py-5 w-auto">
        <div className="w-full flex flex-col md:flex-row gap-3.5 md:gap-5 h-fit">
          <div className="flex-grow">
            <NewsCardSkeleton />
          </div>

          <Separator className="hidden md:block bg-primary/10 h-auto" orientation="vertical" />

          <div className="flex flex-col md:justify-between gap-3.5 w-full md:w-[300px]">
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBlockSkeleton;
