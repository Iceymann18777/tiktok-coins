import styled from 'styled-components';
import { Typography } from 'antd';
import { Icon24ChevronLeft } from '@vkontakte/icons';
import { Button } from 'components/common/Button/Button';

export const Btn = styled(Button)`
  width: 100%;
`;

export const Title = styled(Typography.Text)`
  text-align: center;
  display: block;

  font-weight: ${(props) => props.theme.typography.weight.bold};

  font-size: ${(props) => props.theme.typography.size.xl};
`;

export const Back = styled(Icon24ChevronLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
