import { useQuery } from 'react-query';

const fetchShows = () => fetch('https://api.tvmaze.com/shows');

export const useShowsQuery = () =>
  useQuery('shows', () =>
    fetchShows()
      .then((response) => response.json())
      .then((res) => res.slice(0, 30))
  );
