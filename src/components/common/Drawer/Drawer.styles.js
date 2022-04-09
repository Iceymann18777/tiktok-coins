import styled from 'styled-components';
import { Drawer as AntDrawer } from 'antd';

export const Drawer = styled(AntDrawer)`
  & .ant-drawer-content {
    background: transparent;
  }

  & .ant-drawer-content-wrapper {
    box-shadow: none;
  }
`;

export const SwipeWrapper = styled.div`
  border-radius: 30px 30px 0 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 24px 24px 48px 24px;

  background: ${(props) => props.theme.colors.main.background};
`;
