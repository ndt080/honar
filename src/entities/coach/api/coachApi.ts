import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Coach } from '../types';
import { ENDPOINTS } from '../values/endpoints.ts';

export const coachApi = createApi({
  reducerPath: 'coachApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchCoachList: builder.query<Coach[], string>({
      query: () => ({ url: ENDPOINTS.COACH_LIST }),
    }),
  }),
});

export const { useFetchCoachListQuery } = coachApi;