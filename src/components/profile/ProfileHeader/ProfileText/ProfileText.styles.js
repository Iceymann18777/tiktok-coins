import { Typography } from 'antd';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const BalanceText = styled(Typography.Text)`
  font-size: ${(props) => props.theme.typography.size.xl};

  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.7)};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xxl};
  }
`;

export const ValueText = styled(Typography.Text)`
  font-size: ${(props) => props.theme.typography.size.xxl};

  font-weight: ${(props) => props.theme.typography.weight.semiBold};

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xxxl};
  }
`;

export const CurrencyText = styled(Typography.Text)`
  display: inline-flex;
  align-items: center;
  column-gap: 0.2rem;

  font-size: ${(props) => props.theme.typography.size.lg};

  font-weight: ${(props) => props.theme.typography.weight.medium};

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xxl};
  }
`;

export const ExchangeText = styled(Typography.Text)`
  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.5)};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;
