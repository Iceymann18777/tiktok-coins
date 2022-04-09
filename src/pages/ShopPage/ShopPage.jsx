import React from 'react';
import { useShop } from 'hooks/useShop';
import { EnhancementCard } from 'components/shop/EnhancementCard/EnhancementCard';
import { Col, Row } from 'antd';
import { ShopTitle } from 'components/shop/ShopTitle/ShopTitle';
import { BalanceCard } from 'components/shop/BalanceCard/BalanceCard';
import { useUser } from 'hooks/useUser';
import * as S from './ShopPage.styles';

export const ShopPage = () => {
  const { enhancement, boosters } = useShop();

  const { balance_crowns } = useUser();

  const enhancementCardsMemo = enhancement.map((card, index) => (
    <Col key={card.name} span={24}>
      <EnhancementCard
        index={index}
        name={card.name}
        description={card.description}
        icon={card.image_url}
        details={card.details}
        prices={card.prices}
      />
    </Col>
  ));

  const boostersCardsMemo = boosters.map((card, index) => (
    <Col key={card.name} span={24}>
      <EnhancementCard
        index={index}
        name={card.name}
        description={card.description}
        icon={card.image_url}
        details={card.details}
        prices={card.prices}
      />
    </Col>
  ));

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <BalanceCard balance={balance_crowns} />
      </Col>

      <Col span={24}>
        <S.EnhancementRow gutter={[0, 10]}>
          <Col span={24}>
            <ShopTitle>Улучшения:</ShopTitle>
          </Col>
          {enhancementCardsMemo}
        </S.EnhancementRow>
      </Col>

      <Col span={24}>
        <S.BoostersRow gutter={[0, 10]}>
          <Col span={24}>
            <ShopTitle>Ускорители:</ShopTitle>
          </Col>
          {boostersCardsMemo}
        </S.BoostersRow>
      </Col>
    </Row>
  );
};
