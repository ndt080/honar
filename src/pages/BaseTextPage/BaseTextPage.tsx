import { currentPath } from '@app/helpers';
import { useFetchPageByPathQuery } from '@entities/page';
import { PreviewCard } from '@features/PreviewCard';

import BaseTextPageSkeleton from './BaseTextPageSkeleton.tsx';

function BaseTextPage() {
  const { data, isLoading } = useFetchPageByPathQuery(currentPath());

  return isLoading ? (
    <BaseTextPageSkeleton />
  ) : (
    <main className="bg-white h-full pt-2.5 flex flex-col gap-10">
      <PreviewCard
        className="h-[220px] md:h-[320px] mt-2.5"
        title={data?.title ?? ''}
        description={data?.description ?? ''}
        image={data?.preview?.url}
        size="sm"
      />
      <div
        className="text-with-links text-with-images text-with-paragraphs text-with-list text-base px-2.5 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}
      />
    </main>
  );
}

export { BaseTextPage as Component };