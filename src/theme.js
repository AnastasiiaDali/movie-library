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
    color: PrimaryDark,
    h1: {
      fontSize: '1.875rem',
      lineHeight: 1.2,
      letterSpacing: '0.05rem'
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.06rem'
    },
    h3: {
      fontSize: '1.313rem',
      lineHeight: 1.2,
      letterSpacing: '-0.06rem'
    },
    h4: {
      fontSize: '1.125rem',
      lineHeight: 1.4,
      fontWeight: 300
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 300
    },
    body2: {
      fontSize: '0.75rem'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
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
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: PrimaryDark,
          minWidth: '70px',
          minHeigth: '70px'
        },
        colorPrimary: {
          fill: PrimaryDark
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          borderRadius: '4px',
          fontSize: '16px',
          color: 'SecondaryDark',
          minWidth: 64
        },
        outlined: {
          color: SecondaryDark,
          padding: '10px 15px',
          minWidth: 64,
          borderColor: Primary,
          backgroundColor: SecondaryLight,
          '&:hover': {
            '@media (hover: none)': {
              backgroundColor: Primary
            }
          }
        },
        text: {
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      }
    }
  }
});

export default theme;
