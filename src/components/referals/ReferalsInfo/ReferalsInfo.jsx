import React from 'react';
import { Col, Input, Row, Typography } from 'antd';
import { useUser } from 'hooks/useUser';
import { baseDomain, schema } from 'constants/config/domains';

const { Text } = Typography;

export const ReferalsInfo = () => {
  const { id, ref_users } = useUser();

  return (
    <Row gutter={[0, 10]}>
      <Col span={24}>
        <Input value={`${schema}://${baseDomain}?ref=${id}`} />
      </Col>

      <Col span={24}>
        <Text>Приглашай друзей и получай по 300 TikCoin за каждого + 20 👑</Text>
      </Col>

      <Col span={24}>
        <Text>Рефералов у вас: {ref_users.length}</Text>
      </Col>
    </Row>
  );
};
