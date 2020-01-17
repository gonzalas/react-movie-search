import React, { useEffect, useState } from "react";
import "./App.css";

//Import components
import Navbar from "./components/navbar";
import Movie from "./components/movie";

function App() {
    const API_KEY = "6ed590e6";
    //const API = `http://www.omdbapi.com/?s=${query}&y=2013&apiKey=6ed590e6`;

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("wolf");

    useEffect(() => {
        getMovies();
    }, [query]);

    const getMovies = async() => {
        const response = await fetch(
            `http://www.omdbapi.com/?s=${query}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.Search);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        form className = "search-form"
        onSubmit = { getSearch } >
        <
        input className = "search-bar"
        type = "text"
        value = { search }
        onChange = { updateSearch }
        /> <
        button className = "search-button"
        type = "submit" >
        Search <
        /button> <
        /form> <
        div className = "movies" > {
            movies.map(movie => ( <
                Movie key = { movie.imdbID }
                title = { movie.Title }
                year = { movie.Year }
                image = { movie.Poster }
                />
            ))
        } <
        /div> <
        /div>
    );
}

export default App;