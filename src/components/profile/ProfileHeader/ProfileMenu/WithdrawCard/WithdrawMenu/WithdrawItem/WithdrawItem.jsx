import React, { useMemo } from 'react';
import { Form } from 'antd';
import { Select } from 'components/common/Select/Select';
import { withdrawWays } from 'constants/config/withdraw';
import { requiredRule } from 'constants/config/requiredRule';

export const WithdrawItem = () => {
  const withdrawItems = useMemo(
    () =>
      withdrawWays.map((way) => (
        <option key={way.value} value={way.value}>
          {way.name}
        </option>
      )),
    [],
  );

  return (
    <Form.Item
      name="withdrawWay"
      label="Выберите кошелек"
      initialValue="qiwi"
      rules={[requiredRule]}
    >
      <Select>{withdrawItems}</Select>
    </Form.Item>
  );
};
