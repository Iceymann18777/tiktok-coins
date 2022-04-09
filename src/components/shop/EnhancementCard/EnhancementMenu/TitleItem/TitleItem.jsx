import React from 'react';
import { Form } from 'antd';
import * as S from './TitleItem.styles';

export const TitleItem = ({ title }) => (
  <Form.Item>
    <S.Title>{title}</S.Title>
  </Form.Item>
);
