import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFimsByQuery } from '../API/fetchFilm';
import { FormMovies } from 'components/FormMovies/FormMovies';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { toast } from 'react-toastify';
const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  useEffect(() => {
    if (!queryParam) return;

    const fetchFilms = async () => {
      try {
        const { data } = await fetchFimsByQuery(queryParam);
        setFilms(data.results);
        !data.results.length && toast.warning('Not found ');
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilms();
  }, [queryParam]);

  const updateQueryString = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: inputValue.trim() });
  };
  return (
    <>
      <FormMovies
        updateQueryString={updateQueryString}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      {films.length !== 0 && <FilmsList films={films} />}
    </>
  );
};
export default Movies;
