import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from 'react-reveal/Fade';

import { styled } from '@mui/system';
import theme from 'theme';

const StyledSlideBox = styled(Box)({
  minWidth: '100vw',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  paddingTop: '90px'
});

const StyledHeroTypography = styled(Typography)({
  width: '100%',
  padding: ' 0 16px',
  minHeight: '100vh',
  marginTop: 'calc(100vh/2 - 150px)',
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: theme.typography.h1.fontSize
});

const SlideOne = () => {
  return (
    <StyledSlideBox>
      <Fade top>
        <StyledHeroTypography>
          Dont know what to watch today? <br />
          <br />
          Browse The Best Collection of Tv shows in the world
        </StyledHeroTypography>
      </Fade>
    </StyledSlideBox>
  );
};

export default SlideOne;
