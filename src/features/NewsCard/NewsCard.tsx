import { htmlToText } from '@app/helpers';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { RoutePath } from '@processes/navigation';
import { cn } from '@shared/utils';
import * as dayjs from 'dayjs';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import urlJoin from 'url-join';

export interface NewsCardProps {
  id: number | string;
  className?: string;
  title: string;
  image: string;
  description: string;
  publishedAt: string | Date | dayjs.Dayjs;
  size?: 'lg' | 'sm';
}

function NewsCard({
  className,
  id,
  title,
  description,
  image = '',
  publishedAt,
  size = 'sm',
}: NewsCardProps) {
  const descriptionText = useMemo(() => htmlToText(description), [description]);
  const dateText = useMemo(() => dayjs(publishedAt).format('MMMM DD, YYYY'), [publishedAt]);
  const articleLink = RoutePath.Article.replace(':id', String(id));

  return (
    <article className={cn('w-full flex flex-col gap-1.5', className)}>
      <div className="aspect-[16/8] w-full h-full rounded overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src={urlJoin(import.meta.env.VITE_MEDIA_URL, image)}
          alt="preview"
        />
      </div>

      <div className="flex flex-col">
        <div
          className={cn(
            'capitalize text-xs mb-1.5 text-neutral-600',
            size === 'sm' && 'text-xs',
            size === 'lg' && 'text-xs md:text-base md:mb-2.5',
          )}
        >
          {dateText}
        </div>

        <NavLink
          className={cn(
            'inline-block',
            'text-black font-semibold uppercase line-clamp-2 whitespace-normal',
            'cursor-pointer hover:text-primary-accent transition-colors duration-200',
            size === 'sm' && 'text-sm',
            size === 'lg' && 'text-sm md:text-xl',
          )}
          to={articleLink}
        >
          {title}
          <ArrowUpRightIcon className="w-[14px] inline ml-1.5" />
        </NavLink>

        <div
          className={cn(
            'font-normal text-black line-clamp-3 mt-1.5',
            size === 'sm' && 'text-xs',
            size === 'lg' && 'text-xs md:text-base md:mt-2.5',
          )}
        >
          {descriptionText}
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
