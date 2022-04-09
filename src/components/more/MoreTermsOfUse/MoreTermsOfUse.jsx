import React from 'react';
import * as S from './MoreTermsOfUse.styles';

export const MoreTermsOfUse = ({ path, children }) => (
  <S.Link href={path}>
    <S.Title>{children}</S.Title>
  </S.Link>
);
