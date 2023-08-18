import * as React from 'react';

import { Button, CircularProgress } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import ThemeProvider from '~/app/styles';
import i18 from '~/shared/i18n/config';
import { store, persister } from '~/store';

function ErrorFallback() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h2>Ooops, something went wrong :( </h2>
      <Button variant="contained" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
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
        <Provider store={store}>
          <I18nextProvider i18n={i18}>
            <PersistGate loading={<CircularProgress />} persistor={persister}>
              <HelmetProvider>
                <LocalizationProvider>
                  <ThemeProvider>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
                  </ThemeProvider>
                </LocalizationProvider>
              </HelmetProvider>
            </PersistGate>
          </I18nextProvider>
        </Provider>
      </BrowserRouter>
    </React.Suspense>
  );
}
