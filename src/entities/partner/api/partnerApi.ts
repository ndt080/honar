import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Partner } from '../types';
import { ENDPOINTS } from '../values/endpoints.ts';

export const partnerApi = createApi({
  reducerPath: 'partnerApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchPartnerList: builder.query<Partner[], string>({
      query: () => ({ url: ENDPOINTS.PARTNER_LIST }),
    }),
  }),
});

export const { useFetchPartnerListQuery } = partnerApi;