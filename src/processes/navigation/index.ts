import routes from '@processes/navigation/routes';
import { createBrowserRouter } from 'react-router-dom';

import { default as Navbar } from './components/Navbar.tsx';

const Router = createBrowserRouter([
  {
    path: '',
    lazy: () => import('@layouts/RootLayout.tsx'),
    children: [...routes],
  },
]);

export { Navbar, Router };