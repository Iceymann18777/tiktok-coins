import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.additional};

  font-weight: ${(props) => props.theme.typography.weight.semiBold};
`;
