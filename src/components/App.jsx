import { Route, Routes, Navigate } from 'react-router-dom';

import { Header, Link } from './App.styled';

import { lazy } from 'react';

import Home from '../pages/Home/Home';

import SearchMovies from 'pages/Movies/SearchMovies';

const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);

const MovieCredits = lazy(() =>
  import('../components/MovieCredits/MovieCredits')
);

const MovieReviews = lazy(() =>
  import('../components/MovieReviews/MovieReviews')
);

const App = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="rewievs" element={<MovieReviews />} />
          <Route path="credits" element={<MovieCredits />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
