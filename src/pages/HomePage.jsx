import React from 'react';
import Hero from 'components/Hero';
import Introduction from 'components/Introduction';
// import Container from '@mui/material/Container';
// import { styled } from '@mui/system';

// const StyledContainer = styled(Container)({
//   margin: '0px',
//   padding: '0px'
// });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
    </>
  );
}
