import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { SecondaryLight, Primary } from 'theme.js';

const StyledToolbar = styled(Toolbar)({
  backgroundColor: SecondaryLight,
  diplay: 'flex',
  justifyContent: 'flex-end',
  padding: '24px'
});

const Logo = styled(Typography)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: Primary
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
    <>
      <HideOnScroll>
        <AppBar>
          <StyledToolbar style={{ minHeight: '90px' }}>
            <Logo variant="h1">MovieBook</Logo>
            <MenuIcon color="primary" />
          </StyledToolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
