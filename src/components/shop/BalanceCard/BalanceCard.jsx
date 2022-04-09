import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { EXCHANGE_CROWNS_VALUE } from 'constants/config/exchangeValue';
import crownsIcon from 'assets/images/crowns.png';
import crownIcon from 'assets/icons/crown.png';
import { Image, Modal, Space } from 'antd';
import { useResponsive } from 'hooks/useResponsive';
import { Drawer } from 'components/common/Drawer/Drawer';
import { BalanceMenu } from './BalanceMenu/BalanceMenu';
import * as S from './BalanceCard.styles';

export const BalanceCard = ({ balance }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const theme = useContext(ThemeContext);

  const { isDesktop } = useResponsive();

  return (
    <>
      <S.BalaneCard
        title={
          <>
            <Space align="center" size={4}>
              <span>Ваш баланс: {balance}</span>
              <Image width={20} preview={false} src={crownIcon} alt="crown" />
            </Space>
          </>
        }
        description="Нажмите ниже для пополнения"
        text={
          <>
            ({EXCHANGE_CROWNS_VALUE}{' '}
            <Image width={15} preview={false} src={crownIcon} alt="crown" />)
          </>
        }
        background={theme.colors.main.additional}
        btnText="Пополнить"
        icon={crownsIcon}
        onClick={() => setMenuVisible(true)}
      />

      {!isDesktop && (
        <Drawer height={300} visible={isMenuVisible} setDrawerVisible={() => setMenuVisible(false)}>
          <BalanceMenu />
        </Drawer>
      )}

      {isDesktop && (
        <Modal visible={isMenuVisible} onCancel={() => setMenuVisible(false)} footer={null}>
          <BalanceMenu />
        </Modal>
      )}
    </>
  );
};
