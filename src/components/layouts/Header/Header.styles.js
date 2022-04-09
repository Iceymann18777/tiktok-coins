import { Typography } from 'antd';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const UsernameText = styled(Typography.Text)`
  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.7)};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;

export const PageTitle = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${(props) => props.theme.typography.size.xxl};

    font-weight: ${(props) => props.theme.typography.weight.medium};

    color: ${(props) => props.theme.colors.text.main};
  }
`;

export const OnlineText = styled(Typography.Text)`
  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.9)};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;
