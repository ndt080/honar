import '@styles/main.scss';

import App from '@app/App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { initWebVitals } from './web-vitals.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

initWebVitals();
