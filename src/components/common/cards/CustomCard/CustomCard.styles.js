import styled from 'styled-components';
import { Card } from 'components/common/cards/Card/Card';
import { Typography } from 'antd';

export const CustomCard = styled(Card)`
  & .ant-card-body {
    background: ${(props) => props.background};
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
  color: ${(props) => props.theme.colors.text.main};

  font-weight: ${(props) => props.theme.typography.weight.thin};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;

export const Text = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.main};

  font-weight: ${(props) => props.theme.typography.weight.medium};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.typography.size.xl};
  }
`;

export const ImgWrapper = styled.div`
  opacity: 0.8;
  position: absolute;
  width: 10rem;
  left: 50%;
  bottom: -60px;
  transform: translateX(-50%);

  @media only screen and ${(props) => props.theme.media.md} {
    width: 12rem;
  }
`;
