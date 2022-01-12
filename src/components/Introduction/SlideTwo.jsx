import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade';
import bestMovies from '../../images/bestMovies.webp';
import { styled } from '@mui/system';

const StyledSlideBox = styled(Box)({
  minWidth: '100vw',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  paddingTop: '90px'
});
const StyledWrapper = styled(Box)(({ theme }) => ({
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

const StyledSliderText = styled(Box)(({ theme }) => ({
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

const StyledBoxImg = styled(Box)(({ theme }) => ({
  background: `url(${bestMovies}) center center/cover no-repeat`,
  overflow: 'hidden',
  width: '40%',
  height: '400px',
  [theme.breakpoints.down('md')]: {
    width: '90%'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '32px',
  [theme.breakpoints.down('md')]: {
    marginTop: '0'
  }
}));

const SlideTwo = () => {
  return (
    <StyledSlideBox>
      <StyledWrapper>
        <Box />
        <Fade top>
          <StyledSliderText>
            <Typography variant="h1" paragraph color="#fff">
              Why you are here...
            </Typography>
            <Typography color="#fff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum mollis
              erat in porta. Nunc mi mi, sagittis eu vulputate in, dapibus et leo. Nunc vitae tempus
              nunc. Nulla eget dui imperdiet, tempus lectus in, hendrerit nibh. Phasellus malesuada
              ullamcorper sapien. Quisque gravida nec lacus id tincidunt. Nam sed magna est.
            </Typography>
            <StyledButton size="large" variant="text" component={Link} to={'/shows'}>
              Discover more ...
            </StyledButton>
          </StyledSliderText>
        </Fade>
        <StyledBoxImg />
      </StyledWrapper>
    </StyledSlideBox>
  );
};

export default SlideTwo;
