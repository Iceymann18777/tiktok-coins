import styled from 'styled-components';
import { MainCard } from 'components/common/cards/MainCard/MainCard';
import { ImgWrapper } from 'components/common/cards/MainCard/MainCard.styles';

export const BalaneCard = styled(MainCard)`
  & ${ImgWrapper} {
    width: 5rem;
    height: 5rem;
  }
`;
