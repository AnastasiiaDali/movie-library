import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade';
import avengers from '../../images/avengers.webp';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum mollis erat in porta. Nunc mi mi, sagittis eu vulputate in, dapibus et leo. Mauris malesuadaeu lorem in venenatis. Ut commodo, turpis vel cursus faucibus, quam magna pulvinar arcu, nec maximus dolor nisi congue diam. Maecenas eget nisl dictum, ultrices libero mattis, accumsan justo. Pellentesque dictum sollicitudin consequat. In gravida egestas velit at volutpat. Cras molestie placerat sapien, at vulputate risus tempor at. Fusce erat velit, dictum ac eleifend vitae, viverra non mauris. Aliquam id nunc a lectus dictum egestas ut sed elit. Proin dapibus tellus eu tempus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. In congue leo ipsum, vitae volutpat lorem viverra a. Mauris finibus finibus dapibus. Sed eleifend velit lorem, ac convallis ante tristique vitae.';

const StyledSlideBox = styled(Box)({
  minWidth: '100vw',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
  paddingTop: '90px'
});
const StyledWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(rgba(242, 242, 242, 0.7), rgba(242, 242, 242, 0.9))',
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

const StyledSliderText = styled(Typography)(({ theme }) => ({
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
            <Typography variant="h1" paragraph>
              Most Popular This week
            </Typography>
            <Typography>{`${matches ? text : text.substring(0, 400) + '...'}`}</Typography>
            <Button marginTop="32px" size="large" variant="text">
              Discover more ...
            </Button>
          </Fade>
        </StyledSliderText>
      </StyledWrapper>
    </StyledSlideBox>
  );
};

export default SlideFour;
