import React from 'react';
import { Col, Row, Image } from 'antd';
import { Button } from 'components/common/Button/Button';
import * as S from './MainCard.styles';

export const MainCard = ({
  className,
  title,
  description,
  btnText,
  secondBtn,
  background,
  text,
  icon,
  isPrimary,
  onClick,
}) => (
  <S.MainCard className={className} background={background} isPrimary={isPrimary} onClick={onClick}>
    <Row justify="space-between" align="middle" gutter={[0, 0]} wrap={false}>
      <Col>
        <Col span={24}>
          <S.Title>{title}</S.Title>
        </Col>
        <Col span={24}>
          <Row gutter={[0, 5]}>
            <Col span={24}>
              <S.Description>{description}</S.Description>

              {text && <S.Text>{text}</S.Text>}
            </Col>

            <Col span={24}>
              <Row gutter={[20, 0]}>
                <Col>
                  <Button type="default">{btnText}</Button>
                </Col>

                {secondBtn && <Col>{secondBtn}</Col>}
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>

      <Col>
        <S.ImgWrapper>
          <Image src={icon} alt="Icon" preview={false} />
        </S.ImgWrapper>
      </Col>
    </Row>
  </S.MainCard>
);
