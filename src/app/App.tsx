import { Router } from '@processes/navigation';
import { Helmet } from 'react-helmet';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HONAR SPORT CLUB</title>
      </Helmet>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;