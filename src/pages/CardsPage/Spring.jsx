import React, { useState } from 'react';
import { useShowsQuery } from 'hooks/useShowsQuery';
import { useNavigate } from 'react-router-dom';
import { useSprings } from 'react-spring';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AnimatedItem, TitleWrapper, TextWrapper, AnimatedBox } from 'pages/CardsPage/styles.js';

export default function Spring() {
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

  return springs
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
    ));
}
