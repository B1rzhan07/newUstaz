import React from 'react';

import { RouteProps } from 'react-router-dom';

import MainPage from '~/pages/MainPage/ui/MainPage';
import { lazyImport } from '~/utils/Lazyimport';

const { NotFoundPage } = lazyImport(() => import('~/pages/NotFoundPage'), 'NotFoundPage');
const { ProfilePage } = lazyImport(() => import('~/pages/ProfilePage'), 'ProfilePage');

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  NOT_FOUND = 'notFound',
}
export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
