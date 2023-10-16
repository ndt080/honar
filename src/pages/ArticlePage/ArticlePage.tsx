import { htmlToText } from '@app/helpers';
import { useFetchArticleQuery } from '@entities/article';
import { cn } from '@shared/utils';
import * as dayjs from 'dayjs';
import { CSSProperties } from 'react';
import { useParams } from 'react-router-dom';
import urlJoin from 'url-join';

import ArticlePageSkeleton from './ArticlePageSkeleton.tsx';

function ArticlePage() {
  const { id = '' } = useParams();
  const {
    data: { title = '', content = '', description = '', publishedAt = '', image } = {},
    isLoading,
  } = useFetchArticleQuery(id);

  const date = dayjs(publishedAt).format('MMMM DD, YYYY');
  const imageUrl = urlJoin(import.meta.env.VITE_MEDIA_URL, image?.url ?? '');

  const styles: CSSProperties = {
    background: `linear-gradient(90deg, rgba(255,255,255,0.75), rgba(0,0,0,0.55)), url("${imageUrl}") no-repeat`,
  };

  return isLoading ? (
    <ArticlePageSkeleton />
  ) : (
    <article className="bg-white w-full h-full pt-2.5 text-black flex flex-col items-center gap-10">
      <header
        className={cn(
          'w-full min-h-[500px] !bg-cover !bg-article rounded-2xl',
          'flex flex-col justify-end p-10',
        )}
        style={styles}
      >
        <div className="w-full h-fit lg:max-w-[75%] xl:max-w-[50%]">
          <div className="font-normal text-base">{date}</div>
          <div className="font-black text-5xl leading-[1] py-2.5">{title}</div>
          <div className="font-normal text-xl">{htmlToText(description)}</div>
        </div>
      </header>

      <main className="w-full md:max-w-[85%]">
        <div
          className="text-with-images text-with-links text-with-paragraphs text-with-paragraphs"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </article>
  );
}

export { ArticlePage as Component };