import { htmlToText } from '@app/helpers';
import { cn } from '@shared/utils';
import { useMemo } from 'react';
import urlJoin from 'url-join';

interface HomeCardProps {
  className?: string;
  title: string;
  description: string;
  image?: string;
  size?: 'lg' | 'sm';
}

function PreviewCard({ className, title, description, image, size = 'lg' }: HomeCardProps) {
  const descriptionText = useMemo(() => htmlToText(description), [description]);

  return (
    <div
      className={cn(
        'flex items-end w-full h-full overflow-hidden rounded-2xl shadow select-none',
        className,
      )}
      style={{
        background: `linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)), url("${
          image ? urlJoin(import.meta.env.VITE_MEDIA_URL, image) : '/images/header.webp'
        }") no-repeat`,
        backgroundPosition: '0 30%',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col gap-2.5 w-full h-fit text-black m-5 md:m-10">
        <h1
          className={cn(
            'font-black text-2xl',
            size === 'lg' && 'md:text-5xl',
            size === 'sm' && 'md:text-3xl',
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            'font-normal text-base',
            size === 'lg' && 'md:text-2xl',
            size === 'sm' && 'md:text-xl',
          )}
        >
          {descriptionText}
        </p>
      </div>
    </div>
  );
}

export default PreviewCard;
