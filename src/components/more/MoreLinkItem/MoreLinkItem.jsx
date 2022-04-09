import React from 'react';
import { Col, Row, Space } from 'antd';
import * as S from './MoreLinkItem.styles';

export const MoreLinkItem = ({ name: title, description, Icon, path }) => {
  return (
    <a href={path}>
      <Row gutter={[10, 0]} align="middle">
        <Col>{Icon}</Col>

        <Col flex={1}>
          <Row justify="space-between" align="middle">
            <Col>
              <Space direction="vertical" size={0}>
                <S.Title>{title}</S.Title>

                <S.Description>{description}</S.Description>
              </Space>
            </Col>

            <Col>
              <S.IconRight />
            </Col>
          </Row>
        </Col>
      </Row>
    </a>
  );
};
