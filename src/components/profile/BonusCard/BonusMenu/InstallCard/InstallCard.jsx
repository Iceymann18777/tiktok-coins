import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MainCard } from 'components/common/cards/MainCard/MainCard';
import pwa from 'assets/images/pwa.png';
import { hexToRGB } from 'utils/utils';

export const InstallCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <MainCard
      title="500 ₽ на баланс"
      description="Бонус за установку приложения"
      btnText="Получить"
      background={`linear-gradient(to right top, ${theme.colors.main.secondary}, ${hexToRGB(
        theme.colors.main.success,
        0.7,
      )})`}
      icon={pwa}
    />
  );
};
