import { useFetchLatestArticlesQuery } from '@entities/article';
import { BlockHeader } from '@features/BlockHeader';
import { NewsBlockSkeleton } from '@features/NewsBlock/index.ts';
import { NewsCard } from '@features/NewsCard';
import { RoutePath } from '@processes/navigation';
import { Separator } from '@shared/ui/lib/separator.tsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function NewsBlock() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: articles = [], isLoading } = useFetchLatestArticlesQuery('');

  return isLoading ? (
    <NewsBlockSkeleton />
  ) : (
    <div className="w-full">
      <BlockHeader title={t('_.clubNews')} viewAll onClick={() => navigate(RoutePath.Articles)} />

      <div className="py-5 w-auto">
        {articles.length ? (
          <div className="w-full flex flex-col md:flex-row gap-3.5 md:gap-5 h-fit">
            <div className="flex-grow">
              <NewsCard
                id={articles[0].id}
                title={articles[0].title}
                image={articles[0].image.url}
                publishedAt={articles[0].publishedAt}
                description={articles[0].description}
                size="lg"
              />
            </div>

            <Separator className="hidden md:block bg-primary/10 h-auto" orientation="vertical" />

            <div className="flex flex-col gap-3.5 w-full md:w-[300px] md:min-w-[300px]">
              {articles.map(({ title, publishedAt, description, image, id }, index) => {
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
  );
}

export default NewsBlock;
