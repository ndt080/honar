import { PagingData } from '@app/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Article } from '../types';
import { ENDPOINTS } from '../values/endpoints.ts';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchArticles: builder.query<PagingData<Article>, string>({
      query: (page = '1') => ({ url: ENDPOINTS.ARTICLE_LIST.replace(':page', page) }),
    }),
    fetchLatestArticles: builder.query<Article[], string>({
      query: () => ({ url: ENDPOINTS.LATEST_ARTICLE_LIST }),
      transformResponse({ data }: PagingData<Article>) {
        return data;
      },
    }),
    fetchArticle: builder.query<Article, string>({
      query: (id: string) => ({ url: ENDPOINTS.ARTICLE.replace(':id', id) }),
      transformResponse({ data }: { data: Article }) {
        return data;
      },
    }),
  }),
});

export const { useFetchArticlesQuery, useFetchLatestArticlesQuery, useFetchArticleQuery } =
  articleApi;