import React from 'react';
import Box from '@mui/material/Box';
import HeroImg from '../../images/HeroImg.webp';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  background: `url(${HeroImg}) center center/cover no-repeat`,
  filter: 'brightness(40%)',
  minWidth: '100%',
  minHeight: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '-100'
});

export default function Hero() {
  return (
    <>
      <StyledBox />
    </>
  );
}
