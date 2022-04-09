import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';

export const useResponsive = () => {
  const theme = useContext(ThemeContext);

  const isMobile = useMediaQuery({ query: theme.media.xs });
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });

  const mobileOnly = isMobile && !isTablet;
  const tabletOnly = isTablet && !isDesktop;

  return {
    isMobile,
    isTablet,
    isDesktop,
    mobileOnly,
    tabletOnly,
  };
};
