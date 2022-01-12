import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const StyledSlideBox = styled(Box)({
  minWidth: '100vw',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  paddingTop: '90px'
});
export const StyledWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.9))',
  minHeight: 'calc(100vh - 90px)',
  display: 'grid',
  justifyItems: 'center',
  gridTemplateRows: '5% 30% 60%',
  alignItems: 'end',
  [theme.breakpoints.down('md')]: {
    gridTemplateRows: '1% 40% 55%'
  }
}));

export const StyledSliderText = styled(Box)(({ theme }) => ({
  width: '60vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'justify',
  [theme.breakpoints.down('sm')]: {
    width: '90vw'
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '32px',
  [theme.breakpoints.down('md')]: {
    marginTop: '0'
  }
}));

export const StyledBoxImg = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  width: '40%',
  height: '400px',
  [theme.breakpoints.down('md')]: {
    width: '90%'
  }
}));
