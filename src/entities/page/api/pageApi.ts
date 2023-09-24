import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Page } from '../types';
import { ENDPOINTS } from '../values/endpoints.ts';

export const pageApi = createApi({
  reducerPath: 'pageApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchPageList: builder.query<Page[], string>({
      query: () => ({ url: ENDPOINTS.PAGE_LIST }),
    }),
  }),
});

export const { useFetchPageListQuery } = pageApi;