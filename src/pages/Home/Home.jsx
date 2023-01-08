import { getTrendingMovies } from '../../services/api';

import { useState, useEffect } from 'react';

import { HomeBox, HomeTitle, MovieItem, MovieList } from './Home.styled';

import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const getMovy = await getTrendingMovies();
      const allMovie = getMovy.results;
      setTrending([...allMovie]);
    };
    getMovies();
  }, []);

  return (
    <HomeBox>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList>
        {trending.length > 0 &&
          trending.map(trendItem => {
            const { id, title } = trendItem;
            return (
              <MovieItem
                to={`movies/${id}`}
                key={id}
                state={{ from: location }}
              >
                {title}
              </MovieItem>
            );
          })}
      </MovieList>
    </HomeBox>
  );
};

export default Home;
