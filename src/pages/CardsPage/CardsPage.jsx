import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useShowsQuery } from 'hooks/useShowsQuery';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Card from './Card';
import HeroImgBlack from 'images/HeroImgBlack.webp';

export const StyledContainer = styled(Box)({
  marginTop: '90px',
  width: '100vw',
  minWidth: 288,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  position: 'absolute',
  zIndex: '-10',
  minHeight: '100vh',
  padding: '48px 0 12px'
});

export const StyledGridBox = styled(Box)({
  gridTemplateColumns: 'repeat( auto-fit, minmax(210px, 1fr) );',
  gridGap: '12px',
  display: 'grid',
  padding: '16px',
  justifyItems: 'center'
});

export default function CardsPage() {
  const { data: shows } = useShowsQuery();

  return (
    <Box minHeight="100vh">
      <Box
        position="fixed"
        top={0}
        height="100vh"
        width="100vw"
        style={{
          background: `url(${HeroImgBlack}) center center/cover no-repeat`,
          opacity: '0.3'
        }}></Box>
      <Button
        sx={{ position: 'fixed', top: '16px', left: '16px', zIndex: 10 }}
        variant="contained"
        component={Link}
        to={'/'}>
        Home
      </Button>
      <Box sx={{ padding: '80px 16px 0' }} pt={{ xs: '80px', md: '40px' }}>
        <Typography sx={{ fontSize: '1.8rem', fontWeight: 800 }} textAlign="center" paragraph>
          Find Information About All of Your Favorite Shows in One Place
        </Typography>
        <Typography textAlign="center" sx={{ fontWeight: 800 }} variant="h6" paragraph>
          Click on she show to learn more
        </Typography>
      </Box>
      <StyledGridBox>
        {shows?.map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </StyledGridBox>
    </Box>
  );
}
