import { Typography } from 'antd';
import { Card } from 'components/common/cards/Card/Card';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const BaseCard = styled(Card)`
  height: 100%;

  color: ${(props) => props.theme.colors.text.main};

  & .ant-card-body {
    height: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 3.125rem;
      height: 3.125rem;
      top: 0;
      right: 0;
      border-radius: 50%;
      transform: translate(60%, 40%);

      background-color: ${(props) => hexToRGB(props.theme.colors.main.background, 0.2)};

      @media only screen and ${(props) => props.theme.media.md} {
        width: 5rem;
        height: 5rem;
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 3.125rem;
      height: 3.125rem;
      top: 0;
      right: 0;
      border-radius: 50%;
      transform: translate(20%, -30%);

      background-color: ${(props) => hexToRGB(props.theme.colors.main.background, 0.2)};

      @media only screen and ${(props) => props.theme.media.md} {
        width: 5rem;
        height: 5rem;
      }
    }

    background: ${(props) => props.background};
  }
`;

export const ImgWrapper = styled.div`
  width: 2rem;
  height: 2rem;

  @media only screen and ${(props) => props.theme.media.md} {
    width: 4rem;
    height: 4rem;
  }
`;

export const Title = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.main};

  font-size: ${(props) => props.theme.typography.size.xs};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;
