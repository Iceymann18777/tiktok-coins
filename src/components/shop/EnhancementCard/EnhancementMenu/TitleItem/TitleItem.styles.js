import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  text-align: center;
  display: block;

  font-weight: ${(props) => props.theme.typography.weight.bold};

  font-size: ${(props) => props.theme.typography.size.xl};
`;
