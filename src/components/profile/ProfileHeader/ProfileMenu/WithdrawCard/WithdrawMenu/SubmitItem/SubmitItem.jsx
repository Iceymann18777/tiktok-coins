import React from 'react';
import { Form } from 'antd';
import * as S from './SubmitItem.styles';

export const SubmitItem = () => (
  <Form.Item>
    <S.SubmitBtn type="primary" isPayment htmlType="submit">
      Вывести
    </S.SubmitBtn>
  </Form.Item>
);
