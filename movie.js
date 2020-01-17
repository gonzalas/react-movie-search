import React from "react";
import style from "./movie.css";

const Movie = ({ title, year, image }) => {
    return ( <
        div className = { style.movies } >
        <
        h1 > { title } < /h1> <
        p > { year } < /p> <
        img src = { image }
        alt = "" / >
        <
        /div>
    );
};

export default Movie;