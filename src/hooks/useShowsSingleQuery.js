import { useQuery } from 'react-query';

const fetchSingleShows = (pathname) => fetch(`https://api.tvmaze.com${pathname}`);

export const useShowsSingleQuery = (pathname) =>
  useQuery(['show', pathname], () =>
    fetchSingleShows(pathname).then((response) => response.json())
  );
