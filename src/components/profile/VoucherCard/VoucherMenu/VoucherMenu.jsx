/* eslint-disable no-console */
import React from 'react';
import { notification, Form, Input } from 'antd';
import { ModalTitle } from 'components/common/ModalTitle/ModalTitle';
import { usePromo } from 'hooks/usePromo';
import * as S from './VoucherMenu.styles';

export const VoucherMenu = () => {
  const promo = usePromo();

  const onFinish = () => {
    if (promo.isValid) {
      notification.success({ message: 'Успешно применено!' }); // TODO dispatch user balance
    } else {
      notification.error({ message: 'Промокод недействителен!' });
    }
  };

  const onFinishFailed = (error) => {
    console.error(error);
  };

  return (
    <Form name="voucher" requiredMark={false} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item>
        <ModalTitle>Активировать ваучер</ModalTitle>
      </Form.Item>

      <Form.Item name="promo">
        <Input placeholder="Промо-код" />
      </Form.Item>

      <Form.Item>
        <S.VoucherBtn type="primary" isPayment htmlType="submit">
          Применить
        </S.VoucherBtn>
      </Form.Item>

      <S.VoucherText>Используйте ваучер для получения дополнительных бонусов 🎁</S.VoucherText>

      <S.VoucherText>
        Мы раздаём ваучеры на нашем <a href="https://t.me/tiktok_coins">канале</a> и в{' '}
        <a href="https://t.me/TikTokCoins_Bot">боте</a>, подпишитесь, чтобы не пропускать новые
        раздачи 👆
      </S.VoucherText>
    </Form>
  );
};
