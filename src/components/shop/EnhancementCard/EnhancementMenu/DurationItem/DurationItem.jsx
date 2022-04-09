import { Form } from 'antd';
import { Select } from 'components/common/Select/Select';
import React, { useMemo } from 'react';

export const DurationItem = ({ prices, defaultItem }) => {
  const optionsMemo = useMemo(
    () =>
      prices.map((price) => (
        <option value={price.price} key={price.price}>
          {price.label}
        </option>
      )),
    [prices],
  );

  return (
    <Form.Item name="price" label="Длительность" initialValue={defaultItem}>
      <Select>{optionsMemo}</Select>
    </Form.Item>
  );
};
