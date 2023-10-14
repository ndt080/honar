import { htmlToText } from '@app/helpers';
import { cn } from '@shared/utils';
import { useMemo } from 'react';

interface HomeCardProps {
  className?: string;
  title: string;
  description: string;
}

function HomeCard({ className, title, description }: HomeCardProps) {
  const descriptionText = useMemo(() => htmlToText(description), [description]);

  return (
    <div
      className={cn(
        'flex items-end w-full h-full overflow-hidden rounded-2xl shadow select-none',
        className,
      )}
      style={{
        background:
          'linear-gradient(90deg, rgba(255, 160, 51, 0.9), rgba(228, 35, 28, 0.6)), url("/images/header.webp") no-repeat',
        backgroundPosition: '0 30%',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col gap-2.5 w-full h-fit text-black m-5 md:m-10">
        <h1 className="font-black text-2xl md:text-5xl">{title}</h1>
        <p className="font-normal text-base md:text-2xl">{descriptionText}</p>
      </div>
    </div>
  );
}

export default HomeCard;
