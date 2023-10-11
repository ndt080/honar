import { currentPath } from '@app/helpers';
import { useFetchPageByPathQuery } from '@entities/page';
import { Button } from '@shared/ui/lib/button.tsx';
import { Separator } from '@shared/ui/lib/separator.tsx';
import { memo, useEffect } from 'react';
import urlJoin from 'url-join';

import HomeCardContent from './HomeCardContent.tsx';
import HomeCardImage from './HomeCardImage.tsx';

function HomeCard() {
  const { data } = useFetchPageByPathQuery(currentPath());

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    data && (
      <div className="w-full flex flex-col justify-center gap-5">
        <Separator className="bg-black" />
        <div className="flex flex-col-reverse justify-between items-end w-full gap-2.5 md:flex-row md:gap-10">
          <HomeCardContent title={data?.title} description={data?.description}>
            <Button className="bg-second-accent text-base py-3">Узнать о занятиях</Button>
          </HomeCardContent>
          <HomeCardImage src={urlJoin(import.meta.env.VITE_MEDIA_URL, data.preview?.url || '')} />
        </div>
        <Separator className="bg-black" />
      </div>
    )
  );
}

const MemoizedHomeCard = memo(HomeCard);

export default MemoizedHomeCard;
