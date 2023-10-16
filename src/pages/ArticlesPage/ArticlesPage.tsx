import { Article, useFetchArticlesQuery } from '@entities/article';
import { BlockHeader } from '@features/BlockHeader';
import { NewsCard } from '@features/NewsCard';
import { Separator } from '@shared/ui/lib/separator.tsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ArticlesPageSkeleton from './ArticlesPageSkeleton.tsx';

function ArticlesPage() {
  const { t } = useTranslation();

  const [headerArticles, setHeaderArticles] = useState<Article[]>([]);
  const [mainArticles, setMainArticles] = useState<Article[]>([]);
  const { isLoading, data = [] } = useFetchArticlesQuery('');

  useEffect(() => {
    const items = [...data];
    setHeaderArticles(items.slice(0, 4));
    setMainArticles(items.slice(4, Infinity));
  }, [data]);

  return isLoading ? (
    <ArticlesPageSkeleton />
  ) : (
    <main className="bg-white h-full pt-2.5 flex flex-col gap-5 md:gap-10">
      <div className="w-full">
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

      <div className="w-full ">
        <BlockHeader title={t('_.otherNews')} />

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 my-5">
          {mainArticles.map(({ title, publishedAt, description, image, id }) => (
            <NewsCard
              key={id}
              id={id}
              title={title}
              image={image.url}
              publishedAt={publishedAt}
              description={description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export { ArticlesPage as Component };