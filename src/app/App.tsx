import '@shared/plugins/i18next.ts';
import '@shared/plugins/dayjs.ts';

import { store } from '@app/store';
import { Router } from '@processes/navigation';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HONAR SPORT CLUB</title>
      </Helmet>

      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </HelmetProvider>
  );
}

export default App;