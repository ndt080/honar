interface PagingData<TData = unknown> {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: TData[];
}

export type { PagingData };