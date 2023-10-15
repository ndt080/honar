import './GalleryBlock.scss';

import { BlockHeaderSkeleton } from '@features/BlockHeader';
import { Skeleton } from '@shared/ui/lib/skeleton.tsx';
import { cn } from '@shared/utils';

function GalleryBlockSkeleton() {
  return (
    <div className="w-full">
      <BlockHeaderSkeleton />

      <div className="gallery-grid h-[460px] rounded-tl rounded-tr my-5">
        {Array.from({ length: 24 }, (_, i) => i).map((id) => (
          <Skeleton
            key={id}
            className={cn('gallery-card', `gallery-grid-span-${id % 3 ? 0 : id % 2 ? 2 : 1}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryBlockSkeleton;