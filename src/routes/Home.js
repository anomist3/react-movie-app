import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie.js';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      .then(res => res.json())
      .then(json => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  };
  useEffect(() => { getMovies(); }, []);
  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : (movies.map(
        (movie) =>
          <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
      ))};
    </div>
  )
};

export default Home;