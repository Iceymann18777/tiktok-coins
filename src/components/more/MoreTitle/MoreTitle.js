import styled from 'styled-components';
import { Typography } from 'antd';

export const MoreTitle = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.additional};

  font-size: ${(props) => props.theme.typography.size.lg};

  font-weight: ${(props) => props.theme.typography.weight.medium};
`;
