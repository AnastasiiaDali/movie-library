import React from 'react';
import { useShowsSingleQuery } from 'hooks/useShowsSingleQuery';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledContainer = styled(Box)(({ theme }) => ({
  marginTop: '90px',
  background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 1))',
  minWidth: '100vw',
  minHeight: 'calc(100vh - 90px)',
  [theme.breakpoints.up('md')]: {
    background: 'linear-gradient(to right, rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 1))'
  }
}));

const GridBox = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}));

const DescBox = styled(Box)(({ theme }) => ({
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 12px',
  [theme.breakpoints.up('sm')]: {
    padding: '24px 16px'
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100vw - ((100vh - 90px) / 1.4))',
    maxWidth: '500px'
  }
}));

const StyledBoxImg = styled(Box)(({ theme }) => ({
  width: '95vw',
  minHeight: 'calc(95vw * 1.4)',
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    width: '70vw',
    minHeight: 'calc(70vw * 1.4)'
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc((100vh - 90px) / 1.4)',
    minHeight: 'calc(100vh - 90px)',
    margin: '0'
  }
}));

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
              <Typography variant="h1" sx={{ marginBottom: '40px' }}>
                {show?.name}
              </Typography>
              <Typography variant="h3" paragraph>
                Language: {show?.language}
              </Typography>
              <Typography variant="h3" paragraph>
                Genres: {show?.genres.join(', ')}
              </Typography>
              <Typography variant="h3" paragraph>
                Premiered: {show?.premiered}
              </Typography>
              <Typography variant="h3" paragraph>
                Average Rating: {show?.rating.average}
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
