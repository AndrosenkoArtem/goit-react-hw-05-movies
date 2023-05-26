import axios from 'axios';
export const fetchFilmsTrending = async () => {
  return await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=14b7b0dab2e9101796b24880530a0048'
  );
};
export const fetchFilmsById = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=14b7b0dab2e9101796b24880530a0048`
  );
};
export const fetchCreditsForFilm = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=14b7b0dab2e9101796b24880530a0048`
  );
};
export const fetchReviewsForFilm = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=14b7b0dab2e9101796b24880530a0048`
  );
};
export const fetchFimsByQuery = async query => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=14b7b0dab2e9101796b24880530a0048`
  );
};
