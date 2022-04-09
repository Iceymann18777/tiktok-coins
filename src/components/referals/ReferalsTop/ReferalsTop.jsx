import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { useUser } from 'hooks/useUser';
import { Profile } from 'components/common/Profile/Profile';
import * as S from './ReferalsTop.styles';

export const ReferalsTop = () => {
  const { ref_users } = useUser();

  const referalsMemo = useMemo(
    () =>
      ref_users.map((ref, index) => (
        <Col key={index} span={24}>
          <Profile src={ref.image_url} name={ref.name} />
        </Col>
      )),
    [ref_users],
  );

  return (
    <Row gutter={[0, 10]}>
      <Col span={24}>
        <S.Title>ТОП 50 ВАШИХ РЕФЕРАЛОВ</S.Title>
      </Col>

      <Col span={24}>
        <Row gutter={[0, 10]}>{referalsMemo}</Row>
      </Col>
    </Row>
  );
};
