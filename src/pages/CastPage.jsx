import { useEffect, useState } from 'react';
import { fetchCreditsForFilm } from '../API/fetchFilm';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/CastList/CastList';
import { toast } from 'react-toastify';
const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setError(null);
        const { data } = await fetchCreditsForFilm(movieId);
        setCredits(data.cast);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchCredits();
  }, [movieId]);
  return (
    <>
      {error && toast.warning(error)}
      <CastList credits={credits} />
    </>
  );
};
export default Cast;
