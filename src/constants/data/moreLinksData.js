import React from 'react';
import { Icon28PodcastCircleFillRed, Icon28UsersCircleFillBlue } from '@vkontakte/icons';

export const moreLinksData = [
  {
    name: 'Канал проекта',
    description: 'Новости',
    path: 'https://t.me/tiktok_coins',
    Icon: <Icon28UsersCircleFillBlue width={20} height={20} />,
  },
  {
    name: 'Инструкция',
    description: 'Как пользоваться приложением',
    path: 'https://teletype.in/@tiktokcoin/TikTokCoin_info',
    Icon: <Icon28PodcastCircleFillRed width={20} height={20} />,
  },
  {
    name: 'FAQ',
    description: 'Часто задаваемые вопросы',
    path: 'https://teletype.in/@tiktokcoin/FAQ',
    Icon: <Icon28PodcastCircleFillRed width={20} height={20} />,
  },
  {
    name: 'Техническая поддержка',
    description: 'По любым вопросам',
    path: '#',
    Icon: <Icon28PodcastCircleFillRed width={20} height={20} />,
  },
];
