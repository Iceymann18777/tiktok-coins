import React from 'react';
import { Form } from 'antd';
import { withdrawAmount } from 'constants/config/withdraw';
import { requiredRule } from 'constants/config/requiredRule';
import * as S from './AmoutItem.styles';

const { min, max } = withdrawAmount;

export const AmountItem = () => (
  <Form.Item name="withdrawAmount" label="Сумма вывода" rules={[requiredRule]}>
    <S.NumberInput min={min} max={max} placeholder={`От ${min} до ${max}`} />
  </Form.Item>
);
