import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSpring, animated } from 'react-spring';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const AnimatedBox = styled(animated(Box))({
  position: 'absolute',
  width: '210px',
  height: '295px',
  cursor: 'pointer',
  willChange: 'transform, opacity',
  backgroundSize: 'cover',
  color: 'white'
});

export default function Card({ show }) {
  const [flipped, set] = useState(false);
  const handleRouting = (url) => {
    navigate(`/shows/${url}`);
  };
  const navigate = useNavigate();

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <ClickAwayListener onClickAway={() => set(false)}>
      <Box
        width={210}
        borderRadius="8px"
        overflow="hidden"
        position="relative"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        height={295}
        onClick={() => set((state) => !state)}>
        <AnimatedBox
          style={{
            opacity: opacity.interpolate((o) => 1 - o),
            transform,
            background: `url(${show.image.medium}) center center/cover no-repeat`
          }}>
          <Button
            fullWidth
            variant="contained"
            style={{
              position: 'absolute',
              bottom: '0'
            }}>
            Twist Me
          </Button>
        </AnimatedBox>
        <AnimatedBox
          bgcolor="black"
          p={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`)
          }}>
          <Typography paragraph variant="h5">
            {show.name}
          </Typography>
          <Typography paragraph variant="h6">
            {show.genres.join(', ')}
          </Typography>
          <Typography paragraph color="error" variant="h6">
            {show.premiered}
          </Typography>
          <Button
            style={{ position: 'absolute', bottom: 0 }}
            variant="contained"
            fullWidth
            onClick={() => handleRouting(show.id)}>
            Click to See more
          </Button>
        </AnimatedBox>
      </Box>
    </ClickAwayListener>
  );
}
