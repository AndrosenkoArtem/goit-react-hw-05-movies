import { fetchFilmsTrending } from '../API/fetchFilm';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getTrendingFilms = async () => {
      try {
        setError(null);
        const response = await fetchFilmsTrending();
        setFilms(response.data.results);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    getTrendingFilms();
  }, []);
  return (
    <>
      {error && toast.warning(error)}
      <FilmsList films={films} />;
    </>
  );
};
export default Home;
