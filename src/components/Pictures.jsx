import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useShowsQuery } from 'hooks/useShowsQuery';

export default function Pictures() {
  const { data: shows, isLoading } = useShowsQuery();
  console.log(shows);

  return (
    <>
      {isLoading ? (
        <Box>
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <ul>
          {shows.slice(0, 5).map((show) => (
            <li key={show.id}>
              <img src={show.image.medium} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
