import { AdditionalBlock } from '@entities/page';

type ContactsBlock = Omit<AdditionalBlock, 'data'> & {
  contacts: string;
  mapName: string;
  mapUrl: string;
};

export type { ContactsBlock };