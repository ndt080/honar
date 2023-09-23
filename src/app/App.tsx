import { store } from '@app/store';
import { Router } from '@processes/navigation';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HONAR SPORT CLUB</title>
      </Helmet>
      
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </>
  );
}

export default App;