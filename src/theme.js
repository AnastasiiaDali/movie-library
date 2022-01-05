import { createTheme } from '@mui/material/styles';

export const Primary = '#008080';
export const PrimaryDark = '#004d4d';
export const PrimaryLight = '#009999';
export const Secondary = '#CCC';
export const SecondaryDark = '#1a1a1a';
export const SecondaryLight = ' #f2f2f2';

const theme = createTheme({
  palette: {
    primary: {
      main: Primary,
      light: PrimaryLight,
      dark: PrimaryDark
    },
    secondary: {
      main: Secondary,
      light: SecondaryDark,
      dark: SecondaryLight
    }
  },
  typography: {
    fontFamily: ['"Tinos"', '"Times New Roman"', '"Times"', 'serif'].join(','),
    h1: {
      fontSize: '1.875rem',
      lineHeight: 1.2,
      fontFamily: 'GFS Didot',
      letterSpacing: '0.05rem',
      color: PrimaryDark
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        body: {
          margin: 0,
          boxSizing: 'border-box'
        }
      }
    },
    MuiSvgIcon: {
      root: {
        fill: PrimaryDark,
        minWidth: '70px',
        minHeigth: '70px'
      },
      colorPrimary: {
        fill: PrimaryDark
      }
    }
  }
});

export default theme;
