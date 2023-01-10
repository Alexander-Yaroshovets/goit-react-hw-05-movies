import { Route, Routes, Navigate } from 'react-router-dom';

import { lazy } from 'react';
import NavBar from './Navigation/Navigatioon';
import Home from '../pages/Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import SearchMovies from 'pages/Movies/SearchMovies';

const MovieCredits = lazy(() =>
  import('../components/MovieCredits/MovieCredits')
);

const MovieReviews = lazy(() =>
  import('../components/MovieReviews/MovieReviews')
);

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="rewievs" element={<MovieReviews />} />
          <Route path="credits" element={<MovieCredits />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
