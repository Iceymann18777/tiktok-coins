import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MainCard } from 'components/common/cards/MainCard/MainCard';
import { hexToRGB } from 'utils/utils';
import bonus from 'assets/images/bonus.png';

export const EveryDayCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <MainCard
        title="50 ₽ на баланс"
        description="Каждый день бесплатный бонус"
        btnText="Получить"
        background={`linear-gradient(to right top, ${hexToRGB(
          theme.colors.main.warning,
          0.8,
        )}, ${hexToRGB(theme.colors.main.error, 0.8)})`}
        icon={bonus}
      />
    </>
  );
};
