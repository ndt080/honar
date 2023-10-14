import { Coach } from '@entities/coach';
import { BlockHeader } from '@features/BlockHeader';
import { CoachCard } from '@features/CoachCard';
import { useTranslation } from 'react-i18next';

export interface CoachesBlockProps {
  items: Coach[];
}

function CoachesBlock({ items = [] }: CoachesBlockProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <BlockHeader title={t('_.coaches')} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        {items.map((item) => (
          <CoachCard
            key={item.id}
            dan={item.dan}
            description={item.description}
            image={item.preview.url}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
}

export default CoachesBlock;