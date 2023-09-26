import routes from '@processes/navigation/routes';
import { createBrowserRouter } from 'react-router-dom';

import { default as Navbar } from './components/Navbar.tsx';
import { default as NavbarButton } from './components/NavbarButton.tsx';
import { default as NavbarSkeleton } from './components/NavbarSkeleton.tsx';
import { RoutePath } from './values/routePath';

const Router = createBrowserRouter([
  {
    path: '',
    lazy: () => import('@layouts/RootLayout.tsx'),
    children: [...routes],
  },
]);

export { Navbar, NavbarButton, NavbarSkeleton, RoutePath, Router };