import React from 'react';
import { Col, Row } from 'antd';
import { Icon24UserAddOutline } from '@vkontakte/icons';
import * as S from './ReferalsHeader.styles';

export const ReferalsHeader = () => {
  return (
    <Row gutter={[0, 10]}>
      <Col span={24}>
        <Row justify="center">
          <Col>
            <Icon24UserAddOutline width={40} height={40} />
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row justify="center">
          <Col>
            <S.Text>Деньги за рефералов</S.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
