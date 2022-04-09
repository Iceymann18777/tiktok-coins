import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Button } from 'components/common/Button/Button';
import { MainCard } from 'components/common/cards/MainCard/MainCard';
import telegramIcon from 'assets/images/telegram.png';

export const SubscriptionCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <MainCard
      title="200 ₽ на баланс"
      description="Бонус за подписку на канал"
      btnText="Получить"
      secondBtn={
        <a href="https://t.me/tiktok_coins">
          <Button type="default">Подписаться</Button>
        </a>
      }
      background={theme.colors.background.primary}
      icon={telegramIcon}
    />
  );
};
