import { currentPath } from '@app/helpers';
import { useFetchPageByPathQuery } from '@entities/page';
import { HomeCard } from '@features/HomeCard';
import { NewsBlock, NewsBlockSkeleton } from '@features/NewsBlock';
import { Suspense } from 'react';

function HomePage() {
  const { data } = useFetchPageByPathQuery(currentPath());

  return (
    <main className="bg-white h-full pt-2.5 flex flex-col gap-10">
      <HomeCard
        className="h-[420px] md:h-[520px] mt-2.5"
        title={data?.title ?? ''}
        description={data?.description ?? ''}
      />
      <Suspense fallback={<NewsBlockSkeleton />}>
        <NewsBlock />
      </Suspense>
    </main>
  );
}

export { HomePage as Component };