import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const StyledContainer = styled(Box)(({ theme }) => ({
  paddingTop: '50px',
  background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 1))',
  minWidth: '100vw',
  minHeight: '100vh',
  [theme.breakpoints.up('md')]: {
    background: 'linear-gradient(to right, rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 1))'
  }
}));

export const GridBox = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}));

export const DescBox = styled(Box)(({ theme }) => ({
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 12px',
  [theme.breakpoints.up('sm')]: {
    padding: '24px 16px'
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100vw - ((100vh - 90px) / 1.4))',
    maxWidth: '500px'
  }
}));

export const StyledBoxImg = styled(Box)(({ theme }) => ({
  width: '95vw',
  minHeight: 'calc(95vw * 1.4)',
  margin: '0 auto',
  boxShadow: 'rgba(255, 255, 255, 0.15) 0px 15px 25px, rgba(255, 255, 255, 0.05) 0px 15px 10px',
  borderRadius: '8px',
  [theme.breakpoints.up('sm')]: {
    width: '70vw',
    minHeight: 'calc(70vw * 1.4)'
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc((100vh - 90px) / 1.4)',
    minHeight: 'calc(100vh - 90px)',
    margin: '0'
  }
}));
