import React from 'react';
import Spring from './Spring';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { StyledContainer, StyledGridBox } from 'pages/CardsPage/styles.js';

export default function CardsPage() {
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
        <Spring />
      </StyledGridBox>
    </StyledContainer>
  );
}
