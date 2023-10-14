import { AdditionalBlockName } from '@entities/page';

interface AdditionalBlock<TData = unknown> {
  id: string;
  __component: AdditionalBlockName;
  data: TData[];
}

export type { AdditionalBlock };