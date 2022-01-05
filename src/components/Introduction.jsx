import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import theme from 'theme';

const StyledBox = styled(Box)({
  width: '100%',
  height: '700px',
  position: 'relative',
  marginTop: '100vh',
  backgroundColor: '#fff'
});

const StyledTypography = styled(Typography)({
  position: 'absolute',
  width: '70%',
  height: 'auto',
  top: '250px',
  left: '15%',
  color: '#fff',
  fontSize: theme.typography.h1.fontSize,
  fontWeight: 'bold',
  textAlign: 'center'
});

export default function Introduction() {
  return (
    <>
      <StyledTypography>
        Dont know what to watch today? <br />
        <br />
        Browse The Best Collection of Tv shows in the world
      </StyledTypography>
      <StyledBox>
        <Typography>MovieBook</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum mollis erat in
          porta. Nunc mi mi, sagittis eu vulputate in, dapibus et leo. Nunc vitae tempus nunc. Nulla
          eget dui imperdiet, tempus lectus in, hendrerit nibh. Phasellus malesuada ullamcorper
          sapien. Quisque gravida nec lacus id tincidunt. Nam sed magna est.
        </Typography>
      </StyledBox>
    </>
  );
}
