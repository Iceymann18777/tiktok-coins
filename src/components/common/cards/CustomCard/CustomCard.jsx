import React, { useContext, useEffect, useState } from 'react';
import { Col, Image, Row, Space } from 'antd';
import { ThemeContext } from 'styled-components';
import { Button } from 'components/common/Button/Button';
import { useCustomBanner } from 'hooks/useCustomBanner';
import { Dates } from 'constants/config/Dates';
import customBanner from 'assets/images/custom-banner.png';
import * as S from './CustomCard.styles';
import { countdown } from 'utils/utils';

export const CustomCard = () => {
  const theme = useContext(ThemeContext);

  const { title, description, btnText, end_date } = useCustomBanner();

  const [difference, setDifference] = useState(0);

  useEffect(() => {
    let cleanupFunc = false;

    setInterval(() => {
      !cleanupFunc && setDifference(Dates.unix(end_date).diff(Dates.getToday(), 's'));
    }, 1000);

    return () => (cleanupFunc = true);
  }, [end_date]);

  return difference > 0 ? (
    <Col span={24}>
      <S.CustomCard background={theme.colors.background.primary}>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Space direction="vertical" size={0}>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </Space>
          </Col>

          <Col span={24}>
            <Row hustify="space-between" align="middle">
              <Col flex={1}>
                {end_date && <S.Text>{`До конца: ${countdown(difference)}`}</S.Text>}
              </Col>

              <Col>
                <Button type="default">{btnText}</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <S.ImgWrapper>
          <Image src={customBanner} alt="Кастомный баннер" preview={false} />
        </S.ImgWrapper>
      </S.CustomCard>
    </Col>
  ) : null;
};
