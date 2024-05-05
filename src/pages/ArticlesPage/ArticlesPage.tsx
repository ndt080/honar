import { Article, useFetchArticlesQuery } from '@entities/article';
import { BlockHeader } from '@features/BlockHeader';
import InfinityLoader, {
  InfinityLoaderInstance,
} from '@features/InfinityLoader/InfinityLoader.tsx';
import { NewsCard, NewsCardSkeleton } from '@features/NewsCard';
import { Separator } from '@shared/ui/lib/separator.tsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ArticlesPageSkeleton from './ArticlesPageSkeleton.tsx';

function ArticlesPage() {
  const { t } = useTranslation();

  const [page, setPage] = useState(1);
  const [headerArticles, setHeaderArticles] = useState<Article[]>([]);
  const [mainArticles, setMainArticles] = useState<Article[]>([]);
  const {
    isLoading,
    isFetching,
    data: { data, meta } = { data: [] },
    refetch,
  } = useFetchArticlesQuery(String(page));

  useEffect(() => {
    const items = [...data];

    if (!mainArticles.length) {
      setHeaderArticles(items.slice(0, 4));
      setMainArticles(items.slice(4, Infinity));
    } else {
      setMainArticles(Array.from(new Set([...mainArticles, ...items]).values()));
    }
  }, [data]);

  const onLoadMore = async (loader: InfinityLoaderInstance) => {
    if (isFetching) return;

    if (headerArticles.length + mainArticles.length === meta?.pagination?.total) {
      loader.complete();
    } else {
      setPage(page + 1);
      await refetch();
      loader.loaded();
    }
  };

  return isLoading ? (
    <ArticlesPageSkeleton />
  ) : (
    <main className="bg-white w-full h-full pt-2.5 flex flex-col">
      <div className="w-full mb-5 md:mb-10">
        <BlockHeader title={t('_.clubNews')} />

        <div className="py-5 w-auto">
          {headerArticles.length ? (
            <div className="w-full flex flex-col md:flex-row gap-3.5 md:gap-5 h-fit">
              <div className="flex-grow">
                <NewsCard
                  id={headerArticles[0].id}
                  title={headerArticles[0].title}
                  image={headerArticles[0].image.url}
                  publishedAt={headerArticles[0].publishedAt}
                  description={headerArticles[0].description}
                  size="lg"
                />
              </div>

              <Separator className="hidden md:block bg-primary/10 h-auto" orientation="vertical" />

              <div className="grid grid-cols-2 md:flex md:flex-col gap-3.5 w-full md:w-[300px] md:min-w-[300px]">
                {headerArticles.map(({ title, publishedAt, description, image, id }, index) => {
                  return index > 0 ? (
                    <NewsCard
                      key={id}
                      id={id}
                      title={title}
                      image={image.url}
                      publishedAt={publishedAt}
                      description={description}
                    />
                  ) : null;
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <BlockHeader title={t('_.otherNews')} />

      <div className="relative w-full h-full flex flex-col">
        <div className="w-full h-full">
          <div className="flex flex-wrap justify-center gap-3.5 py-5 contain-paint">
            {mainArticles.map(({ title, publishedAt, description, image, id }) => (
              <NewsCard
                key={`card-${id}`}
                id={id}
                title={title}
                className="max-w-[45%] lg:max-w-[30%]"
                image={image.url}
                publishedAt={publishedAt}
                description={description}
              />
            ))}
          </div>

          {mainArticles?.length ? (
            <InfinityLoader
              loader={
                <div className="grid grid-cols-4 gap-3.5">
                  <NewsCardSkeleton />
                  <NewsCardSkeleton />
                  <NewsCardSkeleton />
                  <NewsCardSkeleton />
                </div>
              }
              onLoad={onLoadMore}
            />
          ) : null}
        </div>
      </div>
    </main>
  );
}

export { ArticlesPage as Component };
