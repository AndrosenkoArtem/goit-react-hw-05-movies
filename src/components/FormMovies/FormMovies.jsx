import PropTypes from 'prop-types';
import { Input } from './FormMovies.styled';
export const FormMovies = ({
  updateQueryString,
  setInputValue,
  inputValue,
}) => {
  return (
    <form onSubmit={updateQueryString}>
      <Input
        onChange={e => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      <button type="submit">Search</button>
    </form>
  );
};
FormMovies.prototype = {
  updateQueryString: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
