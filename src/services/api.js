import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '33aaf0a1a3ea9c4cad256b11c71fe8c9';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const response = await axios.get('3/trending/movie/day');
  return response.data;
};

export const getMoviesBySearch = async query => {
  const response = await axios.get(`3/search/movie?query=${query}`);
  return response.data;
};
export const getMovieDetails = async movieId => {
  const response = await axios.get(`3/movie/${movieId}?`);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`3/movie/${movieId}/credits?`);
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`3/movie/${movieId}/reviews?`);
  return response.data;
};
