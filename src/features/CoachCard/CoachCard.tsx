import { htmlToText } from '@app/helpers';
import { useMemo } from 'react';
import urlJoin from 'url-join';

export interface CoachCardProps {
  dan: string;
  description: string;
  image: string;
  name: string;
  position: string;
}

function CoachCard({ name, dan, description, position, image }: CoachCardProps) {
  const descriptionText = useMemo(() => htmlToText(description), [description]);

  return (
    <div className="flex items-start gap-3.5 h-full">
      <div className="relative h-full w-[300px]">
        <img
          className="rounded h-full object-contain object-top scale-100 transition-transform duration-200 left-[100px]
          md:hover:sticky md:hover:z-[100] md:hover:scale-150"
          src={urlJoin(import.meta.env.VITE_MEDIA_URL, image)}
          alt="partner"
        />
      </div>

      <div className="w-full text-black">
        <div className="text-xl md:text-2xl font-semibold">{name}</div>
        <div className="text-sm md:text-base py-2">{dan}</div>
        <div className="text-sm md:text-base font-semibold pb-2">{position}</div>
        <div className="text-xs md:text-sm">{descriptionText}</div>
      </div>
    </div>
  );
}

export default CoachCard;