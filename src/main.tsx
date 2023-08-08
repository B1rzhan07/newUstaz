import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './app/App';
import { AppProvider } from './app/providers/AppBar/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
