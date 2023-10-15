import { RouteObject } from 'react-router-dom';

import { RoutePath } from '../values/routePath.ts';

export default [
  { path: RoutePath.Home, lazy: () => import('@pages/Home/HomePage.tsx') },
  { path: RoutePath.Karate, lazy: () => import('@pages/KaratePage/KaratePage.tsx') },
] satisfies RouteObject[];
