import React from 'react';
import { Form, Input } from 'antd';
import { requiredRule } from 'constants/config/requiredRule';

export const PurseItem = () => (
  <Form.Item name="withdrawPurse" label="Номер вашего кошелька" rules={[requiredRule]}>
    <Input />
  </Form.Item>
);
