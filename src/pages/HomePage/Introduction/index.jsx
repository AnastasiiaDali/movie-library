import React from 'react';
import SlideOne from 'pages/HomePage/Introduction/SlideOne';
import SlideTwo from 'pages/HomePage/Introduction/SlideTwo';
import SlideThree from 'pages/HomePage/Introduction/SlideThree';
import SlideFour from 'pages/HomePage/Introduction/SlideFour';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledContainerBox = styled(Box)({
  scrollSnapType: 'y mandatory',
  overflowY: 'scroll',
  height: '100vh'
});

const Introduction = () => {
  return (
    <StyledContainerBox>
      <SlideOne />
      <SlideTwo />
      <SlideThree />
      <SlideFour />
    </StyledContainerBox>
  );
};

export default Introduction;
