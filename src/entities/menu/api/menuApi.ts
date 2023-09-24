import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import urlJoin from 'url-join';

import { PagingData } from '@/app';

import { MenuItem } from '../types';
import { ENDPOINTS } from '../values/endpoints.ts';

export const menuApi = createApi({
  reducerPath: 'menuApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchMenuList: builder.query<PagingData<MenuItem>, string>({
      query: () => ({ url: urlJoin(ENDPOINTS.MENU_LIST) }),
    }),
  }),
});

export const { useFetchMenuListQuery } = menuApi;