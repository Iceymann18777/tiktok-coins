import React from 'react';
import { Col, Row } from 'antd';
import { useLocation } from 'react-router-dom';
import { ProfileHeader } from 'components/profile/ProfileHeader/ProfileHeader';
import { routesPaths } from 'routes/routesPaths';
import { useUser } from 'hooks/useUser';
import { useOnline } from 'hooks/useOnline';
import * as S from './Header.styles';

export const Header = () => {
  const user = useUser();
  const { onlineAmount } = useOnline();

  const location = useLocation();

  return (
    <Row gutter={[20, 20]} align="middle">
      <Col span={24}>
        <Row justify="space-between">
          <Col>
            {location.pathname === routesPaths.MAIN_PAGE.path ? (
              <S.UsernameText>{user.user_name || 'Юзернейм ТГ'}</S.UsernameText>
            ) : (
              <S.PageTitle>
                {Object.values(routesPaths).find((route) => route.path === location.pathname).name}
              </S.PageTitle>
            )}
          </Col>

          <Col>
            <S.OnlineText>Онлайн: {onlineAmount || 'Загрузка...'}</S.OnlineText>
          </Col>
        </Row>
      </Col>

      {location.pathname === routesPaths.MAIN_PAGE.path && (
        <Col span={24}>
          <ProfileHeader />
        </Col>
      )}
    </Row>
  );
};

// {title ? (
//
// ) : (
//
// )}
