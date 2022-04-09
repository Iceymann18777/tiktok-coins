import styled from 'styled-components';
import { Row } from 'antd';

export const EnhancementRow = styled(Row)`
  & .ant-card-body {
    background: ${(props) => props.theme.colors.background.primary};
  }

  & .ant-col {
    &:nth-child(2) {
      & .ant-card-body {
        background: ${(props) => props.theme.colors.background.additional6};
      }
    }

    &:nth-child(3) {
      & .ant-card-body {
        background: ${(props) => props.theme.colors.background.primary};
      }
    }

    &:nth-child(4) {
      & .ant-card-body {
        background: ${(props) => props.theme.colors.background.additional5};
      }
    }
  }
`;

export const BoostersRow = styled(Row)`
  & .ant-card-body {
    background: ${(props) => props.theme.colors.background.primary};
  }

  & .ant-col {
    &:nth-child(2) {
      & .ant-card-body {
        background: ${(props) => props.theme.colors.background.additional4};
      }
    }
  }
`;
