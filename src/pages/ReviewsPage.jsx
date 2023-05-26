import { useEffect, useRef, useState } from 'react';
import { fetchReviewsForFilm } from '../API/fetchFilm';
import { useParams } from 'react-router-dom';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const firstRender = useRef(null);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setError(null);
        const { data } = await fetchReviewsForFilm(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (firstRender.current && !reviews.length) {
    return <p>We don't have any reviews for this movie</p>;
  }
  firstRender.current = 1;

  return (
    <>
      {error && toast.warning(error)}
      <ReviewsList reviews={reviews} />;
    </>
  );
};
export default Reviews;
