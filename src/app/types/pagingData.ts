interface PagingData<TData = unknown> {
  data: TData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export type { PagingData };