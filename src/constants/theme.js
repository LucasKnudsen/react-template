import { createTheme } from '@mui/material/styles'

export const COLORS = {
  primary: '#3b4cb8',
  faded: '#3b4cb820',
  secondary: '#3B3B3B',
  tertiary: '#f6f6f6',
  background: '#eeeeee',

  lightGray: '#fafafa',
  lightGray2: '#f5f5f5',
  lightGray3: '#f0f0f0',
  gray: '#d9d9d9',
  gray1: '#8c8c8c',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.2)',
  transparentBlack2: 'rgba(0, 0, 0, 0.8)',
  dark: '#222222',
  white: '#ffffff',
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
  isSmallScreen: '(max-width:780px)',
  isTablet: '(max-width:1023px)',
  isLaptop: '(min-width:1024px)',
  isLargeScreen: '(min-width:1201px)',
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    info: {
      main: COLORS.white,
    },
  },
  typography: {
    fontFamily: { ...FONTS.main },
  },
})

export const toastOptions = {
  style: {
    fontFamily: { ...FONTS.main },
    minWidth: 200,
  },
}

const appTheme = { COLORS, SIZES, BREAKPOINTS, FONTS, muiTheme, toastOptions }

export default appTheme
