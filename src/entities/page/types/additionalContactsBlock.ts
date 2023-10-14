import { AdditionalBlock } from '@entities/page';

type AdditionalContactsBlock = Omit<AdditionalBlock, 'data'> & {
  contacts: string;
  mapName: string;
  mapUrl: string;
};

export type { AdditionalContactsBlock };