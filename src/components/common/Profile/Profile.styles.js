import { Typography, Avatar as AntAvatar } from 'antd';
import styled from 'styled-components';
import { hexToRGB } from 'utils/utils';

export const Avatar = styled(AntAvatar)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => hexToRGB(props.theme.colors.main.contrastBackground, 0.07)};

  & > .Icon {
    color: ${(props) => props.theme.colors.text.additional};
  }
`;

export const Title = styled(Typography.Text)`
  display: block;

  font-size: ${(props) => props.theme.typography.size.lg};

  font-weight: ${(props) => props.theme.typography.weight.medium};
`;

export const Description = styled(Typography.Text)``;

export const Text = styled(Typography.Text)`
  opacity: 0.6;
`;
