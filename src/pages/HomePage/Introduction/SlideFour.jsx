import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import avengers from '../../../images/avengers.webp';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledSlideBox } from 'pages/HomePage/Introduction/styles.js';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum mollis erat in porta. Nunc mi mi, sagittis eu vulputate in, dapibus et leo. Mauris malesuadaeu lorem in venenatis. Ut commodo, turpis vel cursus faucibus, quam magna pulvinar arcu, nec maximus dolor nisi congue diam. Maecenas eget nisl dictum, ultrices libero mattis, accumsan justo. Pellentesque dictum sollicitudin consequat. In gravida egestas velit at volutpat. Cras molestie placerat sapien, at vulputate risus tempor at. Fusce erat velit, dictum ac eleifend vitae, viverra non mauris. Aliquam id nunc a lectus dictum egestas ut sed elit. Proin dapibus tellus eu tempus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. In congue leo ipsum, vitae volutpat lorem viverra a. Mauris finibus finibus dapibus. Sed eleifend velit lorem, ac convallis ante tristique vitae.';

const StyledWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.9))',
  minHeight: 'calc(100vh - 90px)',
  display: 'grid',
  justifyItems: 'center',
  gridTemplateColumns: '40% 50%',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    gridTemplateRows: ' 40% 55%',
    gridTemplateColumns: '1fr'
  }
}));

const StyledSliderText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'justify',
  [theme.breakpoints.down('lg')]: {
    gridGap: '16px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '8px 24px',
    textAlign: 'justify'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px'
  }
}));

const StyledImgBox = styled(Box)(({ theme }) => ({
  background: `url(${avengers})  center/contain no-repeat`,
  width: '100%',
  height: '500px',
  [theme.breakpoints.down('md')]: {
    height: '300px'
  }
}));

const SlideFour = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <StyledSlideBox>
      <StyledWrapper>
        <StyledImgBox />
        <StyledSliderText>
          <Fade top>
            <Typography variant="h1" paragraph color="#fff">
              Most Popular This week
            </Typography>
            <Typography color="#fff">{`${
              matches ? text : text.substring(0, 400) + '...'
            }`}</Typography>
            <Button
              sx={{ marginTop: '32px' }}
              size="large"
              variant="text"
              component={Link}
              to={'/shows'}>
              Discover more ...
            </Button>
          </Fade>
        </StyledSliderText>
      </StyledWrapper>
    </StyledSlideBox>
  );
};

export default SlideFour;