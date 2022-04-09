import React, { useState } from 'react';
import { Form, notification } from 'antd';
import { TitleItem } from './TitleItem/TitleItem';
import { DurationItem } from './DurationItem/DurationItem';
import { InfoItem } from './InfoItem/InfoItem';
import { SubmitItem } from './SubmitItem/SubmitItem';

export const EnhancementMenu = ({ title, details, prices }) => {
  const [selectedPrice, setSelectedPrice] = useState(prices.find((price) => price.default).price);

  const onFinish = (values) => {
    notification.success({ message: 'Успешно куплено!' });
    console.log(values);
  };

  const onFinishFailed = (error) => {
    notification.error({ message: `Произошла ошибка: ${error}` });
  };

  return (
    <Form
      name={title}
      requiredMark={false}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={(values) => {
        setSelectedPrice(values.price);
      }}
      layout="vertical"
    >
      <TitleItem title={title} />

      <DurationItem prices={prices} defaultItem={selectedPrice} />

      <InfoItem details={details} />

      <SubmitItem price={selectedPrice} />
    </Form>
  );
};
