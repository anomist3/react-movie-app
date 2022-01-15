import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    const getMovie = async () => {
      const detail = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      setMovie(detail.data.movie);
      setLoading(false);
    }
    getMovie();
  }, []);
  return (
    <div>
      <h3>
        <Link to={'/'}>HOME</Link>
      </h3>
      <hr />
      {loading ? (<h1>Loading...</h1>) :
        <div>
          <img alt="big-poster" src={movie.large_cover_image} />
          <h2>{movie.title} ({movie.year})</h2>
          <ul>Rating: {movie.rating}</ul>
          {movie.genres && movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
        </div>}

    </div>);
};

export default Detail;