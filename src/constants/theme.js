export const COLORS = {
  primary: '#3b4cb8',
  faded: '#d2d7f6',
  secondary: '#3B3B3B',
  tertiary: '#f6f6f6',
  background: '#eeeeee',
  lightGray: '#fafafa',
  lightGray2: '#f5f5f5',
  lightGray3: '#f0f0f0',
  gray: '#d9d9d9',
  gray1: '#8c8c8c',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.8)',
  transparentBlack2: 'rgba(0, 0, 0, 0.4)',
  dark: '#222222',
  white: '#fff',
  black: '#000000',
  error: '#D84035',
}
export const SIZES = {
  padding: 12,
  radius: 24,
  maxWidth: 1140,
}

export const FONTS = {
  main: {
    fontFamily: "'Nunito Sans', sans-serif",
  },
}

export const BREAKPOINTS = {
  isPhone: '(max-width:480px)',
  isTablet: '(max-width:768px)',
  isLaptop: '(min-width:769px)',
  isLargeScreen: '(min-width:1201px)',
}

const appTheme = { COLORS, SIZES, BREAKPOINTS, FONTS }

export default appTheme
