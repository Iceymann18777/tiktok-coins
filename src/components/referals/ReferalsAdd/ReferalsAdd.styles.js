import styled from 'styled-components';
import { Avatar as AntAvatar, Typography, Row } from 'antd';
import { hexToRGB } from 'utils/utils';

export const AddRow = styled(Row)`
  padding: 0.5rem 0;

  border-top: 1px solid ${(props) => props.theme.colors.border};

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Avatar = styled(AntAvatar)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => hexToRGB(props.theme.colors.main.contrastBackground, 0.07)};

  color: ${(props) => hexToRGB(props.theme.colors.main.secondary, 0.7)};
`;

export const Title = styled(Typography.Text)`
  display: block;
  line-height: 1;

  font-weight: ${(props) => props.theme.typography.weight.semiBold};
`;

export const Description = styled(Typography.Text)`
  line-height: 1;

  color: ${(props) => props.theme.colors.text.additional};

  font-weight: ${(props) => props.theme.typography.weight.medium};
`;
