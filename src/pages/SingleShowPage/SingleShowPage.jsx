import React from 'react';
import { useShowsSingleQuery } from 'hooks/useShowsSingleQuery';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledContainer, GridBox, DescBox, StyledBoxImg } from 'pages/SingleShowPage/styles.js';

export default function SingleShowPage() {
  let { pathname } = useLocation();
  const { data: show } = useShowsSingleQuery(pathname);

  return (
    <>
      <StyledContainer disableGutters>
        <GridBox>
          <StyledBoxImg
            sx={{ background: `url(${show?.image.original}) center/cover no-repeat` }}
          />
          <DescBox>
            <Fade top>
              <Typography variant="h3" sx={{ marginBottom: '40px' }}>
                {show?.name}
              </Typography>
              <Typography variant="h6" paragraph>
                {`Lunguage: ${show?.language}`}
              </Typography>
              <Typography variant="h6" paragraph>
                {`Genres: ${show?.genres.join(', ')}`}
              </Typography>
              <Typography variant="h6" paragraph>
                {`Premiered: ${show?.premiered}`}
              </Typography>
              <Typography variant="h6" paragraph>
                {`Average Rating: ${show?.rating.average}`}
              </Typography>
              <Box sx={{ fontSize: '18px', textAlign: 'justify' }}>
                {show?.summary.slice(3).replace('</p>', '').replace('</b>', '').replace('<b>', '')}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: '-webkit-fill-available',
                  gridGap: '48px'
                }}>
                <Button sx={{ marginTop: '32px' }} variant="text" component={Link} to={'/shows'}>
                  ...Back
                </Button>
                <Button sx={{ marginTop: '32px' }} variant="contained">
                  Watch Now
                </Button>
              </Box>
            </Fade>
          </DescBox>
        </GridBox>
      </StyledContainer>
    </>
  );
}
