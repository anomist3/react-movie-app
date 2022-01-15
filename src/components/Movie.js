import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div>
      <h1>
        <img alt="poster" src={coverImg} />
        &nbsp;&nbsp;
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;