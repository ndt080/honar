import { RouteObject } from 'react-router-dom';

import { RoutePath } from '../values/routePath.ts';

export default [
  { path: RoutePath.Home, lazy: () => import('@pages/Home/HomePage.tsx') },
  { path: RoutePath.Karate, lazy: () => import('@pages/BaseTextPage/BaseTextPage.tsx') },
  { path: RoutePath.Schedule, lazy: () => import('@pages/BaseTextPage/BaseTextPage.tsx') },
  { path: RoutePath.About, lazy: () => import('@pages/BaseTextPage/BaseTextPage.tsx') },
  { path: RoutePath.Article, lazy: () => import('@pages/ArticlePage/ArticlePage.tsx') },
  { path: RoutePath.Articles, lazy: () => import('@pages/ArticlesPage/ArticlesPage.tsx') },
] satisfies RouteObject[];
