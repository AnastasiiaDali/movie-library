import { createTheme } from '@mui/material/styles';

export const Primary = '#E50914';
export const PrimaryDark = '#831010';
export const Secondary = '#e50914';
export const SecondaryDark = '#000000';

const breakPoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});

const theme = createTheme({
  palette: {
    primary: {
      main: Primary,
      dark: PrimaryDark
    },
    secondary: {
      main: Secondary,
      dark: SecondaryDark
    }
  },
  typography: {
    fontFamily: ['"Tinos"', '"Times New Roman"', '"Times"', 'serif'].join(','),
    color: PrimaryDark,
    h4: {
      fontSize: '1.8rem',
      lineHeight: 1.4,
      fontWeight: 300,
      [breakPoints.breakpoints.down('sm')]: {
        fontSize: '1.2rem'
      }
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
          fill: Primary,
          fontSize: '40px'
        },
        colorPrimary: {
          fill: Primary
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
          backgroundColor: Secondary,
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
