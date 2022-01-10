import React from 'react';
import SlideOne from 'components/Introduction/SlideOne';
import SlideTwo from 'components/Introduction/SlideTwo';
import SlideThree from 'components/Introduction/SlideThree';
import SlideFour from 'components/Introduction/SlideFour';
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
