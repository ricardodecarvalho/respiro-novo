import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { CookiesProvider } from 'react-cookie';

const currentDate = new Date();
const expirationDate = new Date();

expirationDate.setFullYear(currentDate.getFullYear() + 10);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider
      defaultSetOptions={{
        path: '/',
        secure: true,
        expires: expirationDate,
      }}
    >
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
