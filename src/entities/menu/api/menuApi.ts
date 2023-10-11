import { PagingData } from '@app/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MenuItem } from '../types';
import { ENDPOINTS } from '../values/endpoints.ts';

export const menuApi = createApi({
  reducerPath: 'menuApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchMenuList: builder.query<MenuItem[], string>({
      query: () => ({ url: ENDPOINTS.MENU_LIST }),
      transformResponse({ data }: PagingData<MenuItem>) {
        return data;
      },
    }),
  }),
});

export const { useFetchMenuListQuery } = menuApi;