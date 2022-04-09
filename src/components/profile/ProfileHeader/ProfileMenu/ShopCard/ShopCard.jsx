import React from 'react';
import { Icon24ShoppingCartOutline } from '@vkontakte/icons';
import { Link } from 'react-router-dom';
import { routesPaths } from 'routes/routesPaths';
import { ProfileHeaderBtn } from '../../ProfileHeaderBtn/ProfileHeaderBtn';

export const ShopCard = () => (
  <Link to={routesPaths.SHOP_PAGE.path}>
    <ProfileHeaderBtn icon={<Icon24ShoppingCartOutline />} text="Магазин" />
  </Link>
);
