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
    fetchPageByPath: builder.query<Page, string>({
      query: (path: string) => ({
        url: ENDPOINTS.PAGE.replace(':path', encodeURIComponent(path)),
      }),
    }),
  }),
});

export const { useFetchPageListQuery, useFetchPageByPathQuery } = pageApi;