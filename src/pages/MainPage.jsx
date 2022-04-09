import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { BonusCard } from 'components/profile/BonusCard/BonusCard';
import { VoucherCard } from 'components/profile/VoucherCard/VoucherCard';
import { InstallCard } from 'components/profile/InstallCard/InstallCard';
import { HelpCard } from 'components/profile/HelpCard/HelpCard';
import { WatchCard } from 'components/profile/WatchCard/WatchCard';
import { CustomCard } from 'components/common/cards/CustomCard/CustomCard';

const baseCards = [
  <BonusCard key={0} />,
  <VoucherCard key={1} />,
  <InstallCard key={2} />,
  <HelpCard key={3} />,
];

export const MainPage = () => {
  const baseCardsMemo = useMemo(
    () =>
      baseCards.map((Card, index) => (
        <Col key={index} span={12}>
          {Card}
        </Col>
      )),
    [],
  );

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <WatchCard />
      </Col>

      <CustomCard />

      <Col span={24}>
        <Row gutter={[10, 10]}>{baseCardsMemo}</Row>
      </Col>
    </Row>
  );
};
