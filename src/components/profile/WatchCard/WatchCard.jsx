import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MainCard } from 'components/common/cards/MainCard/MainCard';
import { TIKTOK_LINK } from 'constants/config/tiktokLink';
import tiktokIcon from 'assets/images/tiktok.png';

export const WatchCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <a href={TIKTOK_LINK} target="_blank" rel="noreferrer">
      <MainCard
        title="Смотреть TikTok"
        description="10-50 TikCoin за просмотр"
        btnText="Смотреть"
        background={theme.colors.main.primary}
        icon={tiktokIcon}
        isPrimary
      />
    </a>
  );
};
