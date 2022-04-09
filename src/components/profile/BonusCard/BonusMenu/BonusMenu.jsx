import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { ModalTitle } from 'components/common/ModalTitle/ModalTitle';
import { SubscriptionCard } from './SubscriptionCard/SubscriptionCard';
import { InstallCard } from './InstallCard/InstallCard';
import { EveryDayCard } from './EveryDayCard/EveryDayCard';

const cards = [<SubscriptionCard key={0} />, <InstallCard key={1} />, <EveryDayCard key={1} />];

export const BonusMenu = () => {
  const cardsMemo = useMemo(
    () =>
      cards.map((Card, index) => (
        <Col key={index} span={24}>
          {Card}
        </Col>
      )),
    [],
  );

  return (
    <Row gutter={[0, 30]}>
      <Col span={24}>
        <ModalTitle>Бонусы</ModalTitle>
      </Col>

      <Col span={24}>
        <Row gutter={[0, 15]}>{cardsMemo}</Row>
      </Col>
    </Row>
  );
};
