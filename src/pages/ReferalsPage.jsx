import React from 'react';
import { Col, Row } from 'antd';
import { ReferalsAdd } from 'components/referals/ReferalsAdd/ReferalsAdd';
import { ReferalsHeader } from 'components/referals/ReferalsHeader/ReferalsHeader';
import { ReferalsInfo } from 'components/referals/ReferalsInfo/ReferalsInfo';
import { ReferalsTop } from 'components/referals/ReferalsTop/ReferalsTop';

export const ReferalsPage = () => (
  <Row gutter={[0, 10]}>
    <Col span={24}>
      <ReferalsHeader />
    </Col>

    <Col span={24}>
      <ReferalsInfo />
    </Col>

    <Col span={24}>
      <ReferalsAdd />
    </Col>

    <Col span={24}>
      <ReferalsTop />
    </Col>
  </Row>
);
