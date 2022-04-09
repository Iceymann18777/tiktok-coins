import React from 'react';
import { Col } from 'antd';
import { Icon24Add } from '@vkontakte/icons';
import { useUser } from 'hooks/useUser';
import * as S from './ReferalsAdd.styles';

export const ReferalsAdd = () => {
  const { invited_users } = useUser();

  return (
    <S.AddRow align="middle" wrap={false} gutter={[10, 0]}>
      <Col>
        <S.Avatar icon={<Icon24Add />} />
      </Col>

      <Col flex={1}>
        <S.Title>Пригласить друзей</S.Title>
        <S.Description>
          {invited_users.length > 0 ? 'И зарабатывайте больше' : 'Вы пока никого не пригласили'}
        </S.Description>
      </Col>
    </S.AddRow>
  );
};
