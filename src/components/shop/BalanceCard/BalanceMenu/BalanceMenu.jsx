import React, { useMemo, useState } from 'react';
import { Col, Row } from 'antd';
import { donateValues } from 'constants/config/donateValues';
import * as S from './BalanceMenu.styles';
import { BalanceCustomValue } from './BalanceCustomValue/BalanceCustomValue';

export const BalanceMenu = () => {
  const [isCustomValue, setCustomValue] = useState(false);

  const donateItemsMemo = useMemo(
    () =>
      donateValues.map((donate) => (
        <Col key={donate.value} span={12}>
          <S.Btn type="primary" isPayment>
            {donate.value} руб.
          </S.Btn>
        </Col>
      )),
    [],
  );

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        {isCustomValue && <S.Back onClick={() => setCustomValue(false)} />}
        <S.Title>Пополнение</S.Title>
      </Col>

      <Col span={24}>
        {isCustomValue ? (
          <BalanceCustomValue />
        ) : (
          <Row gutter={[5, 10]}>
            {donateItemsMemo}
            <Col span={24}>
              <S.Btn type="primary" onClick={() => setCustomValue(true)}>
                Своя сумма
              </S.Btn>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};
