import React from 'react';
import { Form, notification } from 'antd';
import { requiredRule } from 'constants/config/requiredRule';
import { MIN_DONATE_VALUE, MAX_DONATE_VALUE } from 'constants/config/donateValues';
import { Btn } from '../BalanceMenu.styles';
import * as S from './BalanceCustomValue.styles';

export const BalanceCustomValue = () => {
  const onFinish = () => {
    notification.success({ message: 'Успешно пополнено!' });
  };

  return (
    <Form name="customValue" layout="vertical" onFinish={onFinish}>
      <Form.Item name="value" rules={[requiredRule]}>
        <S.NumberInput
          min={MIN_DONATE_VALUE}
          max={MAX_DONATE_VALUE}
          placeholder={`от ${MIN_DONATE_VALUE} до ${MAX_DONATE_VALUE}`}
        />
      </Form.Item>
      <Form.Item>
        <Btn type="primary" isPayment htmlType="submit">
          Пополнить
        </Btn>
      </Form.Item>
    </Form>
  );
};
