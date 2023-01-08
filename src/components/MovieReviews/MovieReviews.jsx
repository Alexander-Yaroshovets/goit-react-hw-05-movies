import { useLocation, useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { getMovieReviews } from '../../services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleEffect = async () => {
      try {
        const credits = await getMovieReviews(movieId);
        const creditsArrey = credits.results;
        setReviews([...creditsArrey]);
      } catch (error) {
        console.log(error);
      }
    };

    handleEffect();
  }, [movieId]);

  if (reviews.length === 0) {
    return <h3>there is no reviews for this movie</h3>;
  } else {
    return (
      <div>
        {reviews.map(review => {
          const { id, author, content } = review;
          return (
            <div key={id} state={{ from: location }}>
              <h3>{author}</h3>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default MovieReviews;
