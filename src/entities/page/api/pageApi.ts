import { PagingData } from '@app/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { FooterData, Page } from '../types';
import { ENDPOINTS } from '../values/endpoints.ts';

export const pageApi = createApi({
  reducerPath: 'pageApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchPageList: builder.query<Page[], string>({
      query: () => ({ url: ENDPOINTS.PAGE_LIST }),
      transformResponse({ data }: PagingData<Page>) {
        return data;
      },
    }),
    fetchPageByPath: builder.query<Page, string>({
      query: (path: string) => ({ url: encodeURI(ENDPOINTS.PAGE.replace(':path', path)) }),
      transformResponse({ data }: PagingData<Page>) {
        const page = data[0];
        if (!page) throw new Error('Not Found');
        return page;
      },
    }),
    fetchPageFooter: builder.query<FooterData, string>({
      query: () => ({ url: encodeURI(ENDPOINTS.FOOTER) }),
      transformResponse({ data }: { data: FooterData }) {
        return data;
      },
    }),
  }),
});

export const { useFetchPageListQuery, useFetchPageByPathQuery, useFetchPageFooterQuery } = pageApi;