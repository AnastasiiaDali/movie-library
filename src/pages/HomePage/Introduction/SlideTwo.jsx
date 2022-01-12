import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from 'react-reveal/Fade';
import bestMovies from '../../../images/bestMovies.webp';
import {
  StyledSlideBox,
  StyledWrapper,
  StyledSliderText,
  StyledButton,
  StyledBoxImg
} from 'pages/HomePage/Introduction/styles.js';

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
        <StyledBoxImg sx={{ background: `url(${bestMovies}) center center/cover no-repeat` }} />
      </StyledWrapper>
    </StyledSlideBox>
  );
};

export default SlideTwo;
