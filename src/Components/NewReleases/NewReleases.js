import React, { useEffect, useState } from "react";
import "./NewRelease.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_KEY = "b5676f48cd17719d0e12c97b3766d7ed";

const NewReleases = () => {
  const [newMoiveRelease, setNewMovieRelease] = useState(null);

  const getNewRelease = () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNewMovieRelease(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNewRelease();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1 className="page-title">New Releases &#127871;</h1>
      <div className="Carousel">
        <Slider {...settings}>
          {newMoiveRelease &&
            newMoiveRelease.results &&
            newMoiveRelease.results.map((item) => {
              return (
                <div>
                  <div className="container-size" key={item.id}>
                    <div className="movie-image-container">
                      <img
                        className="movie-image"
                        alt={item.title}
                        src={`https://image.tmdb.org/t/p/w780/${item.backdrop_path}`}
                      />
                    </div>
                    <div className="poster-overview-container">
                      <img
                        alt={item.title}
                        className="Carousel-images"
                        src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                      />
                      <div className="descItem-container">
                        <h1 className="title">{item.title}</h1>
                        <div className="ratings">
                          {Number(item.vote_average).toFixed(1)} &#11088;
                        </div>
                        <div className="overview">{item.overview}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default NewReleases;
