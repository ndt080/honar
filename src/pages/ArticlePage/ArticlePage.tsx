import { htmlToText, normalizeTextMedia } from '@app/helpers';
import { useFetchArticleQuery } from '@entities/article';
import dayjs from 'dayjs';
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

  return isLoading ? (
    <ArticlePageSkeleton />
  ) : (
    <article className="bg-white w-full h-full pt-2.5 text-black flex flex-col items-center gap-10">
      <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2.5 pb-8 border-b-2">
        <div className="flex flex-col justify-end grow w-full lg:min-w-[700px] lg:h-full">
          <h1 className="font-semibold text-5xl leading-tight">{title}</h1>
          <p className="font-normal text-lg">{htmlToText(description)}</p>
          <p className="font-normal text-base pt-2 text-black/70">{date}</p>
        </div>
        <img
          className="aspect-[16/10] object-cover rounded-xl grow-0"
          src={imageUrl}
          alt="preview"
        />
      </header>

      <main className="w-full md:max-w-[756px]">
        <div
          className="text-with-images text-with-links text-with-paragraphs text-with-paragraphs"
          dangerouslySetInnerHTML={{ __html: normalizeTextMedia(content) }}
        />
      </main>
    </article>
  );
}

export { ArticlePage as Component };
