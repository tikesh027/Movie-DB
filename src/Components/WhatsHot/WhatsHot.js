import React, { useEffect, useState } from "react";
import "./WhatsHot.css";

const API_KEY = "b5676f48cd17719d0e12c97b3766d7ed";

const WhatsHot = () => {
  const [hotMovieData, setHotMovieData] = useState();

  const getWhatsHotMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setHotMovieData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWhatsHotMovies();
  }, []);

  if (!hotMovieData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="movie-list-container">
        <h1 className="title-size">Whats Hot &#128293;</h1>
        <div className="MovieList">
          {hotMovieData.results &&
            hotMovieData.results.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <img
                    alt={item.title}
                    className="card-image"
                    src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                  />
                  <div className="rating-size">
                    {Number(item.vote_average).toFixed(1)} &#11088;
                  </div>
                  <h1 className="title-font">{item.title}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WhatsHot;
