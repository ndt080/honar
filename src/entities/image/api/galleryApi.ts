import { Image } from '@entities/image';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ENDPOINTS } from '../values/endpoints.ts';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchGalleryList: builder.query<Image[], string>({
      query: () => ({ url: ENDPOINTS.GALLERY_LIST }),
      transformResponse({ data }: { data: { sources: Image[] } }) {
        return data.sources;
      },
    }),
    fetchGalleryPreview: builder.query<Image[], string>({
      query: () => ({ url: ENDPOINTS.GALLERY_PREVIEW }),
      transformResponse({ data }: { data: { sources: Image[] } }) {
        return data.sources;
      },
    }),
  }),
});

export const { useFetchGalleryListQuery, useFetchGalleryPreviewQuery } = galleryApi;