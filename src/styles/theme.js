const standardColors = {
  black: '#000000',
  white: '#ffffff',
  purple: '#5b6dff',
  blue: '#456efd',
  red: '#ff0000',
  redLight: '#ff6850',
  orange: '#d57132',
  orangeLight: '#fbaf2a',
  violet: '#8464fb',
  violetLight: '#939bff',
  green: '#4bb34b',
  greenLight: '#1dcd9d',
  gray: '#d8d8d8',
  grayDark: '#9ea2ae',
};

const mainColors = {
  primary: standardColors.purple,
  secondary: standardColors.blue,
  additional: standardColors.violet,
  error: standardColors.red,
  success: standardColors.green,
  warning: standardColors.orange,
  background: standardColors.white,
  contrastBackground: standardColors.black,
  secondaryButton: standardColors.violetLight,
};

const colors = {
  main: mainColors,
  background: {
    primary: 'linear-gradient(to left bottom, #a948ea, #6849d0)',
    additional1: standardColors.redLight,
    additional2: standardColors.orangeLight,
    additional3: standardColors.greenLight,
    additional4: 'linear-gradient(to left bottom, #ecb818, #ce5c35)',
    additional5: 'linear-gradient(to left bottom, #69c6ed, #585ee0)',
    additional6: '#c9295e',
  },
  text: {
    main: standardColors.white,
    secondary: standardColors.black,
    additional: standardColors.grayDark,
  },
  border: standardColors.gray,
};

const typography = {
  size: {
    xs: '0.725rem',
    md: '0.875rem',
    lg: '1rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '1.75rem',
  },
  weight: {
    thin: 100,
    ultraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    ultraBold: 800,
    heavy: 900,
  },
};

const border = {
  small: '6px',
  base: '8px',
  medium: '15px',
  large: '30px',
};

const breakpoints = {
  xs: 360,
  md: 768,
  xl: 1280,
};

const shadow = {
  button: '0 0 5px rgba(0, 0, 0, 0.5)',
  card: '0px 4px 40px rgba(0, 0, 0, 0.07)',
};

const getBreakpointPx = (breakpoint) => `(min-width: ${breakpoint}px)`;

const media = {
  xs: getBreakpointPx(breakpoints.xs),
  md: getBreakpointPx(breakpoints.md),
  xl: getBreakpointPx(breakpoints.xl),
};

export const theme = { breakpoints, media, standardColors, colors, typography, border, shadow };
