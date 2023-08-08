import * as React from 'react';

import { Button, CircularProgress } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import ThemeProvider from '~/app/styles';
import { store, persister } from '~/store';

function ErrorFallback() {
  return (
    <div>
      <h2>Ooops, something went wrong :( </h2>
      <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
    </div>
  );
}

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <CircularProgress />
        </div>
      }
    >
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Provider store={store}>
            <PersistGate loading={<CircularProgress />} persistor={persister}>
              <HelmetProvider>
                <LocalizationProvider>
                  <ThemeProvider>{children}</ThemeProvider>
                </LocalizationProvider>
              </HelmetProvider>
            </PersistGate>
          </Provider>
        </ErrorBoundary>
      </BrowserRouter>
    </React.Suspense>
  );
}
