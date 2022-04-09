import { useResponsive } from 'hooks/useResponsive';
import React from 'react';
import * as S from './Card.styles';

export const Card = ({ children, ...props }) => {
  const { isTablet } = useResponsive();

  return (
    <S.CommonCard size={isTablet ? 'default' : 'small'} {...props}>
      {children}
    </S.CommonCard>
  );
};
