import React from 'react';
import { Col, Row } from 'antd';
import { Icon24UserOutline } from '@vkontakte/icons';
import * as S from './Profile.styles';

export const Profile = ({ index, src, name, description }) => (
  <Row gutter={[10, 0]} align="middle">
    {index && (
      <Col>
        <S.Text>{index}</S.Text>
      </Col>
    )}

    <Col>
      <S.Avatar src={src} icon={!src && <Icon24UserOutline />} alt="Аватар" />
    </Col>

    <Col>
      <S.Title>{name}</S.Title>

      {description && <S.Description>{description}</S.Description>}
    </Col>
  </Row>
);
