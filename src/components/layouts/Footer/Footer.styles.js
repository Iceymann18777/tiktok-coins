import { Button } from 'components/common/Button/Button';
import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
`;

export const Btn = styled(Button)`
  height: 2.8125rem;
  line-height: 1.3;
  padding: 2px;
  width: 20%;
  max-width: 6rem;

  font-size: ${(props) => props.theme.typography.size.xs};

  @media only screen and ${(props) => props.theme.media.md} {
    line-height: 1.5;
    height: 3.5rem;

    font-size: ${(props) => props.theme.typography.size.md};
  }

  & span[role='img'] {
    font-size: ${(props) => props.theme.typography.size.xxl};
  }

  ${(props) =>
    props.type === 'primary'
      ? css`
          transform: translateY(-10px);

          box-shadow: ${props.theme.shadow.button};
        `
      : css`
          border: 0;
          background: transparent;
          box-shadow: none;

          color: ${props.theme.colors.text.additional};
        `}
`;
