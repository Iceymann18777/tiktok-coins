import { Card } from 'antd';
import styled from 'styled-components';

export const CommonCard = styled(Card)`
  overflow: hidden;
  cursor: pointer;

  border-radius: ${(props) => props.theme.border.medium};

  box-shadow: ${(props) => props.theme.shadow.card};
`;
