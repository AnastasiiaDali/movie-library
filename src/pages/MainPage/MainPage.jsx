import React, { useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { dataMainPage } from '../../dataMainPage';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HeroImgBlack from 'images/HeroImgBlack.webp';
import { styled } from '@mui/system';

export const AnimatedBox = styled(animated(Box))(({ theme }) => ({
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  cursor: 'grab',
  willChange: 'transform',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('xl')]: {
    left: '15vw',
    maxWidth: '1100px'
  }
}));

export const StyledContainer = styled(Box)({
  position: 'fixed',
  overflow: 'hidden',
  width: '100%',
  height: '100%'
});

export const AnimatedInnerBox = styled(animated(Box))({
  backgroundColor: 'white',
  backgroundSize: 'auto 85%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  width: '100vw',
  height: '100vh',
  willChange: 'transform',
  borderRadius: '10px'
});

const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -5 + Math.random() * 20, delay: i * 100 });
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(5000px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function MainPage() {
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(dataMainPage.length, (i) => ({ ...to(i), from: from(i) }));

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      set((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });
      if (!down && gone.size === dataMainPage.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );

  return (
    <StyledContainer
      style={{
        background: `url(${HeroImgBlack}) center center/cover no-repeat`
      }}>
      {props.map(({ x, y, rot, scale }, i) => (
        <AnimatedBox
          key={i}
          style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
          <AnimatedInnerBox
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              overflow: 'hidden'
            }}>
            <Box height="100vh" display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
              <Box
                height={{ xs: '50vh', md: '100vh' }}
                width={{ xs: '100%', md: '60%' }}
                mb="auto"
                sx={{
                  background: `url(${dataMainPage[i].image}) center center/cover no-repeat`
                }}
              />
              <Box
                height={{ xs: '50vh', md: '100vh' }}
                width={{ xs: '100%', md: '40%' }}
                color="white"
                display="flex"
                px={3}
                textAlign="center"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bgcolor="black">
                <Typography variant="h3" paragraph>
                  {dataMainPage[i].title}
                </Typography>
                <Typography variant="h4" paragraph>
                  {dataMainPage[i].text}
                </Typography>
                <Button
                  sx={{ fontSize: '20px', marginTop: '16px', padding: '10px 25px' }}
                  variant="contained"
                  component={Link}
                  to={'/shows'}>
                  Discover more ...
                </Button>
              </Box>
            </Box>
          </AnimatedInnerBox>
        </AnimatedBox>
      ))}
    </StyledContainer>
  );
}
