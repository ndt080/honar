import { BlockHeader } from '@features/BlockHeader';
import { useTranslation } from 'react-i18next';

export interface ContactsBlockProps {
  text: string;
  mapName: string;
  mapUrl: string;
}

function ContactsBlock({ text = '', mapUrl = '', mapName = '' }: ContactsBlockProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <BlockHeader title={t('_.contacts')} />
      <div className="w-full grid grid-cols-1 md:grid-cols-[1fr,40%] gap-5 md:gap-10 py-5">
        <iframe
          className="rounded w-full aspect-[16/6]"
          title={mapName}
          src={mapUrl}
          aria-hidden="false"
        />
        <div className="w-full flex items-center h-full text-with-links">
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  );
}

export default ContactsBlock;