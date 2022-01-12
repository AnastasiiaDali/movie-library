import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from 'react-reveal/Fade';
import mostPopularThisWeek from '../../../images/mostPopularThisWeek.webp';
import {
  StyledSlideBox,
  StyledWrapper,
  StyledSliderText,
  StyledButton,
  StyledBoxImg
} from 'pages/HomePage/Introduction/styles.js';

const SlideThree = () => {
  return (
    <StyledSlideBox>
      <StyledWrapper>
        <Box />
        <StyledSliderText>
          <Fade top>
            <Typography variant="h1" paragraph align="center" color="#fff">
              Time to Watch Best Shows
            </Typography>
            <Typography color="#fff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum mollis
              erat in porta. Nunc mi mi, sagittis eu vulputate in, dapibus et leo. Nunc vitae tempus
              nunc. Nulla eget dui imperdiet, tempus lectus in, hendrerit nibh. Phasellus malesuada
              ullamcorper sapien. Quisque gravida nec lacus id tincidunt. Nam sed magna est.
            </Typography>
            <StyledButton component={Link} to={'/shows'}>
              Discover more ...
            </StyledButton>
          </Fade>
        </StyledSliderText>
        <StyledBoxImg
          sx={{ background: `url(${mostPopularThisWeek}) center center/cover no-repeat` }}
        />
      </StyledWrapper>
    </StyledSlideBox>
  );
};

export default SlideThree;
