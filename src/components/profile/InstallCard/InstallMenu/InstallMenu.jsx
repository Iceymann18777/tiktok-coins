import { Col, Row } from 'antd';
import React from 'react';
import * as S from './InstallMenu.styles';

export const InstallMenu = () => {
  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <S.Title>Установка</S.Title>
      </Col>

      <Col span={24}>
        <Row gutter={[0, 10]}>
          <Col span={24}>
            <S.Btn type="primary" isPayment>
              Android
            </S.Btn>
          </Col>

          <Col span={24}>
            <S.Btn type="primary" isPayment>
              iOS
            </S.Btn>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
