import React from 'react';
import * as S from './Button.styles';

export const Button = ({ className, secondary, payment, children, ...props }) => (
  <S.Btn className={className} isSecondary={secondary} isPayment={payment} {...props}>
    {children}
  </S.Btn>
);
