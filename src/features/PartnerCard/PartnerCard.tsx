import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import urlJoin from 'url-join';

export interface PartnerCardProps {
  image: string;
  url: string;
  title: string;
}

function PartnerCard({ image, title, url }: PartnerCardProps) {
  return (
    <a
      href={url}
      className="flex flex-col items-center gap-2.5 hover:opacity-50 transition-opacity duration-200"
    >
      <div className="h-[150px] max-w-[300px]">
        <img
          className="h-full object-contain object-center"
          src={urlJoin(import.meta.env.VITE_MEDIA_URL, image)}
          alt="partner"
        />
      </div>

      <div className="text-black font-normal text-base">
        {title}
        <ArrowUpRightIcon className="w-[14px] inline ml-1.5" />
      </div>
    </a>
  );
}

export default PartnerCard;