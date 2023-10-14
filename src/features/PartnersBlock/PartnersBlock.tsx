import { Partner } from '@entities/partner';
import { BlockHeader } from '@features/BlockHeader';
import { PartnerCard } from '@features/PartnerCard';
import { useTranslation } from 'react-i18next';

export interface PartnersBlockProps {
  items: Partner[];
}

function PartnersBlock({ items = [] }: PartnersBlockProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <BlockHeader title={t('_.partners')} />
      <div className="w-full grid grid-cols-2 md:flex justify-between flex-wrap gap-2.5 py-5">
        {items.map((item) => (
          <PartnerCard url={item.url} image={item.image.url} title={item.title} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default PartnersBlock;