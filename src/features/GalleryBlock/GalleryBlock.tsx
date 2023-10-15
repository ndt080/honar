import './GalleryBlock.scss';

import { useFetchGalleryPreviewQuery } from '@entities/image';
import { BlockHeader } from '@features/BlockHeader';
import { cn } from '@shared/utils';
import { useTranslation } from 'react-i18next';
import urlJoin from 'url-join';

function GalleryBlock() {
  const { t } = useTranslation();
  const { data: sources = [] } = useFetchGalleryPreviewQuery('');

  return (
    <div className="w-full">
      <BlockHeader
        id="gallery"
        title={t('_.gallery')}
        viewAll
        onClick={() => window.open('https://www.instagram.com/karate_honar/', '_blank')}
      />

      <div className="gallery-grid h-[460px] my-5">
        {sources.map(({ id, url }, index) => (
          <div
            key={id}
            className={cn(
              'gallery-card rounded',
              `gallery-grid-span-${index % 3 ? 0 : index % 2 ? 2 : 1}`,
            )}
            style={{
              backgroundImage: `url(${urlJoin(import.meta.env.VITE_MEDIA_URL, url, '?w=100')})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryBlock;