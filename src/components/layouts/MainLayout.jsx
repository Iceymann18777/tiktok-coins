import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import * as S from './MainLayout.styles';

export const MainLayout = ({ children }) => (
  <S.MainLayout>
    <S.MainHeader>
      <Header />
    </S.MainHeader>
    <S.MainContent>{children}</S.MainContent>
    <S.MainFooter>
      <Footer />
    </S.MainFooter>
  </S.MainLayout>
);
