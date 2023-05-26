import PropTypes from 'prop-types';
export const CastList = ({ credits }) => {
  return (
    <ul>
      {credits.map(credit => {
        return (
          <li key={credit.id}>
            <img
              src={
                credit.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${credit.profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Clochoderick_Stone.JPG/200px-Clochoderick_Stone.JPG'
              }
              alt={credit.name}
            />
            <p>{credit.original_name}</p>
            <p>Character: {credit.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
CastList.prototype = {
  credits: PropTypes.array.isRequired,
};
