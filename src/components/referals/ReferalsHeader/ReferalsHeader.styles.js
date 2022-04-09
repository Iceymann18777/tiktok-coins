import { Typography } from 'antd';
import styled from 'styled-components';

export const Text = styled(Typography.Text)`
  font-weight: ${(props) => props.theme.typography.weight.semiBold};

  font-size: ${(props) => props.theme.typography.size.xl};
`;
