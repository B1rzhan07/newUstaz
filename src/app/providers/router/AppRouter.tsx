import React, { memo, Suspense, useCallback } from 'react';

import { CircularProgress } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, routeConfig } from '~/config/routeConfig/routeConfig';

function AppRouter() {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<CircularProgress />}>
        <div>{route.element}</div>
      </Suspense>
    );
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}

export default memo(AppRouter);
