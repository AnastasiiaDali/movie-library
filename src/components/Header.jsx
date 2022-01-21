import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { Primary, SecondaryDark } from 'theme';

const StyledToolbar = styled(Toolbar)({
  backgroundColor: SecondaryDark,
  diplay: 'flex',
  justifyContent: 'flex-end',
  padding: '24px',
  minWidth: '400px',
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto'
});

const Logo = styled(Typography)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: Primary,
  fontWeight: 'bold'
});

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: SecondaryDark }}>
        <StyledToolbar style={{ minHeight: '90px' }}>
          <Logo variant="h1" component={Link} to={'/'}>
            FilmLab
          </Logo>
          <MenuIcon color="primary" />
        </StyledToolbar>
      </AppBar>
    </HideOnScroll>
  );
}
