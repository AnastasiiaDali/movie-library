import { styled } from '@mui/system';
import { animated } from 'react-spring';
import Box from '@mui/material/Box';

export const StyledContainer = styled(Box)({
  marginTop: '90px',
  width: '100vw',
  minWidth: 288,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  position: 'absolute',
  zIndex: '-10',
  minHeight: '100vh',
  padding: '48px 0 12px'
});

export const StyledGridBox = styled(Box)(({ theme }) => ({
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '12px',
  display: 'grid',
  padding: '16px',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  }
}));

export const AnimatedItem = styled(animated(Box))({
  display: 'flex',
  cursor: 'pointer',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  height: 450
});

export const TitleWrapper = styled(animated(Box))({
  color: '#e6e6e6',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  cursor: 'pointer',
  height: '100%',
  background: 'rgba(0,0,0,0.4)',
  fontSize: 24,
  fontWeight: 'bold'
});

export const TextWrapper = styled(animated(Box))({
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  background: '#C0C0C0',
  fontSize: 16,
  overflow: 'hidden'
});

export const AnimatedBox = styled(animated(Box))``;
AnimatedBox.defaultProps = {};
