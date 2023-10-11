import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Article } from '../types';
import { ENDPOINTS } from '../values/endpoints.ts';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  refetchOnMountOrArgChange: false,
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    fetchArticles: builder.query<Article[], string>({
      query: () => ({ url: ENDPOINTS.ARTICLE_LIST }),
    }),
    fetchLatestArticles: builder.query<Article[], string>({
      query: () => ({ url: ENDPOINTS.LATEST_ARTICLE_LIST }),
    }),
    fetchArticle: builder.query<Article, string>({
      query: (id: string) => ({ url: ENDPOINTS.ARTICLE.replace(':id', id) }),
    }),
  }),
});

export const { useFetchArticlesQuery, useFetchLatestArticlesQuery, useFetchArticleQuery } =
  articleApi;