import React from 'react';
import { routesPaths } from 'routes/routesPaths';
import {
  Icon24Users3Outline,
  Icon24ShoppingCartOutline,
  Icon24UserOutline,
  Icon24MenuOutline,
  Icon24UserAddOutline,
} from '@vkontakte/icons';

export const footerNavigation = [
  {
    path: routesPaths.TOP_PAGE.path,
    name: routesPaths.TOP_PAGE.name,
    icon: <Icon24Users3Outline />,
  },
  {
    path: routesPaths.SHOP_PAGE.path,
    name: routesPaths.SHOP_PAGE.name,
    icon: <Icon24ShoppingCartOutline />,
  },
  {
    path: routesPaths.MAIN_PAGE.path,
    name: routesPaths.MAIN_PAGE.name,
    icon: <Icon24UserOutline />,
  },
  {
    path: routesPaths.REFERALS_PAGE.path,
    name: routesPaths.REFERALS_PAGE.name,
    icon: <Icon24UserAddOutline />,
  },
  {
    path: routesPaths.MORE_PAGE.path,
    name: routesPaths.MORE_PAGE.name,
    icon: <Icon24MenuOutline />,
  },
];
