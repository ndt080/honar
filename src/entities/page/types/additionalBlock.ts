interface AdditionalBlock<TData = unknown> {
  id: string;
  __component: string;
  data: TData[];
}

export type { AdditionalBlock };