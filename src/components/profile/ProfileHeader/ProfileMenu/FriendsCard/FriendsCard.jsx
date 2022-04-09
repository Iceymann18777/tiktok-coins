import React from 'react';
import { Icon24Users3Outline } from '@vkontakte/icons';
import { Link } from 'react-router-dom';
import { routesPaths } from 'routes/routesPaths';
import { ProfileHeaderBtn } from '../../ProfileHeaderBtn/ProfileHeaderBtn';

export const FriendsCard = () => (
  <Link to={routesPaths.REFERALS_PAGE.path}>
    <ProfileHeaderBtn icon={<Icon24Users3Outline />} text="Друзья" />
  </Link>
);
