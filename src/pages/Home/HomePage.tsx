import { currentPath } from '@app/helpers';
import { Coach } from '@entities/coach';
import {
  AdditionalBlock,
  AdditionalBlockName,
  AdditionalContactsBlock,
  getAdditionalBlockData,
  useFetchPageByPathQuery,
} from '@entities/page';
import { Partner } from '@entities/partner';
import { CoachesBlock } from '@features/CoachesBlock';
import { ContactsBlock } from '@features/ContactsBlock';
import { GalleryBlock } from '@features/GalleryBlock';
import { NewsBlock } from '@features/NewsBlock';
import { PartnersBlock } from '@features/PartnersBlock';
import { PreviewCard } from '@features/PreviewCard';
import { useMemo } from 'react';

import HomePageSkeleton from './HomePageSkeleton.tsx';

function HomePage() {
  const { data, isLoading } = useFetchPageByPathQuery(currentPath());

  const blocks = useMemo<AdditionalBlock[]>(() => data?.additional ?? [], [data]);

  const partners = useMemo<Partner[]>(() => {
    return getAdditionalBlockData<Partner>(blocks, AdditionalBlockName.Partners);
  }, [blocks]);

  const coaches = useMemo<Coach[]>(() => {
    return getAdditionalBlockData<Coach>(blocks, AdditionalBlockName.Coaches);
  }, [blocks]);

  const contacts = useMemo<AdditionalContactsBlock>(() => {
    return (
      (blocks.find(({ __component }) => {
        return __component === AdditionalBlockName.Contacts;
      }) as unknown as AdditionalContactsBlock) ?? {}
    );
  }, [blocks]);

  return isLoading ? (
    <HomePageSkeleton />
  ) : (
    <main className="bg-white h-full pt-2.5 flex flex-col gap-10">
      <PreviewCard
        className="h-[420px] md:h-[520px] mt-2.5"
        title={data?.title ?? ''}
        description={data?.description ?? ''}
      />
      <NewsBlock />
      <CoachesBlock items={coaches} />
      <GalleryBlock />
      <ContactsBlock text={contacts.contacts} mapName={contacts.mapName} mapUrl={contacts.mapUrl} />
      <PartnersBlock items={partners} />
    </main>
  );
}

export { HomePage as Component };