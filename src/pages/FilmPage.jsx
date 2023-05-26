import { FilmInfo } from 'components/FilmInfo/FilmInfo';
import { fetchFilmsById } from '../API/fetchFilm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Film = () => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchFilmsId = async () => {
      try {
        setError(null);
        const response = await fetchFilmsById(movieId);
        setFilm(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchFilmsId();
  }, [movieId]);
  return (
    <>
      {error && toast.warning(error)}
      <FilmInfo film={film} />;
    </>
  );
};
export default Film;
