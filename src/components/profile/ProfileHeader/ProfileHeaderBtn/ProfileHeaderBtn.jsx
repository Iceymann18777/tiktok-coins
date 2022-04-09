import React from 'react';
import { Col } from 'antd';
import * as S from './ProfileHeaderBtn.styles';

export const ProfileHeaderBtn = ({ icon, text, onClick }) => (
  <S.ProfileHeaderRow justify="center">
    <Col span={24}>
      <S.Btn size="large" type="primary" isSecondary icon={icon} onClick={onClick} />
    </Col>

    <Col span={24}>
      <S.Text>{text}</S.Text>
    </Col>
  </S.ProfileHeaderRow>
);
