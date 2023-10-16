import { BlockHeaderSkeleton } from '@features/BlockHeader';
import { NewsBlockSkeleton } from '@features/NewsBlock';
import { NewsCardSkeleton } from '@features/NewsCard';

const SKELETON_ITEMS = Array.from({ length: 24 }, (_, i) => i);

function ArticlesPageSkeleton() {
  return (
    <div className="bg-white w-full h-full pt-2.5 text-black flex flex-col items-center gap-10">
      <NewsBlockSkeleton />

      <div className="w-full">
        <BlockHeaderSkeleton />
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 my-5">
          {SKELETON_ITEMS.map((index) => (
            <NewsCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlesPageSkeleton;