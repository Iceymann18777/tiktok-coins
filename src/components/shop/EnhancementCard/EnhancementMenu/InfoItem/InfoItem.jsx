import React from 'react';
import { Form, Row, Col } from 'antd';
import * as S from './InfoItem.styles';

export const InfoItem = ({ details }) => {
  return (
    <Form.Item>
      <Row gutter={[0, 10]}>
        <Col>
          <S.Subtitle>Бонусы:</S.Subtitle>
        </Col>
        <Col>
          {details.split('.').map((el, index) => (
            <S.Text key={index}>{el}</S.Text>
          ))}
        </Col>
      </Row>
    </Form.Item>
  );
};
