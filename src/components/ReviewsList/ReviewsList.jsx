import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <b>{review.author}</b>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
ReviewsList.prototype = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
