import React, { useState } from 'react';
import { useShowsQuery } from 'hooks/useShowsQuery';
import { useNavigate } from 'react-router-dom';
import { animated, useSprings } from 'react-spring';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const StyledContainer = styled(Box)({
  marginTop: '90px',
  width: '100vw',
  minWidth: 288,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  position: 'absolute',
  zIndex: '-10',
  minHeight: '100vh',
  padding: '48px 0 12px'
});

const StyledGridBox = styled(Box)(({ theme }) => ({
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '12px',
  display: 'grid',
  padding: '16px',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  }
}));

const AnimatedItem = styled(animated(Box))({
  display: 'flex',
  cursor: 'pointer',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  height: 450
});

const TitleWrapper = styled(animated(Box))({
  color: '#e6e6e6',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  cursor: 'pointer',
  height: '100%',
  background: 'rgba(0,0,0,0.4)',
  fontSize: 24,
  fontWeight: 'bold'
});

const TextWrapper = styled(animated(Box))({
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  background: '#fff',
  fontSize: 16,
  overflow: 'hidden'
});

const AnimatedBox = styled(animated(Box))``;
AnimatedBox.defaultProps = {};

export default function CardsPage() {
  const [index, setIndex] = useState(null);
  const [isDelayed, setIsDelayed] = useState(true);
  const { data: shows } = useShowsQuery();
  const navigate = useNavigate();

  const springs = useSprings(
    shows?.length || 0,
    shows?.map((show, i) => ({
      delay: isDelayed ? 250 * i : 0,
      opacity: 1,
      transform: 'translateY(0px)',
      overlayOpacity: i === index ? 0 : 1,
      textOpacity: i === index ? 1 : 0,
      textHeight: i === index ? '100%' : '0%',
      from: {
        opacity: 0,
        transform: 'translateY(100px)',
        overlayOpacity: 1,
        textOpacity: 0,
        textHeight: '0%'
      }
    }))
  );
  const handleRouting = (url) => {
    navigate(`/shows/${url}`);
  };

  return (
    <StyledContainer>
      <Box sx={{ padding: '0 16px' }}>
        <Typography variant="h2" textAlign="center" paragraph color="#fff">
          Find Information About All of Your Favorite Shows in One Place
        </Typography>
        <Typography textAlign="center" variant="h4" paragraph color="#fff">
          Click on she show to learn more
        </Typography>
      </Box>
      <StyledGridBox>
        {springs
          .slice(0, 45)
          .map(({ opacity, transform, overlayOpacity, textOpacity, textHeight }, i) => (
            <AnimatedItem
              onClick={() => {
                setIndex(i);
                setIsDelayed(false);
              }}
              key={i}>
              <AnimatedItem
                style={{
                  opacity,
                  transform,
                  background: `url(${shows[i].image.medium}) center center/cover no-repeat`
                }}>
                <TitleWrapper style={{ opacity: overlayOpacity }}>{shows[i].name}</TitleWrapper>
              </AnimatedItem>
              <TextWrapper style={{ height: textHeight }}>
                <AnimatedBox style={{ opacity: textOpacity, paddingTop: '48px' }}>
                  <Typography paragraph variant="h2">
                    {shows[i].name}
                  </Typography>
                  <Typography paragraph variant="h4">
                    {shows[i].genres.join(', ')}
                  </Typography>
                  <Button
                    onClick={() => handleRouting(shows[i].id)}
                    variant="contained"
                    width="100%"
                    sx={{ margin: '32px' }}>
                    Click here to info
                  </Button>
                </AnimatedBox>
              </TextWrapper>
            </AnimatedItem>
          ))}
      </StyledGridBox>
    </StyledContainer>
  );
}
