import * as React from 'react';

import { Button, CircularProgress } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '~/theme';

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
          <HelmetProvider>
            <LocalizationProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </LocalizationProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </React.Suspense>
  );
}
