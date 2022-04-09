import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import usePWA from 'react-pwa-install-prompt';
import { Modal } from 'antd';
import { Drawer } from 'components/common/Drawer/Drawer';
import { BaseCard } from 'components/common/cards/BaseCard/BaseCard';
import { useResponsive } from 'hooks/useResponsive';
import pwa from 'assets/images/pwa.png';
import { InstallMenu } from './InstallMenu/InstallMenu';

export const InstallCard = () => {
  const theme = useContext(ThemeContext);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const { isDesktop } = useResponsive();

  const { promptInstall, isInstallPromptSupported } = usePWA();

  const onClick = async () => {
    if (isInstallPromptSupported) {
      const didInstall = await promptInstall();
      if (didInstall) {
        console.log('installed');
      }
    } else {
      setMenuVisible(true);
    }
  };

  return (
    <>
      <BaseCard
        title="Установить приложение"
        icon={pwa}
        background={theme.colors.background.additional1}
        onClick={onClick}
      />

      {!isDesktop && (
        <Drawer height={200} visible={isMenuVisible} setDrawerVisible={() => setMenuVisible(false)}>
          <InstallMenu />
        </Drawer>
      )}

      {isDesktop && (
        <Modal visible={isMenuVisible} onCancel={() => setMenuVisible(false)} footer={null}>
          <InstallMenu />
        </Modal>
      )}
    </>
  );
};
