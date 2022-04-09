import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  display: block;
  text-align: center;

  font-weight: ${(props) => props.theme.typography.weight.semiBold};

  font-size: ${(props) => props.theme.typography.size.xl};
`;
