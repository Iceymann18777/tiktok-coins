import { Typography } from 'antd';
import { Card } from 'components/common/cards/Card/Card';
import styled, { css } from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const MainCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['isPrimary'].includes(prop),
})`
  & .ant-card-body {
    position: relative;

    background: ${(props) => props.background};

    ${(props) =>
      props.isPrimary &&
      css`
        &::before {
          content: '';
          position: absolute;
          left: -20px;
          bottom: 0;
          width: 5rem;
          height: 6rem;

          border-radius: 20px 20px 20px 50px;

          transform: rotate(15deg);

          background: ${hexToRGB(props.theme.colors.main.background, 0.15)};
        }

        &::after {
          content: '';
          position: absolute;
          left: 30%;
          top: -50%;
          width: 5rem;
          height: 6rem;

          border-radius: 50px 50px 50px 50px;

          transform: rotate(15deg);

          background: ${hexToRGB(props.theme.colors.main.background, 0.15)};
        }
      `}
  }
`;

export const Title = styled(Typography.Text)`
  font-weight: 600;
  line-height: 1;

  color: ${(props) => props.theme.colors.text.main};

  font-size: ${(props) => props.theme.typography.size.lg};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xxl};
  }
`;

export const Description = styled(Typography.Text)`
  display: block;

  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.5)};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;

export const Text = styled(Typography.Text)`
  display: block;

  font-size: ${(props) => props.theme.typography.size.xs};

  font-weight: ${(props) => props.theme.typography.weight.thin};

  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.4)};
`;

export const ImgWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  color: ${(props) => props.theme.colors.text.main};

  @media only screen and ${(props) => props.theme.media.md} {
    width: 6rem;
    height: 6rem;
  }
`;
