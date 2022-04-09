import { Typography, Avatar as AntAvatar } from 'antd';
import { Icon16Chevron } from '@vkontakte/icons';
import styled from 'styled-components';

export const Avatar = styled(AntAvatar)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;

  background-color: ${(props) => props.background};
`;

export const Title = styled(Typography.Text)`
  font-weight: ${(props) => props.theme.typography.weight.semiBold};

  font-size: ${(props) => props.theme.typography.size.lg};
`;

export const Description = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.additional};

  font-weight: ${(props) => props.theme.typography.weight.medium};
`;

export const IconRight = styled(Icon16Chevron)`
  color: ${(props) => props.theme.colors.text.additional};
`;
