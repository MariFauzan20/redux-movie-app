import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieYear = 2021;
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&y=${movieYear}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      console.log("THE response from API ", response);
    };

    fetchMovies();
  }, []);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
