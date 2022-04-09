import styled from 'styled-components';
import { Typography } from 'antd';

export const Link = styled.a`
  display: block;
  text-align: center;
`;

export const Title = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.additional};
`;
