import { useLocation, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { getMovieCredits } from '../../services/api';

import { CreditsContainer } from './MovieCredits.styled';

const MovieCredits = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState('');
  const location = useLocation();
  useEffect(() => {
    const handleEffect = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        const creditsArrey = credits.cast;
        setCredits([...creditsArrey]);
      } catch (error) {
        console.log(error);
      }
    };

    handleEffect();
  }, [movieId]);
  if (credits.length === 0) {
    return <h3>there is no credits for this movie</h3>;
  }

  return (
    <CreditsContainer>
      {credits &&
        credits.map(credit => {
          const { id, name, profile_path } = credit;
          return (
            <div key={id} state={{ from: location }}>
              <h3>{name}</h3>
              {profile_path && (
                <img
                  src={` https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt="poster"
                ></img>
              )}
            </div>
          );
        })}
    </CreditsContainer>
  );
};

export default MovieCredits;
