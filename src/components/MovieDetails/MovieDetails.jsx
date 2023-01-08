import { Outlet, useParams, useLocation } from 'react-router-dom';

import {
  MovieDetailsContainer,
  MovieInfoContainer,
  ImageWrapper,
  MainInfoContainer,
  MainInfoText,
  InfoSpan,
  GenreInfo,
  BackLink,
  NextInfoLink,
  GenreSpan,
} from './MovieDetails.styled';

import { useState, useEffect, Suspense } from 'react';

import { getMovieDetails } from '../../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [details, setDetails] = useState('');

  const location = useLocation();

  const BackLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const handleEffect = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setDetails(details);
      } catch (error) {
        console.log(error);
      }
    };
    handleEffect();
  }, [movieId]);
  const { title, overview, vote_average, poster_path } = details;
  return (
    <MovieDetailsContainer>
      <BackLink to={BackLinkHref}>Go back</BackLink>
      <MovieInfoContainer>
        <ImageWrapper>
          {details && (
            <img
              src={` https://image.tmdb.org/t/p/w200${poster_path}`}
              alt="poster"
            ></img>
          )}
        </ImageWrapper>
        <MainInfoContainer>
          <h2>{title}</h2>
          <MainInfoText>
            Overview: <InfoSpan>{overview}</InfoSpan>
          </MainInfoText>
          <MainInfoText>
            vote_average: <InfoSpan>{vote_average}</InfoSpan>
          </MainInfoText>
          <GenreInfo>
            Genres:
            {details &&
              details.genres.map(genre => {
                const { id, name } = genre;
                return (
                  <GenreSpan key={id}>
                    <InfoSpan>{name}</InfoSpan>
                  </GenreSpan>
                );
              })}
          </GenreInfo>
        </MainInfoContainer>
      </MovieInfoContainer>
      <div>
        <h3>Additional Information</h3>
        <NextInfoLink
          to={`rewievs`}
          state={{ from: location.state?.from ?? '/movies' }}
        >
          Rewievs
        </NextInfoLink>
        <NextInfoLink to={`credits`} state={{ from: location.state.from }}>
          Cast
        </NextInfoLink>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MovieDetailsContainer>
  );
};
export default MovieDetails;
