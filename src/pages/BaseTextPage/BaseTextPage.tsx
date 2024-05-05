import { currentPath } from '@app/helpers';
import { useFetchPageByPathQuery } from '@entities/page';
import { PreviewCard } from '@features/PreviewCard';
import { RoutePath } from '@processes/navigation';
import { cn } from '@shared/utils';

import BaseTextPageSkeleton from './BaseTextPageSkeleton.tsx';

function BaseTextPage() {
  const path = currentPath();
  const { data, isLoading } = useFetchPageByPathQuery(path);

  return isLoading ? (
    <BaseTextPageSkeleton />
  ) : (
    <article className="bg-white w-full h-full pt-2.5 text-black flex flex-col items-center gap-10">
      <PreviewCard
        className="h-[220px] md:h-[320px] mt-2.5"
        title={data?.title ?? ''}
        description={data?.description ?? ''}
        image={data?.preview?.url}
        size="sm"
      />

      <main className={cn('w-full', path !== RoutePath.Schedule && 'md:max-w-[756px]')}>
        <div
          className="text-with-images text-with-links text-with-paragraphs text-with-paragraphs"
          dangerouslySetInnerHTML={{ __html: data?.content ?? '' }}
        />
      </main>
    </article>
  );
}

export { BaseTextPage as Component };
