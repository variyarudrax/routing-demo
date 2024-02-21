import React from 'react';
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const UserLogin = React.lazy(() => import('../pages/login'));
const PageNotFound = React.lazy(() => import('../pages/404'));


export const PrivateRoutes = [
  {
    path: '/',
    element: <Dashboard />,
  }
];

export const PublicRoutes = [
  {
    path: '/login',
    element: <UserLogin />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];
