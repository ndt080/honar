import routes from '@processes/navigation/routes';
import { createBrowserRouter } from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: '',
    lazy: () => import('@layouts/RootLayout.tsx'),
    children: [...routes],
  },
]);

export { Router };