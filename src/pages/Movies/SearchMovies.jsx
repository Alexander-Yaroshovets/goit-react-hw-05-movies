import { useState, useEffect } from 'react';

import { getMoviesBySearch } from '../../services/api';

import {
  StyledHeader,
  StyledSearchForm,
  StyledSerchButton,
  StyledSearchLabel,
  StyledSearchInput,
  StyledFilmsList,
  StyledFilmItem,
} from './SearchMovies.styled';

import { HiSearch } from 'react-icons/hi';

import { useLocation, useSearchParams } from 'react-router-dom';

const SearchMovies = () => {
  const [items, setItems] = useState([]);

  const [searchParams, setSearchparams] = useSearchParams();

  const newQuery = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    const handleEffect = async () => {
      try {
        if (!newQuery) {
          return;
        }

        const getAllMovie = await getMoviesBySearch(newQuery);

        const movieArray = getAllMovie.results;

        setItems([...movieArray]);

        if (movieArray.length === 0) {
          alert('Wrong query');
          setSearchparams({});
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleEffect();
  }, [newQuery, setSearchparams]);

  const handleSubmit = async event => {
    const { value } = event.target.elements.query;
    event.preventDefault();
    if (value === '') {
      alert('type something');
      setSearchparams({});
      setItems([]);
      return;
    }

    setSearchparams(value !== '' ? { query: value } : {});
    event.target.reset();
  };

  return (
    <main>
      <StyledHeader>
        <StyledSearchForm onSubmit={handleSubmit}>
          <StyledSerchButton type="submit">
            <StyledSearchLabel>
              <HiSearch fill="blue" size="24" />
            </StyledSearchLabel>
          </StyledSerchButton>
          <StyledSearchInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </StyledSearchForm>
      </StyledHeader>

      <StyledFilmsList>
        {items.map(item => {
          const { id, title } = item;
          return (
            <StyledFilmItem to={`${id}`} key={id} state={{ from: location }}>
              {title}
            </StyledFilmItem>
          );
        })}
      </StyledFilmsList>
    </main>
  );
};

export default SearchMovies;
