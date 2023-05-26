import { useRef, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import { StyledLink, Img } from './FilmInfo.styled';
export const FilmInfo = ({ film }) => {
  const location = useLocation();
  const { current } = useRef(location);
  if (!film) {
    return;
  }
  return (
    <div>
      <div>
        <StyledLink to={current.state?.from ?? '/'}>
          <IoIosArrowBack /> Go back
        </StyledLink>
        <br />
        <Img
          src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
          alt={film.title}
        />
      </div>
      <ul>
        <li>
          <p>{film.title}</p>
          <p>
            User score:
            {Math.round(film.vote_average * 100)
              .toString()
              .slice(0, 2)}
            %
          </p>
        </li>
        <li>
          <p>Overview</p>
          <p>{film.overview}</p>
        </li>
        <li>
          <p>Genres</p>
          <p>{film.genres.map(genre => genre.name).join(', ')}</p>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
FilmInfo.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
