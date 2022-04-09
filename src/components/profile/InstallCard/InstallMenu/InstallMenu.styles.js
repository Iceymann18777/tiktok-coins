import { Typography } from 'antd';
import { Button } from 'components/common/Button/Button';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  text-align: center;
  display: block;

  font-weight: ${(props) => props.theme.typography.weight.bold};

  font-size: ${(props) => props.theme.typography.size.xl};
`;

export const Btn = styled(Button)`
  width: 100%;
`;
