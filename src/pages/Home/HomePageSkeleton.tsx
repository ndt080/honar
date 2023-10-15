import { GalleryBlockSkeleton } from '@features/GalleryBlock';
import { HomeCardSkeleton } from '@features/HomeCard';
import { NewsBlockSkeleton } from '@features/NewsBlock';

function HomePageSkeleton() {
  return (
    <main className="bg-white h-full pt-2.5 flex flex-col gap-10">
      <HomeCardSkeleton className="h-[420px] md:h-[520px] mt-2.5" />
      <NewsBlockSkeleton />
      <GalleryBlockSkeleton />
    </main>
  );
}

export default HomePageSkeleton;