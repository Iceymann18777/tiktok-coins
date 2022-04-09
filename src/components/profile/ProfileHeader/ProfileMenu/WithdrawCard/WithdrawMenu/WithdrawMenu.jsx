/* eslint-disable no-console */
import React from 'react';
import { Form, notification } from 'antd';
import { WithdrawItem } from './WithdrawItem/WithdrawItem';
import { PurseItem } from './PurseItem/PurseItem';
import { AmountItem } from './AmountItem/AmountItem';
import { SubmitItem } from './SubmitItem/SubmitItem';
import { TitleItem } from './TitleItem/TitleItem';

export const WithdrawMenu = () => {
  const onFinish = (values) => {
    console.log(values); // TODO Handle in other way

    notification.success({ message: 'Успешно выведено!' });
  };

  const onFinishFailed = (error) => {
    console.error(error);
  };

  return (
    <Form
      name="withdraw"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      requiredMark={false}
    >
      <TitleItem />
      <WithdrawItem />
      <PurseItem />
      <AmountItem />
      <SubmitItem />
    </Form>
  );
};
