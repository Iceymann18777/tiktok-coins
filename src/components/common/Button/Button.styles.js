import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { hexToRGB } from 'utils/utils';

export const Btn = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['isPayment', 'isSecondary'].includes(prop),
})`
  z-index: 2;

  ${(props) =>
    props.type === 'text' &&
    css`
      color: ${props.theme.colors.text.additional};

      &:hover {
        color: ${props.theme.colors.main.primary};
      }
    `};

  ${(props) =>
    props.type === 'primary' &&
    css`
      background: linear-gradient(
        to right top,
        ${props.theme.colors.main.primary},
        ${hexToRGB(props.theme.colors.main.primary, 0.9)}
      );

      &:focus {
        background: linear-gradient(
          to right top,
          ${props.theme.colors.main.primary},
          ${hexToRGB(props.theme.colors.main.primary, 0.9)}
        );
      }
    `};

  ${(props) =>
    props.isPayment &&
    css`
      background: ${props.theme.colors.main.success};

      border-color: ${props.theme.colors.main.success};

      &:hover {
        background: ${hexToRGB(props.theme.colors.main.success, 0.8)};

        border-color: ${hexToRGB(props.theme.colors.main.success, 0.8)};
      }

      &:active {
        background: ${props.theme.colors.main.success};

        border-color: ${props.theme.colors.main.success};
      }

      &:focus {
        background: ${props.theme.colors.main.success};

        border-color: ${props.theme.colors.main.success};
      }
    `};

  ${(props) =>
    props.isSecondary &&
    css`
      background: ${props.theme.colors.main.secondaryButton};

      border-color: ${props.theme.colors.main.secondaryButton};

      &:active {
        background: ${hexToRGB(props.theme.colors.main.secondaryButton, 0.7)};

        border-color: ${hexToRGB(props.theme.colors.main.secondaryButton, 0.7)};
      }

      &:focus {
        background: ${props.theme.colors.main.secondaryButton};

        border-color: ${props.theme.colors.main.secondaryButton};
      }
    `};
`;
