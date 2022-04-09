import styled from 'styled-components';
import { Layout } from 'antd';

export const MainLayout = styled(Layout)`
  background-color: ${(props) => props.theme.colors.main.primary};

  @media only screen and (min-height: 500px) {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const MainHeader = styled(Layout.Header)`
  height: unset;
  line-height: 1.5715;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.5rem;
  }
`;

export const MainContent = styled(Layout.Content)`
  padding: 1rem;
  overflow-y: auto; // TODO add padding and style scroll

  border-top-left-radius: ${(props) => props.theme.border.large};

  border-top-right-radius: ${(props) => props.theme.border.large};

  background-color: ${(props) => props.theme.colors.main.background};

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.5rem;
  }
`;

export const MainFooter = styled(Layout.Footer)`
  z-index: 5;
  height: 4.4375rem;

  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media only screen and ${(props) => props.theme.media.md} {
    height: 5.15625rem;
  }
`;
