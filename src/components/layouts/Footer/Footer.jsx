import React, { useMemo } from 'react';
import { Space } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { footerNavigation } from 'constants/config/footerNavigation';
import * as S from './Footer.styles';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerNavItems = useMemo(
    () =>
      footerNavigation.map((item) => (
        <S.Btn
          key={item.path}
          type={location.pathname === item.path ? 'primary' : 'default'}
          onClick={() => navigate(item.path)}
        >
          <Space direction="vertical" size={0}>
            {item.icon}
            {item.name}
          </Space>
        </S.Btn>
      )),
    [location, navigate],
  );

  return <S.Row>{footerNavItems}</S.Row>;
};
