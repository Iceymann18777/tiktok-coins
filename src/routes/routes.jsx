import React from 'react';
import { MainPage } from 'pages/MainPage';
import { MorePage } from 'pages/MorePage';
import { ReferalsPage } from 'pages/ReferalsPage';
import { ShopPage } from 'pages/ShopPage/ShopPage';
import { TopPage } from 'pages/TopPage';
import { routesPaths } from './routesPaths';

export const routes = [
  {
    path: routesPaths.MAIN_PAGE.path,
    element: <MainPage />,
  },
  {
    path: routesPaths.TOP_PAGE.path,
    element: <TopPage />,
  },
  {
    path: routesPaths.SHOP_PAGE.path,
    element: <ShopPage />,
  },
  {
    path: routesPaths.REFERALS_PAGE.path,
    element: <ReferalsPage />,
  },
  {
    path: routesPaths.MORE_PAGE.path,
    element: <MorePage />,
  },
];
